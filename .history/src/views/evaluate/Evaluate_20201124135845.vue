<template>
  <div>
    <!-- 标题 -->
    <div class="m-header df jc-sb ai-c">
      <div class="ml20" @click="clickMy"><van-icon name="arrow-left" /></div>
      <div>评价中心</div>
      <div class="mr20" style="opacity: 0"><van-icon name="arrow-left" /></div>
    </div>
    <!-- 头部图片 -->
    <div>
      <img src="../../image/evaluate.jpg" alt="" width="100%" />
    </div>
    <!-- 标签页 -->
    <div
      class="ta-c pr"
      style="top: -20px; width: 90%; left: 5%; border-radius: 5px"
    >
      <van-tabs v-model="active" style="border-radius: 5px">
        <!-- 未评价 -->
        <van-tab title="未评价">
          <van-card
            v-for="(item, index) in arr"
            :key="index"
            :price="item.present_price"
            :title="item.name"
            :thumb="item.image_path"
            style="margin: 0"
          >
            <!-- 评价按钮 -->
            <template #footer>
              <van-button size="mini" @click="comment(item)"
                >评论晒单</van-button
              >
            </template>
          </van-card>
        </van-tab>
        <!-- 已评价 -->
        <van-tab title="已评价">
          <van-card
            v-for="(item, index) in arr1"
            :key="index"
            :price="item.goods[0].present_price"
            :title="item.goods[0].name"
            :thumb="item.goods[0].image_path"
          >
            <!-- 查看评价按钮 -->
            <template #footer>
              <van-button size="mini" @click="look(item.goods[0].id, item._id)"
                >查看评论</van-button
              >
            </template>
          </van-card>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
// 引用
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
    // 返回上一页
    clickMy() {
      this.$router.push("/my");
    },
    // 跳转传值到评价页
    comment(id) {
      this.$router.push({
        path: "/comment",
        query: {
          msg: id,
        },
      });
    },
    // 跳转传值到查看评价按钮
    look(id, id1) {
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