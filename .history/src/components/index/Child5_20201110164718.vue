<template>
  <div>
    <div class="container" ref="wrapper">
      <div class="content">
        <div v-for="(item, index) in arr" :key="index" class="item">
          <div>
            <img :src="item.image" alt="" class="img" />
          </div>
          <div class="name">
            {{ item.goodsName }}
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
        this.arr=res.data.data
        // this.$nextTick(() => {
        //   this.scroll = new Bscroll(this.$refs.wrapper, {})
        // })
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
</style>