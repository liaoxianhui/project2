
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
        name="shoppingcart"
        icon="cart-o"
        :badge="`${this.flag}`"
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
    return {
      flag: "",
    };
  },
  components: {
    index,
    classify,
    shoppingcart,
    my,
  },
  methods: {
    // 请求
    getdata() {
      this.$api
        .getCard()
        .then((res) => {
          // console.log(res);
          this.flag = res.shopList.length;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    // 调用
    this.getdata();
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>