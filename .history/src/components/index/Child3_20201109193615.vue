<template>
  <div>
      <div v-for="(item,index) in arr" :key="index">
          <div>
              <img :src="item.image" alt="">
          </div>
          <div>{{item.mallCategoryName}}</div>
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
      this.$api.getRecommend().then(res=>{
      console.log(res.data.category);
      this.arr=res.data.category
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