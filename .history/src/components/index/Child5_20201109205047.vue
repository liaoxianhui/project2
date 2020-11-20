<template>
  <div>
    <div class="person-wrap" ref="personWrap">
      <ul class="person-list" ref="personTab">
        <li class="person-item">1</li>
        <li class="person-item">2</li>
        <li class="person-item">3</li>
        <li class="person-item">4</li>
        <li class="person-item">5</li>
      </ul>
    </div>
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