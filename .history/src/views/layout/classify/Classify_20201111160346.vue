<template>
  <div>
    <div class="ta-c mt10 mb10">商品分类</div>
    <div class="df">
      <div>
        <van-sidebar v-model="activeKey">
          <van-sidebar-item title="标签名称" />
          <van-sidebar-item title="标签名称" />
          <van-sidebar-item title="标签名称" />
        </van-sidebar>
      </div>
      <div>
        <!-- <van-tabs v-model="active" scrollspy sticky>
          <van-tab v-for="index in 6" :key="index" :title="'选项 ' + index">
            内容 {{ index }}
          </van-tab>
        </van-tabs> -->
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
      id:2,
    };
  },
  components: {},
  methods: {},
  mounted() {
    this.$api
      .category(this.id)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>