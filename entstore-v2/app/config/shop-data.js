// Chep tu config/shop-data.js cua site goc (37 cua hang, 11 khu vuc).
// Chi doi require(anh) thanh duong dan tinh trong public/ vi Vite khong hieu require().
export const SHOP_SERVICES = {
  stamp: '/assets/images/icon_stamp.webp',
  post: '/assets/images/icon_post.webp',
  revenue: '/assets/images/icon_revenue.webp',
  alumi: '/assets/images/alumi_service.webp',
  paper: '/assets/images/icon_paper.webp',
  atm_toyokawa: '/assets/images/icon_atm_toyokawa.webp',
  atm_shizugin: '/assets/images/icon_atm_shizugin.webp',
  atm_hamashin: '/assets/images/icon_atm_hamashin.webp',
  atm_seven: '/assets/images/icon_atm_seven.webp',
  atm_etc: '/assets/images/icon_atm_etc.webp',
  transition: '/assets/images/icon_transitionv2.webp',
  bus: '/assets/images/icon_bus.webp',
  taxi: '/assets/images/icon_taxi.webp',
  photo: '/assets/images/icon_photo.webp',
  copy: '/assets/images/icon_copy.webp',
  eat: '/assets/images/icon_eat.webp',
  pizza: '/assets/images/icon_pizza.webp',
  pizza_pan: '/assets/images/icon_pizza_pan.webp',
  kids: '/assets/images/icon_kids.webp',
  kitchen: '/assets/images/icon_kitchen.webp',
  bakery: '/assets/images/icon_bakery.webp',
  amazonhub_locker: '/assets/images/icon_amazonhub_locker.webp',
  amazonhub_counter: '/assets/images/icon_amazonhub_counter.webp',
  pudo_station: '/assets/images/icon_pudo_station.webp',
  pay: '/assets/images/icon_pay.webp',
  shopping_agency: '/assets/images/icon_shopping_agency.webp',
  mobile_supermarket_hosoeinasa: '/assets/images/icon_mobile_supermarket_hosoeinasa.webp',
  mobile_supermarket_kasai: '/assets/images/icon_mobile_supermarket_kasai.webp',
  mobile_supermarket_kuno: '/assets/images/icon_mobile_supermarket_kuno.webp',
  mobile_supermarket_wagotomitsuka: '/assets/images/icon_mobile_supermarket_wagotomitsuka.webp',
  mobile_supermarket_mituke: '/assets/images/icon_mobile_supermarket_mituke.webp',
  mobile_supermarket_tenryu: '/assets/images/icon_mobile_supermarket_tenryu.webp',
  mobile_supermarket_kasai2: '/assets/images/icon_mobile_supermarket_kasai2.webp',
  mobile_supermarket_kasai3: '/assets/images/icon_mobile_supermarket_kasai3.webp',
  mobile_supermarket_kasai4: '/assets/images/icon_mobile_supermarket_kasai4.webp',
  mobile_supermarket_mikkabi: '/assets/images/icon_mobile_supermarket_mikkabi.gif',
  icon_supermarket_shinbashi: '/assets/images/icon_supermarket_shinbashi.webp',
  mobile_supermarket_tennou: '/assets/images/icon_mobile_supermarket_tennou.webp',
  mobile_supermarket_iwata: '/assets/images/icon_supermarket_iwata.webp',
  passto: '/assets/images/icon_passto.webp',

  food_tray_recycling: '/assets/images/icon_food_tray_recyling.png',
  paper_carton_recycling: '/assets/images/icon_paper_carton_recycling.png',
  plastic_bottle_recycling: '/assets/images/icon_plastic_bottole_recyling.png',
}

