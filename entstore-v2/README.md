# Entstore Smart Search — bản v2

Tích hợp 「なんでも検索」 vào website 遠鉄ストア có sẵn.
**Giao diện tiếng Nhật · Tài liệu và comment trong code bằng tiếng Việt.**

---

## Chạy nhanh

```bash
npm install
npm run dev            # http://localhost:3010
```

> ⚠️ **Các script dựng dữ liệu trong `scripts/` đã bị xoá mất** (`build-index.mjs`,
> `build-demo-data.mjs`, `enrich-kitchen365.mjs`, `test-all.mjs`, `compare-shots.mjs`…).
> Vì vậy `npm run data:build`, `npm test`, `npm run shots` hiện **không chạy được**.
> Web vẫn chạy đầy đủ vì `data/*.json` còn nguyên; muốn dựng lại dữ liệu từ đầu
> thì phải viết lại nhóm script này.

Kiểm thử:

```bash
npm run test:features  # 56 phép thử theo yêu cầu đề bài (cần server đang chạy)
npm test               # 225 phép thử API/dữ liệu (cần dev đang chạy)
npm run test:browser   # 41 phép thử bằng Chrome thật
npm run test:all       # cả hai (266 phép thử)
npm run build          # dựng bản production
npm run shots          # chụp đối chiếu với site gốc
```

AI (tuỳ chọn): điền `ANTHROPIC_API_KEY` vào `.env`.
**Không có key web vẫn chạy đầy đủ** — chatbot dùng chế độ rule-based.

---

## Kết quả đo

| Hạng mục | Kết quả |
|---|---|
| Kiểm thử tự động | **266 đạt / 0 không đạt** (225 API + 41 trình duyệt) |
| Chạy trên bản build | **266/266** |
| Đối chiếu ảnh với site gốc | **13/24 phép đo lệch 0.0%**, cả 24 dưới 1.3% |
| Route | 60/60 trả 200 |
| `npm run build` | thành công (4,82 MB · 1,25 MB gzip) |

Sau khi thêm Smart Search, 6 trang chính vẫn khớp site gốc **đúng 0.0%**
(sau khi trừ chiều cao ô tìm kiếm thêm vào) — phần thêm không phá phần cũ.

---

## Tính năng

### Yêu cầu 1 — Giao diện giống hệt site gốc
Clone toàn bộ 61 trang + 26 component từ Nuxt 2/Vue 2/Vuetify 2 sang Nuxt 4/Vue 3.
Chi tiết ở [GIAI-DOAN-2.md](GIAI-DOAN-2.md).

### Yêu cầu 2 — Search phủ TOÀN BỘ website

**2.159 tài liệu** từ 4 nguồn:

| Nguồn | Số lượng |
|---|---|
| CMS (7 endpoint) | 2.074 |
| Trang tĩnh (trích từ `<template>`) | 43 |
| Cửa hàng (`config/shop-data.js`) | 37 |
| Tri thức về tính năng Smart Search | 5 |

Kết quả nhóm theo thứ tự: **レシピ → 特売 → 商品 → 記事 → 店舗**, kèm số lượng từng nhóm.

> Proposal ban đầu xếp 特売 lên đầu. Đã đổi để レシピ đứng trước: phần lớn từ
> khoá người dùng gõ là tên món hoặc nguyên liệu, nên công thức mới là thứ họ tìm.

### Yêu cầu 3 — Dữ liệu ảo có badge DEMO

| File | Nội dung |
|---|---|
| `data/demo-nutrition.json` | 1.002 món: kcal, đạm, béo, bột đường, muối |
| `data/demo-products.json` | 424 sản phẩm: giá, đơn vị, tồn kho, quầy |
| `data/demo-promos.json` | 14 khuyến mãi (12 còn hạn + **2 đã hết hạn** để kiểm chứng cơ chế tự gỡ) |

**Mọi chỗ hiển thị số ảo đều có badge 「DEMO」 đỏ.**

