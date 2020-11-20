<template>
  <div>
    <div class="wrapper" ref="wrapper">
      <ul class="content">
        <li v-for="(item, index) in arr" :key="index">{{ item.goodsName }}</li>
      </ul>
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

    created() {
    //   this.$api.getRecommend().then((res) => {
    //     console.log(res.data.recommend);
    //     this.arr = res.data.recommend
        
    //   })
    },
  components: {},
  methods: {},
  mounted() {
    this.$api
      .getRecommend()
      .then((res) => {
        console.log(res.data.recommend);
        this.$nextTick(() => {
          this.scroll = new Bscroll(this.$refs.wrapper, {})
        })
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