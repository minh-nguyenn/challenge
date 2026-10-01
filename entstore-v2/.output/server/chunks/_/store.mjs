import { e as createError } from './nitro.mjs';
import fs from 'node:fs';
import path from 'node:path';

const SHOP_SERVICES = {
  stamp: "/assets/images/icon_stamp.webp",
  post: "/assets/images/icon_post.webp",
  revenue: "/assets/images/icon_revenue.webp",
  alumi: "/assets/images/alumi_service.webp",
  paper: "/assets/images/icon_paper.webp",
  atm_toyokawa: "/assets/images/icon_atm_toyokawa.webp",
  atm_shizugin: "/assets/images/icon_atm_shizugin.webp",
  atm_hamashin: "/assets/images/icon_atm_hamashin.webp",
  atm_seven: "/assets/images/icon_atm_seven.webp",
  atm_etc: "/assets/images/icon_atm_etc.webp",
  transition: "/assets/images/icon_transitionv2.webp",
  bus: "/assets/images/icon_bus.webp",
  taxi: "/assets/images/icon_taxi.webp",
  photo: "/assets/images/icon_photo.webp",
  copy: "/assets/images/icon_copy.webp",
  eat: "/assets/images/icon_eat.webp",
  pizza: "/assets/images/icon_pizza.webp",
  pizza_pan: "/assets/images/icon_pizza_pan.webp",
  kitchen: "/assets/images/icon_kitchen.webp",
  bakery: "/assets/images/icon_bakery.webp",
  amazonhub_locker: "/assets/images/icon_amazonhub_locker.webp",
  pudo_station: "/assets/images/icon_pudo_station.webp",
  pay: "/assets/images/icon_pay.webp",
  mobile_supermarket_hosoeinasa: "/assets/images/icon_mobile_supermarket_hosoeinasa.webp",
  mobile_supermarket_kasai: "/assets/images/icon_mobile_supermarket_kasai.webp",
  mobile_supermarket_kuno: "/assets/images/icon_mobile_supermarket_kuno.webp",
  mobile_supermarket_wagotomitsuka: "/assets/images/icon_mobile_supermarket_wagotomitsuka.webp",
  mobile_supermarket_mituke: "/assets/images/icon_mobile_supermarket_mituke.webp",
  mobile_supermarket_tenryu: "/assets/images/icon_mobile_supermarket_tenryu.webp",
  mobile_supermarket_kasai2: "/assets/images/icon_mobile_supermarket_kasai2.webp",
  mobile_supermarket_kasai3: "/assets/images/icon_mobile_supermarket_kasai3.webp",
  mobile_supermarket_kasai4: "/assets/images/icon_mobile_supermarket_kasai4.webp",
  mobile_supermarket_mikkabi: "/assets/images/icon_mobile_supermarket_mikkabi.gif",
  icon_supermarket_shinbashi: "/assets/images/icon_supermarket_shinbashi.webp",
  mobile_supermarket_tennou: "/assets/images/icon_mobile_supermarket_tennou.webp",
  mobile_supermarket_iwata: "/assets/images/icon_supermarket_iwata.webp",
  passto: "/assets/images/icon_passto.webp",
  food_tray_recycling: "/assets/images/icon_food_tray_recyling.png",
  paper_carton_recycling: "/assets/images/icon_paper_carton_recycling.png",
  plastic_bottle_recycling: "/assets/images/icon_plastic_bottole_recyling.png"
};
const SHOP_LIST = {
  chuoku: [
    {
      shopName: "\u5BCC\u585A\u5E97",
      globalName: "tomituka",
      shopLink: "/shop/chuoku/tomituka/",
      address: "\u3012432-8002\u3000\u6D5C\u677E\u5E02\u4E2D\u592E\u533A\u5BCC\u585A\u753A209-120",
      phone: "053-455-0505",
      time: "9:30\uFF5E21:00",
      position: {
        lat: "34.718722",
        lng: "137.708824"
      },
      detail: {
        title: '\u662D\u548C48\u5E74\u306B\u9060\u9244\u30B9\u30C8\u30A21\u53F7\u5E97\u3068\u3057\u3066\u30AA\u30FC\u30D7\u30F3\u3002<br>\u5730\u57DF\u306E\u7686\u69D8\u306B\u9577\u304F\u611B\u3055\u308C\u308B\u304A\u5E97\u3092\u76EE\u6307\u3057\u3066<br class="d-none-mobile">\u9BAE\u5EA6\u306B\u3053\u3060\u308F\u3063\u305F\u4ED5\u5165\u308C\u3084\u8A66\u98DF\u8CA9\u58F2\u306E\u3054\u63D0\u6848\u3092\u884C\u3063\u3066\u3044\u307E\u3059\u3002',
        image: [
          {
            alt: "",
            url: "/assets/images/photo01 (8).webp"
          },
          {
            alt: "",
            url: "/assets/images/photo02 (2).webp"
          },
          {
            alt: "",
            url: "/assets/images/photo03 (1).webp"
          }
        ],
        googleMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.4633409160524!2d137.7063884155326!3d34.71871348976026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601adee666a57953%3A0xca70319a1175c12e!2z6YGg6YmE44K544OI44KiIOWvjOWhmuW6lw!5e0!3m2!1sja!2sjp!4v1589425056749!5m2!1sja!2sjp",
        nearestBusStation: "\u300E\u6D5C\u677E\u8056\u661F\u9AD8\u6821\u300F\u4E0B\u8ECA\u3000\u5F92\u6B6910\u5206",
        numberParking: "118\u53F0",
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
          SHOP_SERVICES.pay
        ],
        tenant: [
          {
            name: "\u30B8\u30E3\u30D6\uFF08\u30AF\u30EA\u30FC\u30CB\u30F3\u30B0\uFF09",
            image: "/assets/images/bnr_h-hakuyosha.webp",
            detailTenantUrl: "http://h-hakuyosha.com/"
          },
          {
            name: "\u9060\u9244\u77F3\u6CB9\uFF08\u30AC\u30BD\u30EA\u30F3\u30B9\u30BF\u30F3\u30C9\uFF09",
            image: "/assets/images/bnr_entetsusekiyu.webp",
            detailTenantUrl: "http://www.entetsusekiyu.co.jp/"
          },
          {
            name: "\u304B\u308B\u3093\uFF08\u30D1\u30BD\u30B3\u30F3\u6559\u5BA4\uFF09",
            image: "/assets/images/bnr_karun.webp",
            detailTenantUrl: "https://karunchan.com/map/tomitsuka.html"
          },
          {
            name: "\u30D9\u30EB\u30DF\u30FC\u30E9\u30F3\u30C9\uFF08\u30A8\u30B9\u30C6\u30B5\u30ED\u30F3\uFF09",
            image: "/assets/images/bnr_bellemeland.webp",
            detailTenantUrl: "https://beauty.hotpepper.jp/kr/slnH000761929/"
          }
        ]
      }
    },
    {
      shopName: "\u5411\u5BBF\u5E97",
      globalName: "mukoujuku",
      shopLink: "/shop/chuoku/mukoujuku/",
      address: "\u3012430-0851\u3000\u6D5C\u677E\u5E02\u4E2D\u592E\u533A\u5411\u5BBF1-9-33",
      phone: "053-463-1091",
      time: "9:30\uFF5E21:00",
      position: {
        lat: "34.707199",
        lng: "137.75115"
      },
      detail: {
        title: "\u662D\u548C49\u5E74\u306B\u9060\u9244\u30B9\u30C8\u30A22\u53F7\u5E97\u3068\u3057\u3066\u30AA\u30FC\u30D7\u30F3\u3002<br>\u30B3\u30F3\u30D1\u30AF\u30C8\u306A\u58F2\u308A\u5834\u3067\u3001\u30B9\u30D4\u30FC\u30C7\u30A3\u30FC\u306A\u304A\u8CB7\u3044\u7269\u3092\u5B9F\u73FE\u3067\u304D\u308B<br class='d-none-mobile'>\u30D5\u30A1\u30DF\u30EA\u30FC\u304B\u3089\u4E00\u4EBA\u66AE\u3089\u3057\u307E\u3067\u5B09\u3057\u3044\u5411\u5BBF\u5E97\u3067\u3059\u3002",
        image: [
          {
            alt: "",
            url: "/assets/images/photo01 (12).webp"
          },
          {
            alt: "",
            url: "/assets/images/photo02 (6).webp"
          },
          {
            alt: "",
            url: "/assets/images/photo03 (4).webp"
          }
        ],
        googleMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.9213201361304!2d137.74896911553213!3d34.707164390379155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601adde27c1a5c4b%3A0xf45f5ff710b3ac28!2z6YGg6YmE44K544OI44KiIOWQkeWuv-W6lw!5e0!3m2!1sja!2sjp!4v1589425346226!5m2!1sja!2sjp",
        nearestBusStation: "\u300E\u5411\u5BBF\u516C\u4F1A\u5802\u300F\u4E0B\u8ECA\u3000\u5F92\u6B692\u5206 ",
        numberParking: "76\u53F0",
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
          SHOP_SERVICES.pay
        ],
        tenant: []
      }
    },
    {
      shopName: "\u897F\u30F6\u5D0E\u5E97",
      globalName: "nishigasaki",
      shopLink: "/shop/chuoku/nishigasaki/",
      address: "\u3012431-3115\u3000\u6D5C\u677E\u5E02\u4E2D\u592E\u533A\u897F\u30F6\u5D0E\u753A542-1",
      phone: "053-433-7811",
      phone_others: "\uFF08\u307B\u307B\u3048\u307F\u85AC\u5C40\u897F\u30F6\u5D0E\u5E97 053-443-8188\uFF09",
      time: "9:30\uFF5E21:00",
      time_others: "\uFF08\u307B\u307B\u3048\u307F\u85AC\u5C40\u897F\u30F6\u5D0E\u5E97<br>\u6708\uFF5E\u571F\u66DC\u65E5\u30009\uFF1A30\uFF5E18\uFF1A00\u3000\u65E5\u66DC\u65E5\u3000\u5B9A\u4F11\u65E5",
      position: {
        lat: "34.684687",
        lng: "137.699857"
      },
      detail: {
        title: "\u9060\u5DDE\u9244\u9053\u897F\u30F6\u5D0E\u99C5\u304B\u3089\u5317\u306B500m\u3002<br>\u7F8E\u5473\u3057\u3055\u3067\u81EA\u6162\u306E\u304A\u91CE\u83DC\u30FB\u304A\u9B5A\u30FB\u304A\u60E3\u83DC\u3084\u3001<br class='d-none-mobile'>\u4FBF\u5229\u306A\u51B7\u51CD\u98DF\u54C1\u304C\u8C4A\u5BCC\u306B\u305D\u308D\u3046\u3001<br class='d-none-mobile'>\u5F92\u6B69\u3067\u3082\u8ECA\u3067\u3082\u6BCE\u65E5\u6C17\u8EFD\u306B\u3054\u6765\u5E97\u3044\u305F\u3060\u3051\u308B\u897F\u30F6\u5D0E\u5E97\u3002<br>\u5E97\u5185\u306B\u306F\u8ABF\u5264\u85AC\u5C40\u300C\u307B\u307B\u3048\u307F\u85AC\u5C40\u300D\u304C\u4F75\u8A2D\u3002<br class='d-none-mobile'>\u304A\u8CB7\u7269\u3064\u3044\u3067\u306B\u85AC\u306E\u8ABF\u5264\u304C\u983C\u3081\u3066\u3068\u3066\u3082\u4FBF\u5229\u3002",
        image: [
          {
            alt: "",
            url: "/assets/images/photo01 (23).webp"
          },
          {
            alt: "",
            url: "/assets/images/photo02 (17).webp"
          },
          {
            alt: "",
            url: "/assets/images/photo03 (11).webp"
          }
        ],
        googleMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.0671544402244!2d137.77231831553385!3d34.779084686523206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601ae0103397348b%3A0x85223ec478674cd8!2z6YGg6YmE44K544OI44KiIOilv-ODtuW0juW6lw!5e0!3m2!1sja!2sus!4v1589427515724!5m2!1sja!2sus",
        nearestBusStation: "\u300E\u9060\u5DDE\u897F\u30F6\u5D0E\uFF08\u96FB\u8ECA\uFF09\u300F\u4E0B\u8ECA\u3000\u5F92\u6B693\u5206 ",
        numberParking: "99\u53F0",
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
          SHOP_SERVICES.pay
        ],
        tenant: [
          {
            name: "\u30B8\u30E3\u30D6\uFF08\u30AF\u30EA\u30FC\u30CB\u30F3\u30B0\uFF09",
            image: "/assets/images/bnr_h-hakuyosha.webp",
            detailTenantUrl: "http://h-hakuyosha.com/"
          },
          {
            name: "\u6CB3\u5408\u697D\u5668\u97F3\u697D\u6559\u5BA4",
            image: "/assets/images/bnr_kawai.webp",
            detailTenantUrl: "http://www.kawai.co.jp/school/music/"
          },
          {
            name: "\u55B6\u696D\u6642\u9593\uFF1A9:30\u301C18:00 \u65E5\u66DC\u5B9A\u4F11 <br> \u3069\u306E\u75C5\u9662\u306E\u51E6\u65B9\u7B8B\u3082\u53D7\u3051\u4ED8\u3051\u3066\u3044\u307E\u3059\uFF01",
            image: "/assets/images/bnr_hohoemi.webp",
            detailTenantUrl: ""
          }
        ],
        busImage: []
      }
    },
    {
      shopName: "\u7B20\u4E95\u5E97\u30FB\u30DE\u30C4\u30E2\u30C8\u30AD\u30E8\u30B7\u7B20\u4E95\u5E97",
      globalName: "kasai",
      shopLink: "/shop/chuoku/kasai/",
      address: "\u3012431-3107\u3000\u6D5C\u677E\u5E02\u4E2D\u592E\u533A\u7B20\u4E95\u753A1197-22",
      phone: "053-435-6611",
      phone_others: "\uFF08\u30DE\u30C4\u30E2\u30C8\u30AD\u30E8\u30B7\u7B20\u4E95\u5E97\uFF1A053-582-8810\uFF09",
      time: "9:30\uFF5E21:00",
      time_others: "\uFF08\u30DE\u30C4\u30E2\u30C8\u30AD\u30E8\u30B7\u7B20\u4E95\u5E97\u30009\uFF1A30\uFF5E21\uFF1A00 <br> \u8ABF\u5264\u85AC\u5C40\u30DE\u30C4\u30E2\u30C8\u30AD\u30E8\u30B7\u7B20\u4E95\u5E97<br>\u6708\uFF5E\u91D1\u66DC\u65E5\u30009\uFF1A30\uFF5E19\uFF1A00\u3000<br>\u571F\u66DC\u65E5\u30009\uFF1A30\uFF5E14\uFF1A00\u3000\u65E5\u30FB\u795D\u3000\u5B9A\u4F11\u65E5",
      position: {
        lat: "34.76953",
        lng: "137.791038"
      },
      detail: {
        title: "2021\u5E7411\u6708\u306B\u30EA\u30CB\u30E5\u30FC\u30A2\u30EB\u3044\u305F\u3057\u307E\u3057\u305F\u3002<br>\u751F\u9BAE\u7D20\u6750\u3092\u4F7F\u3063\u305F\u30E1\u30CB\u30E5\u30FC\u63D0\u6848\u3092\u3044\u305F\u3057\u3066\u304A\u308A\u307E\u3059\u3002<br>\u7F8E\u5473\u3057\u3055\u3001\u8ABF\u7406\u30DD\u30A4\u30F3\u30C8\u3092\u30B9\u30BF\u30C3\u30D5\u304C\u89AA\u5207\u30FB\u4E01\u5BE7\u306B\u304A\u4F1D\u3048\u3044\u305F\u3057\u307E\u3059\u3002<br>\u304A\u6C17\u8EFD\u306B\u304A\u58F0\u639B\u3051\u304F\u3060\u3055\u3044\u307E\u305B\u3002",
        image: [
          {
            alt: "",
            url: "/assets/images/photo01 (24).webp"
          },
          {
            alt: "",
            url: "/assets/images/photo02 (18).webp"
          },
          {
            alt: "",
            url: "/assets/images/photo03 (12).webp"
          }
        ],
        googleMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.4464486973543!2d137.78884891553355!3d34.76953458703555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601ae05b20a0334b%3A0x593f77308dab5b0c!2z6YGg6YmE44K544OI44KiIOesoOS6leW6lw!5e0!3m2!1sja!2sjp!4v1589428034254!5m2!1sja!2sjp",
        nearestBusStation: "\u300E\u897F\u30CE\u5C71\u300F\u4E0B\u8ECA\u3000\u5F92\u6B693\u5206",
        numberParking: "456\u53F0",
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
          SHOP_SERVICES.mobile_supermarket_kasai
        ],
        desTenant: "\u203B\u300C\u30B7\u30E7\u30C3\u30D4\u30F3\u30B0\u30BF\u30A6\u30F3\u30EA\u30D6\u30ED\u30B9\u7B20\u4E95\u300D\u5185\uFF1A",
        tenant: [
          {
            name: "\u30DE\u30C4\u30E2\u30C8\u30AD\u30E8\u30B7\u7B20\u4E95\u5E97",
            image: "/assets/images/bnr_matsukiyo.webp",
            detailTenantUrl: "http://www.matsukiyo.co.jp/"
          },
          {
            name: "\u7389\u83EF\u5802\uFF08\u83D3\u5B50\uFF09",
            image: "/assets/images/bnr_gyokkado.webp",
            detailTenantUrl: "http://www.gyokkado.co.jp/"
          },
          {
            name: "\u30B8\u30E3\u30D6\uFF08\u30AF\u30EA\u30FC\u30CB\u30F3\u30B0\uFF09",
            image: "/assets/images/bnr_h-hakuyosha.webp",
            detailTenantUrl: "http://h-hakuyosha.com/"
          },
          {
            name: "\u30C7\u30E5\u30FC\u30DD\u30A4\u30F3\u30C8\uFF08\u30D8\u30A2\u30B5\u30ED\u30F3\uFF09",
            image: "/assets/images/bnr_dewpoint.webp",
            detailTenantUrl: "http://www.dewpoint.jp/"
          },
          {
            name: "\u9060\u9244\u30B9\u30C8\u30A2\u7B20\u4E95\u5E97 \u30A4\u30D9\u30F3\u30C8\u30B9\u30DA\u30FC\u30B9\u51FA\u5E97\u8005 \u52DF\u96C6\u6848\u5185",
            image: "/assets/images/bnr_kasai_event.webp",
            detailTenantUrl: "http://entstore-event.com/kasai/index.html"
          },
          {
            name: "BLUE SKY LAUNDRY\uFF08\u30B3\u30A4\u30F3\u30E9\u30F3\u30C9\u30EA\u30FC\uFF09",
            image: "/assets/images/bnr_blueskylaundry.webp",
            detailTenantUrl: "https://www.bsl-web.co.jp/tokaiArea/shizuoka/e42ea296c03d066c5d03c3029dc46788e40d4a44.html"
          },
          {
            name: "Pizza Hut\uFF08\u5B85\u914D\u30D4\u30B6\uFF09",
            image: "/assets/images/bnr_pizzahut.webp",
            detailTenantUrl: "https://www.pizzahut.jp/"
          },
          {
            name: "\u304B\u308B\u3093\uFF08\u30D1\u30BD\u30B3\u30F3\u6559\u5BA4\uFF09",
            image: "/assets/images/bnr_karun.webp",
            detailTenantUrl: "https://karunchan.com/map/kasai.html"
          },
          {
            name: "\u30C0\u30A4\u30BD\uFF0D\uFF08100\u5186\u5747\u4E00\uFF09",
            image: null,
            detailTenantUrl: "http://www.daiso-sangyo.co.jp/"
          },
          {
            name: "\u82B1\u798F\uFF08\u5712\u82B8\uFF09",
            image: null,
            detailTenantUrl: "http://www.hana-fuku.net/"
          },
          {
            name: "\u30A4\u30B1\u30C0\u30E4\uFF08\u8863\u6599\uFF09",
            image: null,
            detailTenantUrl: "http://www.ikedaya-1907.co.jp/"
          },
          {
            name: " \u304B\u3055\u3044\u63A5\u9AA8\u9662",
            image: null,
            detailTenantUrl: "http://www.kasai-sekkotsuin.com/"
          },
          {
            name: "\u4E94\u5473\u516B\u73CD\uFF08\u98F2\u98DF\uFF09",
            image: null,
            detailTenantUrl: "http://www.gomihattin.co.jp/"
          },
          {
            name: "\u30AB\u30EC\u30FC\u30CF\u30A6\u30B9coco\u58F1\u756A\u5C4B",
            image: null,
            detailTenantUrl: "http://www.ichibanya.co.jp/index.html"
          },
          {
            name: " \u9759\u5CA1\u9280\u884C",
            image: null,
            detailTenantUrl: "http://www.shizuokabank.co.jp/personal/loan/mycar/index.html?wapr=54d9cc91"
          },
          {
            name: " \u8CB7\u53D6\u5C02\u9580\u30EA\u30B5\u30A4\u30AF\u30EB\u30DE\u30FC\u30C8\uFF08\u8CB7\u53D6\u30FB\u30EA\u30E6\u30FC\u30B9\uFF09",
            image: null,
            detailTenantUrl: "https://www.recyclemart.jp/shop/hamamatsukasai/"
          },
          {
            name: "\u3053\u3081\u3084",
            image: null,
            detailTenantUrl: ""
          },
          {
            name: "\u30D5\u30A1\u30C7\u30A3\u30FC\uFF08\u30D5\u30A3\u30C3\u30C8\u30CD\u30B9\uFF09",
            image: null,
            detailTenantUrl: ""
          },
          {
            name: "\u30B2\u30FC\u30E0\u3059\u307D\u3063\u3068\uFF08\u30B2\u30FC\u30E0\u30B3\u30FC\u30CA\u30FC\u30FB\u30C8\u30FC\u30E6\u30FC\uFF09",
            image: "/assets/images/bnr_gamespot.webp",
            detailTenantUrl: "https://to-yu-2221.com/"
          },
          {
            name: "\u697D\u5929\u30E2\u30D0\u30A4\u30EB \u30EA\u30D6\u30ED\u30B9\u7B20\u4E95\u5E97",
            image: "/assets/images/rakuten_mobile.jpg",
            detailTenantUrl: "https://network.mobile.rakuten.co.jp/shop-detail/1214/"
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
            name: "YUMEYA\uFF08\u5B9D\u304F\u3058\uFF09",
            image: null,
            detailTenantUrl: ""
          }
        ],
        busImage: []
      }
    },
    {
      shopName: "\u9D28\u6C5F\u5E97",
      globalName: "kamoe",
      shopLink: "/shop/chuoku/kamoe/",
      address: "\u3012432-8023\u3000\u6D5C\u677E\u5E02\u4E2D\u592E\u533A\u9D28\u6C5F2-43-1",
      phone: "053-456-0753",
      time: "9:30\uFF5E20:00",
      position: {
        lat: "34.702399",
        lng: "137.710031"
      },
      detail: {
        title: "\u304A\u5BA2\u69D8\u306E\u6BCE\u65E5\u306E\u98DF\u5353\u306B \u300C\u5B89\u5168\u30FB\u5B89\u5FC3\u306A\u5546\u54C1\u300D\u300C\u65B0\u9BAE\u3067\u7F8E\u5473\u3057\u3044\u5546\u54C1\u300D\u3092\u304A\u5024\u6253\u3061\u4FA1\u683C\u3067\u63D0\u4F9B\u3044\u305F\u3057\u307E\u3059\u3002",
        image: [
          {
            alt: "",
            url: "/assets/images/photo01 (9).webp"
          },
          // {
          //   "alt": "",
          //   "url": "/assets/images/photo02 (3).webp"
          // },
          {
            alt: "",
            url: "/assets/images/photo03 (2).webp"
          }
        ],
        googleMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.0183387404572!2d137.70928031553223!3d34.70471739051018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601ade93d0f15625%3A0x1086520c91cd442e!2z6YGg6YmE44K544OI44KiIOOCpuOCp-ODq-m0qOaxn-W6lw!5e0!3m2!1sja!2sjp!4v1589425155128!5m2!1sja!2sjp",
        nearestBusStation: "\u300E\u4FDD\u5065\u6240\u300F\u4E0B\u8ECA\u3000\u5F92\u6B693\u5206 ",
        numberParking: "59\u53F0",
        services: [
          SHOP_SERVICES.post,
          SHOP_SERVICES.food_tray_recycling,
          SHOP_SERVICES.paper_carton_recycling,
          SHOP_SERVICES.plastic_bottle_recycling,
          SHOP_SERVICES.photo
        ],
        tenant: []
      }
    },
    {
      shopName: "\u30D5\u30FC\u30C9\u30EF\u30F3\u4F50\u9CF4\u53F0\u5E97",
      globalName: "foodone_sanarudai",
      shopLink: "/shop/chuoku/foodone_sanarudai/",
      address: "\u3012432-8021\u3000\u6D5C\u677E\u5E02\u4E2D\u592E\u533A\u4F50\u9CF4\u53F04-16-10",
      phone: "053-448-9251",
      time: "9:30\uFF5E21:00",
      position: {
        lat: "34.708621",
        lng: "137.699425"
      },
      detail: {
        title: "\u300C\u30AA\u30FC\u30EB\u30A4\u30BA\u30D5\u30EC\u30C3\u30B7\u30E5\u300D\u3092\u30AD\u30E3\u30C3\u30C1\u30D5\u30EC\u30FC\u30BA\u306B\u3001<br class='d-none-mobile'>\u65B0\u9BAE\u3067\u9AD8\u8CEA\u306A\u5546\u54C1\u3092\u304A\u5BA2\u69D8\u306B\u63D0\u4F9B\u3044\u305F\u3057\u307E\u3059\u3002",
        image: [
          {
            alt: "",
            url: "/assets/images/photo01 (10).webp"
          },
          {
            alt: "",
            url: "/assets/images/photo02 (4).webp"
          },
          {
            alt: "",
            url: "/assets/images/photo03 (3).webp"
          }
        ],
        googleMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.8657864847914!2d137.69743191553226!3d34.708564990304126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601adec406bc93a5%3A0x4b5714ab83b362ae!2z6YGg6YmE44K544OI44KiIEZPT0QgT05FIOS9kOmztOWPsOW6lw!5e0!3m2!1sja!2sjp!4v1589425210172!5m2!1sja!2sjp",
        nearestBusStation: "\u300E\u4F50\u9CF4\u53F0\u56E3\u5730\u300F\u4E0B\u8ECA\u3000\u5F92\u6B690\u5206 ",
        numberParking: "129\u53F0",
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
          SHOP_SERVICES.amazonhub_locker
        ],
        tenant: [
          {
            name: "\u30AF\u30EA\u30FC\u30CB\u30F3\u30B0\u306E\u30A8\u30D6\u30EA",
            image: "/assets/images/bnr_cleaning-every.webp",
            detailTenantUrl: "http://www.cleaning-every.jp/"
          }
        ]
      }
    },
    {
      shopName: "\u7ACB\u91CE\u5E97\u30FB\u30DE\u30C4\u30E2\u30C8\u30AD\u30E8\u30B7\u7ACB\u91CE\u5E97",
      globalName: "tateno",
      shopLink: "/shop/chuoku/tateno/",
      address: "\u3012430-0827\u3000\u6D5C\u677E\u5E02\u4E2D\u592E\u533A\u7ACB\u91CE\u753A543",
      phone: "053-426-1185",
      phone_others: "\uFF08\u30DE\u30C4\u30E2\u30C8\u30AD\u30E8\u30B7\u7ACB\u91CE\u5E97\uFF1A053-427-1910\uFF09",
      time: "9:30\uFF5E20:00",
      time_others: "\uFF08\u30DE\u30C4\u30E2\u30C8\u30AD\u30E8\u30B7\u7ACB\u91CE\u5E97\u30009\uFF1A30\uFF5E20\uFF1A00\uFF09",
      position: {
        lat: "34.681959",
        lng: "137.771492"
      },
      detail: {
        title: "\u660E\u308B\u304F\u3066\u3086\u3063\u305F\u308A\u901A\u8DEF\u306E\u304A\u8CB7\u3044\u7269\u3057\u3084\u3059\u3044\u5E97\u5185\u306B<br class='d-none-mobile'>\u65B0\u9BAE\u306A\u98DF\u54C1\u3092\u305F\u304F\u3055\u3093\u3054\u7528\u610F\u3057\u3066\u304A\u5F85\u3061\u3057\u3066\u3044\u307E\u3059\u3002<br>\u6BCE\u9031\u6708\u30FB\u6C34\u30FB\u91D1\u306B\u3001\u9060\u5DDE\u6D5C\u21D4\u7ACB\u91CE\u5E97\u3092\u884C\u304D\u6765\u3059\u308B\u7121\u6599\u9001\u8FCE\u30D0\u30B9\u3092\u3054\u7528\u610F\u3057\u3066\u3044\u307E\u3059\u3002",
        image: [
          {
            alt: "",
            url: "/assets/images/photo01 (20).webp"
          },
          {
            alt: "",
            url: "/assets/images/photo02 (14).webp"
          },
          {
            alt: "",
            url: "/assets/images/photo03 (8).webp"
          }
        ],
        googleMapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6561.84075275642!2d137.771492!3d34.681959!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd2e9c7d2e0182d8b!2z6YGg6YmE44K544OI44KiIOeri-mHjuW6lw!5e0!3m2!1sja!2sjp!4v1589427164725!5m2!1sja!2sjp",
        nearestBusStation: "\u300E\u56DB\u672C\u677E\u300F\u4E0B\u8ECA\u3000\u5F92\u6B696\u5206 ",
        numberParking: "102\u53F0",
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
          SHOP_SERVICES.pay
        ],
        tenant: [
          {
            name: "\u30DE\u30C4\u30E2\u30C8\u30AD\u30E8\u30B7\u7ACB\u91CE\u5E97",
            image: "/assets/images/bnr_matsukiyo.webp",
            detailTenantUrl: "http://www.matsukiyo.co.jp/"
          },
          {
            name: "\u30B8\u30E3\u30D6\uFF08\u30AF\u30EA\u30FC\u30CB\u30F3\u30B0\uFF09",
            image: "/assets/images/bnr_h-hakuyosha.webp",
            detailTenantUrl: "http://h-hakuyosha.com/"
          },
          {
            name: "BLUE SKY LAUNDRY\uFF08\u30B3\u30A4\u30F3\u30E9\u30F3\u30C9\u30EA\u30FC\uFF09",
            image: "/assets/images/bnr_blueskylaundry.webp",
            detailTenantUrl: "https://www.bsl-web.co.jp/tokaiArea/shizuoka/e26adf9352e9b1763c73fe41fe0e9f550108fa67.html"
          }
        ],
        busImage: [
          {
            alt: "\u7121\u6599\u9001\u8FCE\u30D0\u30B9\u5B9F\u65BD\u4E2D",
            url: "/assets/images/bnr_bus_tateno.webp",
            to: "/assets/pdf/bus_tateno.pdf"
          }
        ]
      }
    },
    {
      shopName: "\u521D\u751F\u5E97",
      globalName: "hatsuoi",
      shopLink: "/shop/chuoku/hatsuoi/",
      address: "\u3012433-8112\u3000\u6D5C\u677E\u5E02\u4E2D\u592E\u533A\u521D\u751F\u753A\uFF11\uFF12\uFF11\uFF12",
      phone: "053-439-5011",
      time: "9:30\uFF5E21:00",
      position: {
        lat: "34.771958",
        lng: "137.719824"
      },
      detail: {
        title: "\u5730\u5143\u8FB2\u5BB6\u306E\u65B9\u304C\u611B\u60C5\u8FBC\u3081\u3066\u80B2\u3066\u305F\uFF62\u5730\u5834\u91CE\u83DC\u30B3\u30FC\u30CA\u30FC\uFF63\u3092\u306F\u3058\u3081\u3001<br class='d-none-mobile'>\u5730\u5143\u306E\u304A\u3044\u3057\u3044\u98DF\u54C1\u3082\u591A\u6570\u53D6\u308A\u63C3\u3048\u307E\u3057\u305F\u3002<br>\u3061\u3087\u3063\u3068\u3057\u305F\u30E9\u30F3\u30C1\u306B\u3082\u4F7F\u3048\u308B\u30A4\u30FC\u30C8\u30A4\u30F3\u30B3\u30FC\u30CA\u30FC\u3082\u9B45\u529B\u3067\u3059\u3002",
        image: [
          {
            alt: "",
            url: "/assets/images/photo01 (28).webp"
          },
          {
            alt: "",
            url: "/assets/images/photo02 (22).webp"
          },
          {
            alt: "",
            url: "/assets/images/photo03 (15).webp"
          }
        ],
        googleMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.3489817727605!2d137.7176564155335!3d34.77198888690403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601b2086af1b8a1b%3A0xb02a5b80bf5c79e7!2z6YGg6YmE44K544OI44KiIOWIneeUn-W6lw!5e0!3m2!1sja!2sjp!4v1589428312409!5m2!1sja!2sjp",
        nearestBusStation: "\u300E\u66F3\u99AC\u91CE\u300F\u4E0B\u8ECA\u3000\u5F92\u6B691\u5206",
        numberParking: "107\u53F0",
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
          SHOP_SERVICES.pay
        ],
        tenant: [
          {
            name: "\u30B8\u30E3\u30D6\uFF08\u30AF\u30EA\u30FC\u30CB\u30F3\u30B0\uFF09",
            image: "/assets/images/bnr_h-hakuyosha.webp",
            detailTenantUrl: "http://h-hakuyosha.com/"
          }
        ],
        busImage: []
      }
    },
    {
      shopName: "\u5927\u4EBA\u898B\u5E97",
      globalName: "oohitomi",
      shopLink: "/shop/chuoku/oohitomi/",
      address: "\u3012431-1112\u3000\u6D5C\u677E\u5E02\u4E2D\u592E\u533A\u5927\u4EBA\u898B\u753A3367-1",
      phone: "053-485-7311",
      time: "9:30\uFF5E20:30",
      position: {
        lat: "34.732286",
        lng: "137.658528"
      },
      detail: {
        title: "\u6D5C\u677E\u74B0\u72B6\u7DDA\u6CBF\u3044\u306B\u4F4D\u7F6E\u3059\u308B\u5927\u4EBA\u898B\u5E97\u306F\u3001<br class='d-none-mobile'>\u5171\u50CD\u304D\u4E16\u5E2F\u3084\u30B7\u30CB\u30A2\u4E16\u4EE3\u3067\u9700\u8981\u304C\u9AD8\u307E\u308B\u304A\u60E3\u83DC\u3084\u30AB\u30C3\u30C8\u91CE\u83DC\u3001\u5473\u4ED8\u3051\u8089\u3001\u51B7\u51CD\u98DF\u54C1\u306A\u3069\u306E\u7C21\u4FBF\u98DF\u54C1\u304C\u5145\u5B9F\u3057\u3066\u3044\u307E\u3059\u3002<br>\u4EBA\u6C17\u306E\u6D5C\u677E\u9903\u5B50\u30B3\u30FC\u30CA\u30FC\u3082\u305C\u3072\u3054\u5229\u7528\u4E0B\u3055\u3044\u307E\u305B\u3002<br>\u660E\u308B\u3044\u7B11\u9854\u306E\u30B9\u30BF\u30C3\u30D5\u304C\u304A\u5F85\u3061\u3057\u3066\u304A\u308A\u307E\u3059\uFF01\uFF01",
        image: [
          {
            alt: "",
            url: "/assets/images/shop/chuoku/oohitomi/photo01_lastest.webp"
          },
          {
            alt: "",
            url: "/assets/images/shop/chuoku/oohitomi/photo02_lastest.webp"
          },
          {
            alt: "",
            url: "/assets/images/shop/chuoku/oohitomi/photo03_lastest.webp"
          }
        ],
        googleMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.9233705169236!2d137.65608221553282!3d34.73232588903089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601ad89a64e417bd%3A0x2b50271494a174ca!2z6YGg6YmE44K544OI44KiIOWkp-S6uuimi-W6lw!5e0!3m2!1sja!2sjp!4v1589425625438!5m2!1sja!2sjp",
        nearestBusStation: " \u300E\u6E56\u6771\u9AD8\u6821\u300F\u4E0B\u8ECA\u3000\u5F92\u6B692\u5206 ",
        numberParking: "304\u53F0",
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
          SHOP_SERVICES.passto
        ],
        tenant: [],
        busImage: [
          {
            alt: "\u7121\u6599\u9001\u8FCE\u30D0\u30B9\u5B9F\u65BD\u4E2D \u3086\u3046\u304A\u304A\u3072\u3068\u307F\u884C\u304D",
            url: "/assets/images/bnr_bus_oohitomi_yu.webp",
            to: "/assets/pdf/bus_oohitomi_yuoohitomi.pdf"
          },
          {
            alt: "\u7121\u6599\u9001\u8FCE\u30D0\u30B9\u5B9F\u65BD\u4E2D\u3000\u77B3\u30F6\u4E18\u884C\u304D",
            url: "/assets/images/bnr_bus_oohitomi_hi.webp",
            to: "/assets/pdf/bus_oohitomi_hitomigaoka.pdf"
          }
        ]
      }
    },
    {
      shopName: "\u5929\u738B\u5E97",
      globalName: "tennou",
      shopLink: "/shop/chuoku/tennou/",
      address: "\u3012435-0052\u3000\u6D5C\u677E\u5E02\u4E2D\u592E\u533A\u5929\u738B\u753A1982-1",
      phone: "053-466-0311",
      time: "9:30\uFF5E21:00",
      position: {
        lat: "34.685712",
        lng: "137.668437"
      },
      detail: {
        title: "\u300C\u30D4\u30FC\u30EF\u30F3\u30D7\u30E9\u30B6\u5929\u738B\u300D\u5185\u306B\u5E73\u62105\u5E74\u30AA\u30FC\u30D7\u30F3\u3002<br>\u30C9\u30FC\u30E0\u578B\u306E\u9AD8\u3044\u5C4B\u6839\u304C\u76EE\u5370\u3002<br>\u65B0\u9BAE\u306A\u3001\u304A\u91CE\u83DC\u3001\u679C\u7269\u3001\u304A\u9B5A\u3001\u304A\u8089\u3084\u3001\u51FA\u6765\u7ACB\u3066\u306E\u304A\u60E3\u83DC\u304C\u76DB\u308A\u6CA2\u5C71\u3067\u52E2\u305E\u308D\u3044\uFF01",
        image: [
          {
            alt: "",
            url: "/assets/images/photo01 (25).webp"
          },
          {
            alt: "",
            url: "/assets/images/photo02 (19).webp"
          },
          {
            alt: "",
            url: "/assets/images/photo03 (13).webp"
          }
        ],
        googleMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.810588211553!2d137.7615352155329!3d34.735168488878514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601ae09e1cfe28a7%3A0xeb75946cf5317c55!2z6YGg6YmE44K544OI44KiIOWkqeeOi-W6lw!5e0!3m2!1sja!2sus!4v1589428116312!5m2!1sja!2sus",
        nearestBusStation: "\u300E\u9060\u9244\u30B9\u30C8\u30A2\u5929\u738B\u5E97\u300F\u4E0B\u8ECA\u3000\u5F92\u6B690\u5206 ",
        numberParking: "424\u53F0",
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
          SHOP_SERVICES.mobile_supermarket_tennou
        ],
        tenant: [
          {
            name: "\n                        \u30D9\u30EB\u30DF\u30FC\u30E9\u30F3\u30C9(\u30A8\u30B9\u30C6\u30B5\u30ED\u30F3)\n                    ",
            image: "/assets/images/bnr_bellemeland.webp",
            detailTenantUrl: "https://belleme-land.jp/"
          },
          {
            name: "\u30A2\u30B5\u30A4\u30FC\u5DE5\u623F\uFF08\u30A2\u30B5\u30A4\u30FC\u5C02\u9580\u5E97\uFF09",
            image: "/assets/images/bnr_asai.webp",
            detailTenantUrl: "https://www.instagram.com/acaibowl_hamamatsu/?igsh=dmYxY3JubHU5bjI4%2F#"
          },
          {
            name: "\u30D9\u30F3\u30C6\u30A3\u30FB\u30C7\u30B3\uFF08\u7F8E\u5BB9\u5BA4\uFF09",
            image: null,
            detailTenantUrl: ""
          }
        ],
        busImage: []
      }
    },
    {
      shopName: "\u7BE0\u539F\u5E97",
      globalName: "shinohara",
      shopLink: "/shop/chuoku/shinohara/",
      address: "\u3012431-0201\u3000\u6D5C\u677E\u5E02\u4E2D\u592E\u533A\u7BE0\u539F\u753A14000",
      phone: "053-440-4111",
      time: "9:30\uFF5E20:00",
      position: {
        lat: "34.685725",
        lng: "137.668448"
      },
      detail: {
        title: "\u300C\u767D\u7389\u306D\u304E\u300D\u306E\u4E00\u5927\u7523\u5730\u3001\u6D5C\u677E\u5E02\u5357\u897F\u306B\u4F4D\u7F6E\u3059\u308B\u7BE0\u539F\u5730\u533A\u5185\u306E\u30B9\u30C8\u30A2\u3002<br>\u304A\u5BA2\u69D8\u306E\u5B89\u5FC3\u3092\u5B88\u308B\u300C\u9BAE\u5EA6\u30D1\u30C8\u30ED\u30FC\u30EB\u300D\u3084\u3001\u5730\u5143\u306E\u65B9\u306B\u697D\u3057\u3093\u3067\u3044\u305F\u3060\u3051\u308B<br class='d-none-mobile'>\u30A4\u30D9\u30F3\u30C8\u3092\u3054\u7528\u610F\u3057\u3066\u3001\u30B9\u30BF\u30C3\u30D5\u4E00\u5802\u304A\u5F85\u3061\u3057\u3066\u304A\u308A\u307E\u3059\u3002",
        image: [
          {
            alt: "",
            url: "/assets/images/photo01 (19).webp"
          },
          {
            alt: "",
            url: "/assets/images/photo02 (13).webp"
          },
          {
            alt: "",
            url: "/assets/images/photo03 (7).webp"
          }
        ],
        googleMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.7742761724735!2d137.66629191553193!3d34.68564599153142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601ad943dbb1825b%3A0x8315379881cee0d!2z6YGg6YmE44K544OI44KiIOevoOWOn-W6lw!5e0!3m2!1sja!2sjp!4v1589425843189!5m2!1sja!2sjp",
        nearestBusStation: "\u300E\u7BE0\u539F\u6771\u300F\u4E0B\u8ECA\u3000\u5F92\u6B691\u5206 ",
        numberParking: "121\u53F0",
        services: [
          SHOP_SERVICES.food_tray_recycling,
          SHOP_SERVICES.paper_carton_recycling,
          SHOP_SERVICES.plastic_bottle_recycling,
          SHOP_SERVICES.atm_shizugin,
          SHOP_SERVICES.atm_hamashin,
          SHOP_SERVICES.photo,
          SHOP_SERVICES.bakery
        ],
        tenant: [
          {
            name: "\u306F\u306A\u5DE5\u623F\u304D\u305F\u306E\uFF08\u82B1\u5C4B\uFF09",
            image: null,
            detailTenantUrl: ""
          },
          {
            name: "\u30AD\u30E3\u30F3\u2605\u30C9\u30A5\uFF08100\u5186\u5747\u4E00\uFF09",
            image: null,
            detailTenantUrl: ""
          },
          {
            name: "\u30DE\u30FC\u30D6\u30EB\u30AD\u30E3\u30F3\u30C7\u30A3\uFF08\u30B3\u30A4\u30F3\u30E9\u30F3\u30C9\u30EA\u30FC\uFF09",
            image: null,
            detailTenantUrl: ""
          }
        ],
        busImage: []
      }
    },
    {
      shopName: "\u65B0\u6A4B\u5E97\u30FB\u30DE\u30C4\u30E2\u30C8\u30AD\u30E8\u30B7\u65B0\u6A4B\u5E97",
      globalName: "nippashi",
      shopLink: "/shop/chuoku/nippashi/",
      address: "\u3012432-8058\u3000\u6D5C\u677E\u5E02\u4E2D\u592E\u533A\u65B0\u6A4B\u753A662-1",
      phone: "053-449-4111",
      phone_others: "\uFF08\u30DE\u30C4\u30E2\u30C8\u30AD\u30E8\u30B7\u65B0\u6A4B\u5E97:053-415-1900\uFF09",
      time: "9:30\uFF5E21:00",
      time_others: "\uFF08\u30DE\u30C4\u30E2\u30C8\u30AD\u30E8\u30B7\u65B0\u6A4B\u5E97\u30009\uFF1A30\uFF5E21\uFF1A00\uFF09",
      position: {
        lat: "34.684668",
        lng: "137.69986"
      },
      detail: {
        title: "\u5E73\u621029\u5E74\u79FB\u8EE2\u65B0\u7BC9\u3057\u3066\u30AA\u30FC\u30D7\u30F3<br>\u300C\u30DE\u30C4\u30E2\u30C8\u30AD\u30E8\u30B7\u300D\u3092\u4F75\u8A2D\u3057\u3001\u98DF\u54C1\u3068\u4E00\u7DD2\u306B\u65E5\u7528\u96D1\u8CA8\u3082<br class='d-none-mobile'>1\u7B87\u6240\u3067\u3059\u3080\u5229\u4FBF\u6027\u304C\u9B45\u529B\u3067\u3059\u3002",
        image: [
          {
            alt: "",
            url: "/assets/images/photo01 (21).webp"
          },
          {
            alt: "",
            url: "/assets/images/photo02 (15).webp"
          },
          {
            alt: "",
            url: "/assets/images/photo03 (9).webp"
          }
        ],
        googleMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.8445265868763!2d137.69804411553199!3d34.68387319162639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601addc534b075a3%3A0x754e7dd9763b8030!2z6YGg6YmE44K544OI44KiIOaWsOapi-W6lw!5e0!3m2!1sja!2sjp!4v1589427267263!5m2!1sja!2sjp",
        nearestBusStation: "\u300E\u65B0\u7530\u897F\u300F\u4E0B\u8ECA\u3000\u5F92\u6B694\u5206 ",
        numberParking: "146\u53F0",
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
          SHOP_SERVICES.passto
        ],
        tenant: [
          {
            name: "\u30DE\u30C4\u30E2\u30C8\u30AD\u30E8\u30B7\u65B0\u6A4B\u5E97",
            image: "/assets/images/bnr_matsukiyo.webp",
            detailTenantUrl: "http://www.matsukiyo.co.jp/"
          },
          {
            name: "\u30B8\u30E3\u30D6\uFF08\u30AF\u30EA\u30FC\u30CB\u30F3\u30B0\uFF09",
            image: "/assets/images/bnr_h-hakuyosha.webp",
            detailTenantUrl: "http://h-hakuyosha.com/"
          },
          {
            name: "\u8CB7\u53D6\u5927\u5409(\u8CB7\u53D6\u30B5\u30FC\u30D3\u30B9)",
            image: "/assets/images/daikichi.webp",
            detailTenantUrl: "https://www.kaitori-daikichi.jp/store/es-nippashi/"
          }
        ],
        busImage: []
      }
    },
    {
      shopName: "\u5927\u5E73\u53F0\u5E97",
      globalName: "oohiradai",
      shopLink: "/shop/chuoku/oohiradai/",
      address: "\u3012432-8068\u3000\u6D5C\u677E\u5E02\u4E2D\u592E\u533A\u5927\u5E73\u53F03-20-1",
      phone: "053-484-0611",
      time: "9:30\uFF5E21:00",
      position: {
        lat: "34.712336",
        lng: "137.678694"
      },
      detail: {
        title: "\u4F50\u9CF4\u6E56\u897F\u5CB8\u306E\u5927\u5E73\u53F0\u4F4F\u5B85\u5730\u5185\u306B\u5E73\u621026\u5E74\u30EA\u30D5\u30EC\u30C3\u30B7\u30E5\u30AA\u30FC\u30D7\u30F3\u3002<br>1\u4EBA\u66AE\u3089\u3057\u304B\u3089\u30D5\u30A1\u30DF\u30EA\u30FC\u306E\u7686\u69D8\u306B\u5BFE\u5FDC\u3059\u308B\u3001\u5C11\u91CF\u30FB\u5C0F\u5206\u3051\u8CA9\u58F2\u3082\u4EBA\u6C17\u3002<br>\u5F53\u5E97\u81EA\u6162\u306E\u300C\u304A\u3055\u304B\u306A\u60E3\u83DC\u300D\u3082\u304A\u8A66\u3057\u304F\u3060\u3055\u3044\u3002",
        image: [
          {
            alt: "",
            url: "/assets/images/photo01 (18).webp"
          },
          {
            alt: "",
            url: "/assets/images/photo02 (12).webp"
          }
        ],
        googleMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.708897097956!2d137.67650501553254!3d34.712521590092074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601ad929c27b0833%3A0x84f3a73979a06828!2z6YGg6YmE44K544OI44KiIOWkp-W5s-WPsOW6lw!5e0!3m2!1sja!2sjp!4v1589425788614!5m2!1sja!2sjp",
        nearestBusStation: "\u300E\u9060\u9244\u30B9\u30C8\u30A2\u5927\u5E73\u53F0\u5E97\u300F\u4E0B\u8ECA\u3000\u5F92\u6B690\u5206 ",
        numberParking: "83\u53F0",
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
          SHOP_SERVICES.pay
        ],
        tenant: [
          {
            name: "\u30B8\u30E3\u30D6\uFF08\u30AF\u30EA\u30FC\u30CB\u30F3\u30B0\uFF09",
            image: "/assets/images/bnr_h-hakuyosha.webp",
            detailTenantUrl: "http://h-hakuyosha.com/"
          },
          {
            name: "\u30EB\u30A4\u30FB\u30AE\u30E3\u30EC\u30C3\u30C8\uFF08\u7F8E\u5BB9\u9662\uFF09",
            image: null,
            detailTenantUrl: ""
          }
        ],
        busImage: []
      }
    },
    {
      shopName: "\u685C\u53F0\u5E97",
      globalName: "sakuradai",
      shopLink: "/shop/chuoku/sakuradai/",
      address: "\u3012431-1104\u3000\u6D5C\u677E\u5E02\u4E2D\u592E\u533A\u685C\u53F03-28-1",
      phone: "053-414-1711",
      time: "9:30\uFF5E20:30",
      position: {
        lat: "34.771025",
        lng: "137.670293"
      },
      detail: {
        title: `2026\u5E741\u6708\u306B\u88C5\u3044\u3082\u65B0\u305F\u306B\u3001\u30EA\u30CB\u30E5\u30FC\u30A2\u30EB\u30AA\u30FC\u30D7\u30F3\uFF01<br>\u5730\u5143\u306E\u91CE\u83DC\u3084\u9BAE\u5EA6\u629C\u7FA4\u306A\u304A\u9B5A\u3001\u5E45\u5E83\u3044\u7528\u9014\u306E\u304A\u8089\u306E\u5927\u5BB9\u91CF\u30D1\u30C3\u30AF\u3001\u304A\u3044\u3057\u3044\u304A\u60E3\u83DC\u306A\u3069<br>\u304A\u3059\u3059\u3081\u5546\u54C1\u76DB\u308A\u3060\u304F\u3055\u3093\uFF01\u30B9\u30A4\u30FC\u30C4\u3084\u30A2\u30A4\u30B9\u30FB\u51B7\u51CD\u98DF\u54C1\u306E\u54C1\u63C3\u3048\u3082\u5FC5\u898B\u3067\u3059\u3002`,
        image: [
          {
            alt: "",
            url: "/assets/images/sakuradai-left.jpg"
          },
          {
            alt: "",
            url: "/assets/images/sakuradai-center.jpg"
          },
          {
            alt: "",
            url: "/assets/images/sakuradai-right.jpg"
          }
        ],
        googleMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.386463347951!2d137.6686407155334!3d34.771045086954544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601b273b9d4c3de7%3A0x3d538882fac32578!2z6YGg6YmE44K544OI44KiIOahnOWPsOW6lw!5e0!3m2!1sja!2sjp!4v1589425680187!5m2!1sja!2sjp",
        nearestBusStation: "\u300E\u685C\u53F0\u30B7\u30E7\u30C3\u30D4\u30F3\u30B0\u30BB\u30F3\u30BF\u30FC\u300F\u4E0B\u8ECA\u3000\u5F92\u6B690\u5206 ",
        numberParking: "234\u53F0",
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
          SHOP_SERVICES.pay
        ],
        tenant: [
          {
            name: "\u30B8\u30E3\u30D6\uFF08\u30AF\u30EA\u30FC\u30CB\u30F3\u30B0\uFF09",
            image: "/assets/images/bnr_h-hakuyosha.webp",
            detailTenantUrl: "http://h-hakuyosha.com/"
          }
        ],
        busImage: [
          {
            alt: "\u7121\u6599\u9001\u8FCE\u30D0\u30B9 \u6E56\u6771\u56E3\u5730\u884C\u304D\u5B9F\u65BD\u4E2D\uFF01",
            url: "/assets/images/bnr_bus_sakuradai.webp",
            to: "/assets/pdf/bus_sakuradai.pdf"
          },
          {
            alt: "\u7121\u6599\u9001\u8FCE\u30D0\u30B9 \u8218\u5C71\u5BFA\u884C\u304D\u5B9F\u65BD\u4E2D\uFF01",
            url: "/assets/images/bnr_bus_sakuradai_ka.webp",
            to: "/assets/pdf/bus_sakuradai_kanzanji.pdf"
          },
          {
            alt: "\u7121\u6599\u9001\u8FCE\u30D0\u30B9 \u548C\u5730\u884C\u304D\u5B9F\u65BD\u4E2D\uFF01",
            url: "/assets/images/bnr_bus_sakuradai_wa.webp",
            to: "/assets/pdf/bus_sakuradai_waji.pdf"
          }
        ]
      }
    },
    {
      shopName: "\u30D5\u30FC\u30C9\u30EF\u30F3\u5357\u6D45\u7530\u5E97",
      globalName: "foodone_minamiasada",
      shopLink: "/shop/chuoku/foodone_minamiasada/",
      address: "\u3012432-8044\u3000\u6D5C\u677E\u5E02\u4E2D\u592E\u533A\u5357\u6D45\u75302-13-1",
      phone: "053-444-5511",
      time: "9:30\uFF5E21:00",
      position: {
        lat: "34.685998",
        lng: "137.732023"
      },
      detail: {
        title: "\u9060\u9244\u30B9\u30C8\u30A2\u3067\u3082\u6700\u5927\u898F\u6A21\u3092\u8A87\u308B\u5E83\u3044\u5E97\u5185\u3067\u3001\u65B0\u9BAE\u98DF\u6750\u3092\u3086\u3063\u305F\u308A\u304A\u8CB7\u3044\u7269\u53EF\u80FD\u3002<br>\u5B63\u7BC0\u3054\u3068\u306E\u697D\u3057\u3044\u30A4\u30D9\u30F3\u30C8\u3067\u3001\u304A\u5BA2\u69D8\u306E\u6BCE\u65E5\u3092\u5FDC\u63F4\u3044\u305F\u3057\u307E\u3059\u3002",
        image: [
          {
            alt: "",
            url: "/assets/images/photo01 (14).webp"
          },
          {
            alt: "",
            url: "/assets/images/photo02 (8).webp"
          }
        ],
        googleMapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13123.038929613007!2d137.731954!3d34.686013!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8ff43db4ce20ec03!2z6YGg6YmE44K544OI44KiIEZPT0QgT05FIOWNl-a1heeUsOW6lw!5e0!3m2!1sja!2sjp!4v1589425486398!5m2!1sja!2sjp",
        nearestBusStation: "\u300E\u6C5F\u897F\u4E2D\u5B66\u6771\u300F\u4E0B\u8ECA\u3000\u5F92\u6B698\u5206 ",
        numberParking: "84\u53F0",
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
          SHOP_SERVICES.passto
        ],
        tenant: [
          {
            name: "\u30B8\u30E3\u30D6\uFF08\u30AF\u30EA\u30FC\u30CB\u30F3\u30B0\uFF09",
            image: "/assets/images/bnr_h-hakuyosha.webp",
            detailTenantUrl: "http://h-hakuyosha.com/"
          },
          {
            name: "\u9060\u9244\u30B9\u30C8\u30A2\u30D5\u30FC\u30C9\u30EF\u30F3\u5357\u6D45\u7530\u5E97 \u30A4\u30D9\u30F3\u30C8\u30B9\u30DA\u30FC\u30B9\u51FA\u5E97\u8005 \u52DF\u96C6\u6848\u5185",
            image: "/assets/images/bnr_minamiasada_event.webp",
            detailTenantUrl: "http://entstore-event.com/minami-asada/index.html"
          },
          {
            name: "\u304B\u308B\u3093\uFF08\u30D1\u30BD\u30B3\u30F3\u6559\u5BA4\uFF09",
            image: "/assets/images/bnr_karun.webp",
            detailTenantUrl: "https://karunchan.com/map/minamiasada.html"
          },
          {
            name: "\u8CB7\u53D6\u5927\u5409\uFF08\u8CB7\u53D6\u30B5\u30FC\u30D3\u30B9\uFF09",
            image: "/assets/images/daikichi.webp",
            detailTenantUrl: "https://www.kaitori-daikichi.jp/store/fo-minamiasada/"
          }
        ]
      }
    },
    {
      shopName: "\u30D5\u30FC\u30C9\u30EF\u30F3\u6CC9\u5E97",
      globalName: "foodone_izumi",
      shopLink: "/shop/chuoku/foodone_izumi/",
      address: "\u3012433-8124\u3000\u6D5C\u677E\u5E02\u4E2D\u592E\u533A\u6CC94-12-1",
      phone: "053-412-7211",
      time: "9:30\uFF5E21:00",
      position: {
        lat: "34.747218",
        lng: "137.720375"
      },
      detail: {
        title: "\u6D5C\u677E\u5E02\u4E2D\u533A\u6CC9\u306B\u5E73\u621022\u5E74\u30AA\u30FC\u30D7\u30F3\u3002<br>\u65E5\u3005\u306E\u98DF\u6750\u3060\u3051\u3067\u306A\u304F\u98DF\u80B2\u306A\u3069\u3092\u30C6\u30FC\u30DE\u306B\u3057\u305F\u304A\u6599\u7406\u6559\u5BA4\u306A\u3069\u30A4\u30D9\u30F3\u30C8\u3082\u958B\u50AC\u3002<br>\u7B11\u9854\u3044\u3063\u3071\u3044\u306E\u5F93\u696D\u54E1\u304C\u7686\u69D8\u306E\u3054\u6765\u5E97\u3092\u304A\u5F85\u3061\u3057\u3066\u304A\u308A\u307E\u3059\u3002",
        image: [
          {
            alt: "",
            url: "/assets/images/photo01 (13).webp"
          },
          {
            alt: "",
            url: "/assets/images/photo02 (7).webp"
          }
        ],
        googleMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.405515530945!2d137.71659931553302!3d34.74537638833113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601adf0c71844f19%3A0xb0fd61944c7b7189!2z6YGg6YmE44K544OI44KiIOODleODvOODieODr-ODsyDms4nlupc!5e0!3m2!1sja!2sus!4v1589425426835!5m2!1sja!2sus",
        nearestBusStation: "\u300E\u9060\u9244\u30B9\u30C8\u30A2\u30D5\u30FC\u30C9\u30EF\u30F3\u6CC9\u5E97\u300F\u4E0B\u8ECA\u3000\u5F92\u6B690\u5206 ",
        numberParking: "256\u53F0",
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
          SHOP_SERVICES.amazonhub_locker
        ],
        tenant: [
          {
            name: "\u674F\u6797\u5802",
            image: "/assets/images/bnr_kyorindo.webp",
            detailTenantUrl: "http://www.kyorindo.co.jp/"
          },
          {
            name: "\u30AF\u30EA\u30FC\u30CB\u30F3\u30B0\u306E\u30A8\u30D6\u30EA",
            image: "/assets/images/bnr_cleaning-every.webp",
            detailTenantUrl: "http://www.cleaning-every.jp/"
          },
          {
            name: "\u3044\u305A\u307F\u63A5\u9AA8\u9662",
            image: "/assets/images/bnr_izumi.webp",
            detailTenantUrl: "http://izumi-sekkotsuin.com"
          },
          {
            name: "\u30E9\u30F3\u30C9\u30EA\u30FC\u30AB\u30FC\u30B5",
            image: "/assets/images/bnr_laundry_casa.webp",
            detailTenantUrl: ""
          }
        ]
      }
    },
    {
      shopName: "\u30D5\u30FC\u30C9\u30EF\u30F3\u9AD8\u6797\u5E97",
      globalName: "foodone_takabayashi",
      shopLink: "/shop/chuoku/foodone_takabayashi/",
      address: "\u3012430-0907\u3000\u6D5C\u677E\u5E02\u4E2D\u592E\u533A\u9AD8\u67971-5-20",
      phone: "053-416-4111",
      time: "9:30\uFF5E21:00",
      position: {
        lat: "34.724594",
        lng: "137.732339"
      },
      detail: {
        title: "2026\u5E743\u6708\u306B\u30EA\u30CB\u30E5\u30FC\u30A2\u30EB\u30AA\u30FC\u30D7\u30F3\u81F4\u3057\u307E\u3057\u305F!<br class='d-none-mobile'>\u5730\u5143\u306E\u304A\u91CE\u83DC\u3001\u9BAE\u5EA6\u306E\u826F\u3044\u304A\u9B5A\u3001\u5927\u5BB9\u91CF\u3067\u304A\u5F97\u306A\u304A\u8089\u306E<br class='d-none-mobile'>\u54C1\u63C3\u3048\u304C\u3055\u3089\u306B\u8C4A\u5BCC\u306B\u306A\u308A\u307E\u3057\u305F\u3002\u3054\u6765\u5E97\u3092\u304A\u5F85\u3061\u3057\u3066\u304A\u308A\u307E\u3059\u3002",
        image: [
          {
            alt: "",
            url: "/assets/images/photo01 (11).webp"
          },
          {
            alt: "",
            url: "/assets/images/takabayashi-1.jpg"
          },
          {
            alt: "",
            url: "/assets/images/takabayashi-2.jpg"
          }
        ],
        googleMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.2198646459246!2d137.72987671553275!3d34.72485198943148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601ade5afdae6c9f%3A0x1a46e1a034bea402!2z6YGg6YmE44K544OI44KiIOODleODvOODieODr-ODs-mrmOael-W6lw!5e0!3m2!1sja!2sjp!4v1589425263372!5m2!1sja!2sjp",
        nearestBusStation: "\u300E\u9060\u9244\u30B9\u30C8\u30A2\u30D5\u30FC\u30C9\u30EF\u30F3\u9AD8\u6797\u5E97\u300F\u4E0B\u8ECA\u3000\u5F92\u6B690\u5206 ",
        numberParking: "100\u53F0",
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
          SHOP_SERVICES.pay
        ],
        tenant: [
          {
            name: "\u30B8\u30E3\u30D6\uFF08\u30AF\u30EA\u30FC\u30CB\u30F3\u30B0\uFF09",
            image: "/assets/images/bnr_h-hakuyosha.webp",
            detailTenantUrl: "http://h-hakuyosha.com/"
          },
          {
            name: "\u30D6\u30EB\u30FC\u30B9\u30AB\u30A4\u30E9\u30F3\u30C9\u30EA\u30FC\uFF08\u30B3\u30A4\u30F3\u30E9\u30F3\u30C9\u30EA\u30FC\uFF09",
            image: "/assets/images/bnr_blueskylaundry.webp",
            detailTenantUrl: "https://www.bsl-web.co.jp/tokaiArea/shizuoka/77c9b38d3f6517fb3103482891dfe3dc7c5964f9.html"
          }
        ]
      }
    },
    {
      shopName: "\u30D5\u30FC\u30C9\u30EF\u30F3\u6771\u4F0A\u5834\u5E97\u30FB",
      globalName: "foodone_higashiiba",
      subName: "\u30DE\u30C4\u30E2\u30C8\u30AD\u30E8\u30B7\u6771\u4F0A\u5834\u5E97",
      shopLink: "/shop/chuoku/foodone_higashiiba/",
      address: "\u3012432-8036\u3000\u6D5C\u677E\u5E02\u4E2D\u592E\u533A\u6771\u4F0A\u58342-14-55",
      phone: "053-455-3900",
      phone_others: "\uFF08\u30DE\u30C4\u30E2\u30C8\u30AD\u30E8\u30B7\u6771\u4F0A\u5834\u5E97\uFF1A053-455-4000\uFF09",
      time: "9:30\uFF5E21:00",
      time_others: "\uFF08\u30DE\u30C4\u30E2\u30C8\u30AD\u30E8\u30B7\u6771\u4F0A\u5834\u5E97\u30009\uFF1A30\uFF5E21\uFF1A00\uFF09",
      position: {
        lat: "34.697592",
        lng: "137.718052"
      },
      shopBanner: {
        imgUrl: "/assets/images/bnr_matsukiyo_dutyfree_kikugawa.jpg",
        filePath: "/assets/pdf/dutyfree.pdf",
        alt: "\u30DE\u30C4\u30E2\u30C8\u30AD\u30E8\u30B7\uFF08\u677E\u672C\u6E05\uFF09\u83CA\u5DDD\u5E97 \u514D\u7A0E\u5BFE\u5FDC\uFF1ATax-free 8\uFF05OFF\uFF01"
      },
      detail: {
        title: "\u300C\u30DE\u30C4\u30E2\u30C8\u30AD\u30E8\u30B7\u300D\u3068\u3068\u3082\u306B\u5E73\u621026\u5E74\u30AA\u30FC\u30D7\u30F3\u3002<br>\u30C9\u30E9\u30C3\u30B0\u30B9\u30C8\u30A2\u4F75\u8A2D\u3067\u3001\u98DF\u54C1\u3068\u4E00\u7DD2\u306B\u65E5\u7528\u96D1\u8CA8\u30821\u7B87\u6240\u3067\u3059\u3080\u5229\u4FBF\u6027\u304C\u9B45\u529B\u3067\u3059\u3002",
        image: [
          {
            alt: "",
            url: "/assets/images/photo01 (15).webp"
          },
          {
            alt: "",
            url: "/assets/images/photo02 (9).webp"
          }
        ],
        googleMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.311899541248!2d137.71459721553205!3d34.697312290906645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601ade83840928a1%3A0xcd5825b8b7ac1913!2z6YGg6YmE44K544OI44KiIOODleODvOODieODr-ODs-adseS8iuWgtOW6l-ODu-ODnuODhOODouODiOOCreODqOOCt-adseS8iuWgtOW6lw!5e0!3m2!1sja!2sjp!4v1589425574089!5m2!1sja!2sjp",
        nearestBusStation: "\u300E\u5546\u5DE5\u4F1A\u8B70\u6240\u300F\u4E0B\u8ECA\u3000\u5F92\u6B698\u5206 ",
        numberParking: "127\u53F0",
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
          SHOP_SERVICES.passto
        ],
        tenant: [
          {
            name: "\u30DE\u30C4\u30E2\u30C8\u30AD\u30E8\u30B7\u6771\u4F0A\u5834\u5E97",
            image: "/assets/images/bnr_matsukiyo.webp",
            detailTenantUrl: "http://www.matsukiyo.co.jp/"
          },
          {
            name: "\u30B8\u30E3\u30D6\uFF08\u30AF\u30EA\u30FC\u30CB\u30F3\u30B0\uFF09",
            image: "/assets/images/bnr_h-hakuyosha.webp",
            detailTenantUrl: "http://h-hakuyosha.com/"
          },
          {
            name: "\u30E9\u30F3\u30C9\u30EA\u30FC\u30AB\u30FC\u30B5",
            image: "/assets/images/bnr_laundry_casa.webp",
            detailTenantUrl: ""
          },
          {
            name: "\u30EF\u30C3\u30C4\u30A6\u30A3\u30BA\uFF08100\u5186\u5747\u4E00\u30B7\u30E7\u30C3\u30D7\uFF09",
            image: "/assets/images/bnr_whattswith.webp",
            detailTenantUrl: "https://www.watts-jp.com/shop/42948/"
          }
        ]
      }
    },
    {
      shopName: "\u897F\u4F1D\u5BFA\u5E97",
      globalName: "seidenji",
      shopLink: "/shop/chuoku/seidenji/",
      address: "\u3012435-0035\u3000\u6D5C\u677E\u5E02\u4E2D\u592E\u533A\u897F\u4F1D\u5BFA\u753A292-1",
      phone: "053-443-7711",
      time: "9:00\uFF5E20:00",
      position: {
        lat: "34.701681",
        lng: "137.766569"
      },
      detail: {
        title: "\u300E\u300C\u65B0\u9BAE\u306A\u5546\u54C1\u300D\u3068\u300C\u7B11\u9854\u306E\u3042\u3044\u3055\u3064\u300D\u3067\u8FD1\u96A3\u306E\u304A\u5BA2\u69D8\u304B\u3089\u611B\u3055\u308C\u308B\u897F\u4F1D\u5BFA\u5E97\u300F<br class='d-none-mobile'>\n				\u3092\u5E97\u8217\u30B9\u30ED\u30FC\u30AC\u30F3\u306B\u63B2\u3052\u3001\u9BAE\u9B5A\u3001\u60E3\u83DC\u3092\u4E2D\u5FC3\u3068\u3057\u305F\u7F8E\u5473\u3057\u3055\u3084\u9BAE\u5EA6\u306B\u3053\u3060\u308F\u3063\u305F\u5546\u54C1\u3001<br class='d-none-mobile'>\n				\u8FD1\u5E74\u30C8\u30EC\u30F3\u30C9\u3068\u306A\u3063\u3066\u3044\u308B\u7C21\u4FBF\u6027\u306E\u9AD8\u3044\u5546\u54C1\u306E\u54C1\u63C3\u3048\u3092\u5F37\u5316\u3044\u305F\u3057\u307E\u3059\u3002\n			",
        image: [
          {
            alt: "",
            url: "/assets/images/photo01 (22).webp"
          },
          {
            alt: "",
            url: "/assets/images/photo02 (16).webp"
          },
          {
            alt: "",
            url: "/assets/images/photo03 (10).webp"
          }
        ],
        googleMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.1416154991393!2d137.76438711553223!3d34.701607890676705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601ae787f535fe61%3A0xe43ac04a209c16a6!2z6YGg6YmE44K544OI44Ki6KW_5Lyd5a-65bqXKDIwMjDlubQz5pyI5pyr44Kq44O844OX44Oz5LqI5a6aKQ!5e0!3m2!1sja!2sjp!4v1589427351692!5m2!1sja!2sjp",
        nearestBusStation: "\u300E\u897F\u4F1D\u5BFA\u300F\u4E0B\u8ECA\u5F92\u6B695\u5206",
        numberParking: "81\u53F0",
        services: [
          SHOP_SERVICES.food_tray_recycling,
          SHOP_SERVICES.paper_carton_recycling,
          SHOP_SERVICES.plastic_bottle_recycling,
          SHOP_SERVICES.atm_seven,
          SHOP_SERVICES.photo,
          SHOP_SERVICES.bakery
        ],
        tenant: [],
        busImage: []
      }
    },
    {
      shopName: "\u30DE\u30C4\u30E2\u30C8\u30AD\u30E8\u30B7\u3055\u304E\u306E\u5BAE\u99C5\u524D\u5E97",
      globalName: "saginomiya",
      shopLink: "/shop/chuoku/saginomiya/",
      address: "\u3012431-3113\u3000\u6D5C\u677E\u5E02\u4E2D\u592E\u533A\u5927\u702C\u753A489",
      phone: "053-432-0300",
      time: "9:00\uFF5E20:30",
      position: {
        lat: "34.757246",
        lng: "137.757002"
      },
      detail: {
        title: "\u9060\u5DDE\u9244\u9053\u3055\u304E\u306E\u5BAE\u99C5\u524D\u306B2022\u5E744\u670821\u65E5\u306B\u30AA\u30FC\u30D7\u30F3\uFF01<br>\u8CB7\u3044\u56DE\u308A\u3057\u3084\u3059\u3044\u30B3\u30F3\u30D1\u30AF\u30C8\u306A\u5E97\u5185\u306B\u306F\u3001\u304A\u85AC\u30FB\u5316\u7CA7\u54C1\u30FB\u65E5\u7528\u54C1\u30FB\u4E00\u822C\u98DF\u54C1\u306F\u3082\u3061\u308D\u3093\u3001<br>\u9060\u9244\u30B9\u30C8\u30A2\u306E\u304A\u91CE\u83DC\u30FB\u304A\u8089\u30FB\u304A\u304B\u305A\u30FB\u304A\u5F01\u5F53\u306A\u3069\u3092\u304A\u53D6\u308A\u6271\u3044\u3057\u3066\u3044\u307E\u3059\u3002<br>\u3048\u3093\u3066\u3064\u30AB\u30FC\u30C9\u30FB\u30DE\u30C4\u30AD\u30E8\u30AB\u30FC\u30C9\u30FB\uFF44\u30DD\u30A4\u30F3\u30C8\u30AB\u30FC\u30C9\u306E<br class='d-none-mobile'>3\u679A\u306E\u30AB\u30FC\u30C9\u306B\u30DD\u30A4\u30F3\u30C8\u304C\u8CAF\u307E\u308A\u30FB\u4F7F\u3048\u308B\u304A\u5F97\u306A\u304A\u5E97\u3067\u3059\u3002",
        image: [
          {
            alt: "",
            url: "/assets/images/photo01 (26).webp"
          },
          {
            alt: "",
            url: "/assets/images/photo02 (20).webp"
          },
          {
            alt: "",
            url: "/assets/images/photo03 (14).webp"
          }
        ],
        googleMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.934689849874!2d137.75481371504242!3d34.75723798042002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601adfda5a9f7bbb%3A0x369953c790eeea90!2z44CSNDMxLTMxMTMg6Z2Z5bKh55yM5rWc5p2-5biC5p2x5Yy65aSn54Cs55S677yU77yY77yZ!5e0!3m2!1sja!2sjp!4v1649047091670!5m2!1sja!2sjp",
        nearestBusStation: "\u9060\u5DDE\u9244\u9053 \u3055\u304E\u306E\u5BAE\u99C5\u3000\u5F92\u6B690\u5206",
        numberParking: "29\u53F0",
        services: [SHOP_SERVICES.amazonhub_locker],
        tenant: [],
        busImage: []
      }
    }
  ],
  hamanaku: [
    {
      shopName: "\u6D5C\u5317\u5E97\u30FB\u30DE\u30C4\u30E2\u30C8\u30AD\u30E8\u30B7\u6D5C\u5317\u5E97",
      globalName: "hamakita",
      shopLink: "/shop/hamanaku/hamakita/",
      address: "\u3012434-0012\u3000\u6D5C\u677E\u5E02\u6D5C\u540D\u533A\u4E2D\u702C16-1",
      phone: "053-580-0311",
      phone_others: "\uFF08\u30DE\u30C4\u30E2\u30C8\u30AD\u30E8\u30B7\u6D5C\u5317\u5E97\uFF1A053-581-8801\uFF09",
      time: "9:30\uFF5E21:00",
      time_weekends: "\uFF08\u571F\u65E5\u306E\u307F9:00\uFF5E21:00\uFF09",
      time_others: "\uFF08\u30DE\u30C4\u30E2\u30C8\u30AD\u30E8\u30B7\u6D5C\u5317\u5E97\u30009:30\uFF5E21:00<br>\u571F\u65E5\u306E\u307F\u30009:00\uFF5E21:00\uFF09",
      position: {
        lat: "34.810071",
        lng: "137.804917"
      },
      detail: {
        title: "\u6D5C\u5317\u5E97\u3067\u306F\u304A\u8CB7\u3044\u5F97\u5546\u54C1\u304B\u3089\u3001\u98DF\u751F\u6D3B\u3092\u5F69\u308B\u9038\u54C1\u306A\u3069\u3001\u5E45\u5E83\u3044\u54C1\u63C3\u3048\u3067\u3001<br>\u304A\u5BA2\u69D8\u306E\u697D\u3057\u3044\u304A\u8CB7\u3044\u7269\u3092\u30B5\u30DD\u30FC\u30C8\u3092\u3055\u305B\u3066\u3044\u305F\u3060\u304D\u307E\u3059\u3002\u6BCE\u65E5\u5B9F\u65BD\u3057\u3066\u3044\u308B<br />\u8A66\u98DF\u30B3\u30FC\u30CA\u30FC\u3082\u4EBA\u6C17\u306E\u304A\u5E97\u3067\u3059\u3002\u5F93\u696D\u54E1\u4E00\u540C\u3054\u6765\u5E97\u3092\u5FC3\u3088\u308A\u304A\u5F85\u3061\u3057\u3066\u304A\u308A\u307E\u3059\u3002",
        image: [
          {
            alt: "",
            url: "/assets/images/hamakita-1.webp"
          },
          {
            alt: "",
            url: "/assets/images/hamakita-2.webp"
          },
          {
            alt: "",
            url: "/assets/images/hamakita-3.webp"
          }
        ],
        googleMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.835676791372!2d137.80272841553426!3d34.810075784859514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601b1e2d1d41d743%3A0x693b70eaf2b679c2!2z6YGg6YmE44K544OI44KiIOa1nOWMl-W6lw!5e0!3m2!1sja!2sjp!4v1589428378095!5m2!1sja!2sjp",
        nearestBusStation: "\u9060\u5DDE\u9244\u9053 \u5C0F\u6797\u99C5\u3000\u5F92\u6B6914\u5206 ",
        numberParking: "171\u53F0",
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
          SHOP_SERVICES.passto
        ],
        tenant: [
          {
            name: "\u30DE\u30C4\u30E2\u30C8\u30AD\u30E8\u30B7\u6D5C\u5317\u5E97",
            image: "/assets/images/bnr_matsukiyo.webp",
            detailTenantUrl: "https://www.matsukiyococokara-online.com/store/"
          },
          {
            name: "\u7389\u83EF\u5802\uFF08\u83D3\u5B50\uFF09",
            image: "/assets/images/bnr_gyokkado.webp",
            detailTenantUrl: "http://www.gyokkado.co.jp/"
          },
          {
            name: "\u30B8\u30E3\u30D6\uFF08\u30AF\u30EA\u30FC\u30CB\u30F3\u30B0\uFF09",
            image: "/assets/images/bnr_h-hakuyosha.webp",
            detailTenantUrl: "http://h-hakuyosha.com/"
          },
          // {
          //   "name": "遠鉄石油（ガソリンスタンド）",
          //   "image": "/assets/images/bnr_entetsusekiyu.webp",
          //   "detailTenantUrl": "http://www.entetsusekiyu.co.jp/"
          // },
          {
            name: "\u306F\u307E\u304D\u305F\u63A5\u9AA8\u9662",
            image: null,
            detailTenantUrl: "http://www.hamakita-sekkotsuin.com/"
          },
          {
            name: "\u30D5\u30C8\u30F3\u4E38\u6D17\u3044\u9928",
            image: null,
            detailTenantUrl: "https://futonmaruaraikan.com/"
          },
          {
            name: "\u8CB7\u53D6\u5927\u5409\uFF08\u8CB7\u53D6\u30B5\u30FC\u30D3\u30B9\uFF09",
            detailTenantUrl: "https://kaitoridaikichi-hamakita.com/",
            image: "/assets/images/daikichi.webp"
          }
        ],
        busImage: []
      }
    },
    {
      shopName: "\u30D5\u30FC\u30C9\u30EF\u30F3\u304D\u3089\u308A\u30BF\u30A6\u30F3\u5E97",
      globalName: "foodone_kiraritown",
      shopLink: "/shop/hamanaku/foodone_kiraritown/",
      address: "\u3012434-0046\u3000\u6D5C\u677E\u5E02\u6D5C\u540D\u533A\u67D3\u5730\u53F05-7-28",
      phone: "053-584-0811",
      time: "9:30\uFF5E20:00",
      position: {
        lat: "34.795074",
        lng: "137.746185"
      },
      detail: {
        title: "2022\u5E748\u6708\u306B\u30EA\u30CB\u30E5\u30FC\u30A2\u30EB\u3044\u305F\u3057\u307E\u3057\u305F\u3002<br>\u65B0\u9BAE\u306A\u304A\u91CE\u83DC\u3001\u304A\u9B5A\u3084\u3001\u4FBF\u5229\u306A\u304A\u7DCF\u83DC\u3001\u51B7\u51CD\u98DF\u54C1\u3092<br class='d-none-mobile'>\u8C4A\u5BCC\u306B\u53D6\u308A\u63C3\u3048\u3001\u304A\u5BA2\u69D8\u306E\u304A\u8CB7\u3044\u7269\u3092\u5FDC\u63F4\u3044\u305F\u3057\u307E\u3059\u3002<br>\u6BCE\u9031\u6708\u30FB\u6C34\u30FB\u91D1\u306B\u5185\u91CE\u53F0\u21D2\u9060\u9244\u30B9\u30C8\u30A2\u3092\u884C\u304D\u6765\u3059\u308B\u3001<br class='d-none-mobile'>\u7121\u6599\u9001\u8FCE\u30D0\u30B9\u3092\u3054\u7528\u610F\u3057\u3066\u304A\u308A\u307E\u3059\u3002",
        image: [
          {
            alt: "",
            url: "/assets/images/kiratown_photo01.webp"
          },
          {
            alt: "",
            url: "/assets/images/kiratown_photo02.webp"
          },
          {
            alt: "",
            url: "/assets/images/kiratown_photo03.webp"
          }
        ],
        googleMapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d26211.456590416703!2d137.746185!3d34.79507!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2a0c9a19e30e3f8!2z6YGg6YmE44K544OI44Ki44OV44O844OJ44Ov44OzIOOBjeOCieOCiuOCv-OCpuODs-W6lw!5e0!3m2!1sja!2sjp!4v1589428417983!5m2!1sja!2sjp",
        nearestBusStation: "\u300E\u67D3\u5730\u53F03\u4E01\u76EE\u300F\u4E0B\u8ECA\u3000\u5F92\u6B698\u5206 ",
        numberParking: "456\u53F0",
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
          SHOP_SERVICES.pay
        ],
        tenant: [
          {
            name: "\u30B8\u30E3\u30D6\uFF08\u30AF\u30EA\u30FC\u30CB\u30F3\u30B0\uFF09",
            image: "/assets/images/bnr_h-hakuyosha.webp",
            detailTenantUrl: "http://h-hakuyosha.com/"
          },
          {
            name: "\u304B\u308B\u3093\uFF08\u30D1\u30BD\u30B3\u30F3\u6559\u5BA4\uFF09",
            image: "/assets/images/bnr_karun.webp",
            detailTenantUrl: "https://karunchan.com/map/entetsukirari.html"
          },
          // {
          //   "name": "Urara（セルフビューティサロン）",
          //   "image": "/assets/images/bnr_urara.webp",
          //   "detailTenantUrl": "https://lit.link/urara22"
          // },
          {
            name: "\u8CB7\u53D6\u5927\u5409\uFF08\u8CB7\u53D6\u30B5\u30FC\u30D3\u30B9\uFF09",
            image: "/assets/images/daikichi.webp",
            detailTenantUrl: "https://daikichi-kaitori.com/"
          }
        ],
        busImage: [
          {
            alt: "\u7121\u6599\u9001\u8FCE\u30D0\u30B9\u5B9F\u65BD\u4E2D",
            url: "/assets/images/bnr_bus_kiraritown.webp",
            to: "/assets/pdf/bus_kirari.pdf"
          }
        ]
      }
    },
    {
      shopName: "\u4E09\u30F6\u65E5\u5E97",
      globalName: "mikkabi",
      shopLink: "/shop/hamanaku/mikkabi/",
      address: "\u3012431-1414\u3000\u6D5C\u677E\u5E02\u6D5C\u540D\u533A\u4E09\u30F6\u65E5\u753A\u4E09\u30F6\u65E5110",
      phone: "053-524-4511",
      time: "9:30\uFF5E21:00",
      position: {
        lat: "34.810083",
        lng: "137.550167"
      },
      detail: {
        title: "\u611B\u77E5\u770C\u3068\u306E\u770C\u5883\u306B\u5E73\u621022\u5E74\u30AA\u30FC\u30D7\u30F3\u3002<br>\u5E83\u3005\u3068\u660E\u308B\u3044\u5E97\u5185\u7A7A\u9593\u3067\u3001\u65B0\u9BAE\u306A\u98DF\u6750\u3092\u304A\u8CB7\u3044\u56DE\u308A\u3044\u305F\u3060\u3051\u307E\u3059\u3002<br>\u9B5A\u5C4B\u300C\u9B5A\u559C\u300D\u306E\u9BAE\u9B5A\u3084\u304A\u5BFF\u53F8\u3082\u81EA\u6162\u3067\u3059\u3002",
        image: [
          {
            alt: "",
            url: "/assets/images/photo01 (27).webp"
          },
          {
            alt: "",
            url: "/assets/images/photo02 (21).webp"
          }
        ],
        googleMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.8422517516155!2d137.54846931553422!3d34.80991038486844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601b2e5c433eb41f%3A0x9e497c20229a3a76!2z6YGg6YmE44K544OI44KiIOS4ieODtuaXpeW6lw!5e0!3m2!1sja!2sus!4v1589428244669!5m2!1sja!2sus",
        nearestBusStation: "\u300E\u4E09\u30F6\u65E5\u8ECA\u5EAB\u300F\u4E0B\u8ECA\u3000\u5F92\u6B696\u5206 ",
        numberParking: "155\u53F0",
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
          SHOP_SERVICES.passto
        ],
        tenant: [
          {
            name: "\u30DF\u30FC\u30C4\uFF08100\u5186\u5747\u4E00\u30B7\u30E7\u30C3\u30D7\uFF09",
            image: "/assets/images/bnr_meets.webp",
            detailTenantUrl: "https://www.watts-jp.com/shop/533/"
          },
          {
            name: "\u30B8\u30E3\u30D6\uFF08\u30AF\u30EA\u30FC\u30CB\u30F3\u30B0\uFF09",
            image: "/assets/images/bnr_h-hakuyosha.webp",
            detailTenantUrl: "http://h-hakuyosha.com/"
          }
        ],
        busImage: []
      }
    },
    {
      shopName: "\u30B9\u30FC\u30D1\u30FC\u30DE\u30FC\u30B1\u30C3\u30C8\u307F\u3063\u304B\u3073",
      globalName: "super-mikkabi",
      shopLink: "/shop/hamanaku/super-mikkabi/",
      address: "\u3012431-1414 \u6D5C\u677E\u5E02\u6D5C\u540D\u533A\u4E09\u30F6\u65E5\u753A\u4E09\u30F6\u65E5626-1",
      phone: "053-525-8444",
      time: "9:30\uFF5E19:00",
      position: {
        lat: "34.805796",
        lng: "137.55508"
      },
      detail: {
        title: "\u65B0\u9BAE\u306A\u751F\u9BAE\u98DF\u54C1\u3001\u304A\u3044\u3057\u3044\u304A\u60E3\u83DC\u3084\u30C7\u30B6\u30FC\u30C8\u306A\u3069\u3092\u53D6\u308A\u305D\u308D\u3048\u3001<br class='d-none-mobile'>\u3044\u3064\u3067\u3082\u304A\u6C42\u3081\u3084\u3059\u3044\u4FA1\u683C\u3067\u5730\u57DF\u306E\u307F\u306A\u3055\u307E\u3092\u304A\u5F85\u3061\u3057\u3066\u304A\u308A\u307E\u3059\u3002",
        image: [
          {
            alt: "",
            url: "/assets/images/shop/super-mikkabi/photo01.webp"
          },
          {
            alt: "",
            url: "/assets/images/shop/super-mikkabi/photo02.webp"
          },
          {
            alt: "",
            url: "/assets/images/shop/super-mikkabi/photo03.webp"
          }
        ],
        googleMapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d409.5016190073154!2d137.5546607!3d34.805616!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601b2f0034778d1f%3A0x1431af6ec64f586!2z44K544O844OR44O844Oe44O844Kx44OD44OI44G_44Gj44GL44GzKOmBoOmJhOOCueODiOOCoik!5e0!3m2!1svi!2s!4v1733208254908!5m2!1sja!2s",
        nearestBusStation: "\u300E\u4E09\u30F6\u65E5(\u30D0\u30B9\u505C)\u300F\u4E0B\u8ECA\u5F92\u6B694\u5206",
        numberParking: "24\u53F0",
        services: [],
        tenant: [],
        busImage: []
      }
    }
  ],
  tenryuku: [
    {
      shopName: "\u5929\u7ADC\u5E97",
      globalName: "tenryu",
      shopLink: "/shop/tenryuku/tenryu/",
      address: "\u3012431-3304\u3000\u6D5C\u677E\u5E02\u5929\u7ADC\u533A\u6B21\u90CE\u516B\u65B0\u75306-2",
      phone: "053-922-2311",
      time: "9:30\uFF5E21:00",
      time_weekends: "\uFF08\u590F\u5B63\u306E\u307F\u571F\u65E5\u30009\uFF1A00\uFF5E21\uFF1A00\uFF09",
      position: {
        lat: "34.683581",
        lng: "137.772546"
      },
      detail: {
        title: "\u9060\u9244\u30B9\u30C8\u30A2\u306E\u4E2D\u3067\u3082\u6700\u5317\u306B\u4F4D\u7F6E\u3059\u308B\u5929\u7ADC\u5E97\u3002<br>\u6BCE\u65E5\u306E\u304A\u8CB7\u3044\u7269\u3060\u3051\u3067\u306A\u304F\u3001\u6C34\u7AAA\u65B9\u9762\u3084\u963F\u591A\u53E4\u5DDD\u30FB\u6C17\u7530\u5DDD\u3078\u306E<br>\u30EC\u30B8\u30E3\u30FC\u6642\u306B\u3082\u304A\u7ACB\u3061\u5BC4\u308A\u304F\u3060\u3055\u3044\u3002",
        image: [
          {
            alt: "",
            url: "/assets/images/shop/tenryuku/photo01.webp"
          },
          {
            alt: "",
            url: "/assets/images/shop/tenryuku/photo02.webp"
          },
          {
            alt: "",
            url: "/assets/images/shop/tenryuku/photo03.webp"
          }
        ],
        googleMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3273.2884930385844!2d137.81817021553556!3d34.87410128141856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601b1ec888f56b3b%3A0x4bd6dee8b706f9f5!2z6YGg6YmE44K544OI44KiIOWkqeernOW6lw!5e0!3m2!1sja!2sus!4v1589428759953!5m2!1sja!2sus",
        nearestBusStation: "\u300E\u5C71\u6771\u300F\u4E0B\u8ECA\u3000\u5F92\u6B690\u5206 ",
        numberParking: "102\u53F0",
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
          SHOP_SERVICES.passto
        ],
        tenant: [
          {
            name: "\u6247\uFF08\u30AF\u30EA\u30FC\u30CB\u30F3\u30B0\uFF09",
            image: null,
            detailTenantUrl: "http://ougi621.on.omisenomikata.jp/"
          },
          {
            name: "\u304F\u3059\u308A\u6771\u6D77\u5802\uFF08\u85AC\u5C40\uFF09",
            image: null,
            detailTenantUrl: ""
          }
        ],
        busImage: []
      }
    }
  ],
  iwatashi: [
    {
      shopName: "\u78D0\u7530\u5E97\u30FB\u30DE\u30C4\u30E2\u30C8\u30AD\u30E8\u30B7\u78D0\u7530\u5E97",
      shopLink: "/shop/iwatashi/iwata/",
      address: "\u3012438-0071\u3000\u78D0\u7530\u5E02\u898B\u4ED8\u5B57\u4ECA\u4E4B\u6D665879-1",
      phone: "0538-35-1941",
      phone_others: "\uFF08\u30DE\u30C4\u30E2\u30C8\u30AD\u30E8\u30B7\u78D0\u7530\u5E97\uFF1A0538-39-1190\uFF09",
      time: "9:30\uFF5E20:00",
      time_others: "\uFF08\u30DE\u30C4\u30E2\u30C8\u30AD\u30E8\u30B7\u78D0\u7530\u5E97\u30009\uFF1A30\uFF5E20\uFF1A00\uFF09",
      globalName: "iwata",
      position: {
        lat: "34.718067",
        lng: "137.858326"
      },
      detail: {
        title: "\u662D\u548C50\u5E74\u306B\u30AA\u30FC\u30D7\u30F3\u3057\u3001\u304A\u5BA2\u69D8\u306B\u611B\u3055\u308C\u3066\u7D0440\u5E74\u3002<br>\u5E73\u621026\u5E74\u306B\u306F\u30C9\u30E9\u30C3\u30B0\u30B9\u30C8\u30A2\u30DE\u30C4\u30E2\u30C8\u30AD\u30E8\u30B7\u3082\u4F75\u8A2D\u30AA\u30FC\u30D7\u30F3\u3002\u8CB7\u7269\u304C\u3068\u3066\u3082\u4FBF\u5229\u3067\u3059\u3002",
        image: [
          {
            alt: "",
            url: "/assets/images/photo01 (31).webp"
          },
          {
            alt: "",
            url: "/assets/images/photo02 (25).webp"
          },
          {
            alt: "",
            url: "/assets/images/photo03 (18).webp"
          }
        ],
        googleMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.314963099412!2d137.85298571553264!3d34.722454489559944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601ae430f8ea869f%3A0xa27b8669fdf28bb5!2z6YGg6YmE44K544OI44KiIOejkOeUsOW6lw!5e0!3m2!1sja!2sjp!4v1589428854004!5m2!1sja!2sjp",
        nearestBusStation: "\u300E\u65B0\u52A0\u8302\u5DDD\u6A4B\u300F\u4E0B\u8ECA\u3000\u5F92\u6B693\u5206 ",
        numberParking: "133\u53F0",
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
          SHOP_SERVICES.mobile_supermarket_iwata
        ],
        tenant: [
          {
            name: "\u30AF\u30EA\u30FC\u30CB\u30F3\u30B0\u306E\u30A8\u30D6\u30EA",
            image: "/assets/images/bnr_cleaning-every.webp",
            detailTenantUrl: "http://www.cleaning-every.jp/"
          },
          {
            name: "\u30DE\u30C4\u30E2\u30C8\u30AD\u30E8\u30B7\u78D0\u7530\u5E97",
            image: "/assets/images/bnr_matsukiyo.webp",
            detailTenantUrl: "http://www.matsukiyo.co.jp/"
          },
          {
            name: "\u6CB3\u5408\u697D\u5668\u97F3\u697D\u6559\u5BA4",
            image: "/assets/images/bnr_kawai.webp",
            detailTenantUrl: "http://www.kawai.co.jp/school/music/"
          },
          {
            name: "\u30D6\u30EB\u30FC\u30B9\u30AB\u30A4\u30E9\u30F3\u30C9\u30EA\u30FC\uFF08\u30B3\u30A4\u30F3\u30E9\u30F3\u30C9\u30EA\u30FC\uFF09",
            image: "/assets/images/bnr_blueskylaundry.webp",
            detailTenantUrl: "https://www.bsl-web.co.jp/tokaiArea/shizuoka/2807f98101492900898bd701b4af84287d11fa49.html"
          },
          {
            name: "\u8CB7\u53D6\u5927\u5409\uFF08\u8CB7\u53D6\u30B5\u30FC\u30D3\u30B9\uFF09",
            image: "/assets/images/daikichi.webp",
            detailTenantUrl: "https://www.kaitori-daikichi.jp/es-iwata/"
          }
        ],
        busImage: []
      }
    },
    {
      shopName: "\u7ADC\u6D0B\u5E97",
      shopLink: "/shop/iwatashi/ryuyou/",
      address: "\u3012438-0231\u3000\u78D0\u7530\u5E02\u8C4A\u5CA16926-3",
      phone: "0538-66-3541",
      time: "9:30\uFF5E20:00",
      globalName: "ryuyou",
      position: {
        lat: "34.672977",
        lng: "137.813954"
      },
      detail: {
        title: "150\u53F7\u7DDA\u6CBF\u3044\u306E\u5730\u5143\u5BC6\u7740\u578B\u306E\u5143\u6C17\u306A\u63A5\u5BA2\u304C\u81EA\u6162\u306E\u30B9\u30C8\u30A2\u3002<br>\u30B3\u30F3\u30D1\u30AF\u30C8\u306A\u5E97\u8217\u3068\u65B0\u9BAE\u306A\u98DF\u54C1\u3092\u3054\u7528\u610F\u3057\u3066\u3001<br class='d-none-mobile'>\u6BCE\u65E5\u306E\u304A\u8CB7\u3044\u7269\u306E\u3057\u3084\u3059\u3055\u3092\u5FDC\u63F4\u3044\u305F\u3057\u307E\u3059\uFF01",
        image: [
          {
            alt: "",
            url: "/assets/images/photo01 (32).webp"
          },
          {
            alt: "",
            url: "/assets/images/photo02 (26).webp"
          },
          {
            alt: "",
            url: "/assets/images/photo03 (19).webp"
          }
        ],
        googleMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.277098931469!2d137.8115080155317!3d34.672955292210595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601ae63a7b59e041%3A0xc6bdea3e966fa737!2z6YGg6YmE44K544OI44KiIOernOa0i-W6lw!5e0!3m2!1sja!2sjp!4v1589428901673!5m2!1sja!2sjp",
        nearestBusStation: "\u300E\u91D1\u6D17\u6771\u300F\u4E0B\u8ECA\u3000\u5F92\u6B692\u5206 ",
        numberParking: "76\u53F0",
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
          SHOP_SERVICES.pay
        ],
        tenant: [
          {
            name: "\u30B8\u30E3\u30D6\uFF08\u30AF\u30EA\u30FC\u30CB\u30F3\u30B0\uFF09",
            image: "/assets/images/bnr_h-hakuyosha.webp",
            detailTenantUrl: "http://h-hakuyosha.com/"
          }
        ],
        busImage: []
      }
    },
    {
      shopName: "\u6C60\u7530\u5E97\u30FB\u30DE\u30C4\u30E2\u30C8\u30AD\u30E8\u30B7\u6C60\u7530\u5E97",
      shopLink: "/shop/iwatashi/ikeda/",
      address: "\u3012438-0805\u3000\u78D0\u7530\u5E02\u6C60\u7530162-16",
      phone: "0538-35-1120",
      phone_others: "\uFF08\u30DE\u30C4\u30E2\u30C8\u30AD\u30E8\u30B7\u6C60\u7530\u5E97\uFF1A0538-39-1900\uFF09",
      time: "9:30\uFF5E21:00",
      time_others: "\uFF08\u30DE\u30C4\u30E2\u30C8\u30AD\u30E8\u30B7\u6C60\u7530\u5E97\u30009\uFF1A30\uFF5E21\uFF1A00\uFF09",
      globalName: "ikeda",
      position: {
        lat: "34.738305",
        lng: "137.816805"
      },
      detail: {
        title: "\u5730\u57DF\u306E\u7686\u69D8\u306B\u98DF\u3079\u65B9\u306E\u3054\u63D0\u6848\u3084\u304A\u8CB7\u3044\u5F97\u306E\u5546\u54C1\u60C5\u5831\u3092\u767A\u4FE1\u3057\u7D9A\u3051\u307E\u3059\u3002<br>\u304A\u6C17\u8EFD\u306B\u5F53\u5E97\u30B9\u30BF\u30C3\u30D5\u306B\u304A\u58F0\u3092\u304A\u304B\u3051\u4E0B\u3055\u3044\u3002",
        image: [
          {
            alt: "",
            url: "/assets/images/\u5E97\u8217\u5916\u89B3.webp"
          },
          {
            alt: "",
            url: "/assets/images/\u5E97\u5185\u58F2\u5834.webp"
          },
          {
            alt: "",
            url: "/assets/images/\u30DE\u30C4\u30AD\u30E8\u5916\u89B3.webp"
          }
        ],
        googleMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.6854612706684!2d137.81469691553292!3d34.738321988709316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601ae133981d8efd%3A0x43bde0c083da4e2e!2z6YGg6YmE44K544OI44KiIOaxoOeUsOW6lw!5e0!3m2!1sja!2sjp!4v1589428941491!5m2!1sja!2sjp",
        nearestBusStation: "\u300E\u9577\u68EE\u300F\u4E0B\u8ECA\u3000\u5F92\u6B6917\u5206",
        numberParking: "106\u53F0",
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
          SHOP_SERVICES.amazonhub_locker
        ],
        tenant: [
          {
            name: "\u30DE\u30C4\u30E2\u30C8\u30AD\u30E8\u30B7\u6C60\u7530\u5E97",
            image: "/assets/images/bnr_matsukiyo.webp",
            detailTenantUrl: "http://www.matsukiyo.co.jp/"
          },
          {
            name: "\u30B8\u30E3\u30D6\uFF08\u30AF\u30EA\u30FC\u30CB\u30F3\u30B0\uFF09",
            image: "/assets/images/bnr_h-hakuyosha.webp",
            detailTenantUrl: "http://h-hakuyosha.com/"
          },
          {
            name: "\u304B\u308B\u3093\uFF08\u30D1\u30BD\u30B3\u30F3\u6559\u5BA4\uFF09",
            image: "/assets/images/bnr_karun.webp",
            detailTenantUrl: "https://karunchan.com/map/entetsuikeda.html"
          },
          {
            name: "BLUE SKY LAUNDRY\uFF08\u30B3\u30A4\u30F3\u30E9\u30F3\u30C9\u30EA\u30FC\uFF09",
            image: "/assets/images/bnr_blueskylaundry.webp",
            detailTenantUrl: "https://www.bsl-web.co.jp/tokaiArea/shizuoka/9cdc6d8a7b430649ddbf7465465a5d6dfd0b3018.html"
          }
        ],
        busImage: []
      }
    },
    {
      shopName: "\u898B\u4ED8\u5E97",
      shopLink: "/shop/iwatashi/mituke/",
      address: "\u3012438-0086\u3000\u78D0\u7530\u5E02\u898B\u4ED86038-5",
      phone: "0538-21-4111",
      time: "9:30\uFF5E21:00",
      globalName: "mituke",
      position: {
        lat: "34.735746",
        lng: "137.85849"
      },
      detail: {
        title: "\u78D0\u7530\u30D0\u30A4\u30D1\u30B9\u898B\u4ED8I.C.\u5357\u5074\u306B\u3001\u5E73\u621026\u5E74\u30AA\u30FC\u30D7\u30F3\u3002<br>\u304A\u3044\u3057\u3044\u9999\u308A\u6F02\u3046\u30D9\u30FC\u30AB\u30EA\u30FC\u30B3\u30FC\u30CA\u30FC\u3092\u306F\u3058\u3081\u3001\u5B89\u5168\u30FB\u5B89\u5FC3\u3067\u3001<br class='d-none-mobile'>\u65B0\u9BAE\u306A\u5546\u54C1\u3092\u591A\u6570\u53D6\u308A\u63C3\u3048\u3066\u304A\u308A\u307E\u3059\u3002",
        image: [
          {
            alt: "",
            url: "/assets/images/photo01 (34).webp"
          },
          {
            alt: "",
            url: "/assets/images/photo02 (28).webp"
          },
          {
            alt: "",
            url: "/assets/images/photo03 (21).webp"
          }
        ],
        googleMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.7466431775633!2d137.85582851553303!3d34.736780088792194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601ae415d24c98a3%3A0x52b46056ac152ca8!2z6YGg6YmE44K544OI44KiIOimi-S7mOW6lw!5e0!3m2!1sja!2sjp!4v1589429008261!5m2!1sja!2sjp",
        nearestBusStation: "\u300E\u9060\u9244\u30B9\u30C8\u30A2\u898B\u4ED8\u5E97\u300F\u4E0B\u8ECA\u3000\u5F92\u6B695\u5206 ",
        numberParking: "159\u53F0",
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
          SHOP_SERVICES.passto
        ],
        tenant: [
          {
            name: "\u30B8\u30E3\u30D6\uFF08\u30AF\u30EA\u30FC\u30CB\u30F3\u30B0\uFF09",
            image: "/assets/images/bnr_h-hakuyosha.webp",
            detailTenantUrl: "http://h-hakuyosha.com/"
          },
          {
            name: "\u8CB7\u53D6\u5C02\u9580\u3044\u304F\u3089\u3084",
            image: "/assets/images/mitsuke.jpg",
            detailTenantUrl: "https://www.kaitori-ikuraya.jp/store/entstore-mitsuke/"
          }
        ],
        busImage: []
      }
    }
  ],
  hukuroishi: [
    {
      shopName: "\u6D45\u7FBD\u5E97\u30FB\u30DE\u30C4\u30E2\u30C8\u30AD\u30E8\u30B7\u6D45\u7FBD\u5E97",
      shopLink: "/shop/hukuroishi/asaba/",
      address: "\u3012437-1122\u3000\u888B\u4E95\u5E02\u6D45\u5CA1350",
      phone: "0538-23-8951",
      phone_others: "\uFF08\u30DE\u30C4\u30E2\u30C8\u30AD\u30E8\u30B7\u6D45\u7FBD\u5E97 \uFF1A0538-30-2900\uFF09",
      time: "9:30\uFF5E20:00",
      time_others: "\uFF08\u30DE\u30C4\u30E2\u30C8\u30AD\u30E8\u30B7\u6D45\u7FBD\u5E97\u30009\uFF1A30\uFF5E20\uFF1A00\uFF09",
      globalName: "asaba",
      position: {
        lat: "34.709573",
        lng: "137.91742"
      },
      detail: {
        title: "\u65B0\u9BAE\u306A\u98DF\u6750\u306F\u3082\u3061\u308D\u3093\u306E\u3053\u3068\u3001\u5E97\u5185\u3092\u5F69\u308B\u8DA3\u5411\u3092\u3053\u3089\u3057\u305F<br class='d-none-mobile'>\u5B63\u7BC0\u306E\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u3067\u3001\u304A\u8CB7\u3044\u7269\u306E\u3072\u3068\u6642\u3092\u304A\u697D\u3057\u307F\u304F\u3060\u3055\u3044\u3002",
        image: [
          {
            alt: "",
            url: "/assets/images/photo01 (35).webp"
          },
          {
            alt: "",
            url: "/assets/images/photo02 (29).webp"
          },
          {
            alt: "",
            url: "/assets/images/photo03 (22).webp"
          }
        ],
        googleMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.82293946238!2d137.9157288155325!3d34.70964559024619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601ae55406534d4d%3A0x1fb8caf03e5551bf!2z6YGg6YmE44K544OI44KiIOa1hee-veW6lw!5e0!3m2!1sja!2sjp!4v1589429069119!5m2!1sja!2sjp",
        nearestBusStation: "\u300E\u6D45\u7FBD\u5317\u5C0F\u524D\u300F\u4E0B\u8ECA\u3000\u5F92\u6B698\u5206 ",
        numberParking: "750\u53F0",
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
          SHOP_SERVICES.pay
        ],
        tenant: [
          {
            name: "\u30DE\u30C4\u30E2\u30C8\u30AD\u30E8\u30B7\u6D45\u7FBD\u5E97",
            image: "/assets/images/bnr_matsukiyo.webp",
            detailTenantUrl: "http://www.matsukiyo.co.jp/"
          }
        ],
        busImage: []
      }
    },
    {
      shopName: "\u888B\u4E95\u4E45\u80FD\u5E97",
      shopLink: "/shop/hukuroishi/kuno/",
      address: "\u3012437-0061\u3000\u888B\u4E95\u5E02\u4E45\u80FD1265",
      phone: "0538-31-6600",
      time: "9:30\uFF5E21:00",
      globalName: "kuno",
      position: {
        lat: "34.756899",
        lng: "137.91826"
      },
      detail: {
        title: "\u54C1\u8CEA\u30FB\u9BAE\u5EA6\u306B\u3053\u3060\u308F\u3063\u305F\u751F\u9BAE\u54C1\u3084\u304A\u60E3\u83DC\u304C\u3044\u3063\u3071\u3044\uFF01<br class='d-none-mobile'>\u51B7\u51CD\u98DF\u54C1\u306A\u3069\u306E\u300C\u7C21\u4FBF\u54C1\u300D\u3084\u300C\u5730\u5143\u5546\u54C1\u300D\u306E\u54C1\u305E\u308D\u3048\u3082\u8C4A\u5BCC\u3067\u3059\u3002 <br class='d-none-mobile'>\u5730\u57DF\u306E\u304A\u5BA2\u69D8\u306B\u3001\u697D\u3057\u3044\u304A\u8CB7\u3044\u7269\u306E\u6642\u9593\u3092\u63D0\u4F9B\u3057\u3066\u307E\u3044\u308A\u307E\u3059\u3002",
        image: [
          {
            alt: "",
            url: "/assets/images/shop/hukuroishi/kuno/20240425_49\u53F7\u5E97\u2460.webp"
          },
          {
            alt: "",
            url: "/assets/images/shop/hukuroishi/kuno/20240425_49\u53F7\u5E97\u2461.webp"
          },
          {
            alt: "",
            url: "/assets/images/shop/hukuroishi/kuno/20240425_49\u53F7\u5E97\u2462.webp"
          }
        ],
        googleMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2317.867129462628!2d137.9162448487008!3d34.756622335943774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601ae5b6e10b8327%3A0xb961daf41745e657!2z6YGg6YmE44K544OI44Ki6KKL5LqV5LmF6IO95bqX!5e0!3m2!1sja!2sjp!4v1711004465334!5m2!1sja!2sjp",
        nearestBusStation: "\u888B\u4E95\u99C5\u304B\u3089\u8ECA\u30675\u5206 <br>\u79CB\u8449\u30D0\u30B9\uFF08\u79CB\u8449\u4E2D\u9060\u7DDA\u3001\u79CB\u8449\u7DDA\uFF09<br>\u300C\u4E00\u8ED2\u5BB6\u300D\u30D0\u30B9\u505C\u4E0B\u8ECA\u3000\u5F92\u6B691\u5206",
        numberParking: "160\u53F0",
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
          SHOP_SERVICES.mobile_supermarket_kuno
        ],
        tenant: [
          {
            name: "\u30B8\u30E3\u30D6\uFF08\u30AF\u30EA\u30FC\u30CB\u30F3\u30B0\uFF09",
            image: "/assets/images/bnr_h-hakuyosha.webp",
            detailTenantUrl: "http://h-hakuyosha.com/"
          }
        ],
        busImage: []
      }
    }
  ],
  kakegawashi: [
    {
      shopName: "\u639B\u5DDD\u4E2D\u592E\u5E97",
      shopLink: "/shop/kakegawashi/kakegawa/",
      address: "\u3012436-0056\u3000\u639B\u5DDD\u5E02\u4E2D\u592E2-7-1",
      phone: "0537-61-1111",
      time: "9:30\uFF5E21:00",
      globalName: "kakegawa",
      position: {
        lat: "34.770039",
        lng: "138.00837"
      },
      detail: {
        title: "\u639B\u5DDD\u99C5\u304B\u3089\u5F92\u6B695\u5206\u3002<br>\u8FD1\u96A3\u306E\u7686\u69D8\u306B\u4FE1\u983C\u3055\u308C\u3001\u611B\u3055\u308C\u3001\u7B11\u9854\u6EA2\u308C\u308B\u304A\u5E97\u4F5C\u308A\u3092\u76EE\u6307\u3057\u307E\u3059\u3002",
        image: [
          {
            alt: "",
            url: "/assets/images/photo01 (37).webp"
          },
          {
            alt: "",
            url: "/assets/images/photo02 (30).webp"
          },
          {
            alt: "",
            url: "/assets/images/photo03 (23).webp"
          }
        ],
        googleMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.4260448003674!2d138.00618131553367!3d34.770048387008124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601af98f75eaaf57%3A0xb16f4689a44451c2!2z6YGg6YmE44K544OI44KiIOaOm-W3neS4reWkruW6lw!5e0!3m2!1sja!2sjp!4v1589429124852!5m2!1sja!2sjp",
        nearestBusStation: "\u300E\u52B4\u91D1\u639B\u5DDD\u652F\u5E97\u524D\uFF08\u639B\u5DDD\u81EA\u4E3B\u904B\u884C\u30D0\u30B9 \u5E02\u8857\u5730\u5FAA\u74B0\u7DDA\u3010\u5357\u56DE\u308A\u3011\uFF09\u300F\u4E0B\u8ECA\u3000\u5F92\u6B693\u5206 ",
        numberParking: "99\u53F0",
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
          SHOP_SERVICES.pay
        ],
        tenant: [
          {
            name: "\u304B\u308B\u3093\uFF08\u30D1\u30BD\u30B3\u30F3\u6559\u5BA4\uFF09",
            image: "/assets/images/bnr_karun.webp",
            detailTenantUrl: "https://karunchan.com/map/entetsukakegawa.html"
          }
        ],
        busImage: []
      }
    }
  ],
  kikugawashi: [
    {
      shopName: "\u83CA\u5DDD\u5E97\u30FB\u30DE\u30C4\u30E2\u30C8\u30AD\u30E8\u30B7\u83CA\u5DDD\u5E97\u30FB\u30B7\u30E3\u30C8\u30EC\u30FC\u30BC\u83CA\u5DDD\u5E97",
      shopLink: "/shop/kikugawashi/kikugawa/",
      address: "\u3012439-0006\u3000\u83CA\u5DDD\u5E02\u5800\u4E4B\u5185546-1",
      phone: "0537-37-2000",
      phone_others: "\uFF08\u30DE\u30C4\u30E2\u30C8\u30AD\u30E8\u30B7\u83CA\u5DDD\uFF1A0537-37-1900\uFF09<br> \uFF08\u8ABF\u5264\u85AC\u5C40\u76F4\u901A\uFF1ATEL\u30FBFAX 0537-37-3337\uFF09<br> \uFF08\u30B7\u30E3\u30C8\u30EC\u30FC\u30BC\u9060\u9244\u30B9\u30C8\u30A2\u83CA\u5DDD\u5E97\uFF1A0537-29-5011\uFF09",
      time: "9:30\uFF5E21:00",
      time_others: "\uFF08\u30DE\u30C4\u30E2\u30C8\u30AD\u30E8\u30B7\u83CA\u5DDD\u5E97\u30009\uFF1A30\uFF5E21\uFF1A00<br>\u8ABF\u5264\u85AC\u5C40\u30DE\u30C4\u30E2\u30C8\u30AD\u30E8\u30B7\u83CA\u5DDD\u5E97<br>\u6708\uFF5E\u91D1\u66DC\u65E5\u30009\uFF1A00\uFF5E19\uFF1A00<br>\u571F\u66DC\u65E5\u30009\uFF1A00\uFF5E14\uFF1A00\u3000\u65E5\u30FB\u795D\u3000\u5B9A\u4F11\u65E5<br>\u30B7\u30E3\u30C8\u30EC\u30FC\u30BC\u9060\u9244\u30B9\u30C8\u30A2\u83CA\u5DDD\u5E97\u30009\uFF1A30\uFF5E21\uFF1A00",
      globalName: "kikugawa",
      position: {
        lat: "34.763448",
        lng: "138.087595"
      },
      shopBanner: {
        imgUrl: "/assets/images/bnr_matsukiyo_dutyfree_kikugawa_2.jpg",
        filePath: "/assets/pdf/dutyfree.pdf",
        alt: "\u30DE\u30C4\u30E2\u30C8\u30AD\u30E8\u30B7\uFF08\u677E\u672C\u6E05\uFF09\u83CA\u5DDD\u5E97 \u514D\u7A0E\u5BFE\u5FDC\uFF1ATax-free 8\uFF05OFF\uFF01"
      },
      detail: {
        title: "JR\u83CA\u5DDD\u99C5\u5317\u5074\u306E\u300C\u3048\u3093\u3066\u3064\u83CA\u5DDD\u30B7\u30E7\u30C3\u30D4\u30F3\u30B0\u30BB\u30F3\u30BF\u30FC\u300D\u5185\u306B\u5E73\u621025\u5E74\u30AA\u30FC\u30D7\u30F3\u3002<br>\u9060\u9244\u30B9\u30C8\u30A2\u5185\u3067\u3082\u6700\u5927\u898F\u6A21\u306E\u5E83\u3005\u5E97\u5185\u306B\u3001\u751F\u9BAE\u98DF\u54C1\u3092\u59CB\u3081\u3001<br>\n				\u5730\u5143\u7279\u7523\u306E\u304A\u8336\u3084\u91CE\u83DC\u7B49\u306E\u304A\u53D6\u308A\u6271\u3044\u3057\u3066\u304A\u308A\u307E\u3059\u3002<br>\u30DE\u30C4\u30E2\u30C8\u30AD\u30E8\u30B7\u83CA\u5DDD\u5E97\u5185\u306B\u8ABF\u5264\u85AC\u5C40\u3082\u4F75\u8A2D\u3055\u308C\u3066\u3044\u307E\u3059\u3002<br>\n				\u4EE4\u548C4\u5E742\u6708\u306B\u30B7\u30E3\u30C8\u30EC\u30FC\u30BC\u9060\u9244\u30B9\u30C8\u30A2\u83CA\u5DDD\u5E97\u304C\u30AA\u30FC\u30D7\u30F3\u3002<br>\u4EBA\u6C17\u306E\u30B9\u30A6\u30A3\u30FC\u30C4\u3001\u30A2\u30A4\u30B9\u30AF\u30EA\u30FC\u30E0\u6570\u591A\u304F\u8CA9\u58F2\u3057\u3066\u304A\u308A\u307E\u3059\u3002\u662F\u975E\u3001\u3054\u5229\u7528\u304F\u3060\u3055\u3044\u3002",
        image: [
          {
            alt: "",
            url: "/assets/images/photo01 (39).webp"
          },
          {
            alt: "",
            url: "/assets/images/photo03 (25).webp"
          },
          {
            alt: "",
            url: "/assets/images/photo04 (1).webp"
          }
        ],
        googleMapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d26221.562594726794!2d138.087507!3d34.763267!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8fad7c1863a92e66!2z6YGg6YmE44K544OI44KiIOiPiuW3neW6lw!5e0!3m2!1sja!2sjp!4v1589429168220!5m2!1sja!2sjp",
        nearestBusStation: " \u300EJR\u83CA\u5DDD\u99C5\u300F\u4E0B\u8ECA\u3000\u5F92\u6B695\u5206 ",
        numberParking: "157\u53F0",
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
          SHOP_SERVICES.pay
        ],
        tenant: [
          {
            name: "\u30DE\u30C4\u30E2\u30C8\u30AD\u30E8\u30B7\u83CA\u5DDD\u5E97",
            image: "/assets/images/bnr_matsukiyo.webp",
            detailTenantUrl: "http://www.matsukiyo.co.jp/"
          },
          {
            name: "\u30B8\u30E3\u30D6\uFF08\u30AF\u30EA\u30FC\u30CB\u30F3\u30B0\uFF09",
            image: "/assets/images/bnr_h-hakuyosha.webp",
            detailTenantUrl: "http://h-hakuyosha.com/"
          },
          {
            name: "\u304B\u308B\u3093\uFF08\u30D1\u30BD\u30B3\u30F3\u6559\u5BA4\uFF09",
            image: "/assets/images/bnr_karun.webp",
            detailTenantUrl: "https://karunchan.com/map/kikugawa.html"
          },
          {
            name: "\u30B7\u30E3\u30C8\u30EC\u30FC\u30BC",
            image: "/assets/images/bnr_chateraise.webp",
            detailTenantUrl: "https://www.chateraise.co.jp/ec/shop/o618060/"
          },
          {
            name: "\u30AB\u30FC\u30B5\u30AB\u30E9\u30FC\uFF08\u30D8\u30A2\u30AB\u30E9\u30FC\uFF09",
            image: "/assets/images/CASA73.webp",
            detailTenantUrl: "https://sbhp.e-kinco.com/m015/"
          }
        ],
        busImage: []
      }
    }
  ],
  kosaishi: [
    {
      shopName: "\u6E56\u897F\u5E97\u30FB\u30B7\u30E3\u30C8\u30EC\u30FC\u30BC\u6E56\u897F\u5E97",
      shopLink: "/shop/kosaishi/kosai/",
      address: "\u3012431-0431\u3000\u6E56\u897F\u5E02\u9DF2\u6D25760-2",
      phone: "053-576-2331",
      phone_others: "\uFF08\u30B7\u30E3\u30C8\u30EC\u30FC\u30BC\u9060\u9244\u30B9\u30C8\u30A2\u6E56\u897F\u5E97:053-575-2277\uFF09",
      time: "9:30\uFF5E21:00",
      time_others: "\uFF08\u30B7\u30E3\u30C8\u30EC\u30FC\u30BC\u9060\u9244\u30B9\u30C8\u30A2\u6E56\u897F\u5E97\u30009:00\uFF5E21:00\uFF09",
      showless: true,
      globalName: "kosai",
      position: {
        lat: "34.713011",
        lng: "137.543444"
      },
      detail: {
        title: "JR\u9DF2\u6D25\u99C5\u304B\u3089\u5357\u3078400m\u3002\u65B0\u9BAE\u3067\u5024\u9803\u611F\u306E\u3042\u308B\u751F\u9BAE\u98DF\u54C1\u3001\u3067\u304D\u305F\u3066\u306E\u304A\u60E3\u83DC\u304C\u4EBA\u6C17\u3067\u3059\u3002<br>\n                            \u6577\u5730\u5185\u306B\u30B7\u30E3\u30C8\u30EC\u30FC\u30BC\u9060\u9244\u30B9\u30C8\u30A2\u6E56\u897F\u5E97\u304C\u96A3\u63A5\u3057\u304A\u8CB7\u7269\u304C\u697D\u3057\u3081\u307E\u3059\u3002",
        image: [
          {
            alt: "",
            url: "/assets/images/photo01 (40).webp"
          },
          {
            alt: "",
            url: "/assets/images/photo02 (32).webp"
          },
          {
            alt: "",
            url: "/assets/images/photo03 (26).webp"
          }
        ],
        googleMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.694724496677!2d137.54116971553236!3d34.712878990072994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601b299469e31383%3A0xb87ba57777c4e30!2z6YGg6YmE44K544OI44KiIOa5luilv-W6lw!5e0!3m2!1sja!2sjp!4v1589429245794!5m2!1sja!2sjp",
        nearestBusStation: "\u300E\u9DF2\u6D25\u99C5\uFF08JR\uFF09\u300F\u4E0B\u8ECA\u3000\u5F92\u6B695\u5206 ",
        numberParking: "168\u53F0",
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
          SHOP_SERVICES.mobile_supermarket_kasai2
        ],
        tenant: [
          {
            name: "\u30B7\u30E3\u30C8\u30EC\u30FC\u30BC",
            image: "/assets/images/bnr_chateraise.webp",
            detailTenantUrl: "https://www.chateraise.co.jp/ec/shop/o618061/"
          },
          {
            name: "\u9060\u5DDE\u9244\u9053\u4E0D\u52D5\u7523\u55B6\u696D\u6240\uFF08\u4E0D\u52D5\u7523\uFF09",
            image: null,
            detailTenantUrl: "http://home.entetsu.co.jp/office/"
          },
          {
            name: "\u30AF\u30EA\u30FC\u30CB\u30F3\u30B0\u4E2D\u65E5",
            image: null,
            detailTenantUrl: ""
          }
        ],
        busImage: []
      }
    }
  ],
  toyokawashi: [
    {
      shopName: "\u8C4A\u5DDD\u5E97\u30FB\u30DE\u30C4\u30E2\u30C8\u30AD\u30E8\u30B7\u8C4A\u5DDD\u5E97",
      shopLink: "/shop/toyokawashi/toyokawa/",
      address: "\u3012442-0884\u3000\u8C4A\u5DDD\u5E02\u5149\u660E\u753A1-19",
      phone: "0533-83-9011",
      phone_others: "\uFF08\u30DE\u30C4\u30E2\u30C8\u30AD\u30E8\u30B7\u8C4A\u5DDD\u5E97\uFF1A0533-80-2910\uFF09",
      time: "9:30\uFF5E21:00",
      time_others: "\uFF08\u30DE\u30C4\u30E2\u30C8\u30AD\u30E8\u30B7\u8C4A\u5DDD\u5E97\u30009\uFF1A30\uFF5E21\uFF1A00\uFF09",
      globalName: "toyokawa",
      position: {
        lat: "34.815775",
        lng: "137.372746"
      },
      detail: {
        title: "\u9BAE\u5EA6\u306B\u3053\u3060\u308F\u3063\u305F\u751F\u9BAE\u98DF\u54C1\u3001\u7C21\u4FBF\u6027\u306E\u9AD8\u3044\u60E3\u83DC\u3001\u51B7\u51CD\u98DF\u54C1\u306A\u3069\u3001<br class='d-none-mobile'>\u8C4A\u5BCC\u306A\u54C1\u63C3\u3048\u3067\u304A\u5BA2\u69D8\u306E\u6BCE\u65E5\u3092\u5FDC\u63F4\u3044\u305F\u3057\u307E\u3059\u3002",
        image: [
          {
            alt: "",
            url: "/assets/images/photo01 (41).webp"
          },
          {
            alt: "",
            url: "/assets/images/photo02 (33).webp"
          },
          {
            alt: "",
            url: "/assets/images/photo03 (27).webp"
          }
        ],
        googleMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.6116984216833!2d137.3705747155345!3d34.815709784556965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6004cc210ee223eb%3A0x5992a75ccfdb5654!2z6YGg6YmE44K544OI44KiIOixiuW3neW6lw!5e0!3m2!1sja!2sjp!4v1589429294642!5m2!1sja!2sjp",
        nearestBusStation: "\u300E\uFF08\u8C4A\u9244\u30D0\u30B9\uFF09\u5357\u5927\u901A\u56DB\u4E01\u76EE\u300F\u4E0B\u8ECA \u5F92\u6B693\u5206",
        numberParking: "258\u53F0",
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
          SHOP_SERVICES.mobile_supermarket_kasai4
        ],
        tenant: [
          {
            name: "\u30DE\u30C4\u30E2\u30C8\u30AD\u30E8\u30B7\u8C4A\u5DDD\u5E97",
            image: "/assets/images/bnr_matsukiyo.webp",
            detailTenantUrl: "http://www.matsukiyo.co.jp/"
          },
          {
            name: "Can Do\uFF08100\u5186\u5747\u4E00\uFF09",
            image: "/assets/images/bnr_cando.webp",
            detailTenantUrl: "http://www.cando-web.co.jp/"
          },
          {
            name: "\u30AF\u30EA\u30FC\u30CB\u30F3\u30B0\u30A2\u30DD\u30ED",
            image: "/assets/images/bnr_apollo.webp",
            detailTenantUrl: ""
          },
          {
            name: "\u9060\u9244\u30B9\u30C8\u30A2\u8C4A\u5DDD\u5E97 \u30A4\u30D9\u30F3\u30C8\u30B9\u30DA\u30FC\u30B9\u51FA\u5E97\u8005 \u52DF\u96C6\u6848\u5185",
            image: "/assets/images/bnr_toyokawa_event.webp",
            detailTenantUrl: "http://entstore-toyokawa.com/"
          }
        ],
        busImage: []
      }
    }
  ],
  toyohashishi: [
    {
      shopName: "\u8C4A\u6A4B\u66D9\u5E97",
      shopLink: "/shop/toyohashishi/toyohashiakebono/",
      address: "\u3012441-8151\u3000\u8C4A\u6A4B\u5E02\u66D9\u753A\u5B57\u6E2C\u70B976",
      phone: "0532-46-6222",
      time: "9:30\uFF5E21:00",
      time_weekends: "\uFF08\u65E5\u66DC\u306E\u307F9\uFF1A00\uFF5E21\uFF1A00\uFF09",
      globalName: "toyohashiakebono",
      position: {
        lat: "34.725063",
        lng: "137.398908"
      },
      detail: {
        title: "\n				2021\u5E74\u590F\u306B\u3001\u8C4A\u6A4B\u5E02\u306B\u521D\u51FA\u5E97\uFF01\u300C\u7B11\u9854\u300D\u3068\u300C\u98DF\u306E\u60C5\u5831\u300D\u304C\u3042\u3075\u308C\u308B\u304A\u5E97\u3067\u3059\u3002<br>\n				\u65B0\u9BAE\u3067\u7F8E\u5473\u3057\u3044\u98DF\u54C1\u3068\u3001\u8C4A\u5BCC\u306A\u30E1\u30CB\u30E5\u30FC\u7D39\u4ECB\u3082\u9B45\u529B\u3067\u3059\u3002<br>\n				\u6BCE\u65E5\u306E\u304A\u8CB7\u7269\u306F\u3082\u3061\u308D\u3093\u3001\u3054\u8D08\u7B54\u54C1\u3084\u30CF\u30EC\u306E\u65E5\u306E\u3054\u4E88\u7D04\u307E\u3067\u3001\u5F53\u5E97\u306B\u304A\u4EFB\u305B\u304F\u3060\u3055\u3044\uFF01\n			",
        image: [
          {
            alt: "",
            url: "/assets/images/photo01 (42).webp"
          },
          {
            alt: "",
            url: "/assets/images/photo02 (34).webp"
          },
          {
            alt: "",
            url: "/assets/images/photo03 (28).webp"
          }
        ],
        googleMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.22276464884!2d137.3965460151312!3d34.724778880428374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6004d3bb60f45e29%3A0x2146a3456104efae!2z44CSNDQxLTgxNTEg5oSb55-l55yM6LGK5qmL5biC5puZ55S65ris54K577yX77yW!5e0!3m2!1sja!2sjp!4v1624496047349!5m2!1sja!2sjp",
        nearestBusStation: "\u300E\uFF08\u8C4A\u9244\u30D0\u30B9\uFF09\u4E09\u672C\u6728\u753A\u300F\u4E0B\u8ECA\u3000\u5F92\u6B699\u5206",
        numberParking: "61\u53F0",
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
          SHOP_SERVICES.pay
        ],
        tenant: [],
        busImage: []
      }
    }
  ],
  shuchigun: [
    {
      shopName: "\u68EE\u5E97",
      shopLink: "/shop/shuchigun/mori/",
      address: "\u3012437-0215\u3000\u9759\u5CA1\u770C\u5468\u667A\u90E1\u68EE\u753A\u68EE1657-21",
      phone: "0538-24-8570",
      time: "9:00\uFF5E20:00",
      globalName: "mori",
      position: {
        lat: "34.82967149548525",
        lng: "137.92169885451258"
      },
      detail: {
        title: "\u5929\u7ADC\u6D5C\u540D\u6E56\u9244\u9053\u300C\u9060\u5DDE\u68EE\u99C5\u300D\u304B\u3089\u5F92\u6B695\u5206\u3002<br>\u30B3\u30F3\u30D1\u30AF\u30C8\u3067\u304A\u8CB7\u3044\u7269\u3057\u3084\u3059\u3044\u5E97\u5185\u306B\u81EA\u6162\u306E\u751F\u9BAE\u98DF\u54C1\u3001\u304A\u60E3\u83DC\u3092\u305D\u308D\u3048\u307E\u3057\u305F\u3002<br>\u65E5\u5E38\u306E\u304A\u8CB7\u3044\u7269\u304B\u3089\u7279\u5225\u306A\u65E5\u306E\u3054\u3061\u305D\u3046\u307E\u3067\u305C\u3072\u3054\u5229\u7528\u304F\u3060\u3055\u3044\u3002",
        image: [
          {
            alt: "",
            url: "/assets/images/mori-1.jpg"
          },
          {
            alt: "",
            url: "/assets/images/mori-2.jpg"
          },
          {
            alt: "",
            url: "/assets/images/mori-3.jpg"
          }
        ],
        googleMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.0626468474507!2d137.91910247631563!3d34.8295173762893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601ae2ccad75b95d%3A0xb387260a31c2f23!2z44CSNDM3LTAyMTUg6Z2Z5bKh55yM5ZGo5pm66YOh5qOu55S65qOu77yR77yW77yV77yX4oiS77yS77yR!5e0!3m2!1sja!2sjp!4v1759285984129!5m2!1sja!2sjp",
        nearestBusStation: "\u5929\u7ADC\u6D5C\u540D\u6E56\u9244\u9053\u300E\u9060\u5DDE\u68EE\u99C5\u300F\u4E0B\u8ECA\u5F92\u6B695\u5206<br />\u79CB\u8449\u30D0\u30B9\uFF08\u79CB\u8449\u4E2D\u9060\u7DDA\u3001\u78D0\u7530\u7DDA\u3001\u5409\u5DDD\u7DDA\uFF09\u300EJA\u9060\u5DDE\u68EE\u652F\u5E97\u300F\u4E0B\u8ECA\u5F92\u6B691\u5206",
        numberParking: "63\u53F0",
        services: [
          SHOP_SERVICES.food_tray_recycling,
          SHOP_SERVICES.paper_carton_recycling,
          SHOP_SERVICES.plastic_bottle_recycling,
          SHOP_SERVICES.alumi,
          SHOP_SERVICES.bakery,
          SHOP_SERVICES.atm_seven
        ],
        tenant: [
          {
            name: "\u30B8\u30E3\u30D6(\u30AF\u30EA\u30FC\u30CB\u30F3\u30B0)",
            image: "/assets/images/bnr_h-hakuyosha.webp",
            detailTenantUrl: "https://h-hakuyosha.com/"
          }
        ],
        busImage: []
      }
    }
  ]
};

