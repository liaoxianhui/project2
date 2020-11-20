<template>
  <div>
      <div>
          <div>1F</div>
          <div>休闲食品</div>
      </div>
      <div class=" df">
          <div>
              <div><img :src="arr[0].image" alt=""></div>
              <div><img :src="arr[1].image" alt=""></div>
          </div>
          <div>
              <div><img :src="arr[2].image" alt=""></div>
              <div><img :src="arr[3].image" alt=""></div>
              <div><img :src="arr[4].image" alt=""></div>
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