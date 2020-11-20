<template>
  <div class="mt">
    <!-- <div >热销商品</div> -->
    12
  </div>
</template>

<script>
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
// .mt {
//   margin-top: 310px;
//   margin-bottom: 50px;
// }
.textx {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 14px;
  color: red;
}
</style>