/**
 * Đọc NGÂN SÁCH từ câu người dùng gõ, và ước tính chi phí nấu một món.
 *
 * Vì sao cần: đề bài đòi 「món ăn trong tầm giá 2000 yên」 phải ra kết quả đúng.
 * Đã đo trên bản trước — hoàn toàn sai, vì máy tìm kiếm chỉ so chuỗi:
 *
 *     2000円以内の料理  ->  0 kết quả
 *     1000円以下        -> 16 kết quả   (nhiều hơn 2000円, vô lý)
 *
 * Nguyên nhân: "2000" chỉ được coi là một từ khoá, không ai hiểu nó là GIÁ.
 * Nên phải tách riêng: đọc số tiền ra khỏi câu, rồi LỌC theo số tiền đó.
 *
 * Chạy bằng luật, không cần AI — đúng ràng buộc "web không được chết vì AI".
 */

/**
 * Bỏ tiền tố nhóm gia vị kiểu "A）しょうゆ" và phần ghi chú trong ngoặc.
 * Tên sau khi dọn mới khớp được với tên sản phẩm trong data/demo-products.json.
 */
function cleanIngredientName(name) {
  return String(name || '')
    .replace(/^[A-Za-z][）)．.、,]\s*/, '')
    .replace(/[（(].*?[）)]/g, '')
    .trim()
}

