<template>
  <div>
    <div class=" ta-c fw-b mt10 mb10">会员中心</div>
    <div style="background: #eee" class="p20">
      <div class="ta-r"><van-icon name="setting" color="#fff" size="20"/></div>
      <div class="ta-c">
        <van-image
          round
          width="10rem"
          height="10rem"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
      </div>
      <div class="ta-c mt10">欢迎</div>
      <div class="ta-c mt10">退出登录</div>
    </div>
    <div>
      <van-grid :column-num="5">
        <van-grid-item icon="pending-payment" text="待付款" />
        <van-grid-item icon="tosend" text="待发货" />
        <van-grid-item icon="shop-collect-o" text="待收货" />
        <van-grid-item icon="records" text="评价" badge="5" />
        <van-grid-item icon="photo-o" text="已完成" />
      </van-grid>
    </div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {};
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