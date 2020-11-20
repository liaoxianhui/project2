<template>
  <div>
    <div class="ta-c">商品分类</div>
    <div class=" df jc-sb">
      <div>
        <van-sidebar v-model="activeKey">
          <van-sidebar-item v-for="(item, index) in arr" :key="index" :title="item.mallCategoryName" />
        </van-sidebar>
      </div>
      <div>
        <van-tabs swipe-threshold=3	>
          <van-tab v-for="(item,index) in arr1" :key="index" :title="item.mallSubName">
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
      arr1:[]
    };
  },
  components: {},
  methods: {
    getdata() {
      this.$api
        .getRecommend()
        .then((res) => {
          this.arr = res.data.category;
          this.arr1=res.data.category[this.activeKey].bxMallSubDto
          console.log(this.arr1);
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