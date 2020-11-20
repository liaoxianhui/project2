<template>
  <div>
    <div class="m-header df jc-sb ai-c">
      <div class="ml20" @click="clickMy"><van-icon name="arrow-left" /></div>
      <div>评价中心</div>
      <div class="mr20" style="opacity: 0"><van-icon name="arrow-left" /></div>
    </div>
    <div>
      <img src="../../image/evaluate.jpg" alt="" width="100%" />
    </div>
    <div class=" ta-c pr" style="top:-20px;width:90%;left:5%; border-radius: 5px;">
      <van-tabs v-model="active" style=" border-radius: 5px;">
        <van-tab title="未评价">未评价</van-tab>
        <van-tab title="已评价">已评价</van-tab>
      </van-tabs>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
        active:0
    };
  },
  components: {},
  methods: {
    clickMy() {
      this.$router.push("/my");
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