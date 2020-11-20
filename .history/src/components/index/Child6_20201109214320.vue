<template>
  <div>
      <div>
          <div>1F</div>
          <div>休闲食品</div>
      </div>
      <div class=" df" >
          <div style="width:50%">
              <div><img :src="arr[0].image" alt="" class="widthb "></div>
              <div><img :src="arr[0].image" alt="" class="widthb "></div>
          </div>
          <div style="width:50%">
              <div><img :src="arr[0].image" alt="" class="widthb heightb"></div>
              <div><img :src="arr[0].image" alt="" class="widthb heightb"></div>
              <div><img :src="arr[0].image" alt="" class="widthb heightb"></div>
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
.widthb{
    width: 100%;
}
.heightb{
    height: 33.3%;
}
</style>