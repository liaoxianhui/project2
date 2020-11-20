<template>
  <div>
    <van-tabbar route  v-model="$route.path">
      <div v-for="(item, index) in arr" :key="index">
        <van-tabbar-item :icon="item.icon" :index='item.path'>{{item.name}}</van-tabbar-item>
      </div>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
        active:0,
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
  components: {},
  methods: {},
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>