/** Đơn vị tiền tệ người dùng có thể gõ, ở 6 ngôn ngữ */
const YEN_WORD = '(?:円|yen|yên|en|엔|日元|元|บาท|¥)';

/** "tối đa / trong vòng" — 2000円以内 */
const UNDER_WORD =
  '(?:以内|以下|まで|未満|以下で|以内で|under|below|less than|within|max|budget|' +
  'dưới|duoi|trong tầm|trong tam|tối đa|toi da|không quá|khong qua|' +
  '以内的|以下的|이하|이내|ไม่เกิน)';

/** "từ … trở lên" — 2000円以上. Phải xét TRƯỚC, nếu không sẽ hiểu ngược thành trần giá */
const OVER_WORD =
  '(?:以上|超|より上|over|above|more than|at least|' +
  'trên|tren|từ|tu|hơn|hon|以上的|이상|มากกว่า)';

/** "khoảng chừng" — 2000円くらい */
const AROUND_WORD =
  '(?:くらい|ぐらい|程度|前後|ほど|around|about|approx|roughly|' +
  'khoảng|khoang|tầm|tam|cỡ|co|左右|정도|쯤|ประมาณ)';

/** Bỏ dấu phân cách hàng nghìn: 1,000 / 1.000 / 1 000 */
const toNumber = (s) => Number(String(s).replace(/[,.\s]/g, ''));

