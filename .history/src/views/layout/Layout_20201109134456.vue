
<template>
  <div>
    <router-view />

    <van-tabbar v-model="active">
      <van-tabbar-item replace to="/" name="index" icon="gem-o"> 1</van-tabbar-item>
      <van-tabbar-item replace to="/classify" name="classify"  icon="more-o">2 </van-tabbar-item>
      <van-tabbar-item replace to="/shoppingcart" name="shoppingcart" icon="cart-o">3
      </van-tabbar-item>
      <van-tabbar-item replace to="/my" name="my" icon="friends-o">4 </van-tabbar-item>
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
    return {
      active:'index',
    };
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