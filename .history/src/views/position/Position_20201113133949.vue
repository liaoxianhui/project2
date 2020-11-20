<template>
  <div class="pr">
    <div class="pf t0 zi-99 bw w100">
      <div class="ta-c m10">城市列表</div>
      <div>
        <van-search v-model="value" placeholder="请输入搜索关键词" />
      </div>
    </div>
    <div class=" mt">
      <div class="mb10">当前城市</div>
      <div><van-button>主要按钮</van-button></div>
    </div>
    <div class="m10">
      <div class="mb10">热门城市</div>
      <div class="df fw-w">
        <div v-for="item in hotCities" :key="item.id" class="mr20 mb5">
          <van-button>{{ item.name }}</van-button>
        </div>
      </div>
    </div>

    <div class="">
      <van-index-bar :sticky-offset-top="220" highlight-color="red">
        <div v-for="item in Object.keys(cities)" :key="item.id">
          <van-index-anchor :index="item" class="pa top" />
          <van-cell
            v-for="itemcity in cities[item]"
            :key="itemcity.id"
            :title="itemcity.name"
          />
        </div>
      </van-index-bar>
    </div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
import $city from "../../js/city";
export default {
  name: "",
  props: {},
  data() {
    return {
      cities: {},
      value: "",
      itemcity: "",
      hotCities: [],
      arr: [],
    };
  },
  components: {},
  methods: {
    //获取全部城市信息
    getCities() {
      //获取热门城市
      this.hotCities = $city.data.hotCities;
      //获取A-Z城市信息
      this.cities = $city.data.cities;
      //获取城市名称（用于模糊搜索）
      Object.keys(this.cities).map((item) => {
        this.arr.push(...this.cities[item]);
      });
    },
  },
  mounted() {
    this.getCities();
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.top {
  top: 400px;
}
</style>