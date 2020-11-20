<template>
  <div>
      <div>
          <div>1F</div>
          <div>休闲食品</div>
      </div>
      <div class=" df" v-for="(item,index) in arr" :key="index">
          <div style="width:50%">
              <div style="width:100%"><img :src="item.image" alt="" style="width:100%"></div>
              <div><img :src="item.image" alt=""></div>
          </div>
          <div>
              <div><img :src="item.image" alt=""></div>
              <div><img :src="item.image" alt=""></div>
              <div><img :src="item.image" alt=""></div>
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
        console.log(res.data.floor1);
        this.arr = res.data.floor1;
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

</style>