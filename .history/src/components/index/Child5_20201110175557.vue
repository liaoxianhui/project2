<template>
  <div>
    <div class=" ta-c cr">推荐商品</div>
    <div class="container" ref="wrapper">
      <div class="content">
        <div v-for="(item, index) in arr" :key="index" class="item">
          <div>
            <img :src="item.image" alt="" class="img" />
          </div>
          <div class="name ta-c">
            {{ item.goodsName }}
          </div>
          <div class=" df jc-c">
            <div class=" cr">￥{{item.mallPrice}}</div>
            <div class=" td-lt ml10">￥{{item.price}}</div>
          </div>
          <div class=" df">
            <div>
              <van-icon name="chat-o" color="#1989fa" />
            </div>
            <div>查看详情</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: "",
  props: {},
  data() {
    return {
      arr: [],
    };
  },
  components: {},
  methods: {},
  mounted() {
    this.$api
      .getRecommend()
      .then((res) => {
        console.log(res.data.recommend);
        this.arr=res.data.recommend
      })
      .catch((err) => {
        console.log(err);
      });
      this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        scrollX: true,
        startX: 0
      })

    })
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.container{
  display: flex;
  overflow: hidden;
  margin: 10px 0;
  .content{
    display: flex;
    flex: 1;
  }
  .img {
      height: 125px;
      width: 125px;
    }
    .name {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      width: 125px;
    }
}
</style>