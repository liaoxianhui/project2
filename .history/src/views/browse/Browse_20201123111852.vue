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
          <van-button size="mini" @click="del(index)">删除</van-button>
        </template>
      </van-card>
    </div>
    <div class="record" @click="alldel">清空全部浏览记录</div>
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
    del(id) {
      this.arr.splice(id, 1);
      // this.getdata();
    },
    alldel() {
      localStorage.removeItem("nullbrowsehistory");
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
.record {
  width: 100%;
  text-align: center;
  color: white;
  padding: 10px 0;
  background: red;
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>