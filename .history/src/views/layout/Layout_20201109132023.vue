
<template>
  <div>
    <div></div>
    <div>
     <index></index>
    </div>
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
      arr: [
        {
          name: "商城",
          path: "/",
          icon: "shop-o",
        },
        {
          name: "分类",
          path: "/classify",
          icon: "fire-o",
        },
        {
          name: "购物车",
          path: "/shoppingcart",
          icon: "cart-o",
        },
        {
          name: "我的",
          path: "/my",
          icon: "contact",
        },
      ],
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