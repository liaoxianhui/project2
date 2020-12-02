<template>
  <div>
    <div class="ta-c m10">商品分类</div>
    <div class="df" style="margin-bottom: 50px">
      <div style="width: 20%">
        <van-sidebar v-model="activeKey">
          <van-sidebar-item
            v-for="(item, index) in arr"
            :key="index"
            :title="item.mallCategoryName"
            @click="sitem(index)"
          />
        </van-sidebar>
      </div>
      <div style="width: 80%">
        <van-tabs swipe-threshold v-model="active" @click="vcard">
          <van-tab
            v-for="(item, index) in arr1"
            :key="index"
            :title="item.mallSubName"
          >
            <van-card
              v-for="(item, index) in arr2"
              :key="index"
              :price="item.present_price"
              :title="item.name"
              :thumb="item.image_path"
              :origin-price="item.orl_price"
              style="margin: 0"
              @click="detail(item.id, item)"
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
  props: {
    activeKeymsg: {
      type: Number,
    },
  },
  data() {
    return {
      activeKey: 0,
      active: 0,
      arr: [],
      arr1: [],
      arr2: [],
      id: "",
    };
  },
  components: {},
  methods: {
    // 请求
    getdata() {
      this.$api
        .getRecommend()
        .then((res) => {
          if (res.code === 200) {
            this.arr = res.data.category;
            this.arr1 = this.arr[this.activeKey].bxMallSubDto;
            this.id =
              res.data.category[this.activeKey].bxMallSubDto[
                this.active
              ].mallSubId;
            this.getid();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 请求
    getid() {
      this.$api
        .category(this.id)
        .then((res) => {
          // console.log(res.dataList);
          this.arr2 = res.dataList;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 左侧
    sitem(index) {
      this.arr1 = this.arr[index].bxMallSubDto;
      this.id = this.arr[index].bxMallSubDto[this.active].mallSubId;
      this.getid();
    },
    // 上边
    vcard() {
      this.getdata();
    },
    // 跳转详情页面
    detail(index, item) {
      this.$router.push({
        path: "/details",
        query: {
          msg: index,
        },
      });
    },
    // 接收首页传过来值的方法
    getcount() {
      if (this.$route.query.msg) {
        this.activeKey = this.$route.query.msg;
      }
    },
  },
  mounted() {
    // 调用
    this.getdata();
    this.getcount();
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>