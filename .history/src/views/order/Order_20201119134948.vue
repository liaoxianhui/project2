<template>
  <div>
    <div class="m-header df jc-sb ai-c">
      <div class="ml20" @click="clickMy"><van-icon name="arrow-left" /></div>
      <div>我的订单</div>
      <div class="mr20" style="opacity: 0"><van-icon name="arrow-left" /></div>
    </div>
    <div>
      <van-tabs v-model="active">
        <van-tab title="全部">
          <div
            v-for="(item, index) in arr"
            :key="index"
            class="m10"
            style="background: #fafafa"
          >
            <div class="df jc-sb">
              <div class="ml10">订单编号:{{ item.order_id }}</div>
              <div class="mr10" style="color: #dc7f50">完成交易</div>
            </div>
            <van-card
              v-for="(item1, index1) in item.order_list"
              :key="index1"
              :num="item1.count"
              :price="item1.present_price"
              :title="item1.name"
              :thumb="item1.image_path"
              style="margin: 0"
            />
            <div class=" ta-r">
              <div>创建时间:</div>
              <div>收货地址:</div>
              <div>共有{{ 3 }}件商品,合计:{{ 12 }}</div>
            </div>
          </div>
        </van-tab>
        <van-tab title="待支付" class="ta-c">待支付</van-tab>
        <van-tab title="待发货" class="ta-c">待发货</van-tab>
        <van-tab title="待收货" class="ta-c">待收货</van-tab>
        <van-tab title="已完成">
          <van-card
            num="2"
            price="2.00"
            desc="描述信息"
            title="商品标题"
            thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
          />
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      active: 0,
      arr: [],
    };
  },
  components: {},
  methods: {
    clickMy() {
      this.$router.push("/my");
    },
    getdata() {
      this.$api
        .getMyOrder()
        .then((res) => {
          console.log(res.list);
          this.arr = res.list;
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
.m-header {
  height: 50px;
  line-height: 50px;
  background: #eee;
}
</style>