<template>
  <div>
    <div class="m-header df jc-sb ai-c pf zi99 w100 t0">
      <div class="ml20" @click="clickMy"><van-icon name="arrow-left" /></div>
      <div>最近浏览</div>
      <div class="mr20" style="opacity: 0"><van-icon name="arrow-left" /></div>
    </div>
    <div class="  " style="margin-top: 50px; margin-bottom: 40px">
      <van-card
        v-for="(item, index) in arr"
        :key="index"
        :price="item.present_price"
        :title="item.name"
        :thumb="item.image_path"
        :origin-price="item.orl_price"
        style="margin: 0"
        @click="clickd(item.id)"
      >
        <template #footer>
          <van-button size="mini" @click="del(item, index)">删除</van-button>
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
      name: "",
    };
  },
  components: {},
  methods: {
    clickd(id) {
      this.$router.push({
        path: "/details",
        query: {
          msg: id,
        },
      });
    },
    clickMy() {
      this.$router.push("/my");
    },
    del(item, index) {
      this.arr.splice(index, 1);
      localStorage.setItem(`${this.name}browsehistory`,JSON.stringify(this.arr))
    },
    alldel() {
      localStorage.removeItem(`${this.name}browsehistory`);
      this.getdata();
    },
    getdata() {
      this.name = this.$route.query.msg;
      this.arr = JSON.parse(localStorage.getItem(`${this.name}browsehistory`));
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