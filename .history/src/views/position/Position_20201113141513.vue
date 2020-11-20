<template>
  <div class="pr">
    <div class="pf t0 bw w100 zi99">
      <div class="ta-c m10">城市列表</div>
      <div>
        <van-search v-model="value" placeholder="请输入搜索关键词" />
      </div>
    </div>
    <div class="top">
      <div class="m10">
        <div class="mb10">当前城市</div>
        <div v-if="flag.length">
          <van-button @click="clickbutton">{{ flag }}</van-button>
        </div>
        <div v-else><van-button>获取中...</van-button></div>
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
        <van-index-bar :sticky-offset-top="100" highlight-color="red">
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
    </div>
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
      flag: "",
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
    clickbutton(){
      this.$router.push({
        path:'/',
        query:{
          cs:this.flag
        }
      })
    }
  },
  mounted() {
    this.getCities();
    let _this = this;
    AMap.plugin("AMap.Geolocation", function () {
      var geolocation = new AMap.Geolocation({
        // 是否使用高精度定位，默认：true
        enableHighAccuracy: true,
        // 设置定位超时时间，默认：无穷大
        timeout: 10000,
        // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
        buttonOffset: new AMap.Pixel(10, 20),
        //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        zoomToAccuracy: true,
        //  定位按钮的排放位置,  RB表示右下
        buttonPosition: "RB",
      });

      geolocation.getCurrentPosition();
      AMap.event.addListener(geolocation, "complete", onComplete);
      AMap.event.addListener(geolocation, "error", onError);

      function onComplete(data) {
        // data是具体的定位信息
        _this.flag = data.addressComponent.city;
        console.log(data);
      }

      function onError(data) {
        // 定位出错
      }
    });
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.top {
  margin-top: 100px;
}
</style>