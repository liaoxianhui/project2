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
        <div class="df">
          <div>运费</div>
          <div>剩余</div>
          <div>收藏</div>
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