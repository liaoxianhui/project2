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
            <div class="mr10">收藏</div>
            <van-icon name="like" size="18" color="red" />
          </div>
        </div>
      </van-panel>
    </div>
    <div>
      <van-cell value="进入店铺" is-link icon="shop-o" style="color:red">
        <!-- 使用 title 插槽来自定义标题 -->
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #title>
          <span class="custom-title">有赞的店</span>
          <van-tag type="danger">官方</van-tag>
        </template>
      </van-cell>
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