<template>
  <div>
    <div class="pf t0 w100 ta-c zi999 p10 bw">购物车</div>
    <div v-if="v === -1"><van-empty description="未登录" /></div>
    <div style="margin-top: 50px">
      <div v-for="(item, index) in arr" :key="index" class=" df">
        <van-checkbox v-model="item.check"></van-checkbox>
        <div class="df">
          <div><img :src="item.image_path" width="100" alt=""></div>
          <div>
            <div>{{item.name}}</div>
            <div class=" df jc-sb w100">
              <div class=" cr" >￥{{item.mallPrice}}</div>
              <div class=" df ai-c">
                <div><van-stepper v-model="value" min="1" max="50" integer /></div>
                <div><van-icon name="close" /></div>
              </div>
            </div>
          </div>
        </div>
        <!-- <van-card
          :price="item.mallPrice"
          :title="item.name"
          :thumb="item.image_path"
          style="margin: 0"
        >
          <template #footer>
            <van-button size="mini">按钮</van-button>
          </template>
        </van-card> -->
      </div>
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
      value:1,
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