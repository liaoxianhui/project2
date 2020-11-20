
<template>
  <div>
    <router-view />

    <van-tabbar route>
      <van-tabbar-item replace to="/home" icon="home-o"> 标签 </van-tabbar-item>
      <van-tabbar-item replace to="/search" icon="search">
        标签
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import bottom from "../../components/layout/Bottom";
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
    bottom,
  },
  methods: {},
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>