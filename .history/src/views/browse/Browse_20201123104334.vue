<template>
  <div>
    <div class="m-header df jc-sb ai-c">
      <div class="ml20" @click="clickMy"><van-icon name="arrow-left" /></div>
      <div>最近浏览</div>
      <div class="mr20" style="opacity: 0"><van-icon name="arrow-left" /></div>
    </div>
    <div>
      <van-card
        v-for="(item, index) in arr"
        :key="index"
        :price="item.present_price"
        :title="item.name"
        :thumb="item.image_path"
        :origin-price="item.orl_price"
      >
        <template #footer>
          <van-button size="mini">按钮</van-button>
          <van-button size="mini">按钮</van-button>
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