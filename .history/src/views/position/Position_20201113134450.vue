<template>
<div class="container-city">
    <global-top>
        <div slot="title">城市列表</div>
    </global-top>
    <cities-search :desc="desc" class="search"></cities-search>
    <!-- 模糊搜索 -->
    <van-cell v-if="desc!==''" :sticky-offset-top="100" class="index-bar">
        <van-cell v-for="item1 in show" :key="item1.id" :title="item1.name" />
    </van-cell>
    <!-- A-Z城市排名 -->
    <van-index-bar v-else :sticky-offset-top="100" class="index-bar">
        <div class="title">当前城市</div>
        <van-cell>
            <div v-if='city' class="detail" @click="Selectcurrent">{{city}}</div>
            <div v-else class="detail" @click="Selectcurrent">定位中...</div>
        </van-cell>
        <!-- 热门城市 -->
        <div class="title">热门城市</div>
        <van-cell>
            <div class="box">
                <div v-for="item in hotCities" :key="item.id" class="detail">{{item.name}}</div>
            </div>
        </van-cell>
        <div v-for="item in Object.keys(cities)" :key="item.id">
            <van-index-anchor :index="item" />
            <van-cell v-for="desc in cities[item]" :key="desc.id" :title="desc.name" />
        </div>
    </van-index-bar>
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