<template>
  <div>
      <div>
          <div>1F</div>
          <div>休闲食品</div>
      </div>
      <div>
          <div>
              <div></div>
              <div></div>
          </div>
          <div>
              <div></div>
              <div></div>
              <div></div>
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
        console.log(res.data);
        this.arr = res.data;
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