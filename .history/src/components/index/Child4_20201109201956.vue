<template>
  <div>
      <!-- <div v-for="(item,index) in arr" :key="index"> -->
          <img :src="arr.PICTURE_ADDRESS" alt="">
      <!-- </div> -->
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
      this.$api.getRecommend().then(res=>{
      console.log(res.data.advertesPicture);
      this.arr=res.data.advertesPicture
    }).catch(err=>{
      console.log(err);
    })
  },
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>

</style>