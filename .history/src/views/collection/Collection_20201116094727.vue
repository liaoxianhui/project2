<template>
  <div>
    <div class="m-header df jc-sb ai-c pf t0 w100 zi999">
      <div class="ml20" @click="clickMy"><van-icon name="arrow-left" /></div>
      <div>我的收藏</div>
      <div class="mr20" style="opacity: 0"><van-icon name="arrow-left" /></div>
    </div>
    <div style=" margin-top: 50px">
      <van-card
        v-for="(item, index) in arr"
        :key="index"
        price="2.00"
        :title="item.name"
        :thumb="item.image_path"
        style="margin:0"
      >
        <template #footer>
          <van-icon name="close" size="20px" />
        </template>
      </van-card>
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
    getCollection() {
      this.$api
        .getCollection()
        .then((res) => {
          console.log(res.data.list);
          this.arr = res.data.list;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getCollection();
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