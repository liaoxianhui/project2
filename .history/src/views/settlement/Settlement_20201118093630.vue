<template>
  <div>
    <div class="m-header df jc-sb ai-c">
      <div class="ml20" @click="clickMy"><van-icon name="arrow-left" /></div>
      <div>订单结算</div>
      <div class="mr20" style="opacity: 0"><van-icon name="arrow-left" /></div>
    </div>
    <div class="df ai-c jc-sb">
      <div style="width:10%" class=" ta-c">
        <van-icon name="location-o" size="20px" />
      </div>
      <div style="width:80%" class=" fs-14">
        <div class="df jc-sb">
          <div>收货人：小白</div>
          <div>电话：19908050792</div>
        </div>
        <div>收货地址：四川省成都市锦江区东方广场c座</div>
      </div>
      <div style="width:10%" class=" ta-c h100">
        <van-icon name="arrow" size="20px" />
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
import { Toast } from "vant";

export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {},
  methods: {
    clickMy() {
      this.$router.go("-1");
    },
  },
  mounted() {},
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