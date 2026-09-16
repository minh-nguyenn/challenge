# Giai đoạn 2 — Clone toàn bộ 61 trang

Sau khi anh duyệt trang mẫu, tôi đã chuyển hết 87 file `.vue` (61 trang + 26 component)
từ Nuxt 2 / Vue 2 / Vuetify 2 sang Nuxt 4 / Vue 3 / không Vuetify.

## Kết quả đo

### Đối chiếu ảnh với site gốc — 12 trang chính × 2 viewport

| Trang | Desktop | Mobile |
|---|---|---|
| faq | **0.0%** | **0.0%** |
| shop | **0.0%** | **0.0%** |
| news | **0.0%** | **0.0%** |
| blog | **0.0%** | −1.1% |
| recruit | **0.0%** | **0.0%** |
| sitemap | **0.0%** | **0.0%** |
| service | −0.2% | **0.0%** |
| company | −0.2% | **0.0%** |
| privacy | 0.3% | **0.0%** |
| recipe | 0.1% | −0.8% |
| chirashi | 0.9% | 1.0% |
| index | 1.3% | −0.3% |

**13/24 phép đo lệch đúng 0.0%; toàn bộ 24 phép đo đều dưới 1.3%.**

### Kiểm thử tự động

```
npm test   →  94 đạt / 0 không đạt   (94 phép thử)
```

Chạy được trên cả bản dev (cổng 3010) và **bản build** (`BASE=http://localhost:3020 npm test`).

7 nhóm kiểm tra: 57 route trả 200 · UTF-8 tiếng Nhật không hỏng · không còn cú
pháp Vue2/Nuxt2 · kết thúc dòng LF · proxy microCMS (khóa không lộ ra client) ·
10 luật kiểm tra biểu mẫu · dữ liệu 37 cửa hàng.

### Build

`npm run build` thành công — 4.6 MB (1.18 MB gzip).

## Cách chạy

```bash
npm install
npm run dev            # http://localhost:3010
npm test               # 94 phép thử (cần dev đang chạy)
npm run build          # dựng bản production
node scripts/compare-shots.mjs    # chụp đối chiếu với site gốc
```

## 14 lỗi đã tìm và sửa — tất cả bằng đo, không đoán

Mỗi lỗi đều được xác định bằng số liệu cụ thể trước khi sửa:

| # | Triệu chứng **đo được** | Nguyên nhân gốc | Cách sửa |
|---|---|---|---|
| 1 | `#pageHeader` x=8 thay vì 0, rộng 1264 thay vì 1280 | thiếu `body{margin:0}` của Vuetify reset | thêm vào `vuetify-compat.scss` |
| 2 | mobile `scrollWidth` 387 thay vì 375 | thiếu `box-sizing:border-box` toàn cục | thêm vào compat |
| 3 | `.defoltBnr` cao 151 thay vì 123 (+28 = 14×2) | thiếu `ul{margin:0}` | thêm vào compat |
| 4 | `<li>` thứ 2 ở x=391 thay vì 396 | Vue 3 bỏ khoảng trắng giữa 2 thẻ; với `inline-block` đó là 5px thật | `whitespace: 'preserve'` |
| 5 | trang trắng, `Failed to fetch module` | `require()` kiểu webpack (69 lần, 14 file) — Vite không hiểu | chuyển ảnh sang `public/`, đổi thành đường dẫn tĩnh |
| 6 | trang trắng, `Hydration text mismatch: "\n" vs "\r\n"` | 67 file trộn lẫn CRLF/LF do script sửa file | chuẩn hóa LF + `.gitattributes` |
| 7 | `window.$ is not a function` → 4 trang trắng | site gốc nạp jQuery + flexslider từ CDN | viết `flexslider-lite.js` (~120 dòng) thay cho jQuery 90KB |
| 8 | `Cannot read properties of undefined` ở 23 trang | `asyncData()` của Nuxt 2 không còn | chuyển thành `setup()` + `useAsyncData` từng trang |
| 9 | template đọc `{}` dù `useAsyncData` trả đủ dữ liệu | `data()` khai lại cùng tên → che mất giá trị của `setup()` | bỏ khóa trùng khỏi `data()` (8 trang) |
| 10 | blog cao 8656px thay vì 4200px, ảnh 615px thay vì 286px | Vue 2 gắn CẢ HAI `data-v` cho nội dung `<slot>`, Vue 3 chỉ gắn của cha → CSS scoped mất tác dụng | bọc 14 selector bằng `:deep()` |
| 11 | phân trang cao 540px thay vì 68px (xếp dọc) | thiếu `.v-pagination{display:inline-flex}` | thêm CSS phân trang vào compat |
| 12 | sitemap & shop cao hơn đúng 50px | Nuxt 2 nạp CSS trang **trước** CSS component; Nuxt 4 ngược lại → `.wrap-outside{80px}` đè `.art-gps{30px}` | nâng độ ưu tiên `.art-gps` |
| 13 | `<select>` hiện HAI mũi tên | thiếu `select{appearance:none}` của Vuetify reset | thêm vào compat |
| 14 | `npm run build` hỏng: `Unexpected token Semicolon` | CSS gốc còn "star hack" của IE cũ (`*display`, `*zoom` — 14 chỗ) | `lightningcss.errorRecovery: true` |

Điểm đáng chú ý: sửa lỗi #1 làm **7/8 sai lệch biến mất cùng lúc** — một nguyên
nhân gốc chứ không phải 8 lỗi riêng.