Ràng buộc sinh học — có phép thử tự động kiểm tra:

| Chỉ số | Giới hạn | Đo được |
|---|---|---|
| Muối | ≤ 3,0 g/khẩu phần | max **3,0 g** |
| kcal | 50–1500 | 57–959 |
| Tổng năng lượng vs kcal | lệch ≤ 8% | **0 món lệch** |

> Bản cũ từng tính dinh dưỡng THẬT từ nguyên liệu và sinh ra **34,9 g muối/bữa**
> (gấp ~5 lần khuyến nghị cả NGÀY của người Nhật là 7,5 g). Lần này dùng số ảo
> có kiểm soát; `npm test` có phép thử chặn đúng lỗi đó.

**Dữ liệu THẬT thay cho số ảo ở đâu lấy được:**

| Chỉ số | Trước | Sau |
|---|---|---|
| Công thức có nguyên liệu | 552/1002 | **1000/1002** |
| Công thức có các bước nấu | 552/1002 | **1000/1002** |
| Dinh dưỡng THẬT (8 chỉ số) | 0 | **448** |

448 món có dinh dưỡng thật lấy từ Kitchen365 (CGC) qua `target_url` của CMS:
エネルギー・塩分・たんぱく質・脂質・炭水化物・糖質・食物繊維・カルシウム,
kèm tên đầu bếp và số tạp chí. Giao diện hiện badge xanh **実データ** cho số thật,
badge đỏ **DEMO** cho số ảo — người dùng phân biệt được ngay.

### Yêu cầu 4 — Chatbot RAG đa ngôn ngữ

- RAG trên **toàn bộ** 2.159 tài liệu, không chỉ recipe
- Giới thiệu được website: "trang này làm được gì?" → mô tả tính năng
- **6 ngôn ngữ**: Nhật · Việt · Anh · Trung · Hàn · Thái — tự nhận diện và trả lời đúng ngôn ngữ đó dù tài liệu gốc là tiếng Nhật
- **Bắt buộc trích nguồn có link**
- Giá / tồn kho / dị ứng / hạn dùng → **không đoán**, hướng khách hỏi cửa hàng
- **Chạy được khi không có AI**: chế độ rule-based là đường chính

### Chatbot: hiểu ý định thay vì dán danh sách

Bản trước chỉ tìm từ khoá rồi liệt kê tiêu đề. Đo trên 13 câu hỏi thật:
**11/13 câu** đều nhận đúng một câu 「関連する情報が見つかりました：」.
Tệ hơn, hỏi 「うなぎのレシピを教えて」 (xin CÔNG THỨC) lại nhận thông tin
KHUYẾN MÃI, vì "うなぎ" khớp mục 特売 điểm cao nhất.

Nay bot **đọc ý định trước**, lọc tài liệu theo đúng loại người dùng cần,
rồi trả lời bằng câu văn có số liệu:

| Câu hỏi | Trả lời |
|---|---|
| うなぎのレシピを教えて | 16件のレシピ見つかりました… (đúng công thức, không phải KM) |
| うなぎの特売はいつまで？ | 現在 1件の特売… うなぎ 1148円 → 858円（25%OFF）9/4まで |
| 浜松市の店舗はどこ？ | 16件の店舗… 富塚店｜〒432-8002…／営業 9:30～21:00／TEL… |
| 15分で作れる料理 | lọc đúng món ≤15 phút, kèm kcal thật |
| ネット通販はありますか | mô tả đủ 6 dịch vụ, rồi mới dẫn link |
| Có tuyển nhân viên không? | trả lời bằng tiếng Việt về tuyển dụng |

**9 ý định** nhận diện được: recipe · promo · shop · nutrition · service ·
recruit · chirashi · company · feature — ở cả 6 ngôn ngữ.

Còn đọc thêm **bộ lọc phụ** từ câu hỏi: `maxKcal` (カロリーが低い), `maxMinutes`
(15分で), `area` (浜松市). Tất cả chạy bằng luật, không cần AI.

