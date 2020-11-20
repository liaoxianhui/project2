<template>
  <div>
    <div class="ta-c">商品分类</div>
    <div class="">
      <div>
        <van-sidebar v-model="activeKey">
          <van-sidebar-item v-for="(item, index) in arr" :key="index" :title="item.name" />
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
      arr: [],
    };
  },
  components: {},
  methods: {
    getdata() {
      this.$api
        .getRecommend()
        .then((res) => {
          console.log(res.data.category);
          this.arr = res.data.category;
        })
        .catch((err) => {
          console.log(err);
        });
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
</style>