
<template>
  <div>
    <router-view />

    <van-tabbar route>
      <van-tabbar-item replace to="/" icon="gem-o"> 1</van-tabbar-item>
      <van-tabbar-item replace to="/classify" icon="more-o">2 </van-tabbar-item>
      <van-tabbar-item replace to="/shoppingcart" icon="cart-o">3
      </van-tabbar-item>
      <van-tabbar-item replace to="/my" icon="friends-o">4 </van-tabbar-item>
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