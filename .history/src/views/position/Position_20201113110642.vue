<template>
  <div>
    <div class="ta-c">城市列表</div>
    <div>
      <van-search v-model="value" placeholder="请输入搜索关键词" />
    </div>
    <div>
      <div>当前城市</div>
      <div><van-button>主要按钮</van-button></div>
    </div>
    <div>
      <div>热门城市</div>
      <div>
        <van-button>主要按钮</van-button>
        <van-button>主要按钮</van-button>
        <van-button>主要按钮</van-button>
      </div>
    </div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      value: "",
    };
  },
  components: {},
  methods: {},
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>