<template>
  <div>
    <div class="rotation">
      <van-swipe :autoplay="3000">
        <van-swipe-item
          v-for="(image, index) in images"
          :key="index.goodsId"
          @click="click(index)"
        >
          <img v-lazy="image.image" class="images" />
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      images: [],
      flag: "",
    };
  },
  components: {},
  methods: {
    click(index) {
      console.log(this.images[index].goodsId);
      this.flag = this.images[index].goodsId;
      this.$router.push({
        path:'/details',
        query:{
          msg:this.flag
        }
      })
    },
  },
  mounted() {
    this.$api
      .getRecommend()
      .then((res) => {
        // console.log(res.data);
        this.images = res.data.slides;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.images {
  width: 100%;
  height: 166px;
}
</style>