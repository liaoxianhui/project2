<template>
  <div class="df jc-sb" style="margin:20px 6px">
      <div v-for="(item,index) in arr" :key="index" style="text-align:center" @click="clickClassify">
          <div>
              <img :src="item.image" alt="" width="50px">
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
  methods: {
    clickClassify(){
      this.$router.push('/classify')
    },
  },
  mounted() {
      this.$api.getRecommend().then(res=>{
      // console.log(res.data.category);
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