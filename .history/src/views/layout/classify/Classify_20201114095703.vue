<template>
  <div>
    <div class="l0 t0 p10 ta-c w100 pf zi99 bw">商品分类</div>
    <div ref="getheight" style="height: 50px; background: #fff"></div>
    <div class="df">
      <div class="pf l0">
        <van-sidebar v-model="activeKey">
          <van-sidebar-item title="标签名称" />
          <van-sidebar-item title="标签名称" />
          <van-sidebar-item title="标签名称" />
        </van-sidebar>
      </div>
      <div style="margin-left: 90px">
        <van-tabs :scrollspy="true">
          <van-tab v-for="index in 8" :key="index" :title="'标签 ' + index">
            内容 {{ index }}<br />
            内容 {{ index }}<br />
            内容 {{ index }}<br />
            内容 {{ index }}<br />
            内容 {{ index }}<br />
            内容 {{ index }}<br />
            内容 {{ index }}<br />
            内容 {{ index }}<br />
            内容 {{ index }}<br />
            内容 {{ index }}<br />
            内容 {{ index }}<br />
            内容 {{ index }}<br />
            内容 {{ index }}<br />
            内容 {{ index }}<br />
            内容 {{ index }}<br />
            内容 {{ index }}<br />
            内容 {{ index }}<br />
            内容 {{ index }}<br />
            内容 {{ index }}<br />
            内容 {{ index }}<br />
            内容 {{ index }}<br />
            内容 {{ index }}<br />
            内容 {{ index }}<br />
            内容 {{ index }}<br />
            内容 {{ index }}<br />
            内容 {{ index }}<br />
            内容 {{ index }}<br />
            内容 {{ index }}<br />
            内容 {{ index }}<br />
            内容 {{ index }}<br />
            内容 {{ index }}<br />
            内容 {{ index }}<br />
          </van-tab>
        </van-tabs>

        <!-- <van-tabs
          @click="onClick"
          :sticky="true"
          :duration="0"
          :swipe-threshold="5"
          :offset-top="this.heightall"
          class="seckilling-tab w100"
        
        >
          <van-tab
            v-for="(item, index) in tabs"
            :key="index"
            :title="tabs[index]"
          >
            <div style="height: 1000px">内容{{ index }}</div>
          </van-tab>
        </van-tabs> -->
      </div>
    </div>
  </div>
  <!-- <div class="bg1">
    <div class="headto">商品分类</div>
    <div class="bg2">
      <div class="bg3">
        <van-sidebar v-model="activeKey" @change="onChange">
          <van-sidebar-item
            v-for="(item, index) in classes"
            :key="index"
            :title="item.mallCategoryName"
          />
        </van-sidebar>
      </div>
      <div class="bg4">
        <van-tabs v-model="activeIndex" swipe-threshold @click="toChange">
          <van-tab
            v-for="(item, index) in gtoud"
            :key="index"
            :title="item.mallSubName"
            style="margin-bottom:50px"
            
          >
            <van-card
              @click="detail(index)"
              v-for="(item, index) in cardlist"
              :key="index"
              num="1"
              tag=""
              :price="item.present_price"
              desc=""
              :title="item.name"
              :thumb="item.image_path"
              :origin-price="item.orl_price"
            />
          </van-tab>
        </van-tabs>
      </div>
    </div>
  </div> -->
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
      flag: "",

      heightall: 0,
      tabs: {
        0: "选项0",
        1: "选项1",
        2: "选项2",
        3: "选项3",
        4: "选项4",
      },
    };
  },
  components: {},
  methods: {
    onClick(name) {},
    getclass() {
      this.$api
        .category(this.cardId)
        .then((res) => {
          // console.log(res)
          this.cardlist = res.dataList;
        })
        .catch((err) => {});
    },
    gedata() {
      this.$api
        .getRecommend()
        .then((res) => {
          this.classes = res.data.category;
          this.gtoud = res.data.category[this.activeKey].bxMallSubDto;
          this.cardId =
            res.data.category[this.activeKey].bxMallSubDto[
              this.activeIndex
            ].mallSubId;
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
    detail(index) {
      this.flag = this.cardlist[index].id;
      this.$router.push({
        path: "/details",
        query: {
          msg: this.flag,
        },
      });
      console.log(this.cardlist[index]);
    },
  },
  mounted() {
    this.gedata();
    // this.getclass();
    this.activeKey = this.$route.query.msg;
    // this.activeKey = this.$route.query.fixed;

    this.$nextTick(function () {
      this.heightall = this.$refs.getheight.offsetHeight;
      console.log(this.heightall);
    });
  },
  computed: {},
  watch: {},
};
</script>

<style lang="scss">
.bg1 {
  width: 100%;
  height: 667px;
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
}

.headto {
  width: 100%;
  height: 50px;
  background-color: white;
  text-align: center;
  line-height: 50px;
}
</style>