Đo lại sau khi sửa: **0/23 câu** trả lời kiểu dán danh sách.


### Search hiểu tiếng nước ngoài

Trang và dữ liệu đều tiếng Nhật, nhưng gõ tiếng khác vẫn ra kết quả:

```
cà ri / cari / ca ri / CARI / curry / 咖喱 / 카레   →  カレー   (45–46 kết quả)
sữa   / sua  / milk  / 牛奶 / 우유                  →  牛乳     (46 kết quả)
```

Màn hình nói rõ 「「cari」を「カレー」として検索しました」 để người dùng biết vì sao ra kết quả đó.

**Gõ không dấu vẫn ra đúng.** Người Việt gõ không dấu, không viết cách là chuyện
bình thường. Cách làm: bỏ dấu ở **cả hai phía** (câu người dùng gõ và từ điển),
rồi so khớp. Chỉ bỏ dải `U+0300–U+036F` (dấu phụ chữ Latin) nên dakuten tiếng
Nhật `U+3099` không bị đụng — nếu bỏ luôn thì 「ガ」 thành 「カ」 và toàn bộ phần
chuẩn hoá chữ Nhật sẽ sai.

Hai cạm bẫy đã xử lý:

| Trường hợp | Vấn đề | Cách xử lý |
|---|---|---|
| `cari` | Không có khoảng trắng nên không khớp `cà ri` | So thêm bản bỏ hết khoảng trắng, **chỉ với cụm từ 4 ký tự trở lên** |
| `ca rot` | `ca` (cá) khớp bừa → ra kết quả **cá** | Khớp theo ranh giới từ, và bỏ cụm ngắn nằm gọn trong cụm dài đã khớp |

Chatbot cũng bỏ dấu ở cả câu hỏi lẫn mẫu nhận ý định (`detectIntent`,
`detectFilters`, `smallTalkKind`, `needsStoreContact`…), nên
「cari co mon nao khong?」 và 「cà ri có món nào không?」 cho cùng một câu trả lời.
Đo trên 8 cặp câu có dấu / không dấu: **8/8 giống nhau**.

> ⚠️ **Bẫy Unicode đã sập một lần.** `normalize('NFD')` tách dấu phụ chữ Latin,
> nhưng tách luôn **dakuten** tiếng Nhật: `で` → `て` + `U+3099`. Dấu đó nằm
> ngoài dải bị xoá nên không mất, nhưng chuỗi ở dạng tách **khác** chuỗi gốc —
> mọi mẫu chứa `で`/`ど`/`だ`/`ば` đều trượt im lặng. Triệu chứng:
> 「2000円**で**作れる料理」 ra **1** món trong khi 「2000円**の**料理」 ra **64**.
> Bắt buộc `.normalize('NFC')` ở cuối để ghép lại. `test-features` có phép thử
> riêng cho ba câu chứa dakuten.

> Trước đây chỉ chatbot dịch, còn `/api/search` thì không — cùng một từ mà hai
> nơi trả lời khác nhau (`cà ri`: chatbot ra 12 công thức, search ra **0**).
> Và cả hai đều chỉ hiểu bản **có dấu**: `cari` ra 0 kết quả.

Thứ tự nhóm luôn giữ đúng kể cả khi kết quả được gộp từ bản dịch. Trước đây
gõ `cari` thì truy vấn gốc chỉ khớp vài trang tĩnh (nhiễu n-gram), thế là nhóm
`ページ` nhảy lên đầu còn `レシピ` bị đẩy xuống dưới.

### Search theo NGÂN SÁCH

Không bắt người dùng gõ đúng cú pháp. Bốn dạng dưới đây cho **cùng một kết quả**:

```
2000円以内の料理        2000円で作れる料理      2000円で何が作れる？
ăn gì với 2000 yên     an gi voi 2000 yen     what can i eat with 2000 yen
```

