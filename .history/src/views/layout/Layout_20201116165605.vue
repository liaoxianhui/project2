
<template>
  <div>
    <router-view />
    <van-tabbar route>
      <van-tabbar-item replace to="/" name="index" icon="gem-o"
        >商城</van-tabbar-item
      >
      <van-tabbar-item replace to="/classify" name="classify" icon="more-o"
        >分类</van-tabbar-item
      >
      <van-tabbar-item
        replace
        to="/shoppingcart"
        @func="getMsgFormSon"
        name="shoppingcart"
        icon="cart-o"
        :badge="msgFormSon"
        >购物车</van-tabbar-item
      >
      <van-tabbar-item replace to="/my" name="my" icon="friends-o"
        >我的</van-tabbar-item
      >
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
    msgFormSon: "",
  },
  methods: {
    getMsgFormSon(data) {
      this.msgFormSon = data;
      console.log(this.msgFormSon);
    },
  },
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>