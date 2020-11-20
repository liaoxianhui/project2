<template>
  <div>
      <van-tabbar v-model="active">
        <div>
          <van-tabbar-item icon="">{{}}</van-tabbar-item>
        </div>
      </van-tabbar>
  </div>
</template>

<script>
export default {
  name: '',
  props:{},
  data () {
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
    }
  },
  components: {},
  methods: {},
  mounted() {},
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>

</style>