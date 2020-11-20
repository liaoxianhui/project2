<template>
  <div>
    <div class="ta-c cr">推荐商品</div>
    <div class="container" ref="wrapper">
      <div class="content">
        <div v-for="(item, index) in arr" :key="index" class="item"  @click="detail(index)">
          <div>
            <img :src="item.image" alt="" class="img" />
          </div>
          <div class="name ta-c">
            {{ item.goodsName }}
          </div>
          <div class="df jc-c">
            <div class="cr">￥{{ item.mallPrice }}</div>
            <div class="td-lt ml10 cg">￥{{ item.price }}</div>
          </div>
          <div class="df jc-c">
            <div class="yellow df jc-c ai-c">
              <van-icon name="shopping-cart" color="#fff" />
            </div>
            <div class="red df jc-c ai-c" >
              <div>查看详情</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "",
  props: {},
  data() {
    return {
      arr: [],
      gid: "",
    };
  },
  components: {},
  methods: {
    detail(index){
      console.log(index);
      console.log(99999999999999999999999999999999);
    }
  },
  mounted() {
    this.$api
      .getRecommend()
      .then((res) => {
        // console.log(res.data.recommend);
        this.arr = res.data.recommend;
      })
      .catch((err) => {
        console.log(err);
      });
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        scrollX: true,
        startX: 0,
      });
    });
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.container {
  display: flex;
  overflow: hidden;
  margin: 10px 0;
  .content {
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
.yellow {
  background: #FFA009;
  width: 20px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  padding: 0px 5px;
}
.red {
  background: red;
  color: white;
  padding: 5px 10px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
</style>