/**
 * Đọc ngân sách từ câu.
 *
 * @returns {{min:number, max:number, raw:number, kind:'under'|'around'}|null}
 *
 * Ví dụ:
 *   2000円以内        -> { min: 0,    max: 2000, kind: 'under'  }
 *   2000円くらい      -> { min: 1600, max: 2400, kind: 'around' }
 *   dưới 2000 yên     -> { min: 0,    max: 2000, kind: 'under'  }
 *   món trong tầm giá 2000 yên -> { min: 0, max: 2000, kind: 'under' }
 */
function detectBudget(text) {
  const s = String(text || '');
  if (!s) return null

  // Số tiền phải có ít nhất 2 chữ số để không bắt nhầm "3 người ăn", "15 phút"
  const NUM = '(\\d{1,3}(?:[,.\\s]\\d{3})+|\\d{2,6})';

  // Giữa chữ chỉ định và số tiền có thể còn vài chữ: "trong tầm GIÁ 2000 yên",
  // "under a budget of 2000 yen". Cho phép tối đa 8 ký tự không phải chữ số.
  const GAP = '\\D{0,8}';

  // 1. Dạng "…以内 / dưới …" — chữ chỉ định có thể đứng trước hoặc sau số tiền
  const under = [
    new RegExp(NUM + '\\s*' + YEN_WORD + '\\s*' + UNDER_WORD, 'i'),
    new RegExp(UNDER_WORD + GAP + NUM + '\\s*' + YEN_WORD, 'i'),
    // "予算2000円" / "ngân sách 2000 yên" — có chữ ngân sách thì cũng là trần giá
    new RegExp('(?:予算|ngân sách|ngan sach|budget|预算|예산)\\D{0,4}' + NUM + '\\s*' + YEN_WORD + '?', 'i'),
  ];
  for (const re of under) {
    const m = s.match(re);
    if (m) {
      const v = toNumber(m[1]);
      if (v >= 10) return { min: 0, max: v, raw: v, kind: 'under', match: m[0] }
    }
  }

  // 2. Dạng "khoảng 2000円" — cho biên ±20% để không quá khắt khe
  const around = [
    new RegExp(NUM + '\\s*' + YEN_WORD + '\\s*' + AROUND_WORD, 'i'),
    new RegExp(AROUND_WORD + GAP + NUM + '\\s*' + YEN_WORD, 'i'),
  ];
  for (const re of around) {
    const m = s.match(re);
    if (m) {
      const v = toNumber(m[1]);
      if (v >= 10) {
        return {
          min: Math.round(v * 0.8),
          max: Math.round(v * 1.2),
          raw: v,
          kind: 'around',
          match: m[0],
        }
      }
    }
  }

  // 3. Dạng "từ 2000円 trở lên" — sàn giá, không phải trần
  const over = [
    new RegExp(NUM + '\\s*' + YEN_WORD + '\\s*' + OVER_WORD, 'i'),
    new RegExp(OVER_WORD + GAP + NUM + '\\s*' + YEN_WORD, 'i'),
  ];
  for (const re of over) {
    const m = s.match(re);
    if (m) {
      const v = toNumber(m[1]);
      if (v >= 10) return { min: v, max: Infinity, raw: v, kind: 'over', match: m[0] }
    }
  }

  // 4. CHỈ có số tiền, không kèm chữ chỉ định: 「ăn gì với 2000 yên」,
  //    「2000円で作れる料理」, 「what can i eat with 2000 yen」.
  //
  //    Nhắc tới tiền trong câu hỏi về đồ ăn thì gần như luôn là NGÂN SÁCH.
  //    Trước đây dạng này không được nhận, nên 「ăn gì với 2000 yên」 đem cả câu
  //    đi tìm theo chữ và ra 0 kết quả.
  const bare = String(s).match(new RegExp(NUM + '\\s*' + YEN_WORD, 'i'));
  if (bare) {
    const v = toNumber(bare[1]);
    if (v >= 10) return { min: 0, max: v, raw: v, kind: 'under', match: bare[0], implied: true }
  }

  return null
}

