<template>
  <div>
    <div>商品分类</div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: '',
  props:{},
  data () {
    return {
    }
  },
  components: {},
  methods: {},
  mounted() {
    this.$api.category().then(res=>{
      console.log(res);
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