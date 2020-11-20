<template>
  <div>
    <div class="ta-c">商品分类</div>
    <div class="df jc-sb">
      <div>
        <van-sidebar v-model="activeKey">
          <van-sidebar-item
            v-for="(item, index) in arr"
            :key="index"
            :title="item.mallCategoryName"
          />
        </van-sidebar>
      </div>
      <div>
        <van-tabs swipe-threshold="3">
          <van-tab
            v-for="(item, index) in arr1"
            :key="index"
            :title="item.mallSubName"
          >
            <van-card
              price="2.00"
              title="商品标题"
              thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
              origin-price="10.00"
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
      arr: [],
      arr1: [],
      id:''
    };
  },
  components: {},
  methods: {
    getdata() {
      this.$api
        .getRecommend()
        .then((res) => {
          this.arr = res.data.category;
          this.arr1 = res.data.category[this.activeKey].bxMallSubDto;
          this.id=res.data.category[this.activeKey].bxMallSubDto.mallCategoryId
          console.log(this.arr1);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getid(){
      this.$api.category().then(res=>{
        console.log(res);
      }).catch(err=>{
        console.log(err);
      })
    }
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