/**
 * Giá dùng tạm cho nguyên liệu không có trong bảng sản phẩm demo.
 *
 * 86,6% nguyên liệu khớp được tên sản phẩm; 13,4% còn lại (hàng hiệu như
 * 「キユーピー 具だくさん和風タルタル」) không có giá. Bỏ qua chúng thì món nào
 * nhiều hàng hiệu sẽ rẻ giả tạo, nên gán một giá trung vị để ước tính ổn định.
 */
const FALLBACK_PRICE = 198;

/**
 * Ước tính chi phí nguyên liệu của một món.
 *
 * ⚠️ Là SỐ ƯỚC TÍNH trên giá DEMO: tính theo giá cả gói/cả bó, không chia theo
 * lượng thực dùng (công thức ghi 「塩 少々」 nhưng vẫn tính nguyên gói muối).
 * Vì vậy giao diện phải ghi rõ 「概算」 + badge DEMO, không được nói là giá thật.
 *
 * @param ingredients   mảng nguyên liệu của công thức
 * @param productByName Map tên sản phẩm -> sản phẩm demo
 */
function estimateRecipeCost(ingredients, productByName) {
  const list = Array.isArray(ingredients) ? ingredients : [];
  if (!list.length) return null

  let total = 0;
  let matched = 0;
  for (const ing of list) {
    const name = cleanIngredientName(typeof ing === 'string' ? ing : ing.name);
    const p = productByName.get(name);
    if (p) {
      total += Number(p.taxIncluded || p.price || 0);
      matched++;
    } else {
      total += FALLBACK_PRICE;
    }
  }

  return {
    total: Math.round(total),
    matched,
    count: list.length,
    // Tỉ lệ nguyên liệu tra được giá thật trong bảng demo — để giao diện nói thật
    confidence: list.length ? Math.round((matched / list.length) * 100) : 0,
  }
}