Số tiền được đọc **tách khỏi** câu (`shared/budget.mjs`), phần còn lại bỏ hết từ
rỗng nghĩa (`ăn gì với`, `何が作れる`, `what can i eat`); không còn từ khoá nào
thì duyệt cả 1.000 công thức theo giá thay vì tìm theo chữ.

Nhắc tới tiền trong câu hỏi về đồ ăn thì **mặc định hiểu là ngân sách**, kể cả
khi không có chữ 「以内」 — màn hình nói rõ 「「2,000円」を予算として解釈しました」
để người dùng biết hệ thống đã suy luận gì.

Ba dạng, ba cách xếp thứ tự:

| Câu | Nghĩa | Xếp |
|---|---|---|
| `2000円以内` | Trần giá | Đắt nhất trong ngân sách trước — người hỏi muốn biết "2000 yên nấu được gì" |
| `2000円くらい` | Quanh mức đó | Gần con số nhất trước |
| `2000円以上` | **Sàn** giá | Rẻ nhất trong khoảng trước |

> `以上` phải xét **trước** dạng khác, nếu không 「2000円以上」 sẽ bị hiểu ngược
> thành trần giá.

| Ngân sách | Số món |
|---|---|
| ≤ 1.000円 | **0** — bot nói thẳng "món rẻ nhất cũng 1.001円" |
| ≤ 1.500円 | 20 |
| ≤ 2.000円 | 64 |

Chi phí là **概算**: tính theo giá CẢ GÓI trên dữ liệu DEMO (công thức ghi
「塩 少々」 vẫn tính nguyên gói muối), và chỉ nhận món tra được giá cho ≥60%
nguyên liệu (949/1.000 món). Giao diện hiện rõ 「6/7 品目の価格から」.

### 近くの取扱店舗 — siêu thị có bán

Kết quả tìm kiếm có thêm mục liệt kê siêu thị đang bán mặt hàng đó: tình trạng
tồn kho, địa chỉ, giờ mở cửa. Bấm 「📍 近い順に並べる」 thì hỏi vị trí và xếp
theo khoảng cách thật (toạ độ 37 cửa hàng lấy từ `config/shop-data.js`).

Chatbot trả lời được cùng câu hỏi đó: 「浜松市で牛乳を買える店は？」,
「sữa mua ở đâu?」, 「where can i buy milk?」.

> ⚠️ Tồn kho là số ẢO, sinh bằng hàm băm `(mã hàng + mã cửa hàng)` nên ổn định
> giữa các lần tải — không phải random nhảy lung tung. Mọi chỗ đều kèm badge DEMO.

### 商品一覧 · カート

| Trang | Nội dung |
|---|---|
| `/products` | 702 sản phẩm demo, lọc theo 売場 / khoảng giá, sắp xếp, nút 「カートに入れる」 |
| `/cart` | Giỏ hàng: đổi số lượng, xoá, tổng tiền, số tiền tiết kiệm nhờ 特売 |

Nút 「ご購入手続きへ」 mở thẳng <https://shop.entstore.co.jp/p/cart>.

**Dừng đúng ở bước "thêm vào giỏ"** vì 遠鉄ストア đã có trang EC hoàn chỉnh —
bản này không làm lại khâu thanh toán.

> ⚠️ Hai bên khác tên miền nên trình duyệt **không** chia sẻ được giỏ hàng.
> Muốn giữ nguyên hàng đã thêm thì cần phía EC mở API giỏ hàng. Màn hình
> `/cart` ghi rõ điều này, không giấu.

Trang công thức có thêm nút 「🧺 材料 N点をカートに入れる」 — nối thẳng
công thức → nguyên liệu → giỏ hàng. N là số nguyên liệu **thật sự** tra được
sản phẩm, không hứa suông.

### 特売 — đăng ký, import Excel, và trang danh sách

