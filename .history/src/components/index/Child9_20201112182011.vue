<template>
  <div class="mt">
    <div class="cr ta-c mb10">热销商品</div>
    <div class="df fw-w jc-sb">
      <div v-for="(item, index) in arr" :key="index" style="width: 49.9%" @click="detail(index)">
        <div style="width: 100%">
          <img :src="item.image" alt="" style="width: 100%" />
        </div>
        <div class="textx">{{ item.name }}</div>
        <div class=" df jc-c">
          <div class="cr">￥{{ item.mallPrice}}</div>
          <div class="td-lt cg" style="margin-left:10px"> ￥{{ item.price }}</div>
        </div>
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
      arr: [],
      gid:'',
    };
  },
  components: {},
  methods: {
    detail(index){
      this.$api.getRecommend().then((res) => {
        // console.log(res.data.hotGoods[index].goodsId);
        this.gid = res.data.hotGoods[index].goodsId;
        this.$router.push({
        path:'/details',
        query:{
          msg:this.gid,
        }
      })
      })
      .catch((err) => {
        console.log(err);
      });
    },
  },
  mounted() {
    this.$api
      .getRecommend()
      .then((res) => {
        console.log(res.data.hotGoods);
        this.arr = res.data.hotGoods;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  computed: {},
  watch: {},
};
</script>

<style lang="scss" scoped>
.mt {
  margin-top: 320px;
  margin-bottom: 50px;
}
.textx {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 14px;
  text-align: center;
}
</style>