/**
 * Từ chỉ "món ăn" nói chung — không phải từ khoá tìm kiếm.
 *
 * Cần vì sau khi bỏ vế ngân sách khỏi 「2000円以内の料理」 chỉ còn 「料理」;
 * đem 「料理」 đi tìm thì chỉ ra các món có chữ đó trong tên, trong khi ý người
 * dùng là "MỌI món nấu được với 2000 yên".
 */
/**
 * Nhóm 1 — chữ Nhật/Trung/Hàn/Thái. Bỏ bằng cách cắt chuỗi con, nên MỌI mục
 * phải dài từ 2 ký tự trở lên: để lọt 「物」 thì 「煮物」 bị cắt thành 「煮」,
 * để lọt 「菜」 thì 「白菜」 hỏng theo.
 */
const GENERIC_CJK = [
  '料理', 'レシピ', '御飯', 'ご飯', 'ごはん', '食事', 'メニュー', 'もの', '作れる', '作る',
  '菜谱', '食谱', '요리', '음식', 'อาหาร', 'สูตร',
  // Lời nhờ vả — không phải từ khoá. Thiếu nhóm này thì
  // 「1000円以下の料理を教えて」 còn lại chữ 「教えて」, bị coi là có từ khoá,
  // nên đi tìm theo chữ và LỜ MẤT ngân sách (đã đo: trả về 16 món không lọc giá).
  // Từ để hỏi trong tiếng Nhật — 「2000円で何が作れる？」 sau khi bỏ tiền còn
  // 「何が作れる」, không phải từ khoá nào cả. Mọi mục phải từ 2 ký tự trở lên.
  '何が', '何を', '何か', '何が作れ', 'なにが', 'なにを', 'どんな', 'できる', 'できます',
  '教えて', 'おしえて', 'ください', 'お願い', 'おすすめ', 'オススメ', 'ほしい',
  'ありますか', 'あります', '探して', 'さがして', '知りたい',
  '推荐', '告诉我', '想要', '알려줘', '추천', '찾아', 'แนะนำ', 'บอก',
];

