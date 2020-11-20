<template>
  <div class="df jc-sb" style="margin: 20px 6px">
    <div
      v-for="(item, index) in arr"
      :key="index"
      style="text-align: center"
      @click="clickClassify(index)"
    >
      <div>
        <img :src="item.image" alt="" width="50px" />
      </div>
      <div>{{ item.mallCategoryName }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      arr: [],
      flag: 1,
    };
  },
  components: {},
  methods: {
    clickClassify(index) {
      this.$router.push({
        path: "/classify",
        query: {
          msg: index,
          msg1: this.flag,
        },
      });
    },
  },
  mounted() {
    this.$api
      .getRecommend()
      .then((res) => {
        // console.log(res.data.category);
        this.arr = res.data.category;
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