// Cau hinh Nuxt 4 cho ban clone site 遠鉄ストア + Smart Search.
// Muc tieu: giu nguyen giao dien goc (Nuxt 2 + Vuetify 2) nen phan css/head
// duoc chep sat theo nuxt.config.js cua site cu.
export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: false },
  ssr: true,

  // Giu nguyen file scss goc cua site cu (385 dong, khong sua noi dung)
  css: ['~/assets/styles/index.scss'],

  devServer: { host: '0.0.0.0', port: 3010 },

  // CSS goc con vai "star hack" cua IE cu (*display:inline; *zoom:1) — trinh
  // duyet hien dai bo qua, nhung lightningcss coi la loi cu phap va dung build.
  // errorRecovery: true cho phep no bo qua nhung dong nay thay vi bao loi.
  vite: {
    css: {
      lightningcss: {
        errorRecovery: true,
      },
    },
  },

  // Vue 2 giu lai MOT dau cach giua cac the ('condense'), Vue 3 mac dinh cung
  // la 'condense' NHUNG bo han khoang trang chua xuong dong giua 2 the.
  // Voi cac <li> display:inline-block trong footer, khoang trang do la 5px that:
  // do duoc <li> thu 2 bat dau o x=396 (goc) vs x=391 (moi).
  // 'preserve' giu nguyen khoang trang giong Vue 2.
  vue: {
    compilerOptions: {
      whitespace: 'preserve',
    },
  },

  // Ghi chu: site cu dung @nuxtjs/style-resources de auto-import vars/*.scss vao
  // moi file .vue. Da do lai: KHONG file .vue nao dung bien scss ($primary...) —
  // chi index.scss dung. Nen import vars ngay trong index.scss la du.


  // components/App/Article.vue -> <AppArticle> (dung nhu site goc).
  // Rieng thu muc vx/ dat pathPrefix:false de <VxBreadcrumbs> khong bi Nuxt
  // doi thanh <VxVxBreadcrumbs>.
  components: [
    { path: '~/components/vx', pathPrefix: false },
    '~/components',
  ],

  // shared/*.mjs nằm ngoài app/ và server/ nên Nuxt dev KHÔNG theo dõi thay đổi
  // -> sửa file rồi mà server vẫn chạy bản cũ, rất dễ tưởng nhầm là code sai.
  // Đã mất công truy vì lỗi này: khai báo watch để dev tự nạp lại.
  watch: ['shared/**/*.mjs'],

  runtimeConfig: {
    // Chi ton tai phia server, khong bao gio lo ra client
    cmsDomain: process.env.CMS_DOMAIN,
    cmsKey: process.env.CMS_KEY,
    anthropicApiKey: process.env.ANTHROPIC_API_KEY,
    anthropicModel: process.env.ANTHROPIC_MODEL || 'claude-sonnet-5',
    public: {
      // Client chi biet AI co bat hay khong, khong biet key
      aiEnabled: !!process.env.ANTHROPIC_API_KEY,
    },
  },

  app: {
    head: {
      // Site goc de lang='en' du noi dung tieng Nhat — giu nguyen de khong
      // lam doi cach trinh duyet chon font/ngat dong.
      htmlAttrs: { lang: 'en' },
      title: '遠鉄ストア',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'Keywords',
          content:
            '遠鉄ストア,静岡県西部,スーパーマーケット,浜松市,磐田市,袋井市,湖西市,掛川市',
        },
        {
          name: 'Description',
          content:
            '静岡県西部を中心に展開するスーパーマーケット。近隣のお客様に安全・安心で新鮮な美味しい食品と楽しいお買い物を笑顔で提供し続けます。',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon-store.ico' }],
      script: [
        // Webfont thuong mai cua site goc. Cap phep theo domain nen tren
        // localhost co the khong tai duoc -> chu se lech mot chut so voi ban goc.
        {
          src: 'https://webfont.fontplus.jp/accessor/script/fontplus.js?5CfGKqlym2w%3D&box=hhp6TW2eDoY%3D&aa=1&ab=2',
          charset: 'utf-8',
          type: 'text/javascript',
        },
      ],
    },
  },
})
