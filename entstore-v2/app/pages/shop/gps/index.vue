<template>
  <div class="wrap-content">
    <main>
      <VxBreadcrumbs
        :items="breadcrumbItems"
        divider=">"
      ></VxBreadcrumbs>
      <h2>店舗情報</h2>
      <p class="subtitle d-none-des">近くて便利。<br>あなたの近くの遠鉄ストア。</p>
      <AppArticle title="現在地から探す" class="mb-4">
        <p class="lead"><strong>現在地周辺</strong>の店舗は<strong id="count">{{locationsMapMarker.length}}件</strong>でした</p>
      </AppArticle>
      <div class="mobile-box">
        <GMap
          v-if="isCurrentLocationAvailable"
          ref="gMap"
          language="ja"
          :center="currentLocation"
          :zoom="13"
        >
          <GMapMarker
            v-for="location in locationsMapMarker"
            :key="location.id"
            :position="{lat: location.lat, lng: location.lng}"
          >
            <GMapInfoWindow>
              <span>{{ location.shopName }}</span>
            </GMapInfoWindow>
          </GMapMarker>
          <GMapMarker
            :position="{lat: currentLocation.lat, lng: currentLocation.lng}"
          >
            <GMapInfoWindow>
              <span>現在地</span>
            </GMapInfoWindow>
          </GMapMarker>
        </GMap>
      </div>

      <AppButtonNavigation title="店舗一覧へ戻る" class="btn-back" is-back href="/shop"></AppButtonNavigation>
    </main>
  </div>
</template>

<script>
import AppArticle from "~/components/App/Article.vue";
import AppButtonNavigation from "~/components/App/ButtonNavigation.vue";
import { SHOP_LIST } from '~/config/shop-data'
import {formatDateYMD} from "~/utils/index.js";

export default {
  components: {AppButtonNavigation, AppArticle},
  data() {
    return {
      breadcrumbItems: [
        {
          text: 'ホーム',
          disabled: false,
          href: '/',
        },
        {
          text: '店舗情報',
          disabled: false,
          href: '/shop',
        },
        {
          text: '現在地から探す',
          disabled: true,
        },
      ],
      locationsMapMarker: [],
      currentLocation: {}
    }
  },
  computed: {
   shopList() {
     const shopNames = Object.keys(SHOP_LIST)
     return shopNames.reduce((cur, next) => {
       cur.push(...SHOP_LIST[next])
       return cur
     }, [])
   },
   isCurrentLocationAvailable() {
     return typeof this.currentLocation.lat === 'number' && typeof this.currentLocation.lng === 'number'
   }
  },
  mounted() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat1 = position.coords.latitude;
          const lng1 = position.coords.longitude;
          this.currentLocation = {
            lat: lat1,
            lng: lng1,
          }

          this.shopList.forEach(shop => {
            const lat2 = shop.position.lat
            const lng2 = shop.position.lng

            const distance = this.calcDistance(lat1, lng1, lat2, lng2);

            if(distance <= 3000)
            {
              this.locationsMapMarker.push({
                ...shop.position,
                shopName: shop.shopName,
                id: shop.globalName
              })
            }
          })
        },
        (error) => {
          console.log(`Error getting location:`, error);
        }
      );
    } else {
      console.log(`Geolocation is not available in this browser.`);
    }
  },
  methods: {
    formatDateYMD,
    calcDistance(lat1, lng1, lat2, lng2) {
      const RX = 6378137.000000;
      const RY = 6356752.314140;

      const ax = lng1 * Math.PI / 180 - lng2 * Math.PI / 180;

      const ay = lat1 * Math.PI / 180 - lat2 * Math.PI / 180;

      const p = (lat1 * Math.PI / 180 + lat2 * Math.PI / 180) / 2;

      const e = Math.sqrt((RX * RX - RY * RY) / (RX * RX));

      const w = Math.sqrt(1 - e * e * Math.sin(p) * Math.sin(p));

      const m = RX * (1 - e * e) / (w * w * w);

      const n = RX / w;

      let d  = Math.pow(ay * m, 2) + Math.pow(ax * n * Math.cos(p), 2);
      d = Math.round(Math.sqrt(d));

      return d;
    }
  }
}
</script>

<style scoped lang="scss">
.wrap-content {
  .subtitle {
    @media only screen and (max-width: 1023px) {
      padding-left: 12px !important;
      font-size: 18px;
      line-height: 25.2px;
      margin-bottom: 30px;
    }
  }


  p {
    &.lead {
      font-size: 18px;
      line-height: 25.2px;
      text-align: center;
      margin: 0 auto;

      @media only screen and (max-width: 1023px) {
        padding-left: 12px;
        text-align: left;
      }
    }

    strong {
      color: #ce2339;
    }
  }
}

a {
  color: #087295;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
}

::v-deep .title-article {
  margin-bottom: 30px !important;

  @media only screen and (max-width: 1023px) {
    margin-bottom: 15px !important;
  }
}


.btn-back {
  margin-top: 50px;
}

</style>
