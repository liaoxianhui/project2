
<template>
  <div>
    <router-view />

    <van-tabbar route>
      <van-tabbar-item replace to="/" icon="home-o"> 商城 </van-tabbar-item>
      <van-tabbar-item replace to="/" icon="search"> 分类 </van-tabbar-item>
      <van-tabbar-item replace to="/" icon="search"> 购物车 </van-tabbar-item>
      <van-tabbar-item replace to="/" icon="search"> 我的 </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>

import index from "./index/Index";
import classify from "./classify/Classify";
import shoppingcart from "./shoppingcart/ShoppingCart";
import my from "./my/My";
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {
    index,
    classify,
    shoppingcart,
    my,
  },
  methods: {},
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>