<template>
  <div>
    <div class="m-header df jc-sb ai-c">
      <div class="ml20" @click="clickMy"><van-icon name="arrow-left" /></div>
      <div>订单结算</div>
      <div class="mr20" style="opacity: 0"><van-icon name="arrow-left" /></div>
    </div>
    <div class="df ai-c jc-sb" @click="address">
      <div style="width: 10%" class="ta-c">
        <van-icon name="location-o" size="20px" />
      </div>
      <div style="width: 80%" class="fs-14">
        <div class="df jc-sb mb5">
          <div>收货人：{{arr.name}}</div>
          <div>电话：{{arr.tel}}</div>
        </div>
        <div>收货地址：{{arr.address}}</div>
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
        num="2"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
      />
    </div>
    <div></div>
    <div></div>
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
    };
  },
  components: {},
  methods: {
    address(){
      this.$router.push('/address')
    },
    clickMy() {
      this.$router.go("-1");
    },
    getdata() {
      this.$api
        .getDefaultAddress()
        .then((res) => {
          console.log(res.defaultAdd);
          this.arr=res.defaultAdd
          console.log(this.arr);
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