| Trang | Cho ai | Nội dung |
|---|---|---|
| `/promo` | Khách mua | 特売 đang chạy, nhóm theo 売場, đếm ngược 「あと3日」, thêm thẳng vào giỏ |
| `/admin/promo` | Người phụ trách | Đăng ký / xoá, thống kê 実施中 vs 期限切れ |

**Ba cách nhập, cùng một bộ luật kiểm tra:**

1. **Excel / CSV** — đường chính. Người phụ trách 特売 vốn quản lý bằng Excel nên
   nhận thẳng file họ đang có. Có nút tải **file mẫu** (`/api/promos/template`,
   sinh tại chỗ nên cột luôn khớp với bộ kiểm tra), kèm sheet phụ liệt kê tên 売場 hợp lệ.
2. **Form** — sửa lẻ từng mục.
3. **JSON** — cho người rành kỹ thuật.

Cột bắt buộc: `商品名・通常価格・特売価格・終了日`; tuỳ chọn: `売場・開始日・備考`.
Nhận cả tên cột tiếng Anh (`productName`, `price`, `endDate`…), ngày dạng số serial
của Excel lẫn chuỗi `2026-09-30` / `2026年9月30日`.

Import **báo cáo từng dòng** thay vì chỉ nói "lỗi":

```
tokubai.xlsx：3 行を読み取り、2 件を登録 ／ 1 件はスキップ
  4行目「たまご」：特売価格は通常価格より安くしてください
```

Import lại cùng một file thì **ghi đè** mục trùng (cùng tên + cùng 終了日) và
**giữ nguyên id**, không sinh bản sao.

> Trước đây màn quản lý chỉ giữ mục mới trong biến của trang — F5 là mất, và
> trang tìm kiếm không bao giờ thấy. Nay ghi thật xuống `data/demo-promos.json`,
> cache của `store.ts` theo dõi cả mtime file này nên **đăng xong là search,
> trang 特売情報 và chatbot thấy ngay**, không cần khởi động lại.

> ⚠️ **Các API `POST`/`DELETE /api/promos` và `/api/promos/import` KHÔNG có xác thực.**
> Chấp nhận được cho bản demo chạy cục bộ, nhưng trước khi đưa lên môi trường
> thật thì bắt buộc phải thêm đăng nhập — nếu không thì ai cũng sửa được giá.

> Thư viện đọc Excel là `exceljs`. `npm audit` báo một lỗi mức *moderate* ở
> `uuid@8.3.2` (phụ thuộc gián tiếp): lỗi chỉ xảy ra khi gọi `uuid` có tham số
> `buf`, mà exceljs chỉ gọi `uuidv4()` không tham số trong nhánh GHI file —
> bản này chỉ ĐỌC nên không chạm tới đường đó.

### 特売 luôn còn hạn

`data/demo-promos.json` sinh ngày 28/08, hạn cuối 07/09 — sau ngày đó
`activePromos()` trả về **0** và 特売 chết ở mọi trang. Buổi thuyết trình diễn
ra vào ngày không biết trước, nên `server/utils/store.ts` dịch cả bộ ngày theo
đúng số ngày đã trôi qua kể từ `generatedAt`. Mốc tương đối giữa các khuyến mãi
giữ nguyên → vẫn là **12 còn hạn + 2 đã hết hạn**, vẫn chứng minh được cơ chế
tự gỡ khuyến mãi hết hạn.

### Yêu cầu 6 — Biến thể chữ Nhật

```
うなぎ / ウナギ / ｳﾅｷﾞ / 鰻   →  đều ra 31 kết quả giống hệt nhau
```

Cách làm: NFKC → kanji↔kana (bảng 70 từ thực phẩm) → katakana→hiragana.

### Tính năng theo proposal (slide 3 · 5 · 6 · 7)

### Trang kết quả: phân trang theo từng nhóm

Mỗi nhóm phân trang **riêng**, 10 mục/trang, kèm dòng 「1–10 件目」. Gộp chung
một bộ phân trang thì nhóm 記事 (có thể 100 mục) sẽ đẩy nhóm 店舗 (3 mục) sang
trang sau một cách vô lý. Dãy số trang rút gọn `1 … 4 5 [6] 7 8 … 20` để không
tràn hàng trên điện thoại.

