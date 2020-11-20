<template>
  <div>
    <div class="hello">
      <van-row class="m-header">
        <van-col span="24">
          <van-icon name="arrow-left" class="m-header-icon" />内容</van-col>
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
        background: #245fd7;
        color: #fff;
    }
    
    .m-header-icon {
        position: absolute;
        top: 16px;
        left: 6px;
        font-size: 18px;
    }
</style>