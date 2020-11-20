<template>
  <div>
    <div class="pf t0 w100 ta-c zi999 p10 bw">购物车</div>
    <div v-if="v === -1"><van-empty description="未登录" /></div>
    <div style="margin-top: 50px">
      <van-card
      v-for="(item, index) in arr" :key="index"
        :price="item.present_price"
        :title="item.name"
        :thumb="item.image_path"
      >
        <template #footer>
          <van-button size="mini">按钮</van-button>
        </template>
      </van-card>
    </div>
    <div>
      <van-submit-bar
        :price="3050"
        button-text="提交订单"
        @submit="onSubmit"
        style="margin-bottom: 50px"
      >
        <van-checkbox v-model="checked" @click="clickchecked()"
          >全选</van-checkbox
        >
        <!-- <template #tip>
          你的收货地址不支持同城送,
          <span @click="onClickEditAddress">修改地址</span>
        </template> -->
      </van-submit-bar>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      v: 1,
      checked: false,
      arr: [],
    };
  },
  components: {},
  methods: {
    onSubmit() {},
    clickchecked(e) {
      // this.checked = !this.checked;
      console.log(e);
    },
    getdata() {
      this.$api
        .getCard()
        .then((res) => {
          console.log(res.shopList);
          this.arr = res.shopList;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getdata();
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>