API trả tối đa 200 mục/nhóm (nhóm lớn nhất đo được là 104), trang tự cắt tại
chỗ nên chuyển trang không phải gọi lại server.

Thanh giỏ hàng nổi ở đáy che đúng chỗ nút chatbot, nên nó ghi chiều cao **thật**
của mình vào biến CSS `--cart-bar-h`; nút chatbot đọc biến đó để tự nâng lên
(`bottom: calc(20px + var(--cart-bar-h, 0px))`) thay vì hai bên đoán chiều cao
của nhau.

| Slide | Tính năng | Trang |
|---|---|---|
| 3, 5 | なんでも検索, gợi ý khi gõ, 人気ワード, banner 季節のおすすめ | mọi trang → `/search` |
| 5 | Kết quả nhóm kèm số lượng, 特売 hiện giá KM + hạn | `/search` |
| 6 | AI đọc công thức (Web Speech `ja-JP`) | `/recipe/[id]` |
| 6 | Danh sách đi chợ, nguyên liệu → 売場 | `/recipe/[id]`, `/list` |
| 6 | Nguyên liệu → giá + 🔥特売中 | `/recipe/[id]` |
| — | **関連レシピ** — gợi ý theo nguyên liệu chính trùng nhau | `/recipe/[id]` |
| 7 | Sơ đồ 売場 dạng **modal** tự highlight | modal |
| 7 | Màn quản lý 特売: form + JSON hàng loạt | `/admin/promo` |
| 4 | Khuyến mãi hết hạn **tự gỡ** khỏi mọi trang | toàn site |

---

## Cấu trúc

```
entstore-v2/
├── app/
│   ├── assets/styles/          # SCSS gốc + vuetify-compat.scss
│   ├── components/
│   │   ├── vx/                 # 9 component thay Vuetify
│   │   ├── SmartSearchBar.vue  # ô なんでも検索
│   │   ├── UribaMapModal.vue   # sơ đồ 売場
│   │   ├── CartBar.vue         # thanh giỏ hàng nổi
│   │   └── ChatWidget.vue      # chatbot
│   ├── pages/                  # 61 trang clone + 7 trang mới
│   │                           # (/search /list /products /cart /promo
│   │                           #  /recipe/[id] /admin/promo)
│   └── config/shop-data.js     # 37 cửa hàng
├── shared/
│   ├── jp-text.mjs             # chuẩn hoá chữ Nhật (Yêu cầu 6)
│   ├── search-engine.mjs       # chấm điểm + nhóm kết quả
│   ├── uriba.mjs               # phân loại nguyên liệu → 売場
│   ├── budget.mjs              # đọc ngân sách + ước tính chi phí món
│   └── chat-lang.mjs           # nhận diện ngôn ngữ + từ điển
├── server/
│   ├── api/                    # search, suggest, chat, promos(+import/template),
│   │                           # products, recipe, cms
│   └── utils/                  # store.ts (dữ liệu + cache), promoStore.ts (ghi 特売)
├── data/                       # index + dữ liệu demo (sinh bằng script)
└── scripts/                    # dựng dữ liệu + đo đạc + kiểm thử
```

---

## Bảo mật

- `CMS_KEY` và `ANTHROPIC_API_KEY` **chỉ tồn tại phía server**.
  Site gốc để `CMS_KEY` chạy thẳng từ client (lộ khoá); bản này bắt buộc qua `/api/cms`.
- Có phép thử tự động kiểm tra khoá không xuất hiện trong HTML gửi về client.
- `/api/cms` chỉ nhận `endpoint` khớp mẫu an toàn; đường dẫn lạ trả 400.
- `.env` đã gitignore.

---

## Hạn chế — nói thẳng

