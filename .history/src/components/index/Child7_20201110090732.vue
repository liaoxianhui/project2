<template>
  <div class="mt">
      <div class=" df ai-c jc-c ">
          <div class="stylef">2F</div>
          <div>新鲜水果</div>
      </div>
      <div style="width:100%">
          <div v-for="(item, index) in arr" :key="index.id" style="width:50%" class=" fl">
          <img :src="item.image" alt="">
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
        console.log(res.data.floor2);
        this.arr = res.data.floor2;
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
img{
    width: 100%;
}
.stylef{
  background: red;
  border-radius: 50%;
  line-height: 20px;
  margin-right: 10px;
}
.mt{
  margin-top: 360px;
}
</style>