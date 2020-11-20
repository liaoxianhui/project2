
<template>
  <div>
    <div></div>
    <div>
      <van-tabbar v-model="active">
      <div>
        <van-tabbar-item icon="">{{}}</van-tabbar-item>
      </div>
    </van-tabbar>
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