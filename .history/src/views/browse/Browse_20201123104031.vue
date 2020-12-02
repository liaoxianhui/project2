<template>
  <div>
    <div class="m-header df jc-sb ai-c">
      <div class="ml20" @click="clickMy"><van-icon name="arrow-left" /></div>
      <div>最近浏览</div>
      <div class="mr20" style="opacity: 0"><van-icon name="arrow-left" /></div>
    </div>
    <div>
      <van-card
        price="2.00"
        title="商品标题"
        thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
        origin-price="10.00"
      />
    </div>
  </div>
</template>

<script>
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
    clickMy() {
      this.$router.push("/my");
    },
    getdata() {
      this.arr = JSON.parse(localStorage.getItem("nullbrowsehistory"));
      console.log(this.arr);
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