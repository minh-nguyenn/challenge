# Giai đoạn 1 — Trang mẫu (chờ duyệt)

Làm 2 trang mẫu như đã thống nhất, đối chiếu bằng ảnh chụp trước khi làm 59 trang còn lại.

## Kết quả đo

| Trang | Viewport | Cao (gốc) | Cao (mới) | Lệch | Điểm ảnh khác |
|---|---|---|---|---|---|
| faq | desktop 1280 | 2822px | 2822px | **0.0%** | **0.84%** |
| faq | mobile 375 | 2896px | 2896px | **0.0%** | **0.24%** |

Chiều cao **từng khối** (đo riêng, không chỉ tổng):

```
viewport 1280px   tổng: gốc=2822  mới=2822   lệch=0px
#pageHeader     177  177    0      .singleColumn   971  971    0
.v-breadcrumbs   57   57    0      .footerInfo     356  356    0
.wrap-content  1622 1622    0      #siteInfo       538  538    0
main           1572 1572    0      .footer-page   1023 1023    0

viewport 375px    tổng: gốc=2896  mới=2896   lệch=0px
→ cả 13 khối đo được đều lệch 0px
```

0,84% điểm ảnh còn khác nằm gọn trong dải y=2770–2804 = **băng chuyền banner ở
chân trang đang chạy autoplay**. Đã kiểm chứng đây KHÔNG phải lỗi: ảnh, thứ tự
và bề rộng từng banner giống hệt (`ban_insurance` 145px, `ban_bus` 111px…), chỉ
khác `translate3d` vì hai lần chụp rơi vào hai thời điểm khác nhau của animation.

## Cách đo (để anh kiểm chứng lại)

```bash
npm run dev                                   # cổng 3010
node scripts/compare-shots.mjs                # chụp gốc + mới, cùng viewport
node scripts/pixel-diff.mjs a.png b.png       # so từng điểm ảnh
node scripts/diff-sections.mjs faq 375        # so chiều cao từng khối
node scripts/diff-box.mjs faq                 # so box-model từng phần tử
node scripts/measure-vuetify-css.mjs          # đo CSS Vuetify thực sự dùng
```

## Phát hiện quan trọng: Vuetify nhẹ hơn brief tưởng rất nhiều

Brief nói "chỉ 8 loại component". Đo sâu hơn bằng **Chrome thật** (duyệt CSSOM
rồi hỏi `document.querySelector` xem rule nào thực sự khớp DOM):

| Đo trên trang gốc | Số |
|---|---|
| Rule CSS có selector Vuetify được tải về | **4.316** |
| Rule **thực sự khớp** phần tử trên trang | **49** |
| Rule chết (không khớp gì) | 4.267 = **98,9%** |
| Kích thước phần cần tái tạo | **4,5KB** |

→ File `app/assets/styles/vuetify-compat.scss` (190 dòng) chép lại đúng 49 rule đó.
Giữ nguyên tên class `.v-*` nên **không phải sửa một dòng `<style>` nào** trong
61 file `.vue` gốc.

## 4 nguyên nhân gây lệch đã tìm ra và sửa

Mỗi cái đều tìm bằng đo, không đoán:

| # | Triệu chứng đo được | Nguyên nhân gốc | Sửa |
|---|---|---|---|
| 1 | `#pageHeader` x=8 thay vì 0, rộng 1264 thay vì 1280; lệch 18,7% | thiếu `body{margin:0}` của Vuetify reset | thêm vào compat |
| 2 | mobile `scrollWidth`=387 thay vì 375; `.v-breadcrumbs` rộng 395px | thiếu `box-sizing:border-box` toàn cục | thêm vào compat |
| 3 | `.defoltBnr` cao 151 thay vì 123 (+28 = 14×2) | thiếu `ul{margin:0}` → `<ul>` giữ margin 14px mặc định | thêm vào compat |
| 4 | `<li>` thứ 2 ở x=391 thay vì 396 (5px) | Vue 2 render `</li> <li>`, Vue 3 render `</li><li>`; với `inline-block` khoảng trắng đó = 5px thật | `vue.compilerOptions.whitespace: 'preserve'` |

Điểm đáng chú ý: sửa #1 làm 7/8 sai lệch biến mất cùng lúc — một nguyên nhân
gốc, không phải 8 lỗi riêng.

## Đã đổi những gì so với bản gốc

`layouts/default.vue` — giữ nguyên 374 dòng `<template>` và 847 dòng `<style>`
(cả 4 khối style), chỉ viết lại `<script>`:

| Gốc | Mới | Vì sao |
|---|---|---|
| `<v-app>` | `<VxApp>` | bỏ Vuetify |
| `<v-navigation-drawer>` | `<VxNavigationDrawer>` | bỏ Vuetify |
| `<v-breadcrumbs>` | `<VxBreadcrumbs>` | bỏ Vuetify |
| `<slick>` (vue-slick) | `<VxSlick>` | vue-slick không có bản Vue 3, lại kéo theo jQuery |
| `<Nuxt />` | `<slot />` | Nuxt 4 dùng slot cho layout |
| `window.$(...)` jQuery | bỏ hẳn | VxSlick chạy bằng CSS transform |
| `mounted` / `beforeDestroy` | `onMounted` / `onBeforeUnmount` | Vue 3 |
| `head()` | `useHead()` | Nuxt 4 |

DOM của các component tự viết được chép **đúng theo bản render thật** của
www.entstore.co.jp, không phải đoán. Ví dụ mũi tên băng chuyền: `<button>` 20×20,
`top:22px`, `transform:translateY(-10px)`, chữ ẩn `font-size:0`, ký tự vẽ bằng
`::before` màu trắng `opacity:.75` — dựng xong rơi đúng toạ độ gốc
(prev x=125, next x=1135).

## Hạn chế đã biết

- **Webfont fontplus**: site gốc dùng `webfont.fontplus.jp` (phông thương mại,
  cấp phép theo tên miền). Trên localhost script có tải nhưng không cấp phông.
  Đã kiểm chứng điều này **không gây lệch**: chuỗi
  `サービスカウンター取り扱いサービス` rộng **238px ở CẢ HAI** bản, cùng
  `font-family` và `font-size`. Cả hai đều rơi về `Hiragino Kaku Gothic ProN`.
- Ảnh so sánh chụp từ **production** `www.entstore.co.jp` (anh đã chọn), nên dữ
  liệu CMS là dữ liệu thật tại thời điểm chụp.
- `pages/index.vue` chưa làm — ảnh `index-*-moi.png` hiện còn trống, đúng như dự kiến.

## Ảnh đối chiếu

`screenshots/faq-desktop-goc.png` ↔ `faq-desktop-moi.png`
`screenshots/faq-mobile-goc.png` ↔ `faq-mobile-moi.png`
