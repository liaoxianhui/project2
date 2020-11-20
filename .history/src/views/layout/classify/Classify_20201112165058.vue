<template>
  <div class="bg1">
    <div class="headto">商品分类</div>
    <div class="bg2">
      <div class="bg3">
        <van-sidebar v-model="activeKey" class="pf" style="top: 50px">
          <van-sidebar-item
            v-for="(item, index) in classes"
            :key="index"
            :title="item.mallCategoryName"
            @click="onChange(index)"
          />
        </van-sidebar>
      </div>
      <div class="bg4">
        <van-tabs
          v-model="activeIndex"
          swipe-threshold
          @click="toChange"
          style="position: fixed; z-index: 999; overflow: scroll"
        >
          <van-tab
            v-for="(item, index) in gtoud"
            :key="index"
            :title="item.mallSubName"
          >
            <van-card
              v-for="(item, index) in cardlist"
              :key="index"
              :price="item.present_price"
              :title="item.name"
              :thumb="item.image_path"
              :origin-price="item.orl_price"
              style="color: red"
            />
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
      activeIndex: 0,
      cardId: "",
      classes: [],
      gtoud: [],
      cardlist: [],
    };
  },
  components: {},
  methods: {
    getclass() {
      this.$api
        .category(this.cardId)
        .then((res) => {
          console.log(res);
          this.cardlist = res.dataList;
        })
        .catch((err) => {});
    },
    gedata() {
      this.$api
        .getRecommend()
        .then((res) => {
          console.log(res.data.category);
          this.classes = res.data.category;
          this.gtoud = res.data.category[this.activeKey].bxMallSubDto;
          this.cardId =
            res.data.category[this.activeKey].bxMallSubDto[
              this.activeIndex
            ].mallSubId;
          // console.log(this.cardId)
          this.getclass();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    onChange(index) {
      //大分类改变时,更改小分类的数据和获取第一个id的值---发起请求
      this.gtoud = this.classes[index].bxMallSubDto;
      this.cardId = this.gtoud[this.activeIndex].mallSubId;
      this.getclass();
    },
    toChange() {
      //点击小分类时，更改id的值---再次发请求获取数据
      this.gedata();
    },
  },
  mounted() {
    this.gedata();
    this.activeKey = this.$route.query.msg;
  },
  computed: {},
  watch: {},
};
</script>

<style lang="scss">
.bg1 {
  width: 100%;
  height: 667px;
  background: #fff;
}

.bg2 {
  width: 100%;
  height: 617px;
  display: flex;
}

.bg3 {
  width: 75px;
  height: 617px;
}

.bg4 {
  width: 300px;
  height: 617px;
//   position: fixed;
//   left: 100px;
//   top: 50px;
// }

.headto {
  width: 100%;
  height: 50px;
  background-color: white;
  text-align: center;
  line-height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
</style>