export const SHOP_LIST = {
  chuoku: [
    {
      shopName: '富塚店',
      globalName: 'tomituka',
      shopLink: '/shop/chuoku/tomituka/',
      address: '〒432-8002　浜松市中央区富塚町209-120',
      phone: '053-455-0505',
      time: '9:30～21:00',
      position: {
        lat: '34.718722',
        lng: '137.708824',
      },
      detail: {
        title:
          '昭和48年に遠鉄ストア1号店としてオープン。<br>地域の皆様に長く愛されるお店を目指して<br class="d-none-mobile">鮮度にこだわった仕入れや試食販売のご提案を行っています。',
        image: [
          {
            alt: '',
            url: '/assets/images/photo01 (8).webp',
          },
          {
            alt: '',
            url: '/assets/images/photo02 (2).webp',
          },
          {
            alt: '',
            url: '/assets/images/photo03 (1).webp',
          },
        ],
        googleMapUrl:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.4633409160524!2d137.7063884155326!3d34.71871348976026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601adee666a57953%3A0xca70319a1175c12e!2z6YGg6YmE44K544OI44KiIOWvjOWhmuW6lw!5e0!3m2!1sja!2sjp!4v1589425056749!5m2!1sja!2sjp',
        nearestBusStation: '『浜松聖星高校』下車　徒歩10分',
        numberParking: '118台',
        services: [
          SHOP_SERVICES.stamp,
          SHOP_SERVICES.post,
          SHOP_SERVICES.revenue,
          SHOP_SERVICES.food_tray_recycling,
          SHOP_SERVICES.paper_carton_recycling,
          SHOP_SERVICES.plastic_bottle_recycling,
          SHOP_SERVICES.atm_shizugin,
          SHOP_SERVICES.atm_hamashin,
          SHOP_SERVICES.atm_seven,
          SHOP_SERVICES.atm_etc,
          SHOP_SERVICES.transition,
          SHOP_SERVICES.photo,
          SHOP_SERVICES.copy,
          SHOP_SERVICES.eat,
          SHOP_SERVICES.bakery,
          SHOP_SERVICES.amazonhub_locker,
          SHOP_SERVICES.pay,
        ],
        tenant: [
          {
            name: 'ジャブ（クリーニング）',
            image: '/assets/images/bnr_h-hakuyosha.webp',
            detailTenantUrl: 'http://h-hakuyosha.com/',
          },
          {
            name: '遠鉄石油（ガソリンスタンド）',
            image: '/assets/images/bnr_entetsusekiyu.webp',
            detailTenantUrl: 'http://www.entetsusekiyu.co.jp/',
          },
          {
            name: 'かるん（パソコン教室）',
            image: '/assets/images/bnr_karun.webp',
            detailTenantUrl: 'https://karunchan.com/map/tomitsuka.html',
          },
          {
            name: 'ベルミーランド（エステサロン）',
            image: '/assets/images/bnr_bellemeland.webp',
            detailTenantUrl: 'https://beauty.hotpepper.jp/kr/slnH000761929/',
          },
        ],
      },
    },
    {
      shopName: '向宿店',
      globalName: 'mukoujuku',
      shopLink: '/shop/chuoku/mukoujuku/',
      address: '〒430-0851　浜松市中央区向宿1-9-33',
      phone: '053-463-1091',
      time: '9:30～21:00',
      position: {
        lat: '34.707199',
        lng: '137.75115',
      },
      detail: {
        title:
          "昭和49年に遠鉄ストア2号店としてオープン。<br>コンパクトな売り場で、スピーディーなお買い物を実現できる<br class='d-none-mobile'>ファミリーから一人暮らしまで嬉しい向宿店です。",
        image: [
          {
            alt: '',
            url: '/assets/images/photo01 (12).webp',
          },
          {
            alt: '',
            url: '/assets/images/photo02 (6).webp',
          },
          {
            alt: '',
            url: '/assets/images/photo03 (4).webp',
          },
        ],
        googleMapUrl:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.9213201361304!2d137.74896911553213!3d34.707164390379155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601adde27c1a5c4b%3A0xf45f5ff710b3ac28!2z6YGg6YmE44K544OI44KiIOWQkeWuv-W6lw!5e0!3m2!1sja!2sjp!4v1589425346226!5m2!1sja!2sjp',
        nearestBusStation: '『向宿公会堂』下車　徒歩2分 ',
        numberParking: '76台',
        services: [
          SHOP_SERVICES.stamp,
          SHOP_SERVICES.post,
          SHOP_SERVICES.revenue,
          SHOP_SERVICES.food_tray_recycling,
          SHOP_SERVICES.paper_carton_recycling,
          SHOP_SERVICES.plastic_bottle_recycling,
          SHOP_SERVICES.transition,
          SHOP_SERVICES.photo,
          SHOP_SERVICES.copy,
          SHOP_SERVICES.bakery,
          SHOP_SERVICES.amazonhub_locker,
          SHOP_SERVICES.pay,
        ],
        tenant: [],
      },
    },
    {
      shopName: '西ヶ崎店',
      globalName: 'nishigasaki',
      shopLink: '/shop/chuoku/nishigasaki/',
      address: '〒431-3115　浜松市中央区西ヶ崎町542-1',
      phone: '053-433-7811',
      phone_others: '（ほほえみ薬局西ヶ崎店 053-443-8188）',
      time: '9:30～21:00',
      time_others:
        '（ほほえみ薬局西ヶ崎店<br>月～土曜日　9：30～18：00　日曜日　定休日',
      position: {
        lat: '34.684687',
        lng: '137.699857',
      },
      detail: {
        title:
          "遠州鉄道西ヶ崎駅から北に500m。<br>美味しさで自慢のお野菜・お魚・お惣菜や、<br class='d-none-mobile'>便利な冷凍食品が豊富にそろう、<br class='d-none-mobile'>徒歩でも車でも毎日気軽にご来店いただける西ヶ崎店。<br>店内には調剤薬局「ほほえみ薬局」が併設。<br class='d-none-mobile'>お買物ついでに薬の調剤が頼めてとても便利。",
        image: [
          {
            alt: '',
            url: '/assets/images/photo01 (23).webp',
          },
          {
            alt: '',
            url: '/assets/images/photo02 (17).webp',
          },
          {
            alt: '',
            url: '/assets/images/photo03 (11).webp',
          },
        ],
        googleMapUrl:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.0671544402244!2d137.77231831553385!3d34.779084686523206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601ae0103397348b%3A0x85223ec478674cd8!2z6YGg6YmE44K544OI44KiIOilv-ODtuW0juW6lw!5e0!3m2!1sja!2sus!4v1589427515724!5m2!1sja!2sus',
        nearestBusStation: '『遠州西ヶ崎（電車）』下車　徒歩3分 ',
        numberParking: '99台',
        services: [
          SHOP_SERVICES.food_tray_recycling,
          SHOP_SERVICES.paper_carton_recycling,
          SHOP_SERVICES.plastic_bottle_recycling,
          SHOP_SERVICES.atm_shizugin,
          SHOP_SERVICES.transition,
          SHOP_SERVICES.photo,
          SHOP_SERVICES.copy,
          SHOP_SERVICES.eat,
          SHOP_SERVICES.bakery,
          SHOP_SERVICES.amazonhub_locker,
          SHOP_SERVICES.pay,
        ],
        tenant: [
          {
            name: 'ジャブ（クリーニング）',
            image: '/assets/images/bnr_h-hakuyosha.webp',
            detailTenantUrl: 'http://h-hakuyosha.com/',
          },
          {
            name: '河合楽器音楽教室',
            image: '/assets/images/bnr_kawai.webp',
            detailTenantUrl: 'http://www.kawai.co.jp/school/music/',
          },
          {
            name: '営業時間：9:30〜18:00 日曜定休 <br> どの病院の処方箋も受け付けています！',
            image: '/assets/images/bnr_hohoemi.webp',
            detailTenantUrl: '',
          },
        ],
        busImage: [],
      },
    },
    {
      shopName: '笠井店・マツモトキヨシ笠井店',
      globalName: 'kasai',
      shopLink: '/shop/chuoku/kasai/',
      address: '〒431-3107　浜松市中央区笠井町1197-22',
      phone: '053-435-6611',
      phone_others: '（マツモトキヨシ笠井店：053-582-8810）',
      time: '9:30～21:00',
      time_others:
        '（マツモトキヨシ笠井店　9：30～21：00 <br> 調剤薬局マツモトキヨシ笠井店<br>月～金曜日　9：30～19：00　<br>土曜日　9：30～14：00　日・祝　定休日',
      position: {
        lat: '34.76953',
        lng: '137.791038',
      },
      detail: {
        title:
          '2021年11月にリニューアルいたしました。<br>生鮮素材を使ったメニュー提案をいたしております。<br>美味しさ、調理ポイントをスタッフが親切・丁寧にお伝えいたします。<br>お気軽にお声掛けくださいませ。',
        image: [
          {
            alt: '',
            url: '/assets/images/photo01 (24).webp',
          },
          {
            alt: '',
            url: '/assets/images/photo02 (18).webp',
          },
          {
            alt: '',
            url: '/assets/images/photo03 (12).webp',
          },
        ],
        googleMapUrl:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.4464486973543!2d137.78884891553355!3d34.76953458703555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601ae05b20a0334b%3A0x593f77308dab5b0c!2z6YGg6YmE44K544OI44KiIOesoOS6leW6lw!5e0!3m2!1sja!2sjp!4v1589428034254!5m2!1sja!2sjp',
        nearestBusStation: '『西ノ山』下車　徒歩3分',
        numberParking: '456台',
        services: [
          SHOP_SERVICES.stamp,
          SHOP_SERVICES.post,
          SHOP_SERVICES.revenue,
          SHOP_SERVICES.food_tray_recycling,
          SHOP_SERVICES.paper_carton_recycling,
          SHOP_SERVICES.plastic_bottle_recycling,
          SHOP_SERVICES.alumi,
          SHOP_SERVICES.paper,
          SHOP_SERVICES.atm_shizugin,
          SHOP_SERVICES.atm_hamashin,
          SHOP_SERVICES.atm_seven,
          SHOP_SERVICES.atm_etc,
          SHOP_SERVICES.transition,
          SHOP_SERVICES.taxi,
          SHOP_SERVICES.photo,
          SHOP_SERVICES.copy,
          SHOP_SERVICES.eat,
          SHOP_SERVICES.kitchen,
          SHOP_SERVICES.bakery,
          SHOP_SERVICES.amazonhub_locker,
          SHOP_SERVICES.pudo_station,
          SHOP_SERVICES.pay,
          SHOP_SERVICES.passto,
          SHOP_SERVICES.mobile_supermarket_kasai,
        ],
        desTenant: '※「ショッピングタウンリブロス笠井」内：',
        tenant: [
          {
            name: 'マツモトキヨシ笠井店',
            image: '/assets/images/bnr_matsukiyo.webp',
            detailTenantUrl: 'http://www.matsukiyo.co.jp/',
          },
          {
            name: '玉華堂（菓子）',
            image: '/assets/images/bnr_gyokkado.webp',
            detailTenantUrl: 'http://www.gyokkado.co.jp/',
          },
          {
            name: 'ジャブ（クリーニング）',
            image: '/assets/images/bnr_h-hakuyosha.webp',
            detailTenantUrl: 'http://h-hakuyosha.com/',
          },
          {
            name: 'デューポイント（ヘアサロン）',
            image: '/assets/images/bnr_dewpoint.webp',
            detailTenantUrl: 'http://www.dewpoint.jp/',
          },
          {
            name: '遠鉄ストア笠井店 イベントスペース出店者 募集案内',
            image: '/assets/images/bnr_kasai_event.webp',
            detailTenantUrl: 'http://entstore-event.com/kasai/index.html',
          },
          {
            name: 'BLUE SKY LAUNDRY（コインランドリー）',
            image: '/assets/images/bnr_blueskylaundry.webp',
            detailTenantUrl:
              'https://www.bsl-web.co.jp/tokaiArea/shizuoka/e42ea296c03d066c5d03c3029dc46788e40d4a44.html',
          },
          {
            name: 'Pizza Hut（宅配ピザ）',
            image: '/assets/images/bnr_pizzahut.webp',
            detailTenantUrl: 'https://www.pizzahut.jp/',
          },
          {
            name: 'かるん（パソコン教室）',
            image: '/assets/images/bnr_karun.webp',
            detailTenantUrl: 'https://karunchan.com/map/kasai.html',
          },
          {
            name: 'ダイソ－（100円均一）',
            image: null,
            detailTenantUrl: 'http://www.daiso-sangyo.co.jp/',
          },
          {
            name: '花福（園芸）',
            image: null,
            detailTenantUrl: 'http://www.hana-fuku.net/',
          },
          {
            name: 'イケダヤ（衣料）',
            image: null,
            detailTenantUrl: 'http://www.ikedaya-1907.co.jp/',
          },
          {
            name: ' かさい接骨院',
            image: null,
            detailTenantUrl: 'http://www.kasai-sekkotsuin.com/',
          },
          {
            name: '五味八珍（飲食）',
            image: null,
            detailTenantUrl: 'http://www.gomihattin.co.jp/',
          },
          {
            name: 'カレーハウスcoco壱番屋',
            image: null,
            detailTenantUrl: 'http://www.ichibanya.co.jp/index.html',
          },
          {
            name: ' 静岡銀行',
            image: null,
            detailTenantUrl:
              'http://www.shizuokabank.co.jp/personal/loan/mycar/index.html?wapr=54d9cc91',
          },
          {
            name: ' 買取専門リサイクルマート（買取・リユース）',
            image: null,
            detailTenantUrl: 'https://www.recyclemart.jp/shop/hamamatsukasai/',
          },
          {
            name: 'こめや',
            image: null,
            detailTenantUrl: '',
          },
          {
            name: 'ファディー（フィットネス）',
            image: null,
            detailTenantUrl: '',
          },
          {
            name: 'ゲームすぽっと（ゲームコーナー・トーユー）',
            image: '/assets/images/bnr_gamespot.webp',
            detailTenantUrl: 'https://to-yu-2221.com/',
          },
          {
            name: '楽天モバイル リブロス笠井店',
            image: '/assets/images/rakuten_mobile.jpg',
            detailTenantUrl:
              'https://network.mobile.rakuten.co.jp/shop-detail/1214/',
          },
          // {
          //   "name": "岡本商店（靴）",
          //   "image": null,
          //   "detailTenantUrl": ""
          // },
          // {
          //   "name": "フリーチケット（チケットショップ）",
          //   "image": null,
          //   "detailTenantUrl": ""
          // },
          {
            name: 'YUMEYA（宝くじ）',
            image: null,
            detailTenantUrl: '',
          },
        ],
        busImage: [],
      },
    },
    {
      shopName: '鴨江店',
      globalName: 'kamoe',
      shopLink: '/shop/chuoku/kamoe/',
      address: '〒432-8023　浜松市中央区鴨江2-43-1',
      phone: '053-456-0753',
      time: '9:30～20:00',
      position: {
        lat: '34.702399',
        lng: '137.710031',
      },
      detail: {
        title:
          'お客様の毎日の食卓に 「安全・安心な商品」「新鮮で美味しい商品」をお値打ち価格で提供いたします。',
        image: [
          {
            alt: '',
            url: '/assets/images/photo01 (9).webp',
          },
          // {
          //   "alt": "",
          //   "url": "/assets/images/photo02 (3).webp"
          // },
          {
            alt: '',
            url: '/assets/images/photo03 (2).webp',
          },
        ],
        googleMapUrl:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.0183387404572!2d137.70928031553223!3d34.70471739051018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601ade93d0f15625%3A0x1086520c91cd442e!2z6YGg6YmE44K544OI44KiIOOCpuOCp-ODq-m0qOaxn-W6lw!5e0!3m2!1sja!2sjp!4v1589425155128!5m2!1sja!2sjp',
        nearestBusStation: '『保健所』下車　徒歩3分 ',
        numberParking: '59台',
        services: [
          SHOP_SERVICES.post,
          SHOP_SERVICES.food_tray_recycling,
          SHOP_SERVICES.paper_carton_recycling,
          SHOP_SERVICES.plastic_bottle_recycling,
          SHOP_SERVICES.photo,
        ],
        tenant: [],
      },
    },
    {
      shopName: 'フードワン佐鳴台店',
      globalName: 'foodone_sanarudai',
      shopLink: '/shop/chuoku/foodone_sanarudai/',
      address: '〒432-8021　浜松市中央区佐鳴台4-16-10',
      phone: '053-448-9251',
      time: '9:30～21:00',
      position: {
        lat: '34.708621',
        lng: '137.699425',
      },
      detail: {
        title:
          "「オールイズフレッシュ」をキャッチフレーズに、<br class='d-none-mobile'>新鮮で高質な商品をお客様に提供いたします。",
        image: [
          {
            alt: '',
            url: '/assets/images/photo01 (10).webp',
          },
          {
            alt: '',
            url: '/assets/images/photo02 (4).webp',
          },
          {
            alt: '',
            url: '/assets/images/photo03 (3).webp',
          },
        ],
        googleMapUrl:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.8657864847914!2d137.69743191553226!3d34.708564990304126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601adec406bc93a5%3A0x4b5714ab83b362ae!2z6YGg6YmE44K544OI44KiIEZPT0QgT05FIOS9kOmztOWPsOW6lw!5e0!3m2!1sja!2sjp!4v1589425210172!5m2!1sja!2sjp',
        nearestBusStation: '『佐鳴台団地』下車　徒歩0分 ',
        numberParking: '129台',
        services: [
          SHOP_SERVICES.stamp,
          SHOP_SERVICES.revenue,
          SHOP_SERVICES.food_tray_recycling,
          SHOP_SERVICES.paper_carton_recycling,
          SHOP_SERVICES.plastic_bottle_recycling,
          SHOP_SERVICES.atm_shizugin,
          SHOP_SERVICES.atm_hamashin,
          SHOP_SERVICES.atm_seven,
          SHOP_SERVICES.transition,
          SHOP_SERVICES.taxi,
          SHOP_SERVICES.photo,
          SHOP_SERVICES.copy,
          SHOP_SERVICES.eat,
          SHOP_SERVICES.kitchen,
          SHOP_SERVICES.bakery,
          SHOP_SERVICES.pay,
          SHOP_SERVICES.passto,
          SHOP_SERVICES.amazonhub_locker,
        ],
        tenant: [
          {
            name: 'クリーニングのエブリ',
            image: '/assets/images/bnr_cleaning-every.webp',
            detailTenantUrl: 'http://www.cleaning-every.jp/',
          },
        ],
      },
    },
    {
      shopName: '立野店・マツモトキヨシ立野店',
      globalName: 'tateno',
      shopLink: '/shop/chuoku/tateno/',
      address: '〒430-0827　浜松市中央区立野町543',
      phone: '053-426-1185',
      phone_others: '（マツモトキヨシ立野店：053-427-1910）',
      time: '9:30～20:00',
      time_others: '（マツモトキヨシ立野店　9：30～20：00）',
      position: {
        lat: '34.681959',
        lng: '137.771492',
      },
      detail: {
        title:
          "明るくてゆったり通路のお買い物しやすい店内に<br class='d-none-mobile'>新鮮な食品をたくさんご用意してお待ちしています。<br>毎週月・水・金に、遠州浜⇔立野店を行き来する無料送迎バスをご用意しています。",
        image: [
          {
            alt: '',
            url: '/assets/images/photo01 (20).webp',
          },
          {
            alt: '',
            url: '/assets/images/photo02 (14).webp',
          },
          {
            alt: '',
            url: '/assets/images/photo03 (8).webp',
          },
        ],
        googleMapUrl:
          'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6561.84075275642!2d137.771492!3d34.681959!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd2e9c7d2e0182d8b!2z6YGg6YmE44K544OI44KiIOeri-mHjuW6lw!5e0!3m2!1sja!2sjp!4v1589427164725!5m2!1sja!2sjp',
        nearestBusStation: '『四本松』下車　徒歩6分 ',
        numberParking: '102台',
        services: [
          SHOP_SERVICES.stamp,
          SHOP_SERVICES.revenue,
          SHOP_SERVICES.food_tray_recycling,
          SHOP_SERVICES.paper_carton_recycling,
          SHOP_SERVICES.plastic_bottle_recycling,
          SHOP_SERVICES.paper,
          SHOP_SERVICES.atm_shizugin,
          SHOP_SERVICES.transition,
          SHOP_SERVICES.bus,
          SHOP_SERVICES.photo,
          SHOP_SERVICES.copy,
          SHOP_SERVICES.eat,
          SHOP_SERVICES.bakery,
          SHOP_SERVICES.amazonhub_locker,
          SHOP_SERVICES.pay,
        ],
        tenant: [
          {
            name: 'マツモトキヨシ立野店',
            image: '/assets/images/bnr_matsukiyo.webp',
            detailTenantUrl: 'http://www.matsukiyo.co.jp/',
          },
          {
            name: 'ジャブ（クリーニング）',
            image: '/assets/images/bnr_h-hakuyosha.webp',
            detailTenantUrl: 'http://h-hakuyosha.com/',
          },
          {
            name: 'BLUE SKY LAUNDRY（コインランドリー）',
            image: '/assets/images/bnr_blueskylaundry.webp',
            detailTenantUrl:
              'https://www.bsl-web.co.jp/tokaiArea/shizuoka/e26adf9352e9b1763c73fe41fe0e9f550108fa67.html',
          },
        ],
        busImage: [
          {
            alt: '無料送迎バス実施中',
            url: '/assets/images/bnr_bus_tateno.webp',
            to: '/assets/pdf/bus_tateno.pdf',
          },
        ],
      },
    },
    {
      shopName: '初生店',
      globalName: 'hatsuoi',
      shopLink: '/shop/chuoku/hatsuoi/',
      address: '〒433-8112　浜松市中央区初生町１２１２',
      phone: '053-439-5011',
      time: '9:30～21:00',
      position: {
        lat: '34.771958',
        lng: '137.719824',
      },
      detail: {
        title:
          "地元農家の方が愛情込めて育てた｢地場野菜コーナー｣をはじめ、<br class='d-none-mobile'>地元のおいしい食品も多数取り揃えました。<br>ちょっとしたランチにも使えるイートインコーナーも魅力です。",
        image: [
          {
            alt: '',
            url: '/assets/images/photo01 (28).webp',
          },
          {
            alt: '',
            url: '/assets/images/photo02 (22).webp',
          },
          {
            alt: '',
            url: '/assets/images/photo03 (15).webp',
          },
        ],
        googleMapUrl:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.3489817727605!2d137.7176564155335!3d34.77198888690403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601b2086af1b8a1b%3A0xb02a5b80bf5c79e7!2z6YGg6YmE44K544OI44KiIOWIneeUn-W6lw!5e0!3m2!1sja!2sjp!4v1589428312409!5m2!1sja!2sjp',
        nearestBusStation: '『曳馬野』下車　徒歩1分',
        numberParking: '107台',
        services: [
          SHOP_SERVICES.food_tray_recycling,
          SHOP_SERVICES.paper_carton_recycling,
          SHOP_SERVICES.plastic_bottle_recycling,
          SHOP_SERVICES.atm_seven,
          SHOP_SERVICES.transition,
          SHOP_SERVICES.photo,
          SHOP_SERVICES.copy,
          SHOP_SERVICES.eat,
          SHOP_SERVICES.bakery,
          SHOP_SERVICES.pay,
        ],
        tenant: [
          {
            name: 'ジャブ（クリーニング）',
            image: '/assets/images/bnr_h-hakuyosha.webp',
            detailTenantUrl: 'http://h-hakuyosha.com/',
          },
        ],
        busImage: [],
      },
    },
    {
      shopName: '大人見店',
      globalName: 'oohitomi',
      shopLink: '/shop/chuoku/oohitomi/',
      address: '〒431-1112　浜松市中央区大人見町3367-1',
      phone: '053-485-7311',
      time: '9:30～20:30',
      position: {
        lat: '34.732286',
        lng: '137.658528',
      },
      detail: {
        title:
          "浜松環状線沿いに位置する大人見店は、<br class='d-none-mobile'>共働き世帯やシニア世代で需要が高まるお惣菜やカット野菜、味付け肉、冷凍食品などの簡便食品が充実しています。<br>人気の浜松餃子コーナーもぜひご利用下さいませ。<br>明るい笑顔のスタッフがお待ちしております！！",
        image: [
          {
            alt: '',
            url: '/assets/images/shop/chuoku/oohitomi/photo01_lastest.webp',
          },
          {
            alt: '',
            url: '/assets/images/shop/chuoku/oohitomi/photo02_lastest.webp',
          },
          {
            alt: '',
            url: '/assets/images/shop/chuoku/oohitomi/photo03_lastest.webp',
          },
        ],
        googleMapUrl:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.9233705169236!2d137.65608221553282!3d34.73232588903089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601ad89a64e417bd%3A0x2b50271494a174ca!2z6YGg6YmE44K544OI44KiIOWkp-S6uuimi-W6lw!5e0!3m2!1sja!2sjp!4v1589425625438!5m2!1sja!2sjp',
        nearestBusStation: ' 『湖東高校』下車　徒歩2分 ',
        numberParking: '304台',
        services: [
          SHOP_SERVICES.stamp,
          SHOP_SERVICES.post,
          SHOP_SERVICES.revenue,
          SHOP_SERVICES.food_tray_recycling,
          SHOP_SERVICES.paper_carton_recycling,
          SHOP_SERVICES.plastic_bottle_recycling,
          SHOP_SERVICES.paper,
          SHOP_SERVICES.atm_shizugin,
          SHOP_SERVICES.atm_hamashin,
          SHOP_SERVICES.atm_etc,
          SHOP_SERVICES.transition,
          SHOP_SERVICES.bus,
          SHOP_SERVICES.photo,
          SHOP_SERVICES.copy,
          SHOP_SERVICES.eat,
          SHOP_SERVICES.bakery,
          SHOP_SERVICES.pay,
          SHOP_SERVICES.mobile_supermarket_hosoeinasa,
          SHOP_SERVICES.passto,
        ],
        tenant: [],
        busImage: [
          {
            alt: '無料送迎バス実施中 ゆうおおひとみ行き',
            url: '/assets/images/bnr_bus_oohitomi_yu.webp',
            to: '/assets/pdf/bus_oohitomi_yuoohitomi.pdf',
          },
          {
            alt: '無料送迎バス実施中　瞳ヶ丘行き',
            url: '/assets/images/bnr_bus_oohitomi_hi.webp',
            to: '/assets/pdf/bus_oohitomi_hitomigaoka.pdf',
          },
        ],
      },
    },
    {
      shopName: '天王店',
      globalName: 'tennou',
      shopLink: '/shop/chuoku/tennou/',
      address: '〒435-0052　浜松市中央区天王町1982-1',
      phone: '053-466-0311',
      time: '9:30～21:00',
      position: {
        lat: '34.685712',
        lng: '137.668437',
      },
      detail: {
        title:
          '「ピーワンプラザ天王」内に平成5年オープン。<br>ドーム型の高い屋根が目印。<br>新鮮な、お野菜、果物、お魚、お肉や、出来立てのお惣菜が盛り沢山で勢ぞろい！',
        image: [
          {
            alt: '',
            url: '/assets/images/photo01 (25).webp',
          },
          {
            alt: '',
            url: '/assets/images/photo02 (19).webp',
          },
          {
            alt: '',
            url: '/assets/images/photo03 (13).webp',
          },
        ],
        googleMapUrl:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.810588211553!2d137.7615352155329!3d34.735168488878514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601ae09e1cfe28a7%3A0xeb75946cf5317c55!2z6YGg6YmE44K544OI44KiIOWkqeeOi-W6lw!5e0!3m2!1sja!2sus!4v1589428116312!5m2!1sja!2sus',
        nearestBusStation: '『遠鉄ストア天王店』下車　徒歩0分 ',
        numberParking: '424台',
        services: [
          SHOP_SERVICES.post,
          SHOP_SERVICES.food_tray_recycling,
          SHOP_SERVICES.paper_carton_recycling,
          SHOP_SERVICES.plastic_bottle_recycling,
          SHOP_SERVICES.atm_shizugin,
          SHOP_SERVICES.atm_hamashin,
          // SHOP_SERVICES.atm_etc,
          SHOP_SERVICES.transition,
          SHOP_SERVICES.photo,
          SHOP_SERVICES.copy,
          // SHOP_SERVICES.eat,
          // SHOP_SERVICES.kids,
          SHOP_SERVICES.bakery,
          SHOP_SERVICES.amazonhub_locker,
          SHOP_SERVICES.pay,
          SHOP_SERVICES.mobile_supermarket_tennou,
        ],
        tenant: [
          {
            name: '\n                        ベルミーランド(エステサロン)\n                    ',
            image: '/assets/images/bnr_bellemeland.webp',
            detailTenantUrl: 'https://belleme-land.jp/',
          },
          {
            name: 'アサイー工房（アサイー専門店）',
            image: '/assets/images/bnr_asai.webp',
            detailTenantUrl:
              'https://www.instagram.com/acaibowl_hamamatsu/?igsh=dmYxY3JubHU5bjI4%2F#',
          },
          {
            name: 'ベンティ・デコ（美容室）',
            image: null,
            detailTenantUrl: '',
          },
        ],
        busImage: [],
      },
    },
    {
      shopName: '篠原店',
      globalName: 'shinohara',
      shopLink: '/shop/chuoku/shinohara/',
      address: '〒431-0201　浜松市中央区篠原町14000',
      phone: '053-440-4111',
      time: '9:30～20:00',
      position: {
        lat: '34.685725',
        lng: '137.668448',
      },
      detail: {
        title:
          "「白玉ねぎ」の一大産地、浜松市南西に位置する篠原地区内のストア。<br>お客様の安心を守る「鮮度パトロール」や、地元の方に楽しんでいただける<br class='d-none-mobile'>イベントをご用意して、スタッフ一堂お待ちしております。",
        image: [
          {
            alt: '',
            url: '/assets/images/photo01 (19).webp',
          },
          {
            alt: '',
            url: '/assets/images/photo02 (13).webp',
          },
          {
            alt: '',
            url: '/assets/images/photo03 (7).webp',
          },
        ],
        googleMapUrl:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.7742761724735!2d137.66629191553193!3d34.68564599153142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601ad943dbb1825b%3A0x8315379881cee0d!2z6YGg6YmE44K544OI44KiIOevoOWOn-W6lw!5e0!3m2!1sja!2sjp!4v1589425843189!5m2!1sja!2sjp',
        nearestBusStation: '『篠原東』下車　徒歩1分 ',
        numberParking: '121台',
        services: [
          SHOP_SERVICES.food_tray_recycling,
          SHOP_SERVICES.paper_carton_recycling,
          SHOP_SERVICES.plastic_bottle_recycling,
          SHOP_SERVICES.atm_shizugin,
          SHOP_SERVICES.atm_hamashin,
          SHOP_SERVICES.photo,
          SHOP_SERVICES.bakery,
        ],
        tenant: [
          {
            name: 'はな工房きたの（花屋）',
            image: null,
            detailTenantUrl: '',
          },
          {
            name: 'キャン★ドゥ（100円均一）',
            image: null,
            detailTenantUrl: '',
          },
          {
            name: 'マーブルキャンディ（コインランドリー）',
            image: null,
            detailTenantUrl: '',
          },
        ],
        busImage: [],
      },
    },
    {
      shopName: '新橋店・マツモトキヨシ新橋店',
      globalName: 'nippashi',
      shopLink: '/shop/chuoku/nippashi/',
      address: '〒432-8058　浜松市中央区新橋町662-1',
      phone: '053-449-4111',
      phone_others: '（マツモトキヨシ新橋店:053-415-1900）',
      time: '9:30～21:00',
      time_others: '（マツモトキヨシ新橋店　9：30～21：00）',
      position: {
        lat: '34.684668',
        lng: '137.69986',
      },
      detail: {
        title:
          "平成29年移転新築してオープン<br>「マツモトキヨシ」を併設し、食品と一緒に日用雑貨も<br class='d-none-mobile'>1箇所ですむ利便性が魅力です。",
        image: [
          {
            alt: '',
            url: '/assets/images/photo01 (21).webp',
          },
          {
            alt: '',
            url: '/assets/images/photo02 (15).webp',
          },
          {
            alt: '',
            url: '/assets/images/photo03 (9).webp',
          },
        ],
        googleMapUrl:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.8445265868763!2d137.69804411553199!3d34.68387319162639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601addc534b075a3%3A0x754e7dd9763b8030!2z6YGg6YmE44K544OI44KiIOaWsOapi-W6lw!5e0!3m2!1sja!2sjp!4v1589427267263!5m2!1sja!2sjp',
        nearestBusStation: '『新田西』下車　徒歩4分 ',
        numberParking: '146台',
        services: [
          SHOP_SERVICES.stamp,
          SHOP_SERVICES.post,
          SHOP_SERVICES.revenue,
          SHOP_SERVICES.food_tray_recycling,
          SHOP_SERVICES.paper_carton_recycling,
          SHOP_SERVICES.plastic_bottle_recycling,
          SHOP_SERVICES.atm_shizugin,
          SHOP_SERVICES.atm_hamashin,
          SHOP_SERVICES.transition,
          SHOP_SERVICES.photo,
          SHOP_SERVICES.copy,
          SHOP_SERVICES.eat,
          SHOP_SERVICES.bakery,
          SHOP_SERVICES.amazonhub_locker,
          SHOP_SERVICES.pay,
          SHOP_SERVICES.icon_supermarket_shinbashi,
          SHOP_SERVICES.passto,
        ],
        tenant: [
          {
            name: 'マツモトキヨシ新橋店',
            image: '/assets/images/bnr_matsukiyo.webp',
            detailTenantUrl: 'http://www.matsukiyo.co.jp/',
          },
          {
            name: 'ジャブ（クリーニング）',
            image: '/assets/images/bnr_h-hakuyosha.webp',
            detailTenantUrl: 'http://h-hakuyosha.com/',
          },
          {
            name: '買取大吉(買取サービス)',
            image: '/assets/images/daikichi.webp',
            detailTenantUrl: 'https://www.kaitori-daikichi.jp/store/es-nippashi/',
          },
        ],
        busImage: [],
      },
    },
    {
      shopName: '大平台店',
      globalName: 'oohiradai',
      shopLink: '/shop/chuoku/oohiradai/',
      address: '〒432-8068　浜松市中央区大平台3-20-1',
      phone: '053-484-0611',
      time: '9:30～21:00',
      position: {
        lat: '34.712336',
        lng: '137.678694',
      },
      detail: {
        title:
          '佐鳴湖西岸の大平台住宅地内に平成26年リフレッシュオープン。<br>1人暮らしからファミリーの皆様に対応する、少量・小分け販売も人気。<br>当店自慢の「おさかな惣菜」もお試しください。',
        image: [
          {
            alt: '',
            url: '/assets/images/photo01 (18).webp',
          },
          {
            alt: '',
            url: '/assets/images/photo02 (12).webp',
          },
        ],
        googleMapUrl:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.708897097956!2d137.67650501553254!3d34.712521590092074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601ad929c27b0833%3A0x84f3a73979a06828!2z6YGg6YmE44K544OI44KiIOWkp-W5s-WPsOW6lw!5e0!3m2!1sja!2sjp!4v1589425788614!5m2!1sja!2sjp',
        nearestBusStation: '『遠鉄ストア大平台店』下車　徒歩0分 ',
        numberParking: '83台',
        services: [
          SHOP_SERVICES.post,
          SHOP_SERVICES.food_tray_recycling,
          SHOP_SERVICES.paper_carton_recycling,
          SHOP_SERVICES.plastic_bottle_recycling,
          SHOP_SERVICES.atm_shizugin,
          SHOP_SERVICES.atm_hamashin,
          SHOP_SERVICES.photo,
          SHOP_SERVICES.copy,
          SHOP_SERVICES.eat,
          SHOP_SERVICES.bakery,
          SHOP_SERVICES.amazonhub_locker,
          SHOP_SERVICES.pay,
        ],
        tenant: [
          {
            name: 'ジャブ（クリーニング）',
            image: '/assets/images/bnr_h-hakuyosha.webp',
            detailTenantUrl: 'http://h-hakuyosha.com/',
          },
          {
            name: 'ルイ・ギャレット（美容院）',
            image: null,
            detailTenantUrl: '',
          },
        ],
        busImage: [],
      },
    },
    {
      shopName: '桜台店',
      globalName: 'sakuradai',
      shopLink: '/shop/chuoku/sakuradai/',
      address: '〒431-1104　浜松市中央区桜台3-28-1',
      phone: '053-414-1711',
      time: '9:30～20:30',
      position: {
        lat: '34.771025',
        lng: '137.670293',
      },
      detail: {
        title: `2026年1月に装いも新たに、リニューアルオープン！<br>地元の野菜や鮮度抜群なお魚、幅広い用途のお肉の大容量パック、おいしいお惣菜など<br>おすすめ商品盛りだくさん！スイーツやアイス・冷凍食品の品揃えも必見です。`,
        image: [
          {
            alt: '',
            url: '/assets/images/sakuradai-left.jpg',
          },
          {
            alt: '',
            url: '/assets/images/sakuradai-center.jpg',
          },
          {
            alt: '',
            url: '/assets/images/sakuradai-right.jpg',
          },
        ],
        googleMapUrl:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.386463347951!2d137.6686407155334!3d34.771045086954544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601b273b9d4c3de7%3A0x3d538882fac32578!2z6YGg6YmE44K544OI44KiIOahnOWPsOW6lw!5e0!3m2!1sja!2sjp!4v1589425680187!5m2!1sja!2sjp',
        nearestBusStation: '『桜台ショッピングセンター』下車　徒歩0分 ',
        numberParking: '234台',
        services: [
          SHOP_SERVICES.stamp,
          SHOP_SERVICES.post,
          SHOP_SERVICES.revenue,
          SHOP_SERVICES.food_tray_recycling,
          SHOP_SERVICES.paper_carton_recycling,
          SHOP_SERVICES.plastic_bottle_recycling,
          SHOP_SERVICES.atm_shizugin,
          SHOP_SERVICES.atm_seven,
          SHOP_SERVICES.transition,
          SHOP_SERVICES.bus,
          SHOP_SERVICES.photo,
          SHOP_SERVICES.copy,
          SHOP_SERVICES.eat,
          SHOP_SERVICES.bakery,
          SHOP_SERVICES.amazonhub_locker,
          SHOP_SERVICES.pay,
        ],
        tenant: [
          {
            name: 'ジャブ（クリーニング）',
            image: '/assets/images/bnr_h-hakuyosha.webp',
            detailTenantUrl: 'http://h-hakuyosha.com/',
          },
        ],
        busImage: [
          {
            alt: '無料送迎バス 湖東団地行き実施中！',
            url: '/assets/images/bnr_bus_sakuradai.webp',
            to: '/assets/pdf/bus_sakuradai.pdf',
          },
          {
            alt: '無料送迎バス 舘山寺行き実施中！',
            url: '/assets/images/bnr_bus_sakuradai_ka.webp',
            to: '/assets/pdf/bus_sakuradai_kanzanji.pdf',
          },
          {
            alt: '無料送迎バス 和地行き実施中！',
            url: '/assets/images/bnr_bus_sakuradai_wa.webp',
            to: '/assets/pdf/bus_sakuradai_waji.pdf',
          },
        ],
      },
    },
    {
      shopName: 'フードワン南浅田店',
      globalName: 'foodone_minamiasada',
      shopLink: '/shop/chuoku/foodone_minamiasada/',
      address: '〒432-8044　浜松市中央区南浅田2-13-1',
      phone: '053-444-5511',
      time: '9:30～21:00',
      position: {
        lat: '34.685998',
        lng: '137.732023',
      },
      detail: {
        title:
          '遠鉄ストアでも最大規模を誇る広い店内で、新鮮食材をゆったりお買い物可能。<br>季節ごとの楽しいイベントで、お客様の毎日を応援いたします。',
        image: [
          {
            alt: '',
            url: '/assets/images/photo01 (14).webp',
          },
          {
            alt: '',
            url: '/assets/images/photo02 (8).webp',
          },
        ],
        googleMapUrl:
          'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13123.038929613007!2d137.731954!3d34.686013!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8ff43db4ce20ec03!2z6YGg6YmE44K544OI44KiIEZPT0QgT05FIOWNl-a1heeUsOW6lw!5e0!3m2!1sja!2sjp!4v1589425486398!5m2!1sja!2sjp',
        nearestBusStation: '『江西中学東』下車　徒歩8分 ',
        numberParking: '84台',
        services: [
          SHOP_SERVICES.stamp,
          SHOP_SERVICES.post,
          SHOP_SERVICES.revenue,
          SHOP_SERVICES.food_tray_recycling,
          SHOP_SERVICES.paper_carton_recycling,
          SHOP_SERVICES.plastic_bottle_recycling,
          SHOP_SERVICES.atm_seven,
          SHOP_SERVICES.transition,
          SHOP_SERVICES.taxi,
          SHOP_SERVICES.photo,
          SHOP_SERVICES.copy,
          SHOP_SERVICES.eat,
          // SHOP_SERVICES.kids,
          SHOP_SERVICES.kitchen,
          SHOP_SERVICES.bakery,
          SHOP_SERVICES.amazonhub_locker,
          SHOP_SERVICES.pudo_station,
          SHOP_SERVICES.pay,
          SHOP_SERVICES.mobile_supermarket_kasai3,
          SHOP_SERVICES.passto,
        ],
        tenant: [
          {
            name: 'ジャブ（クリーニング）',
            image: '/assets/images/bnr_h-hakuyosha.webp',
            detailTenantUrl: 'http://h-hakuyosha.com/',
          },
          {
            name: '遠鉄ストアフードワン南浅田店 イベントスペース出店者 募集案内',
            image: '/assets/images/bnr_minamiasada_event.webp',
            detailTenantUrl:
              'http://entstore-event.com/minami-asada/index.html',
          },
          {
            name: 'かるん（パソコン教室）',
            image: '/assets/images/bnr_karun.webp',
            detailTenantUrl: 'https://karunchan.com/map/minamiasada.html',
          },
          {
            name: '買取大吉（買取サービス）',
            image: '/assets/images/daikichi.webp',
            detailTenantUrl: 'https://www.kaitori-daikichi.jp/store/fo-minamiasada/',
          },
        ],
      },
    },
    {
      shopName: 'フードワン泉店',
      globalName: 'foodone_izumi',
      shopLink: '/shop/chuoku/foodone_izumi/',
      address: '〒433-8124　浜松市中央区泉4-12-1',
      phone: '053-412-7211',
      time: '9:30～21:00',
      position: {
        lat: '34.747218',
        lng: '137.720375',
      },
      detail: {
        title:
          '浜松市中区泉に平成22年オープン。<br>日々の食材だけでなく食育などをテーマにしたお料理教室などイベントも開催。<br>笑顔いっぱいの従業員が皆様のご来店をお待ちしております。',
        image: [
          {
            alt: '',
            url: '/assets/images/photo01 (13).webp',
          },
          {
            alt: '',
            url: '/assets/images/photo02 (7).webp',
          },
        ],
        googleMapUrl:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.405515530945!2d137.71659931553302!3d34.74537638833113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601adf0c71844f19%3A0xb0fd61944c7b7189!2z6YGg6YmE44K544OI44KiIOODleODvOODieODr-ODsyDms4nlupc!5e0!3m2!1sja!2sus!4v1589425426835!5m2!1sja!2sus',
        nearestBusStation: '『遠鉄ストアフードワン泉店』下車　徒歩0分 ',
        numberParking: '256台',
        services: [
          SHOP_SERVICES.stamp,
          SHOP_SERVICES.post,
          SHOP_SERVICES.revenue,
          SHOP_SERVICES.food_tray_recycling,
          SHOP_SERVICES.paper_carton_recycling,
          SHOP_SERVICES.plastic_bottle_recycling,
          SHOP_SERVICES.paper,
          SHOP_SERVICES.atm_seven,
          SHOP_SERVICES.transition,
          SHOP_SERVICES.taxi,
          SHOP_SERVICES.photo,
          SHOP_SERVICES.copy,
          // SHOP_SERVICES.eat,
          SHOP_SERVICES.bakery,
          SHOP_SERVICES.pudo_station,
          SHOP_SERVICES.pay,
          SHOP_SERVICES.mobile_supermarket_wagotomitsuka,
          SHOP_SERVICES.amazonhub_locker,
        ],
        tenant: [
          {
            name: '杏林堂',
            image: '/assets/images/bnr_kyorindo.webp',
            detailTenantUrl: 'http://www.kyorindo.co.jp/',
          },
          {
            name: 'クリーニングのエブリ',
            image: '/assets/images/bnr_cleaning-every.webp',
            detailTenantUrl: 'http://www.cleaning-every.jp/',
          },
          {
            name: 'いずみ接骨院',
            image: '/assets/images/bnr_izumi.webp',
            detailTenantUrl: 'http://izumi-sekkotsuin.com',
          },
          {
            name: 'ランドリーカーサ',
            image: '/assets/images/bnr_laundry_casa.webp',
            detailTenantUrl: '',
          },
        ],
      },
    },
    {
      shopName: 'フードワン高林店',
      globalName: 'foodone_takabayashi',
      shopLink: '/shop/chuoku/foodone_takabayashi/',
      address: '〒430-0907　浜松市中央区高林1-5-20',
      phone: '053-416-4111',
      time: '9:30～21:00',
      position: {
        lat: '34.724594',
        lng: '137.732339',
      },
      detail: {
        title:
          "2026年3月にリニューアルオープン致しました!<br class='d-none-mobile'>地元のお野菜、鮮度の良いお魚、大容量でお得なお肉の<br class='d-none-mobile'>品揃えがさらに豊富になりました。ご来店をお待ちしております。",
        image: [
          {
            alt: '',
            url: '/assets/images/photo01 (11).webp',
          },
          {
            alt: '',
            url: '/assets/images/takabayashi-1.jpg',
          },
          {
            alt: '',
            url: '/assets/images/takabayashi-2.jpg',
          },
        ],
        googleMapUrl:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.2198646459246!2d137.72987671553275!3d34.72485198943148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601ade5afdae6c9f%3A0x1a46e1a034bea402!2z6YGg6YmE44K544OI44KiIOODleODvOODieODr-ODs-mrmOael-W6lw!5e0!3m2!1sja!2sjp!4v1589425263372!5m2!1sja!2sjp',
        nearestBusStation: '『遠鉄ストアフードワン高林店』下車　徒歩0分 ',
        numberParking: '100台',
        services: [
          SHOP_SERVICES.stamp,
          SHOP_SERVICES.post,
          SHOP_SERVICES.revenue,
          SHOP_SERVICES.food_tray_recycling,
          SHOP_SERVICES.paper_carton_recycling,
          SHOP_SERVICES.plastic_bottle_recycling,
          SHOP_SERVICES.atm_seven,
          SHOP_SERVICES.atm_etc,
          SHOP_SERVICES.transition,
          SHOP_SERVICES.taxi,
          SHOP_SERVICES.photo,
          SHOP_SERVICES.copy,
          SHOP_SERVICES.eat,
          SHOP_SERVICES.kitchen,
          SHOP_SERVICES.bakery,
          SHOP_SERVICES.pay,
        ],
        tenant: [
          {
            name: 'ジャブ（クリーニング）',
            image: '/assets/images/bnr_h-hakuyosha.webp',
            detailTenantUrl: 'http://h-hakuyosha.com/',
          },
          {
            name: 'ブルースカイランドリー（コインランドリー）',
            image: '/assets/images/bnr_blueskylaundry.webp',
            detailTenantUrl:
              'https://www.bsl-web.co.jp/tokaiArea/shizuoka/77c9b38d3f6517fb3103482891dfe3dc7c5964f9.html',
          },
        ],
      },
    },
    {
      shopName: 'フードワン東伊場店・',
      globalName: 'foodone_higashiiba',
      subName: 'マツモトキヨシ東伊場店',
      shopLink: '/shop/chuoku/foodone_higashiiba/',
      address: '〒432-8036　浜松市中央区東伊場2-14-55',
      phone: '053-455-3900',
      phone_others: '（マツモトキヨシ東伊場店：053-455-4000）',
      time: '9:30～21:00',
      time_others: '（マツモトキヨシ東伊場店　9：30～21：00）',
      position: {
        lat: '34.697592',
        lng: '137.718052',
      },
      shopBanner: {
        imgUrl: '/assets/images/bnr_matsukiyo_dutyfree_kikugawa.jpg',
        filePath: '/assets/pdf/dutyfree.pdf',
        alt: 'マツモトキヨシ（松本清）菊川店 免税対応：Tax-free 8％OFF！',
      },
      detail: {
        title:
          '「マツモトキヨシ」とともに平成26年オープン。<br>ドラッグストア併設で、食品と一緒に日用雑貨も1箇所ですむ利便性が魅力です。',
        image: [
          {
            alt: '',
            url: '/assets/images/photo01 (15).webp',
          },
          {
            alt: '',
            url: '/assets/images/photo02 (9).webp',
          },
        ],
        googleMapUrl:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.311899541248!2d137.71459721553205!3d34.697312290906645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601ade83840928a1%3A0xcd5825b8b7ac1913!2z6YGg6YmE44K544OI44KiIOODleODvOODieODr-ODs-adseS8iuWgtOW6l-ODu-ODnuODhOODouODiOOCreODqOOCt-adseS8iuWgtOW6lw!5e0!3m2!1sja!2sjp!4v1589425574089!5m2!1sja!2sjp',
        nearestBusStation: '『商工会議所』下車　徒歩8分 ',
        numberParking: '127台',
        services: [
          SHOP_SERVICES.stamp,
          SHOP_SERVICES.post,
          SHOP_SERVICES.revenue,
          SHOP_SERVICES.food_tray_recycling,
          SHOP_SERVICES.paper_carton_recycling,
          SHOP_SERVICES.plastic_bottle_recycling,
          SHOP_SERVICES.atm_seven,
          SHOP_SERVICES.transition,
          SHOP_SERVICES.photo,
          SHOP_SERVICES.copy,
          // SHOP_SERVICES.eat,
          SHOP_SERVICES.bakery,
          SHOP_SERVICES.amazonhub_locker,
          SHOP_SERVICES.pay,
          SHOP_SERVICES.passto,
        ],
        tenant: [
          {
            name: 'マツモトキヨシ東伊場店',
            image: '/assets/images/bnr_matsukiyo.webp',
            detailTenantUrl: 'http://www.matsukiyo.co.jp/',
          },
          {
            name: 'ジャブ（クリーニング）',
            image: '/assets/images/bnr_h-hakuyosha.webp',
            detailTenantUrl: 'http://h-hakuyosha.com/',
          },
          {
            name: 'ランドリーカーサ',
            image: '/assets/images/bnr_laundry_casa.webp',
            detailTenantUrl: '',
          },
          {
            name: 'ワッツウィズ（100円均一ショップ）',
            image: '/assets/images/bnr_whattswith.webp',
            detailTenantUrl: 'https://www.watts-jp.com/shop/42948/',
          },
        ],
      },
    },
    {
      shopName: '西伝寺店',
      globalName: 'seidenji',
      shopLink: '/shop/chuoku/seidenji/',
      address: '〒435-0035　浜松市中央区西伝寺町292-1',
      phone: '053-443-7711',
      time: '9:00～20:00',
      position: {
        lat: '34.701681',
        lng: '137.766569',
      },
      detail: {
        title:
          "『「新鮮な商品」と「笑顔のあいさつ」で近隣のお客様から愛される西伝寺店』<br class='d-none-mobile'>\n" +
          "\t\t\t\tを店舗スローガンに掲げ、鮮魚、惣菜を中心とした美味しさや鮮度にこだわった商品、<br class='d-none-mobile'>\n" +
          '\t\t\t\t近年トレンドとなっている簡便性の高い商品の品揃えを強化いたします。\n' +
          '\t\t\t',
        image: [
          {
            alt: '',
            url: '/assets/images/photo01 (22).webp',
          },
          {
            alt: '',
            url: '/assets/images/photo02 (16).webp',
          },
          {
            alt: '',
            url: '/assets/images/photo03 (10).webp',
          },
        ],
        googleMapUrl:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.1416154991393!2d137.76438711553223!3d34.701607890676705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601ae787f535fe61%3A0xe43ac04a209c16a6!2z6YGg6YmE44K544OI44Ki6KW_5Lyd5a-65bqXKDIwMjDlubQz5pyI5pyr44Kq44O844OX44Oz5LqI5a6aKQ!5e0!3m2!1sja!2sjp!4v1589427351692!5m2!1sja!2sjp',
        nearestBusStation: '『西伝寺』下車徒歩5分',
        numberParking: '81台',
        services: [
          SHOP_SERVICES.food_tray_recycling,
          SHOP_SERVICES.paper_carton_recycling,
          SHOP_SERVICES.plastic_bottle_recycling,
          SHOP_SERVICES.atm_seven,
          SHOP_SERVICES.photo,
          SHOP_SERVICES.bakery,
        ],
        tenant: [],
        busImage: [],
      },
    },
    {
      shopName: 'マツモトキヨシさぎの宮駅前店',
      globalName: 'saginomiya',
      shopLink: '/shop/chuoku/saginomiya/',
      address: '〒431-3113　浜松市中央区大瀬町489',
      phone: '053-432-0300',
      time: '9:00～20:30',
      position: {
        lat: '34.757246',
        lng: '137.757002',
      },
      detail: {
        title:
          "遠州鉄道さぎの宮駅前に2022年4月21日にオープン！<br>買い回りしやすいコンパクトな店内には、お薬・化粧品・日用品・一般食品はもちろん、<br>遠鉄ストアのお野菜・お肉・おかず・お弁当などをお取り扱いしています。<br>えんてつカード・マツキヨカード・ｄポイントカードの<br class='d-none-mobile'>3枚のカードにポイントが貯まり・使えるお得なお店です。",
        image: [
          {
            alt: '',
            url: '/assets/images/photo01 (26).webp',
          },
          {
            alt: '',
            url: '/assets/images/photo02 (20).webp',
          },
          {
            alt: '',
            url: '/assets/images/photo03 (14).webp',
          },
        ],
        googleMapUrl:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.934689849874!2d137.75481371504242!3d34.75723798042002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601adfda5a9f7bbb%3A0x369953c790eeea90!2z44CSNDMxLTMxMTMg6Z2Z5bKh55yM5rWc5p2-5biC5p2x5Yy65aSn54Cs55S677yU77yY77yZ!5e0!3m2!1sja!2sjp!4v1649047091670!5m2!1sja!2sjp',
        nearestBusStation: '遠州鉄道 さぎの宮駅　徒歩0分',
        numberParking: '29台',
        services: [SHOP_SERVICES.amazonhub_locker],
        tenant: [],
        busImage: [],
      },
    },
  ],
  hamanaku: [
    {
      shopName: '浜北店・マツモトキヨシ浜北店',
      globalName: 'hamakita',
      shopLink: '/shop/hamanaku/hamakita/',
      address: '〒434-0012　浜松市浜名区中瀬16-1',
      phone: '053-580-0311',
      phone_others: '（マツモトキヨシ浜北店：053-581-8801）',
      time: '9:30～21:00',
      time_weekends: '（土日のみ9:00～21:00）',
      time_others:
        '（マツモトキヨシ浜北店　9:30～21:00<br>土日のみ　9:00～21:00）',
      position: {
        lat: '34.810071',
        lng: '137.804917',
      },
      detail: {
        title:
          "浜北店ではお買い得商品から、食生活を彩る逸品など、幅広い品揃えで、<br>お客様の楽しいお買い物をサポートをさせていただきます。毎日実施している<br />試食コーナーも人気のお店です。従業員一同ご来店を心よりお待ちしております。",
        image: [
          {
            alt: '',
            url: '/assets/images/hamakita-1.webp',
          },
          {
            alt: '',
            url: '/assets/images/hamakita-2.webp',
          },
          {
            alt: '',
            url: '/assets/images/hamakita-3.webp',
          },
        ],
        googleMapUrl:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.835676791372!2d137.80272841553426!3d34.810075784859514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601b1e2d1d41d743%3A0x693b70eaf2b679c2!2z6YGg6YmE44K544OI44KiIOa1nOWMl-W6lw!5e0!3m2!1sja!2sjp!4v1589428378095!5m2!1sja!2sjp',
        nearestBusStation: '遠州鉄道 小林駅　徒歩14分 ',
        numberParking: '171台',
        services: [
          SHOP_SERVICES.post,
          SHOP_SERVICES.food_tray_recycling,
          SHOP_SERVICES.paper_carton_recycling,
          SHOP_SERVICES.plastic_bottle_recycling,
          SHOP_SERVICES.atm_shizugin,
          SHOP_SERVICES.atm_hamashin,
          SHOP_SERVICES.atm_seven,
          // SHOP_SERVICES.atm_etc,
          SHOP_SERVICES.transition,
          SHOP_SERVICES.photo,
          SHOP_SERVICES.copy,
          SHOP_SERVICES.eat,
          SHOP_SERVICES.bakery,
          SHOP_SERVICES.amazonhub_locker,
          SHOP_SERVICES.pay,
          SHOP_SERVICES.passto,
        ],
        tenant: [
          {
            name: 'マツモトキヨシ浜北店',
            image: '/assets/images/bnr_matsukiyo.webp',
            detailTenantUrl: 'https://www.matsukiyococokara-online.com/store/',
          },
          {
            name: '玉華堂（菓子）',
            image: '/assets/images/bnr_gyokkado.webp',
            detailTenantUrl: 'http://www.gyokkado.co.jp/',
          },
          {
            name: 'ジャブ（クリーニング）',
            image: '/assets/images/bnr_h-hakuyosha.webp',
            detailTenantUrl: 'http://h-hakuyosha.com/',
          },
          // {
          //   "name": "遠鉄石油（ガソリンスタンド）",
          //   "image": "/assets/images/bnr_entetsusekiyu.webp",
          //   "detailTenantUrl": "http://www.entetsusekiyu.co.jp/"
          // },
          {
            name: 'はまきた接骨院',
            image: null,
            detailTenantUrl: 'http://www.hamakita-sekkotsuin.com/',
          },
          {
            name: 'フトン丸洗い館',
            image: null,
            detailTenantUrl: 'https://futonmaruaraikan.com/',
          },
          {
            name: '買取大吉（買取サービス）',
            detailTenantUrl: 'https://kaitoridaikichi-hamakita.com/',
            image: '/assets/images/daikichi.webp',
          },
        ],
        busImage: [],
      },
    },
    {
      shopName: 'フードワンきらりタウン店',
      globalName: 'foodone_kiraritown',
      shopLink: '/shop/hamanaku/foodone_kiraritown/',
      address: '〒434-0046　浜松市浜名区染地台5-7-28',
      phone: '053-584-0811',
      time: '9:30～20:00',
      position: {
        lat: '34.795074',
        lng: '137.746185',
      },
      detail: {
        title:
          "2022年8月にリニューアルいたしました。<br>新鮮なお野菜、お魚や、便利なお総菜、冷凍食品を<br class='d-none-mobile'>豊富に取り揃え、お客様のお買い物を応援いたします。<br>毎週月・水・金に内野台⇒遠鉄ストアを行き来する、<br class='d-none-mobile'>無料送迎バスをご用意しております。",
        image: [
          {
            alt: '',
            url: '/assets/images/kiratown_photo01.webp',
          },
          {
            alt: '',
            url: '/assets/images/kiratown_photo02.webp',
          },
          {
            alt: '',
            url: '/assets/images/kiratown_photo03.webp',
          },
        ],
        googleMapUrl:
          'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d26211.456590416703!2d137.746185!3d34.79507!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2a0c9a19e30e3f8!2z6YGg6YmE44K544OI44Ki44OV44O844OJ44Ov44OzIOOBjeOCieOCiuOCv-OCpuODs-W6lw!5e0!3m2!1sja!2sjp!4v1589428417983!5m2!1sja!2sjp',
        nearestBusStation: '『染地台3丁目』下車　徒歩8分 ',
        numberParking: '456台',
        services: [
          SHOP_SERVICES.stamp,
          SHOP_SERVICES.post,
          SHOP_SERVICES.revenue,
          SHOP_SERVICES.food_tray_recycling,
          SHOP_SERVICES.paper_carton_recycling,
          SHOP_SERVICES.plastic_bottle_recycling,
          SHOP_SERVICES.alumi,
          SHOP_SERVICES.paper,
          SHOP_SERVICES.atm_shizugin,
          SHOP_SERVICES.atm_seven,
          SHOP_SERVICES.atm_etc,
          SHOP_SERVICES.transition,
          SHOP_SERVICES.bus,
          SHOP_SERVICES.photo,
          SHOP_SERVICES.copy,
          SHOP_SERVICES.eat,
          SHOP_SERVICES.kitchen,
          SHOP_SERVICES.bakery,
          SHOP_SERVICES.amazonhub_locker,
          SHOP_SERVICES.pay,
        ],
        tenant: [
          {
            name: 'ジャブ（クリーニング）',
            image: '/assets/images/bnr_h-hakuyosha.webp',
            detailTenantUrl: 'http://h-hakuyosha.com/',
          },
          {
            name: 'かるん（パソコン教室）',
            image: '/assets/images/bnr_karun.webp',
            detailTenantUrl: 'https://karunchan.com/map/entetsukirari.html',
          },
          // {
          //   "name": "Urara（セルフビューティサロン）",
          //   "image": "/assets/images/bnr_urara.webp",
          //   "detailTenantUrl": "https://lit.link/urara22"
          // },
          {
            name: '買取大吉（買取サービス）',
            image: '/assets/images/daikichi.webp',
            detailTenantUrl: 'https://daikichi-kaitori.com/',
          },
        ],
        busImage: [
          {
            alt: '無料送迎バス実施中',
            url: '/assets/images/bnr_bus_kiraritown.webp',
            to: '/assets/pdf/bus_kirari.pdf',
          },
        ],
      },
    },
    {
      shopName: '三ヶ日店',
      globalName: 'mikkabi',
      shopLink: '/shop/hamanaku/mikkabi/',
      address: '〒431-1414　浜松市浜名区三ヶ日町三ヶ日110',
      phone: '053-524-4511',
      time: '9:30～21:00',
      position: {
        lat: '34.810083',
        lng: '137.550167',
      },
      detail: {
        title:
          '愛知県との県境に平成22年オープン。<br>広々と明るい店内空間で、新鮮な食材をお買い回りいただけます。<br>魚屋「魚喜」の鮮魚やお寿司も自慢です。',
        image: [
          {
            alt: '',
            url: '/assets/images/photo01 (27).webp',
          },
          {
            alt: '',
            url: '/assets/images/photo02 (21).webp',
          },
        ],
        googleMapUrl:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.8422517516155!2d137.54846931553422!3d34.80991038486844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601b2e5c433eb41f%3A0x9e497c20229a3a76!2z6YGg6YmE44K544OI44KiIOS4ieODtuaXpeW6lw!5e0!3m2!1sja!2sus!4v1589428244669!5m2!1sja!2sus',
        nearestBusStation: '『三ヶ日車庫』下車　徒歩6分 ',
        numberParking: '155台',
        services: [
          SHOP_SERVICES.stamp,
          SHOP_SERVICES.post,
          SHOP_SERVICES.revenue,
          SHOP_SERVICES.food_tray_recycling,
          SHOP_SERVICES.paper_carton_recycling,
          SHOP_SERVICES.plastic_bottle_recycling,
          SHOP_SERVICES.atm_seven,
          SHOP_SERVICES.transition,
          SHOP_SERVICES.photo,
          SHOP_SERVICES.copy,
          SHOP_SERVICES.eat,
          SHOP_SERVICES.bakery,
          SHOP_SERVICES.pay,
          SHOP_SERVICES.mobile_supermarket_mikkabi,
          SHOP_SERVICES.passto,
        ],
        tenant: [
          {
            name: 'ミーツ（100円均一ショップ）',
            image: '/assets/images/bnr_meets.webp',
            detailTenantUrl: 'https://www.watts-jp.com/shop/533/',
          },
          {
            name: 'ジャブ（クリーニング）',
            image: '/assets/images/bnr_h-hakuyosha.webp',
            detailTenantUrl: 'http://h-hakuyosha.com/',
          },
        ],
        busImage: [],
      },
    },
    {
      shopName: 'スーパーマーケットみっかび',
      globalName: 'super-mikkabi',
      shopLink: '/shop/hamanaku/super-mikkabi/',
      address: '〒431-1414 浜松市浜名区三ヶ日町三ヶ日626-1',
      phone: '053-525-8444',
      time: '9:30～19:00',
      position: {
        lat: '34.805796',
        lng: '137.55508',
      },
      detail: {
        title:
          "新鮮な生鮮食品、おいしいお惣菜やデザートなどを取りそろえ、<br class='d-none-mobile'>いつでもお求めやすい価格で地域のみなさまをお待ちしております。",
        image: [
          {
            alt: '',
            url: '/assets/images/shop/super-mikkabi/photo01.webp',
          },
          {
            alt: '',
            url: '/assets/images/shop/super-mikkabi/photo02.webp',
          },
          {
            alt: '',
            url: '/assets/images/shop/super-mikkabi/photo03.webp',
          },
        ],
        googleMapUrl:
          'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d409.5016190073154!2d137.5546607!3d34.805616!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601b2f0034778d1f%3A0x1431af6ec64f586!2z44K544O844OR44O844Oe44O844Kx44OD44OI44G_44Gj44GL44GzKOmBoOmJhOOCueODiOOCoik!5e0!3m2!1svi!2s!4v1733208254908!5m2!1sja!2s',
        nearestBusStation: '『三ヶ日(バス停)』下車徒歩4分',
        numberParking: '24台',
        services: [],
        tenant: [],
        busImage: [],
      },
    },
  ],
  tenryuku: [
    {
      shopName: '天竜店',
      globalName: 'tenryu',
      shopLink: '/shop/tenryuku/tenryu/',
      address: '〒431-3304　浜松市天竜区次郎八新田6-2',
      phone: '053-922-2311',
      time: '9:30～21:00',
      time_weekends: '（夏季のみ土日　9：00～21：00）',
      position: {
        lat: '34.683581',
        lng: '137.772546',
      },
      detail: {
        title:
          '遠鉄ストアの中でも最北に位置する天竜店。<br>毎日のお買い物だけでなく、水窪方面や阿多古川・気田川への<br>レジャー時にもお立ち寄りください。',
        image: [
          {
            alt: '',
            url: '/assets/images/shop/tenryuku/photo01.webp',
          },
          {
            alt: '',
            url: '/assets/images/shop/tenryuku/photo02.webp',
          },
          {
            alt: '',
            url: '/assets/images/shop/tenryuku/photo03.webp',
          },
        ],
        googleMapUrl:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3273.2884930385844!2d137.81817021553556!3d34.87410128141856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601b1ec888f56b3b%3A0x4bd6dee8b706f9f5!2z6YGg6YmE44K544OI44KiIOWkqeernOW6lw!5e0!3m2!1sja!2sus!4v1589428759953!5m2!1sja!2sus',
        nearestBusStation: '『山東』下車　徒歩0分 ',
        numberParking: '102台',
        services: [
          SHOP_SERVICES.stamp,
          SHOP_SERVICES.post,
          SHOP_SERVICES.revenue,
          SHOP_SERVICES.food_tray_recycling,
          SHOP_SERVICES.paper_carton_recycling,
          SHOP_SERVICES.plastic_bottle_recycling,
          // SHOP_SERVICES.atm_etc,
          SHOP_SERVICES.atm_seven,
          SHOP_SERVICES.transition,
          SHOP_SERVICES.taxi,
          SHOP_SERVICES.photo,
          SHOP_SERVICES.copy,
          // SHOP_SERVICES.eat,
          SHOP_SERVICES.bakery,
          SHOP_SERVICES.pay,
          SHOP_SERVICES.mobile_supermarket_tenryu,
          SHOP_SERVICES.passto,
        ],
        tenant: [
          {
            name: '扇（クリーニング）',
            image: null,
            detailTenantUrl: 'http://ougi621.on.omisenomikata.jp/',
          },
          {
            name: 'くすり東海堂（薬局）',
            image: null,
            detailTenantUrl: '',
          },
        ],
        busImage: [],
      },
    },
  ],
  iwatashi: [
    {
      shopName: '磐田店・マツモトキヨシ磐田店',
      shopLink: '/shop/iwatashi/iwata/',
      address: '〒438-0071　磐田市見付字今之浦5879-1',
      phone: '0538-35-1941',
      phone_others: '（マツモトキヨシ磐田店：0538-39-1190）',
      time: '9:30～20:00',
      time_others: '（マツモトキヨシ磐田店　9：30～20：00）',
      globalName: 'iwata',
      position: {
        lat: '34.718067',
        lng: '137.858326',
      },
      detail: {
        title:
          '昭和50年にオープンし、お客様に愛されて約40年。<br>平成26年にはドラッグストアマツモトキヨシも併設オープン。買物がとても便利です。',
        image: [
          {
            alt: '',
            url: '/assets/images/photo01 (31).webp',
          },
          {
            alt: '',
            url: '/assets/images/photo02 (25).webp',
          },
          {
            alt: '',
            url: '/assets/images/photo03 (18).webp',
          },
        ],
        googleMapUrl:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.314963099412!2d137.85298571553264!3d34.722454489559944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601ae430f8ea869f%3A0xa27b8669fdf28bb5!2z6YGg6YmE44K544OI44KiIOejkOeUsOW6lw!5e0!3m2!1sja!2sjp!4v1589428854004!5m2!1sja!2sjp',
        nearestBusStation: '『新加茂川橋』下車　徒歩3分 ',
        numberParking: '133台',
        services: [
          SHOP_SERVICES.food_tray_recycling,
          SHOP_SERVICES.paper_carton_recycling,
          SHOP_SERVICES.plastic_bottle_recycling,
          SHOP_SERVICES.alumi,
          SHOP_SERVICES.paper,
          SHOP_SERVICES.atm_shizugin,
          SHOP_SERVICES.atm_hamashin,
          // SHOP_SERVICES.atm_etc,
          SHOP_SERVICES.transition,
          SHOP_SERVICES.photo,
          SHOP_SERVICES.copy,
          SHOP_SERVICES.eat,
          SHOP_SERVICES.bakery,
          SHOP_SERVICES.amazonhub_locker,
          SHOP_SERVICES.pay,
          SHOP_SERVICES.mobile_supermarket_iwata,
        ],
        tenant: [
          {
            name: 'クリーニングのエブリ',
            image: '/assets/images/bnr_cleaning-every.webp',
            detailTenantUrl: 'http://www.cleaning-every.jp/',
          },
          {
            name: 'マツモトキヨシ磐田店',
            image: '/assets/images/bnr_matsukiyo.webp',
            detailTenantUrl: 'http://www.matsukiyo.co.jp/',
          },
          {
            name: '河合楽器音楽教室',
            image: '/assets/images/bnr_kawai.webp',
            detailTenantUrl: 'http://www.kawai.co.jp/school/music/',
          },
          {
            name: 'ブルースカイランドリー（コインランドリー）',
            image: '/assets/images/bnr_blueskylaundry.webp',
            detailTenantUrl:
              'https://www.bsl-web.co.jp/tokaiArea/shizuoka/2807f98101492900898bd701b4af84287d11fa49.html',
          },
          {
            name: '買取大吉（買取サービス）',
            image: '/assets/images/daikichi.webp',
            detailTenantUrl: 'https://www.kaitori-daikichi.jp/es-iwata/',
          },
        ],
        busImage: [],
      },
    },
    {
      shopName: '竜洋店',
      shopLink: '/shop/iwatashi/ryuyou/',
      address: '〒438-0231　磐田市豊岡6926-3',
      phone: '0538-66-3541',
      time: '9:30～20:00',
      globalName: 'ryuyou',
      position: {
        lat: '34.672977',
        lng: '137.813954',
      },
      detail: {
        title:
          "150号線沿いの地元密着型の元気な接客が自慢のストア。<br>コンパクトな店舗と新鮮な食品をご用意して、<br class='d-none-mobile'>毎日のお買い物のしやすさを応援いたします！",
        image: [
          {
            alt: '',
            url: '/assets/images/photo01 (32).webp',
          },
          {
            alt: '',
            url: '/assets/images/photo02 (26).webp',
          },
          {
            alt: '',
            url: '/assets/images/photo03 (19).webp',
          },
        ],
        googleMapUrl:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.277098931469!2d137.8115080155317!3d34.672955292210595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601ae63a7b59e041%3A0xc6bdea3e966fa737!2z6YGg6YmE44K544OI44KiIOernOa0i-W6lw!5e0!3m2!1sja!2sjp!4v1589428901673!5m2!1sja!2sjp',
        nearestBusStation: '『金洗東』下車　徒歩2分 ',
        numberParking: '76台',
        services: [
          SHOP_SERVICES.post,
          SHOP_SERVICES.food_tray_recycling,
          SHOP_SERVICES.paper_carton_recycling,
          SHOP_SERVICES.plastic_bottle_recycling,
          SHOP_SERVICES.alumi,
          SHOP_SERVICES.atm_etc,
          SHOP_SERVICES.photo,
          SHOP_SERVICES.eat,
          SHOP_SERVICES.bakery,
          SHOP_SERVICES.amazonhub_locker,
          SHOP_SERVICES.pay,
        ],
        tenant: [
          {
            name: 'ジャブ（クリーニング）',
            image: '/assets/images/bnr_h-hakuyosha.webp',
            detailTenantUrl: 'http://h-hakuyosha.com/',
          },
        ],
        busImage: [],
      },
    },
    {
      shopName: '池田店・マツモトキヨシ池田店',
      shopLink: '/shop/iwatashi/ikeda/',
      address: '〒438-0805　磐田市池田162-16',
      phone: '0538-35-1120',
      phone_others: '（マツモトキヨシ池田店：0538-39-1900）',
      time: '9:30～21:00',
      time_others: '（マツモトキヨシ池田店　9：30～21：00）',
      globalName: 'ikeda',
      position: {
        lat: '34.738305',
        lng: '137.816805',
      },
      detail: {
        title:
          '地域の皆様に食べ方のご提案やお買い得の商品情報を発信し続けます。<br>お気軽に当店スタッフにお声をおかけ下さい。',
        image: [
          {
            alt: '',
            url: '/assets/images/店舗外観.webp',
          },
          {
            alt: '',
            url: '/assets/images/店内売場.webp',
          },
          {
            alt: '',
            url: '/assets/images/マツキヨ外観.webp',
          },
        ],
        googleMapUrl:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.6854612706684!2d137.81469691553292!3d34.738321988709316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601ae133981d8efd%3A0x43bde0c083da4e2e!2z6YGg6YmE44K544OI44KiIOaxoOeUsOW6lw!5e0!3m2!1sja!2sjp!4v1589428941491!5m2!1sja!2sjp',
        nearestBusStation: '『長森』下車　徒歩17分',
        numberParking: '106台',
        services: [
          SHOP_SERVICES.food_tray_recycling,
          SHOP_SERVICES.paper_carton_recycling,
          SHOP_SERVICES.plastic_bottle_recycling,
          SHOP_SERVICES.alumi,
          SHOP_SERVICES.paper,
          SHOP_SERVICES.atm_shizugin,
          SHOP_SERVICES.atm_hamashin,
          // SHOP_SERVICES.atm_etc,
          SHOP_SERVICES.transition,
          SHOP_SERVICES.photo,
          SHOP_SERVICES.copy,
          // SHOP_SERVICES.eat,
          SHOP_SERVICES.bakery,
          SHOP_SERVICES.pay,
          SHOP_SERVICES.amazonhub_locker,
        ],
        tenant: [
          {
            name: 'マツモトキヨシ池田店',
            image: '/assets/images/bnr_matsukiyo.webp',
            detailTenantUrl: 'http://www.matsukiyo.co.jp/',
          },
          {
            name: 'ジャブ（クリーニング）',
            image: '/assets/images/bnr_h-hakuyosha.webp',
            detailTenantUrl: 'http://h-hakuyosha.com/',
          },
          {
            name: 'かるん（パソコン教室）',
            image: '/assets/images/bnr_karun.webp',
            detailTenantUrl: 'https://karunchan.com/map/entetsuikeda.html',
          },
          {
            name: 'BLUE SKY LAUNDRY（コインランドリー）',
            image: '/assets/images/bnr_blueskylaundry.webp',
            detailTenantUrl:
              'https://www.bsl-web.co.jp/tokaiArea/shizuoka/9cdc6d8a7b430649ddbf7465465a5d6dfd0b3018.html',
          },
        ],
        busImage: [],
      },
    },
    {
      shopName: '見付店',
      shopLink: '/shop/iwatashi/mituke/',
      address: '〒438-0086　磐田市見付6038-5',
      phone: '0538-21-4111',
      time: '9:30～21:00',
      globalName: 'mituke',
      position: {
        lat: '34.735746',
        lng: '137.85849',
      },
      detail: {
        title:
          "磐田バイパス見付I.C.南側に、平成26年オープン。<br>おいしい香り漂うベーカリーコーナーをはじめ、安全・安心で、<br class='d-none-mobile'>新鮮な商品を多数取り揃えております。",
        image: [
          {
            alt: '',
            url: '/assets/images/photo01 (34).webp',
          },
          {
            alt: '',
            url: '/assets/images/photo02 (28).webp',
          },
          {
            alt: '',
            url: '/assets/images/photo03 (21).webp',
          },
        ],
        googleMapUrl:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.7466431775633!2d137.85582851553303!3d34.736780088792194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601ae415d24c98a3%3A0x52b46056ac152ca8!2z6YGg6YmE44K544OI44KiIOimi-S7mOW6lw!5e0!3m2!1sja!2sjp!4v1589429008261!5m2!1sja!2sjp',
        nearestBusStation: '『遠鉄ストア見付店』下車　徒歩5分 ',
        numberParking: '159台',
        services: [
          SHOP_SERVICES.stamp,
          SHOP_SERVICES.post,
          SHOP_SERVICES.revenue,
          SHOP_SERVICES.food_tray_recycling,
          SHOP_SERVICES.paper_carton_recycling,
          SHOP_SERVICES.plastic_bottle_recycling,
          SHOP_SERVICES.alumi,
          SHOP_SERVICES.atm_hamashin,
          SHOP_SERVICES.atm_seven,
          // SHOP_SERVICES.atm_etc,
          SHOP_SERVICES.transition,
          SHOP_SERVICES.taxi,
          SHOP_SERVICES.copy,
          // SHOP_SERVICES.eat,
          SHOP_SERVICES.bakery,
          SHOP_SERVICES.amazonhub_locker,
          SHOP_SERVICES.pay,
          SHOP_SERVICES.mobile_supermarket_mituke,
          SHOP_SERVICES.passto,
        ],
        tenant: [
          {
            name: 'ジャブ（クリーニング）',
            image: '/assets/images/bnr_h-hakuyosha.webp',
            detailTenantUrl: 'http://h-hakuyosha.com/',
          },
          {
            name: '買取専門いくらや',
            image: '/assets/images/mitsuke.jpg',
            detailTenantUrl: 'https://www.kaitori-ikuraya.jp/store/entstore-mitsuke/',
          },
        ],
        busImage: [],
      },
    },
  ],
  hukuroishi: [
    {
      shopName: '浅羽店・マツモトキヨシ浅羽店',
      shopLink: '/shop/hukuroishi/asaba/',
      address: '〒437-1122　袋井市浅岡350',
      phone: '0538-23-8951',
      phone_others: '（マツモトキヨシ浅羽店 ：0538-30-2900）',
      time: '9:30～20:00',
      time_others: '（マツモトキヨシ浅羽店　9：30～20：00）',
      globalName: 'asaba',
      position: {
        lat: '34.709573',
        lng: '137.91742',
      },
      detail: {
        title:
          "新鮮な食材はもちろんのこと、店内を彩る趣向をこらした<br class='d-none-mobile'>季節のディスプレイで、お買い物のひと時をお楽しみください。",
        image: [
          {
            alt: '',
            url: '/assets/images/photo01 (35).webp',
          },
          {
            alt: '',
            url: '/assets/images/photo02 (29).webp',
          },
          {
            alt: '',
            url: '/assets/images/photo03 (22).webp',
          },
        ],
        googleMapUrl:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.82293946238!2d137.9157288155325!3d34.70964559024619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601ae55406534d4d%3A0x1fb8caf03e5551bf!2z6YGg6YmE44K544OI44KiIOa1hee-veW6lw!5e0!3m2!1sja!2sjp!4v1589429069119!5m2!1sja!2sjp',
        nearestBusStation: '『浅羽北小前』下車　徒歩8分 ',
        numberParking: '750台',
        services: [
          SHOP_SERVICES.stamp,
          SHOP_SERVICES.post,
          SHOP_SERVICES.revenue,
          SHOP_SERVICES.food_tray_recycling,
          SHOP_SERVICES.paper_carton_recycling,
          SHOP_SERVICES.plastic_bottle_recycling,
          SHOP_SERVICES.alumi,
          SHOP_SERVICES.paper,
          SHOP_SERVICES.atm_shizugin,
          SHOP_SERVICES.atm_hamashin,
          SHOP_SERVICES.atm_seven,
          SHOP_SERVICES.atm_etc,
          SHOP_SERVICES.transition,
          SHOP_SERVICES.taxi,
          SHOP_SERVICES.photo,
          SHOP_SERVICES.copy,
          SHOP_SERVICES.eat,
          SHOP_SERVICES.bakery,
          SHOP_SERVICES.amazonhub_locker,
          SHOP_SERVICES.pay,
        ],
        tenant: [
          {
            name: 'マツモトキヨシ浅羽店',
            image: '/assets/images/bnr_matsukiyo.webp',
            detailTenantUrl: 'http://www.matsukiyo.co.jp/',
          },
        ],
        busImage: [],
      },
    },
    {
      shopName: '袋井久能店',
      shopLink: '/shop/hukuroishi/kuno/',
      address: '〒437-0061　袋井市久能1265',
      phone: '0538-31-6600',
      time: '9:30～21:00',
      globalName: 'kuno',
      position: {
        lat: '34.756899',
        lng: '137.91826',
      },
      detail: {
        title:
          "品質・鮮度にこだわった生鮮品やお惣菜がいっぱい！<br class='d-none-mobile'>冷凍食品などの「簡便品」や「地元商品」の品ぞろえも豊富です。 <br class='d-none-mobile'>地域のお客様に、楽しいお買い物の時間を提供してまいります。",
        image: [
          {
            alt: '',
            url: '/assets/images/shop/hukuroishi/kuno/20240425_49号店①.webp',
          },
          {
            alt: '',
            url: '/assets/images/shop/hukuroishi/kuno/20240425_49号店②.webp',
          },
          {
            alt: '',
            url: '/assets/images/shop/hukuroishi/kuno/20240425_49号店③.webp',
          },
        ],
        googleMapUrl:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2317.867129462628!2d137.9162448487008!3d34.756622335943774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601ae5b6e10b8327%3A0xb961daf41745e657!2z6YGg6YmE44K544OI44Ki6KKL5LqV5LmF6IO95bqX!5e0!3m2!1sja!2sjp!4v1711004465334!5m2!1sja!2sjp',
        nearestBusStation:
          '袋井駅から車で5分 <br>秋葉バス（秋葉中遠線、秋葉線）<br>「一軒家」バス停下車　徒歩1分',
        numberParking: '160台',
        services: [
          SHOP_SERVICES.food_tray_recycling,
          SHOP_SERVICES.paper_carton_recycling,
          SHOP_SERVICES.plastic_bottle_recycling,
          SHOP_SERVICES.alumi,
          SHOP_SERVICES.atm_seven,
          SHOP_SERVICES.photo,
          SHOP_SERVICES.copy,
          SHOP_SERVICES.kitchen,
          SHOP_SERVICES.bakery,
          SHOP_SERVICES.amazonhub_locker,
          SHOP_SERVICES.pay,
          SHOP_SERVICES.mobile_supermarket_kuno,
        ],
        tenant: [
          {
            name: 'ジャブ（クリーニング）',
            image: '/assets/images/bnr_h-hakuyosha.webp',
            detailTenantUrl: 'http://h-hakuyosha.com/',
          },
        ],
        busImage: [],
      },
    },
  ],
  kakegawashi: [
    {
      shopName: '掛川中央店',
      shopLink: '/shop/kakegawashi/kakegawa/',
      address: '〒436-0056　掛川市中央2-7-1',
      phone: '0537-61-1111',
      time: '9:30～21:00',
      globalName: 'kakegawa',
      position: {
        lat: '34.770039',
        lng: '138.00837',
      },
      detail: {
        title:
          '掛川駅から徒歩5分。<br>近隣の皆様に信頼され、愛され、笑顔溢れるお店作りを目指します。',
        image: [
          {
            alt: '',
            url: '/assets/images/photo01 (37).webp',
          },
          {
            alt: '',
            url: '/assets/images/photo02 (30).webp',
          },
          {
            alt: '',
            url: '/assets/images/photo03 (23).webp',
          },
        ],
        googleMapUrl:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.4260448003674!2d138.00618131553367!3d34.770048387008124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601af98f75eaaf57%3A0xb16f4689a44451c2!2z6YGg6YmE44K544OI44KiIOaOm-W3neS4reWkruW6lw!5e0!3m2!1sja!2sjp!4v1589429124852!5m2!1sja!2sjp',
        nearestBusStation:
          '『労金掛川支店前（掛川自主運行バス 市街地循環線【南回り】）』下車　徒歩3分 ',
        numberParking: '99台',
        services: [
          SHOP_SERVICES.food_tray_recycling,
          SHOP_SERVICES.paper_carton_recycling,
          SHOP_SERVICES.plastic_bottle_recycling,
          SHOP_SERVICES.alumi,
          // SHOP_SERVICES.taxi,
          SHOP_SERVICES.photo,
          SHOP_SERVICES.copy,
          SHOP_SERVICES.eat,
          SHOP_SERVICES.pizza,
          SHOP_SERVICES.pay,
        ],
        tenant: [
          {
            name: 'かるん（パソコン教室）',
            image: '/assets/images/bnr_karun.webp',
            detailTenantUrl: 'https://karunchan.com/map/entetsukakegawa.html',
          },
        ],
        busImage: [],
      },
    },
  ],
  kikugawashi: [
    {
      shopName: '菊川店・マツモトキヨシ菊川店・シャトレーゼ菊川店',
      shopLink: '/shop/kikugawashi/kikugawa/',
      address: '〒439-0006　菊川市堀之内546-1',
      phone: '0537-37-2000',
      phone_others:
        '（マツモトキヨシ菊川：0537-37-1900）<br> （調剤薬局直通：TEL・FAX 0537-37-3337）<br> （シャトレーゼ遠鉄ストア菊川店：0537-29-5011）',
      time: '9:30～21:00',
      time_others:
        '（マツモトキヨシ菊川店　9：30～21：00<br>調剤薬局マツモトキヨシ菊川店<br>月～金曜日　9：00～19：00<br>土曜日　9：00～14：00　日・祝　定休日<br>シャトレーゼ遠鉄ストア菊川店　9：30～21：00',
      globalName: 'kikugawa',
      position: {
        lat: '34.763448',
        lng: '138.087595',
      },
      shopBanner: {
        imgUrl: '/assets/images/bnr_matsukiyo_dutyfree_kikugawa_2.jpg',
        filePath: '/assets/pdf/dutyfree.pdf',
        alt: 'マツモトキヨシ（松本清）菊川店 免税対応：Tax-free 8％OFF！',
      },
      detail: {
        title:
          'JR菊川駅北側の「えんてつ菊川ショッピングセンター」内に平成25年オープン。<br>遠鉄ストア内でも最大規模の広々店内に、生鮮食品を始め、<br>\n\t\t\t\t地元特産のお茶や野菜等のお取り扱いしております。<br>マツモトキヨシ菊川店内に調剤薬局も併設されています。<br>\n\t\t\t\t令和4年2月にシャトレーゼ遠鉄ストア菊川店がオープン。<br>人気のスウィーツ、アイスクリーム数多く販売しております。是非、ご利用ください。',
        image: [
          {
            alt: '',
            url: '/assets/images/photo01 (39).webp',
          },
          {
            alt: '',
            url: '/assets/images/photo03 (25).webp',
          },
          {
            alt: '',
            url: '/assets/images/photo04 (1).webp',
          },
        ],
        googleMapUrl:
          'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d26221.562594726794!2d138.087507!3d34.763267!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8fad7c1863a92e66!2z6YGg6YmE44K544OI44KiIOiPiuW3neW6lw!5e0!3m2!1sja!2sjp!4v1589429168220!5m2!1sja!2sjp',
        nearestBusStation: ' 『JR菊川駅』下車　徒歩5分 ',
        numberParking: '157台',
        services: [
          SHOP_SERVICES.stamp,
          SHOP_SERVICES.post,
          SHOP_SERVICES.revenue,
          SHOP_SERVICES.food_tray_recycling,
          SHOP_SERVICES.paper_carton_recycling,
          SHOP_SERVICES.plastic_bottle_recycling,
          SHOP_SERVICES.alumi,
          SHOP_SERVICES.paper,
          SHOP_SERVICES.atm_seven,
          SHOP_SERVICES.atm_etc,
          SHOP_SERVICES.transition,
          // SHOP_SERVICES.photo,
          SHOP_SERVICES.copy,
          // SHOP_SERVICES.eat,
          // SHOP_SERVICES.bakery,
          SHOP_SERVICES.pizza_pan,
          SHOP_SERVICES.pay,
        ],
        tenant: [
          {
            name: 'マツモトキヨシ菊川店',
            image: '/assets/images/bnr_matsukiyo.webp',
            detailTenantUrl: 'http://www.matsukiyo.co.jp/',
          },
          {
            name: 'ジャブ（クリーニング）',
            image: '/assets/images/bnr_h-hakuyosha.webp',
            detailTenantUrl: 'http://h-hakuyosha.com/',
          },
          {
            name: 'かるん（パソコン教室）',
            image: '/assets/images/bnr_karun.webp',
            detailTenantUrl: 'https://karunchan.com/map/kikugawa.html',
          },
          {
            name: 'シャトレーゼ',
            image: '/assets/images/bnr_chateraise.webp',
            detailTenantUrl: 'https://www.chateraise.co.jp/ec/shop/o618060/',
          },
          {
            name: 'カーサカラー（ヘアカラー）',
            image: '/assets/images/CASA73.webp',
            detailTenantUrl: 'https://sbhp.e-kinco.com/m015/',
          },
        ],
        busImage: [],
      },
    },
  ],
  kosaishi: [
    {
      shopName: '湖西店・シャトレーゼ湖西店',
      shopLink: '/shop/kosaishi/kosai/',
      address: '〒431-0431　湖西市鷲津760-2',
      phone: '053-576-2331',
      phone_others: '（シャトレーゼ遠鉄ストア湖西店:053-575-2277）',
      time: '9:30～21:00',
      time_others: '（シャトレーゼ遠鉄ストア湖西店　9:00～21:00）',
      showless: true,
      globalName: 'kosai',
      position: {
        lat: '34.713011',
        lng: '137.543444',
      },
      detail: {
        title:
          'JR鷲津駅から南へ400m。新鮮で値頃感のある生鮮食品、できたてのお惣菜が人気です。<br>\n                            敷地内にシャトレーゼ遠鉄ストア湖西店が隣接しお買物が楽しめます。',
        image: [
          {
            alt: '',
            url: '/assets/images/photo01 (40).webp',
          },
          {
            alt: '',
            url: '/assets/images/photo02 (32).webp',
          },
          {
            alt: '',
            url: '/assets/images/photo03 (26).webp',
          },
        ],
        googleMapUrl:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.694724496677!2d137.54116971553236!3d34.712878990072994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601b299469e31383%3A0xb87ba57777c4e30!2z6YGg6YmE44K544OI44KiIOa5luilv-W6lw!5e0!3m2!1sja!2sjp!4v1589429245794!5m2!1sja!2sjp',
        nearestBusStation: '『鷲津駅（JR）』下車　徒歩5分 ',
        numberParking: '168台',
        services: [
          SHOP_SERVICES.stamp,
          SHOP_SERVICES.post,
          SHOP_SERVICES.revenue,
          SHOP_SERVICES.food_tray_recycling,
          SHOP_SERVICES.paper_carton_recycling,
          SHOP_SERVICES.plastic_bottle_recycling,
          SHOP_SERVICES.atm_hamashin,
          SHOP_SERVICES.transition,
          SHOP_SERVICES.photo,
          SHOP_SERVICES.copy,
          SHOP_SERVICES.eat,
          SHOP_SERVICES.bakery,
          SHOP_SERVICES.pay,
          SHOP_SERVICES.mobile_supermarket_kasai2,
        ],
        tenant: [
          {
            name: 'シャトレーゼ',
            image: '/assets/images/bnr_chateraise.webp',
            detailTenantUrl: 'https://www.chateraise.co.jp/ec/shop/o618061/',
          },
          {
            name: '遠州鉄道不動産営業所（不動産）',
            image: null,
            detailTenantUrl: 'http://home.entetsu.co.jp/office/',
          },
          {
            name: 'クリーニング中日',
            image: null,
            detailTenantUrl: '',
          },
        ],
        busImage: [],
      },
    },
  ],
  toyokawashi: [
    {
      shopName: '豊川店・マツモトキヨシ豊川店',
      shopLink: '/shop/toyokawashi/toyokawa/',
      address: '〒442-0884　豊川市光明町1-19',
      phone: '0533-83-9011',
      phone_others: '（マツモトキヨシ豊川店：0533-80-2910）',
      time: '9:30～21:00',
      time_others: '（マツモトキヨシ豊川店　9：30～21：00）',
      globalName: 'toyokawa',
      position: {
        lat: '34.815775',
        lng: '137.372746',
      },
      detail: {
        title:
          "鮮度にこだわった生鮮食品、簡便性の高い惣菜、冷凍食品など、<br class='d-none-mobile'>豊富な品揃えでお客様の毎日を応援いたします。",
        image: [
          {
            alt: '',
            url: '/assets/images/photo01 (41).webp',
          },
          {
            alt: '',
            url: '/assets/images/photo02 (33).webp',
          },
          {
            alt: '',
            url: '/assets/images/photo03 (27).webp',
          },
        ],
        googleMapUrl:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.6116984216833!2d137.3705747155345!3d34.815709784556965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6004cc210ee223eb%3A0x5992a75ccfdb5654!2z6YGg6YmE44K544OI44KiIOixiuW3neW6lw!5e0!3m2!1sja!2sjp!4v1589429294642!5m2!1sja!2sjp',
        nearestBusStation: '『（豊鉄バス）南大通四丁目』下車 徒歩3分',
        numberParking: '258台',
        services: [
          SHOP_SERVICES.stamp,
          SHOP_SERVICES.post,
          SHOP_SERVICES.revenue,
          SHOP_SERVICES.food_tray_recycling,
          SHOP_SERVICES.paper_carton_recycling,
          SHOP_SERVICES.plastic_bottle_recycling,
          SHOP_SERVICES.alumi,
          SHOP_SERVICES.atm_toyokawa,
          SHOP_SERVICES.atm_seven,
          SHOP_SERVICES.copy,
          SHOP_SERVICES.eat,
          SHOP_SERVICES.kitchen,
          SHOP_SERVICES.bakery,
          SHOP_SERVICES.amazonhub_locker,
          SHOP_SERVICES.pay,
          SHOP_SERVICES.mobile_supermarket_kasai4,
        ],
        tenant: [
          {
            name: 'マツモトキヨシ豊川店',
            image: '/assets/images/bnr_matsukiyo.webp',
            detailTenantUrl: 'http://www.matsukiyo.co.jp/',
          },
          {
            name: 'Can Do（100円均一）',
            image: '/assets/images/bnr_cando.webp',
            detailTenantUrl: 'http://www.cando-web.co.jp/',
          },
          {
            name: 'クリーニングアポロ',
            image: '/assets/images/bnr_apollo.webp',
            detailTenantUrl: '',
          },
          {
            name: '遠鉄ストア豊川店 イベントスペース出店者 募集案内',
            image: '/assets/images/bnr_toyokawa_event.webp',
            detailTenantUrl: 'http://entstore-toyokawa.com/',
          },
        ],
        busImage: [],
      },
    },
  ],
  toyohashishi: [
    {
      shopName: '豊橋曙店',
      shopLink: '/shop/toyohashishi/toyohashiakebono/',
      address: '〒441-8151　豊橋市曙町字測点76',
      phone: '0532-46-6222',
      time: '9:30～21:00',
      time_weekends: '（日曜のみ9：00～21：00）',
      globalName: 'toyohashiakebono',
      position: {
        lat: '34.725063',
        lng: '137.398908',
      },
      detail: {
        title:
          '\n\t\t\t\t2021年夏に、豊橋市に初出店！「笑顔」と「食の情報」があふれるお店です。<br>\n\t\t\t\t新鮮で美味しい食品と、豊富なメニュー紹介も魅力です。<br>\n\t\t\t\t毎日のお買物はもちろん、ご贈答品やハレの日のご予約まで、当店にお任せください！\n\t\t\t',
        image: [
          {
            alt: '',
            url: '/assets/images/photo01 (42).webp',
          },
          {
            alt: '',
            url: '/assets/images/photo02 (34).webp',
          },
          {
            alt: '',
            url: '/assets/images/photo03 (28).webp',
          },
        ],
        googleMapUrl:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.22276464884!2d137.3965460151312!3d34.724778880428374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6004d3bb60f45e29%3A0x2146a3456104efae!2z44CSNDQxLTgxNTEg5oSb55-l55yM6LGK5qmL5biC5puZ55S65ris54K577yX77yW!5e0!3m2!1sja!2sjp!4v1624496047349!5m2!1sja!2sjp',
        nearestBusStation: '『（豊鉄バス）三本木町』下車　徒歩9分',
        numberParking: '61台',
        services: [
          SHOP_SERVICES.stamp,
          SHOP_SERVICES.revenue,
          SHOP_SERVICES.food_tray_recycling,
          SHOP_SERVICES.paper_carton_recycling,
          SHOP_SERVICES.plastic_bottle_recycling,
          SHOP_SERVICES.photo,
          SHOP_SERVICES.copy,
          // SHOP_SERVICES.bakery,
          SHOP_SERVICES.pizza,
          SHOP_SERVICES.amazonhub_locker,
          SHOP_SERVICES.pay,
        ],
        tenant: [],
        busImage: [],
      },
    },
  ],

  shuchigun: [
    {
      shopName: '森店',
      shopLink: '/shop/shuchigun/mori/',
      address: '〒437-0215　静岡県周智郡森町森1657-21',
      phone: '0538-24-8570',
      time: '9:00～20:00',
      globalName: 'mori',
      position: {
        lat: '34.82967149548525',
        lng: '137.92169885451258',
      },
      detail: {
        title:
          '天竜浜名湖鉄道「遠州森駅」から徒歩5分。<br>コンパクトでお買い物しやすい店内に自慢の生鮮食品、お惣菜をそろえました。<br>日常のお買い物から特別な日のごちそうまでぜひご利用ください。',
        image: [
          {
            alt: '',
            url: '/assets/images/mori-1.jpg',
          },
          {
            alt: '',
            url: '/assets/images/mori-2.jpg',
          },

          {
            alt: '',
            url: '/assets/images/mori-3.jpg',
          },
        ],
        googleMapUrl:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.0626468474507!2d137.91910247631563!3d34.8295173762893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601ae2ccad75b95d%3A0xb387260a31c2f23!2z44CSNDM3LTAyMTUg6Z2Z5bKh55yM5ZGo5pm66YOh5qOu55S65qOu77yR77yW77yV77yX4oiS77yS77yR!5e0!3m2!1sja!2sjp!4v1759285984129!5m2!1sja!2sjp',
        nearestBusStation:
          '天竜浜名湖鉄道『遠州森駅』下車徒歩5分<br />秋葉バス（秋葉中遠線、磐田線、吉川線）『JA遠州森支店』下車徒歩1分',
        numberParking: '63台',
        services: [
          SHOP_SERVICES.food_tray_recycling,
          SHOP_SERVICES.paper_carton_recycling,
          SHOP_SERVICES.plastic_bottle_recycling,
          SHOP_SERVICES.alumi,
          SHOP_SERVICES.bakery,
          SHOP_SERVICES.atm_seven,
        ],
        tenant: [
          {
            name: 'ジャブ(クリーニング)',
            image: '/assets/images/bnr_h-hakuyosha.webp',
            detailTenantUrl: 'https://h-hakuyosha.com/',
          },
        ],
        busImage: [],
      },
    },
  ],
}
