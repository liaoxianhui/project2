
<template>
  <div>
    <div>
      <router-view></router-view>
    </div>
    <div>
     <bottom></bottom>
    </div>
  </div>
</template>

<script>
import bottom from '../../components/layout/Bottom'
import index from "./index/Index";
import classify from "./classify/Classify";
import shoppingcart from "./shoppingcart/ShoppingCart";
import my from "./my/My";
export default {
  name: "",
  props: {},
  data() {
    return {
      
    };
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