1. **2/1.002 công thức vẫn thiếu dữ liệu.** CMS chỉ điền `archive` cho 552 món;
   448 món còn lại đã lấy được dữ liệu THẬT từ Kitchen365 (xem mục bên dưới).
   2 món cuối không lấy được: 1 món CMS ghi sai `target_url` (giá trị là `"c"`),
   1 món trang nguồn lỗi.

2. **Giá, tồn kho, khuyến mãi, dinh dưỡng (trừ kcal) là số ẢO.**
   Có badge DEMO ở mọi chỗ. Muốn dùng thật phải nối vào hệ thống POS/EC.

3. **Chatbot đa ngôn ngữ dùng từ điển ~120 từ**, không phải dịch máy.
   Câu hỏi ngoài phạm vi từ điển (tiếng Việt/Anh/Trung/Hàn/Thái) có thể không
   tìm được tài liệu. Có `ANTHROPIC_API_KEY` thì phần này tốt hơn nhiều.

4. **Chưa nối shop.entstore.co.jp.** Slide 4 đề xuất lấy giá/tồn kho thật từ EC;
   bản này dùng danh mục sản phẩm suy ra từ nguyên liệu công thức.

5. **Màn quản lý 特売 chỉ lưu trong trình duyệt.** Mục thêm mới không gửi lên
   server (bản demo, chưa có xác thực người dùng).

6. **`<recaptcha>` là component giữ chỗ**, chưa gọi reCAPTCHA thật.

7. **Web Speech API** phụ thuộc trình duyệt. Chrome/Edge có giọng `ja-JP`;
   một số trình duyệt khác không có → nút đọc báo lỗi thay vì im lặng.

---

## Lỗi đã sửa sau khi demo

| Lỗi | Nguyên nhân gốc | Cách sửa |
|---|---|---|
| Bấm kết quả tìm kiếm → **trang trống** | `data()` của Options API khai trùng tên với khoá `setup()` trả về → **ghi đè thành `null`**. Đo được: payload SSR có đủ `archiveDetail` nhưng template đọc phải `null`, trang chỉ còn breadcrumb (1438px thay vì 2346px) | Bỏ khoá trùng khỏi `data()` ở **10 trang** (`scripts/fix-data-shadow2.mjs`). Bản sửa trước sót vì regex chỉ bắt `{}`/`[]`/số cuối dòng, không bắt `null,` |
| Chatbot trả "không tìm thấy" khi chào hỏi | Mọi câu đều đi thẳng vào nhánh tìm kiếm; "chào bạn" không khớp tài liệu nào | Thêm `smallTalkKind()` nhận diện chào / cảm ơn / tạm biệt / đồng ý ở **6 ngôn ngữ**, trả lời tự nhiên và **gợi ý 3 câu hỏi bấm được** |
| Không tìm thấy → người dùng bế tắc | Chỉ nói "không tìm thấy", không hướng dẫn gì | Thêm câu hướng dẫn hỏi cụ thể hơn + 3 nút gợi ý |
| Nguồn tham khảo trùng lặp | `/shop` và `/shop/gps` cùng tên 店舗情報 | Bỏ trùng theo tiêu đề |
| `/service/recipe/preview` lỗi 500 | `RecipeBox` đọc `recipeItem.category.toString()`, bản nháp không có `category` | Dùng `?.` và đặt mặc định `recipeList: []` ngay tại `setup()` (không đụng `data()` để khỏi che giá trị thật) |

### Đợt 2 (sau góp ý về dữ liệu và chatbot)