/**
 * Nhóm 2 — chữ Latin. Bỏ theo RANH GIỚI TỪ, không cắt chuỗi con:
 * cắt chuỗi con thì 'an' sẽ xé nát 'banana', 'mon' xé 'lemon'.
 */
const GENERIC_LATIN = [
  'dish', 'dishes', 'recipe', 'recipes', 'meal', 'meals', 'food', 'cook', 'make',
  'món', 'mon', 'món ăn', 'mon an', 'đồ ăn', 'do an', 'nấu', 'nau', 'ăn', 'an',
  'tell me', 'show me', 'give me', 'please', 'suggest', 'recommend', 'find', 'want',
  'cho tôi', 'cho toi', 'gợi ý', 'goi y', 'giới thiệu', 'gioi thieu', 'tìm', 'tim',
  'muốn', 'muon', 'xin', 'hãy', 'hay',

  // Từ để hỏi và từ nối — 「ăn gì với 2000 yên」 sau khi bỏ tiền còn lại
  // 「ăn gì với」, toàn từ rỗng nghĩa. Thiếu nhóm này thì câu bị coi là "có từ
  // khoá" rồi đem 「gì với」 đi tìm, ra 0 kết quả.
  'trở lên', 'tro len', 'trở xuống', 'tro xuong', 'or more', 'or less',
  'gì', 'gi', 'nào', 'nao', 'với', 'voi', 'cùng', 'cung', 'bằng', 'bang',
  'có', 'co', 'không', 'khong', 'thì', 'thi', 'là', 'la', 'của', 'cua',
  'được', 'duoc', 'nên', 'nen', 'bây giờ', 'bay gio', 'hôm nay', 'hom nay',
  'what', 'which', 'can', 'could', 'i', 'we', 'you', 'with', 'for', 'under',
  'today', 'eat', 'buy', 'get', 'something', 'anything', 'some', 'any',
  'the', 'a', 'an', 'is', 'are', 'do', 'does', 'to', 'of', 'on', 'in',
];

