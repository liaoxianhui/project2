<template>
  <div>
    <div class="hello">
      <van-row class="m-header df jc-sb ai-c">
          <div><van-icon name="arrow-left" /></div>
        <div>我的收藏</div>
        <div></div>
      </van-row>
    </div>
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
.m-header {
  height: 50px;
  line-height: 50px;
  background: #eee;
  // color: #fff;
}

.m-header-icon {
  // position: absolute;
  // top: 16px;
  // left: 6px;
  // font-size: 18px;
}
</style>