| Vấn đề | Nguyên nhân | Cách sửa |
|---|---|---|
| Trang công thức trống 材料/作り方 | CMS chỉ điền `archive` cho 552/1002 món | Viết `scripts/enrich-kitchen365.mjs` lấy dữ liệu THẬT từ Kitchen365 qua `target_url`: **448/450 món** (99,6%), nay 1000/1002 món có đủ dữ liệu |
| Dinh dưỡng toàn số ảo | Chưa khai thác nguồn thật | 448 món có 8 chỉ số THẬT, hiện badge xanh 実データ tách bạch với DEMO |
| Chatbot dán danh sách | Chỉ tìm từ khoá, không hiểu ý định | Thêm `chat-intent.mjs` (9 ý định × 6 ngôn ngữ) + `chat-answer.mjs` soạn câu trả lời có số liệu |
| Hỏi công thức lại trả khuyến mãi | Chấm điểm thuần, "うなぎ" khớp 特売 cao nhất | Lọc theo ý định TRƯỚC khi chấm điểm |
| Hỏi 「うなぎの特売」 liệt kê cả 12 KM | Không phân biệt câu hỏi cụ thể vs chung | Dùng `extractKeywords()` lọc theo tên cụ thể |
| Sửa `shared/*.mjs` mà server chạy bản cũ | Nuxt dev không theo dõi thư mục ngoài app/server | Thêm `watch: ['shared/**/*.mjs']` vào nuxt.config |

Cả 11 lỗi đều có phép thử tự động chặn tái diễn (nhóm 15–18 trong `npm test`).

Ngoài ra: kết quả tìm kiếm cho **552 món có nguyên liệu** giờ trỏ sang trang
`/recipe/[id]` mới (có AI đọc, danh sách đi chợ, sơ đồ 売場); 450 món CMS chưa
điền dữ liệu vẫn trỏ về trang gốc.

### Đợt 3 (góp ý về công thức liên quan và chất lượng trả lời)

**Thêm mục 関連レシピ** cuối trang chi tiết: gợi ý 4 món, xếp theo
(1) trùng nguyên liệu chính ở quầy tươi sống ×40 điểm,
(2) cùng category ×25, (3) thời gian nấu ±5 phút ×10.
Mỗi món ghi rõ lý do gợi ý (「共通の食材：トマト・きゅうり」) và chỉ dẫn sang
món CÓ dữ liệu, không dẫn vào trang trống.

**6 chốt chặn cho chatbot** — tự dò bằng 13 dạng câu hỏi khó (không đọc được
lịch sử chat của người dùng nên phải tự thử):

| # | Lỗi đo được | Sau khi sửa |
|---|---|---|
| **A** | 「上島店はどこ？」 (cửa hàng KHÔNG tồn tại) → trả về **16 cửa hàng khác**. Khách có thể đi nhầm | Nói thẳng「上島店」という店舗は見つかりませんでした, kèm tổng số 37 cửa hàng. Không gợi ý thay thế |
| **B** | 「富塚店の電話番号は？」 → đọc cả khối "1件の店舗が該当します" | Trả thẳng 富塚店の電話番号は 053-455-0505 です |
| **C** | 「駐車場ありますか」 (câu Có/Không) → liệt kê 16 cửa hàng, không nói "có" | Mở đầu bằng はい、ございます。（16件） |
| **D** | 「店舗は何店ありますか」 → trả **"2件"** (thật ra 37) | Trả số THẬT: 37 店舗 / 1002 レシピ |
| **E** | 「他には？」「もっと教えて」 → "không tìm thấy" | Nhớ ngữ cảnh lượt trước (client gửi kèm, server vẫn stateless), bỏ mục đã hiện |
| **F** | 「明日の天気は？」 → vẫn cố liệt kê bài viết | Từ chối lịch sự, đúng yêu cầu "câu ngoài phạm vi thì từ chối" |

Đo lại trên 24 dạng câu hỏi × 6 ngôn ngữ: **0/24 câu** trả lời kiểu dán danh sách.


---

## Tài liệu khác

- [GIAI-DOAN-1.md](GIAI-DOAN-1.md) — trang mẫu, cách đo đối chiếu
- [GIAI-DOAN-2.md](GIAI-DOAN-2.md) — clone 61 trang, 14 lỗi đã sửa
- `screenshots/` — ảnh đối chiếu gốc ↔ mới
