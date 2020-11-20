<template>
  <div>
    <div class="ta-c">商品分类</div>
    <div class="">
      <div>
        <van-sidebar v-model="activeKey">
          <van-sidebar-item title="标签名称" />
          <van-sidebar-item title="标签名称" />
          <van-sidebar-item title="标签名称" />
        </van-sidebar>
      </div>
      <div>
        <van-tabs>
          <van-tab v-for="index in 8" :key="index" :title="'标签 ' + index">
            内容 {{ index }}
          </van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      activeKey: 0,
    };
  },
  components: {},
  methods: {
    getdata() {
      this.$api
        .getRecommend()
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>