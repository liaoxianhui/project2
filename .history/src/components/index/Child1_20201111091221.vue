<template>
  <div>
    <div class="container">
      <div class="city" style="z-index: 999 !important">
        <div v-if="city" class="van-ellipsis" :alt="city">{{ city }}</div>
        <div v-else class="van-ellipsis" :alt="city">获取中...</div>
        <van-icon name="arrow-down" />
      </div>
      <van-search
        shape="round"
        style="z-index: 999 !important"
        class="search"
        v-model="value"
        placeholder="请输入搜索关键词"
        background="none"
      ></van-search>
    </div>
    <!-- <div>{{ LocationCity }}</div> -->
  </div>
</template>

<script>
// import BMap from 'BMap'
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      show: false,
      // city: "",
      value: "",
      LocationCity: "正在定位",
    };
  },
  methods: {
    // city() {
    //   //定义获取城市方法
    //   const geolocation = new BMap.Geolocation();
    //   var _this = this;
    //   geolocation.getCurrentPosition(
    //     function getinfo(position) {
    //       let city = position.address.city; //获取城市信息
    //       let province = position.address.province; //获取省份信息
    //       _this.LocationCity = city;
    //     },
    //     function (e) {
    //       _this.LocationCity = "定位失败";
    //     },
    //     { provider: "baidu" }
    //   );
    // },
  },
  mounted() {
    // this.city();

    // AMap.plugin('AMap.CitySearch', function () {
    //          var citySearch = new AMap.CitySearch();
    //          citySearch.getLocalCity(function (status, result) {
    //              if (status === 'complete' && result.info === 'OK') {
    //                  // 查询成功，result即为当前所在城市信息
    //                  let province = result.province;
    //                  let city = result.city;
    //                  console.log(city);
    //              }
    //          })
    //      })

    mapObj = new AMap.Map("iCenter");
    mapObj.plugin("AMap.Geolocation", function () {
      geolocation = new AMap.Geolocation({
        enableHighAccuracy: true, //是否使用高精度定位，默认:true
        timeout: 10000, //超过10秒后停止定位，默认：无穷大
        maximumAge: 0, //定位结果缓存0毫秒，默认：0
        convert: true, //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
        showButton: true, //显示定位按钮，默认：true
        buttonPosition: "LB", //定位按钮停靠位置，默认：'LB'，左下角
        buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
        showMarker: true, //定位成功后在定位到的位置显示点标记，默认：true
        showCircle: true, //定位成功后用圆圈表示定位精度范围，默认：true
        panToLocation: true, //定位成功后将定位到的位置作为地图中心点，默认：true
        zoomToAccuracy: true, //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
      });
      mapObj.addControl(geolocation);
      geolocation.getCurrentPosition();
      AMap.event.addListener(geolocation, "complete", onComplete); //返回定位信息
      AMap.event.addListener(geolocation, "error", onError); //返回定位出错信息
    });

    // let _this = this;
    // AMap.plugin("AMap.Geolocation", function () {
    //     var geolocation = new AMap.Geolocation({
    //         // 是否使用高精度定位，默认：true
    //         enableHighAccuracy: true,
    //         // 设置定位超时时间，默认：无穷大
    //         timeout: 10000,
    //         // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
    //         buttonOffset: new AMap.Pixel(10, 20),
    //         //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
    //         zoomToAccuracy: true,
    //         //  定位按钮的排放位置,  RB表示右下
    //         buttonPosition: "RB",
    //     });
    //     geolocation.getCurrentPosition();
    //     AMap.event.addListener(geolocation, "complete", onComplete);
    //     AMap.event.addListener(geolocation, "error", onError);

    //     function onComplete(data) {
    //         // data是具体的定位信息
    //         _this.$store.state.currentCity = data.addressComponent.city;
    //     }

    //     function onError(data) {
    //         // 定位出错
    //         _this.$store.state.currentCity = "获取失败";
    //     }
    // });
  },
  watch: {
    value(val) {
      this.keyword = val.trim();
    },
  },
  computed: {
    city() {
      if (!this.$store.state.city) {
        this.$store.state.city = this.$store.state.currentCity;
      }
      return this.$store.state.city;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  position: fixed;
  z-index: 9999;
  display: flex;
  width: 100%;
  height: 6vh;
  padding: 1vh 0;
  background: #f2f2f2;
}

.city {
  div {
    width: 100%;
    text-align: center;
  }

  width: 65px;
  display: flex;
  font-size: 14px;
  line-height: 6vh;
  height: 6vh;
  margin-left: 10px;
  position: relative;

  .van-icon {
    position: absolute;
    right: -10px;
    line-height: 6vh;
  }
}

.search {
  width: 300px;
  height: 4vh;
  margin-top: 1vh;
}

.box {
  margin-top: 7vh;
  padding-top: 10px;
  position: fixed;
  width: 100%;
  height: 93vh;
  background: white;
  z-index: 103;
}

.fade-enter,
.fade-leave-to {
  transform: translateX(375px);
}

.fade-leave,
.fade-enter-to {
  transform: translateX(0);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
</style>