## Thay Vuetify — số liệu

Đo bằng **Chrome thật** (duyệt CSSOM rồi hỏi `document.querySelector` xem rule
nào thực sự khớp DOM), không đếm số file:

| | Số |
|---|---|
| Rule CSS có selector Vuetify được tải về | **4.316** |
| Rule **thực sự khớp** phần tử trên trang | **49** |
| Rule chết | 4.267 = **98,9%** |
| Kích thước phần cần tái tạo | **4,5KB** |

→ 9 component thay thế trong `app/components/vx/` (8 loại Vuetify + `VxSlick`
thay `vue-slick`). DOM chép **đúng theo bản render thật** của
www.entstore.co.jp, không phải đoán. Ví dụ mũi tên băng chuyền dựng xong rơi
đúng tọa độ gốc (prev x=125, next x=1135).

## Các lớp tương thích đã viết

| File | Thay cho | Vì sao cần |
|---|---|---|
| `assets/styles/vuetify-compat.scss` | Vuetify 2 (reset + 49 rule + lớp tiện ích) | giữ nguyên tên class `.v-*` nên **không sửa một dòng `<style>` nào** trong 87 file gốc |
| `components/vx/*.vue` (9 file) | 8 component Vuetify + vue-slick | |
| `server/api/cms.get.ts` | `nuxt-microcms-module` | site gốc để `CMS_KEY` chạy thẳng từ client (**lộ khóa**); bản này bắt buộc qua server |
| `plugins/globals.ts` | `$appendWebpFormat`, `$transformImageSrc`, `$microcms`, `$vuetify.breakpoint` | 19 file gọi thẳng trong `<template>` |
| `plugins/store-compat.ts` + `utils/vuex-compat.js` | Vuex store | 6 trang form dùng, chỉ 2 trường / 2 getter / 2 mutation |
| `plugins/jquery-shim.client.ts` + `utils/flexslider-lite.js` | jQuery + flexslider + colorbox + imageMapResizer | 4 lệnh gọi, thay vì kéo cả jQuery |
| `components/ValidationObserver.vue` + `ValidationProvider.vue` + `utils/validate-rules.js` | vee-validate 3 (chỉ chạy Vue 2) | 36 chỗ dùng; **chép nguyên văn regex** SĐT/mã bưu điện Nhật của bản gốc |
| `utils/index.js` | `utils/` gốc + `moment-timezone` | thay `moment.tz` bằng `Intl` sẵn có |

## Bảo mật

- `CMS_KEY` chỉ tồn tại phía server (`runtimeConfig`, không nằm trong `public`).
  Có **phép thử tự động** kiểm tra khóa không xuất hiện trong HTML gửi về client.
- `/api/cms` chỉ nhận `endpoint` khớp `^[a-z0-9-]+(/[a-z0-9_-]+)?$` — đường dẫn
  lạ trả 400 (cũng có phép thử).
- `.env` đã gitignore.

## Hạn chế & khác biệt còn lại — nói thẳng

1. **`/chirashi/` (0.9%)** — tờ rơi nằm trong iframe của dịch vụ ngoài
   (`next.retailstudio.jp`). Đã kiểm chứng cả hai bản có **cùng một iframe, cùng
   src, cùng kích thước 608px**. Khi đo nhiều lần dịch vụ này trả 429 (chặn tần
   suất) nên nội dung bên trong có thể khác — không phải lỗi của bản clone.

2. **`/` (1.3%)** — trang chủ lấy dữ liệu động (お知らせ, blog, レシピ, event)
   tại thời điểm chụp; hai lần chụp cách nhau nên nội dung có thể lệch vài dòng.

3. **Webfont fontplus** — phông thương mại cấp phép theo tên miền, không tải
   được trên localhost. Đã kiểm chứng **không gây lệch**: chuỗi
   `サービスカウンター取り扱いサービス` rộng **238px ở CẢ HAI** bản.

4. **`/special/preview` và `/preview`** — cần `draftKey` do microCMS sinh ra,
   không test độc lập được. Đã kiểm chứng **bản gốc cũng trả 500** khi vào thẳng.

5. **`<recaptcha>`** — bản demo dùng component giữ chỗ, không gọi reCAPTCHA thật
   (cần khóa và tên miền đã đăng ký). Biểu mẫu vẫn gửi được.

6. **`colorbox`** — bản gốc mở ảnh phóng to trong lớp phủ; bản này mở tab mới.
   Đây là rút gọn có chủ ý, đã ghi rõ trong `flexslider-lite.js`.

7. **Chưa làm**: Smart Search (Yêu cầu 2), dữ liệu ảo (Yêu cầu 3), chatbot
   (Yêu cầu 4) và các tính năng theo proposal. Giai đoạn 2 chỉ là phần nền —
   clone giao diện cho giống hệt site gốc.

## Công cụ đo (để anh kiểm chứng lại)

```bash
node scripts/compare-shots.mjs          # chụp gốc + mới cùng viewport
node scripts/pixel-diff.mjs a.png b.png # so từng điểm ảnh + phát hiện lệch dọc
node scripts/diff-sections.mjs faq 375  # so chiều cao TỪNG KHỐI
node scripts/diff-box.mjs faq           # so box-model từng phần tử
node scripts/find-slot-css.mjs blog     # tìm CSS mất do khác biệt scoped Vue2/3
node scripts/measure-vuetify-css.mjs    # đo rule Vuetify thực sự được dùng
node scripts/check-routes.mjs           # gọi thử mọi route
```
