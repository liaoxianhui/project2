<template>
  <div>
    <div>
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" style="width: 100%" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- <div>{{ 123 }}</div> -->
    <div>
      <van-panel title="标题" status="￥价格">
        <div class="df jc-sb pl16 pr15 cg fs-12 p10">
          <div>运费:0</div>
          <div>剩余:9999</div>
          <div class="df ai-c">
            <div class=" mr10">收藏</div>
            <van-icon name="like" size="18" color="white"/>
          </div>
        </div>
      </van-panel>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg",
      ],
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