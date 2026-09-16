<template>
  <div>
    <div v-if="domain.head" class="heading">{{domain.head}}</div>
    <h4 :id="domain.id" class="title-inner">{{domain.name}}</h4>
    <table class="shoplist">
      <tbody>
      <tr>
        <th class="shopName">店舗名</th>
        <th class="address">住所</th>
        <th class="phone">電話番号</th>
        <th class="time">営業時間</th>
      </tr>
      <tr v-for="(store, index) in domain.storeList" :key="index" class="shopinfo" @click="toShopDetail(store.shopLink)">
        <td>
          <a :href="store.shopLink">
            {{store.shopName}}
            <div v-if="store.subName">{{store.subName}}</div>
          </a>
        </td>
        <td>{{store.address}}</td>
        <td>{{store.phone}}</td>
        <!-- <td v-if="store.showless">{{store.time.split(' ')[0]}}</td> -->
        <td v-html="store.time + (store.time_weekends ? '<br/>' + store.time_weekends : '')"></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "StoreTable",
  props: {
    domain: {
      type: Object,
      default: () => ({})
    },
  },
  methods: {
    toShopDetail(shopLink) {
      window.location.href = shopLink
    }
  }
}
</script>

<style scoped lang="scss">
h4 {
  &.title-inner {
    font-size: 18px;
    font-weight: bold;
    width: 100%;
    border-bottom: 5px #f3e7cd solid;
    padding-bottom: 5px;
    text-align: left;
    margin-bottom: 15px;
    line-height: 1.8;
    height: 42.39px;
  }
}

.heading {
  margin-bottom: 10px;
}

.shoplist  {
  width: 100%;
  box-sizing: border-box;
  border-top: solid 1px #999999;
  border-left: solid 1px #999999;
  margin-bottom: 20px;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 14px;

  th {
    padding: 10px;
    text-align: left;
    background: #f3e7cd;
    font-weight: normal;
    border-right: solid 1px #999999;
    border-bottom: solid 1px #999999;

    &.shopName {
      width: 25%;
    }

    &.address {
      width: 45%;
      height: 46.19px;
    }

    &.phone, &.time {
      width: 15%;
    }
  }

  td {
    padding: 10px;
    text-align: left;
    background: #ffffff;
    font-weight: normal;
    border-right: solid 1px #999999;
    border-bottom: solid 1px #999999;
    cursor: pointer;
  }
}

a {
  color: #087295 !important;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
}
</style>
