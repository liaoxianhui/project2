<template>
  <div>
    <div class="df ai-c">
      <div>定位</div>
      <div><van-search placeholder="请输入搜索关键词" /></div>
    </div>
    <div class="rotation">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image.image" height="200px"/>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div></div>
  </div>
</template>

<script>

export default {
  name: "",
  props: {},
  data() {
    return {
      images: [],
    };
  },
  components: {},
  methods: {
    // getData(){
    // }
  },
  mounted() {
    // console.log(this.$api);
    this.$api.getRecommend().then(res=>{
      console.log(res.data.slides);
      this.images=res.data.slides
    }).catch(err=>{
      console.log(err);
    })
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
// .rotation{
//   width: 100%;
//   height: 200px;
// }
</style>