/**
 * Bỏ vế ngân sách ra khỏi câu, trả lại phần từ khoá còn lại.
 *
 * 「2000円以内の料理」      -> { rest: '',      generic: true  }  (mọi món)
 * 「2000円以内のカレー」    -> { rest: 'カレー', generic: false }  (chỉ món cà ri)
 */
function stripBudget(text, budget) {
  let rest = String(text || '');
  if (budget?.match) rest = rest.replace(budget.match, ' ');

  // Bỏ trợ từ dính lại ở mép và các từ "món ăn" chung chung
  rest = rest.replace(/^[\s のでがはをにと、,]+|[\s のでがはをにと、,]+$/g, '');
  let stripped = rest;
  for (const w of GENERIC_CJK) {
    stripped = stripped.split(w).join(' ');
  }
  // Cụm dài trước, để 'món ăn' được bỏ trọn thay vì còn trơ lại 'ăn'
  for (const w of [...GENERIC_LATIN].sort((a, b) => b.length - a.length)) {
    const esc = w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    stripped = stripped.replace(new RegExp('(^|[^\\p{L}])' + esc + '(?![\\p{L}])', 'giu'), '$1 ');
  }
  stripped = stripped.replace(/[\s のでがはをにと、,？?！!。.]+/g, ' ').trim();

  return { rest: stripped, generic: stripped.length < 2 }
}

let cache = null;
let cacheStamp = 0;
function dataStamp() {
  let stamp = 0;
  for (const file of ["search-index.json", "demo-promos.json"]) {
    const p = resolveDataFile(file);
    if (p) stamp += fs.statSync(p).mtimeMs;
  }
  return stamp;
}
function resolveDataFile(file) {
  for (const p of [
    path.resolve(process.cwd(), "data", file),
    path.resolve(process.cwd(), "../data", file),
    path.resolve(process.cwd(), "../../data", file)
  ]) {
    if (fs.existsSync(p)) return p;
  }
  return null;
}
function readJson(file) {
  const p = resolveDataFile(file);
  return p ? JSON.parse(fs.readFileSync(p, "utf8")) : null;
}
const DAY = 864e5;
function rollPromoDates(raw) {
  const items = (raw == null ? void 0 : raw.data) || [];
  const anchor = (raw == null ? void 0 : raw.generatedAt) ? new Date(raw.generatedAt).getTime() : 0;
  if (!anchor || !items.length) return items;
  const shiftDays = Math.floor((Date.now() - anchor) / DAY);
  if (shiftDays <= 0) return items;
  const shift = (iso) => iso ? new Date(new Date(iso).getTime() + shiftDays * DAY).toISOString() : iso;
  return items.map((p) => {
    if (p.fixedDate) return p;
    return {
      ...p,
      startDate: shift(p.startDate),
      endDate: shift(p.endDate),
      // Danh dau de giao dien/test biet ngay da duoc dich, khong phai ngay goc
      shiftedDays: shiftDays
    };
  });
}
function flattenShops() {
  var _a, _b;
  const out = [];
  for (const [area, list] of Object.entries(SHOP_LIST)) {
    for (const s of list) {
      out.push({
        id: `shop:${s.globalName}`,
        globalName: s.globalName,
        title: s.shopName,
        route: s.shopLink,
        address: s.address,
        phone: s.phone,
        openTime: s.time,
        area,
        lat: Number((_a = s.position) == null ? void 0 : _a.lat) || null,
        lng: Number((_b = s.position) == null ? void 0 : _b.lng) || null
      });
    }
  }
  return out;
}
function getStore() {
  var _a, _b, _c;
  const stamp = dataStamp();
  if (cache && stamp === cacheStamp) return cache;
  cacheStamp = stamp;
  const idx = readJson("search-index.json");
  if (!idx) {
    throw createError({
      statusCode: 503,
      statusMessage: "Ch\u01B0a d\u1EF1ng index \u2014 ch\u1EA1y `npm run index:build`"
    });
  }
  const docs = idx.docs || [];
  const products = ((_a = readJson("demo-products.json")) == null ? void 0 : _a.data) || [];
  const productByName = new Map(products.map((p) => [p.name, p]));
  const costById = /* @__PURE__ */ new Map();
  for (const d of docs) {
    if (d.type !== "recipe" || !((_b = d.ingredients) == null ? void 0 : _b.length)) continue;
    const c = estimateRecipeCost(d.ingredients, productByName);
    if (c) costById.set(d.id, c);
  }
  cache = {
    docs,
    counts: idx.counts || {},
    nutrition: ((_c = readJson("demo-nutrition.json")) == null ? void 0 : _c.data) || [],
    products,
    productByName,
    costById,
    promos: rollPromoDates(readJson("demo-promos.json")),
    shops: flattenShops()
  };
  return cache;
}
function activePromos(at = /* @__PURE__ */ new Date()) {
  const { promos } = getStore();
  const t = at.getTime();
  return promos.filter((p) => {
    const start = p.startDate ? new Date(p.startDate).getTime() : -Infinity;
    const end = p.endDate ? new Date(p.endDate).getTime() : Infinity;
    return start <= t && t <= end;
  });
}
function stockAt(productId, shopGlobalName) {
  const s = `${productId}@${shopGlobalName}`;
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  const n = Math.abs(h) % 100;
  if (n >= 88) return { key: "none", label: "\u5728\u5EAB\u306A\u3057", order: 2 };
  if (n >= 72) return { key: "low", label: "\u6B8B\u308A\u308F\u305A\u304B", order: 1 };
  return { key: "ok", label: "\u5728\u5EAB\u3042\u308A", order: 0 };
}
function haversineKm(aLat, aLng, bLat, bLng) {
  const R = 6371;
  const toRad = (d) => d * Math.PI / 180;
  const dLat = toRad(bLat - aLat);
  const dLng = toRad(bLng - aLng);
  const x = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(aLat)) * Math.cos(toRad(bLat)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(x));
}
function shopsSelling(product, opts = {}) {
  const { lat = null, lng = null, area = null, limit = 5 } = opts;
  const { shops } = getStore();
  if (!product) return [];
  let list = shops.map((s) => {
    const stock = stockAt(product.id, s.globalName);
    const distanceKm = lat != null && lng != null && s.lat && s.lng ? Math.round(haversineKm(lat, lng, s.lat, s.lng) * 10) / 10 : null;
    return { ...s, stock: stock.label, stockKey: stock.key, _order: stock.order, distanceKm };
  });
  if (area) list = list.filter((s) => s.area === area);
  list.sort((a, b) => {
    if (a._order !== b._order) return a._order - b._order;
    if (a.distanceKm != null && b.distanceKm != null) return a.distanceKm - b.distanceKm;
    return a.title.localeCompare(b.title, "ja");
  });
  return list.slice(0, limit).map(({ _order, ...rest }) => rest);
}

export { FALLBACK_PRICE as F, activePromos as a, stripBudget as b, detectBudget as d, getStore as g, resolveDataFile as r, shopsSelling as s };
//# sourceMappingURL=store.mjs.map
