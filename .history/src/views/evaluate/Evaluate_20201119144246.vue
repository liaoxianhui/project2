<template>
  <div>
    <div class="m-header df jc-sb ai-c">
      <div class=" ml20" @click="clickMy"><van-icon name="arrow-left" /></div>
      <div>评价中心</div>
      <div class=" mr20" style="opacity: 0;"><van-icon name="arrow-left"/></div>
    </div>
    <div>
        <img src="../../image/evaluate.jpg" alt="">
    </div>
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
  methods: {
    clickMy(){
      this.$router.push('/my')
    }
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