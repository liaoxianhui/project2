<template>
  <div>
    <div class="m-header df jc-sb ai-c">
      <div class="ml20" @click="clickMy"><van-icon name="arrow-left" /></div>
      <div>订单结算</div>
      <div class="mr20" style="opacity: 0"><van-icon name="arrow-left" /></div>
    </div>
    <div class="df ai-c jc-sb mt10" @click="address">
      <div style="width: 10%" class="ta-c">
        <van-icon name="location-o" size="20px" />
      </div>
      <div style="width: 80%" class="fs-14">
        <div class="df jc-sb mb5">
          <div>收货人：{{ arr.name }}</div>
          <div>电话：{{ arr.tel }}</div>
        </div>
        <div>收货地址：{{ arr.address }}</div>
      </div>
      <div style="width: 10%" class="ta-c df ai-c jc-c">
        <van-icon name="arrow" size="20px" />
      </div>
    </div>
    <div class="w100">
      <img src="../../image/caitiao.jpg" alt="" height="5px" class="w100" />
    </div>
    <div>
      <van-card
        v-for="(item, index) in arr1"
        :key="index"
        :num="item.count"
        :price="item.present_price"
        :title="item.name"
        :thumb="item.image_path"
        style="margin: 0"
      />
    </div>
    <div>
      <van-submit-bar :price="getsum*100" button-text="提交订单" @submit="onSubmit" />
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";

export default {
  name: "",
  props: {},
  data() {
    return {
      arr: [],
      arr1: [],
    };
  },
  components: {},
  methods: {
    address() {
      this.$router.push("/address");
    },
    clickMy() {
      this.$router.go("-1");
    },
    getdata() {
      this.$api
        .getDefaultAddress()
        .then((res) => {
          console.log(res.defaultAdd);
          this.arr = res.defaultAdd;
          console.log(this.arr);
          this.arr1 = JSON.parse(this.$route.query.msg);
          console.log(this.arr1);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    onSubmit() {},
  },
  mounted() {
    this.getdata();
  },
  computed: {
    getsum() {
      let sum = 0;
      this.arr1.map((item) => {
        sum += item.count * item.present_price;
      });
      return sum;
    },
  },
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