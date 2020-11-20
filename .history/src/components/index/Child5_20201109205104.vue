<template>
  <div>
    
  </div>
</template>

<script>
import Bscroll from "better-scroll";
export default {
  name: "",
  props: {},
  data() {
    return {
      arr: [],
    };
  },
  created() {
    this.$nextTick(() => {
      this.personScroll();
    });
  },

  components: {},
  methods: {
    
  },
  mounted() {
    this.$api
      .getRecommend()
      .then((res) => {
        console.log(res.data.recommend);
      })
      .catch((err) => {
        console.log(err);
      });
  
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>