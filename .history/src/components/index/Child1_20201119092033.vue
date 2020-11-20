<template>
  <div>
    <div class="container">
      <div class="city" style="z-index: 999 !important">
        <div
          v-if="city !== null"
          class="van-ellipsis"
          :alt="city"
          @click="click"
        >
          {{ city }}
        </div>
        <div v-else class="van-ellipsis" :alt="city" @click="click">
          正在定位..
        </div>
        <van-icon name="arrow-down" />
      </div>
      <van-search
        shape="round"
        style="z-index: 999 !important"
        class="search ml10"
        v-model="value"
        placeholder="请输入搜索关键词"
        background="none"
        @input="inputsearch"
      ></van-search>
    </div>
    <div
      v-if="value !== null"
      style="background: #eee; width: 100%; top: 53px; bottom: 0; padding: 20px"
      class="pf"
    >
      <div v-for="(item, index) in arr" :key="index">
        <div
          class="fs-12 pb-10"
          v-html="brightenKeyword(item.name, value)"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      city: null,
      value: null,
      arr: [],
    };
  },
  methods: {
    inputsearch() {
      this.$api
        .search(this.value)
        .then((res) => {
          console.log(res.data.list);
          this.arr = res.data.list;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //搜索高亮
    brightenKeyword(val, keyword) {
      if (keyword.length > 0) {
        let keywordArr = keyword.split("");
        val = val + "";
        keywordArr.forEach((item) => {
          if (val.indexOf(item) !== -1 && item !== "") {
            val = val.replace(
              new RegExp(item, "g"),
              '<font color="#f75353">' + item + "</font>"
            );
          }
        });
        return val;
      } else {
        return val;
      }
    },
    click() {
      this.$router.push("/position");
    },
  },
  mounted() {
    this.city = this.$route.query.cs;
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
        _this.city = data.addressComponent.city;
        console.log(data);
      }

      function onError(data) {
        // 定位出错
      }
    });
  },
  watch: {},
  computed: {},
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
