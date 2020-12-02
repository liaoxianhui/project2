<template>
  <div>
    <!-- 最近浏览标题 -->
    <div class="m-header df jc-sb ai-c pf zi99 w100 t0">
      <div class="ml20" @click="clickMy"><van-icon name="arrow-left" /></div>
      <div>最近浏览</div>
      <div class="mr20" style="opacity: 0"><van-icon name="arrow-left" /></div>
    </div>
    <!-- 显示内容 -->
    <div class="  " style="margin-top: 50px; margin-bottom: 40px">
      <!-- 卡片 -->
      <van-card
        v-for="(item, index) in arr"
        :key="index"
        :price="item.present_price"
        :title="item.name"
        :thumb="item.image_path"
        :origin-price="item.orl_price"
        style="margin: 0"
        @click="clickd(item.id)"
      >
        <!-- 删除单个按钮 -->
        <template #footer>
          <van-button size="mini" @click.stop="del(item, index)"
            >删除</van-button
          >
          <!-- <van-button size="mini" @click.stop="del(item, index)">删除</van-button> -->
        </template>
      </van-card>
    </div>
    <!-- 清空全部按钮 -->
    <div class="record" @click="alldel">清空全部浏览记录</div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "",
  props: {},
  data() {
    return {
      arr: [],
      name: "",
    };
  },
  components: {},
  methods: {
    // 跳转详情页面
    clickd(id) {
      this.$router.push({
        path: "/details",
        query: {
          msg: id,
        },
      });
    },
    // 返回上一页
    clickMy() {
      this.$router.push("/my");
    },
    // 删除单个记录
    del(item, index) {
      this.arr.splice(index, 1);
      localStorage.setItem(
        `${this.name}browsehistory`,
        JSON.stringify(this.arr)
      );
    },
    // 删除全部记录
    alldel() {
      if (this.arr !== null) {
        localStorage.removeItem(`${this.name}browsehistory`);
        this.getdata();
      } else if (this.arr === null){
        this.$toast.fail({
          message: "自定义图标",
          icon: "like-o",
        });
        // Toast.fail('失败文案');
      }
      // console.log(this.arr);
    },
    // 从本地数据库里获取浏览记录数据
    getdata() {
      this.name = this.$route.query.msg;
      this.arr = JSON.parse(localStorage.getItem(`${this.name}browsehistory`));
      // console.log(this.arr);
    },
  },
  mounted() {
    // 调用
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
.record {
  width: 100%;
  text-align: center;
  color: white;
  padding: 10px 0;
  background: red;
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>