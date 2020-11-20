<template>
  <div>
    <div class="m-header df jc-sb ai-c">
      <div class="ml20" @click="clickMy"><van-icon name="arrow-left" /></div>
      <div>评价中心</div>
      <div class="mr20" style="opacity: 0"><van-icon name="arrow-left" /></div>
    </div>
    <div class="df">
      <div class=" b1sr"><img :src="pid.image_path" alt="" width="200px" /></div>
      <div>
        <div>商品评分</div>
        <div><van-rate v-model="value" @change="onChange" /></div>
      </div>
    </div>
    <div></div>
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
      pid: "",
      value: 4,
    };
  },
  components: {},
  methods: {
    clickMy() {
      this.$router.push("/my");
    },
    onChange(value) {
      Toast("当前值：" + value);
    },
    getdata() {
      this.pid = this.$route.query.msg;
      console.log(this.pid);
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