<template>
  <div class="mt">
      <div class=" cr ta-c">热销商品</div>
      <div class=" df fw-w">
          <div v-for="(item,index) in arr" :key="index" style="width:50%">
              <div style="width:100%">
                  <img :src="item.image" alt="" style="width:100%">
              </div>
              <div>{{item.name}}</div>
              <div class=" df jc-c">
                  <div>{{item.price}}</div>
                  <div class=" td-lt cg">{{item.mallPrice}}</div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: '',
  props:{},
  data () {
    return {
        arr:[],
    }
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
  watch: {}
}
</script>

<style lang='scss' scoped>
.mt{
  margin-top: 320px;
  margin-bottom: 50px;
}
</style>