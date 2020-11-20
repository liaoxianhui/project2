<template>
  <div>
    <div class="m-header df jc-sb ai-c">
      <div class="ml20" @click="clickMy"><van-icon name="arrow-left" /></div>
      <div>评价中心</div>
      <div class="mr20" style="opacity: 0"><van-icon name="arrow-left" /></div>
    </div>
    <div>
      <img src="../../image/evaluate.jpg" alt="" width="100%" />
    </div>
    <div
      class="ta-c pr"
      style="top: -20px; width: 90%; left: 5%; border-radius: 5px"
    >
      <van-tabs v-model="active" style="border-radius: 5px">
        <van-tab title="未评价">
          <van-card
            v-for="(item, index) in arr"
            :key="index"
            :price="item.present_price"
            :title="item.name"
            :thumb="item.image_path"
            style="margin: 0"
          >
            <template #footer>
              <van-button size="mini" @click="comment(item)"
                >评论晒单</van-button
              >
            </template>
          </van-card>
        </van-tab>
        <van-tab title="已评价">
          <van-card
            v-for="(item, index) in arr1"
            :key="index"
            :price="item.goods[0].present_price"
            :title="item.goods[0].name"
            :thumb="item.goods[0].image_path"
          >
            <template #footer>
              <van-button size="mini" @click="look(item.goods[0].id,item._id)"
                >查看评论</van-button
              >
            </template>
          </van-card>
        </van-tab>
      </van-tabs>
    </div>
    <div></div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "",
  props: {},
  data() {
    return {
      active: 0,
      arr: [],
      arr1: [],
    };
  },
  components: {},
  methods: {
    clickMy() {
      this.$router.push("/my");
    },
    comment(id) {
      this.$router.push({
        path: "/comment",
        query: {
          msg: id,
        },
      });
    },
    look(id,id1) {
      this.$router.push({
        path: "/lookcomment",
        query: {
          msg: id,
          msg1: id1,
        },
      });
    },
    getdata() {
      this.$api
        .tobeEvaluated()
        .then((res) => {
          //   console.log(res.data.list);
          this.arr = res.data.list;
        })
        .catch((err) => {
          console.log(err);
        });
      this.$api
        .alreadyEvaluated()
        .then((res) => {
          console.log(res.data.list);
          this.arr1 = res.data.list;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getdata();
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.m-header {
  height: 50px;
  line-height: 50px;
  background: #eee;
}
</style>