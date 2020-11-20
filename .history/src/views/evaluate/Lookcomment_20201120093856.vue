<template>
  <div>
    <div class="m-header df jc-sb ai-c">
      <div class="ml20" @click="clickMy"><van-icon name="arrow-left" /></div>
      <div>评价中心</div>
      <div class="mr20" style="opacity: 0"><van-icon name="arrow-left" /></div>
    </div>
    <div class="df m20">
      <div class="mr20"><img :src="image" alt="" width="100px" /></div>
      <div class="df fd-c jc-c">
        <div class="mb20">商品评分</div>
        <div><van-rate v-model="value" readonly/></div>
      </div>
    </div>
    <div>
      <van-field
        v-model="message"
        rows="3"
        autosize
        type="textarea"
        placeholder="说说您的购买感受，亲"
        readonly
      />
    </div>
    <div class="m10">
      <van-uploader v-model="fileList" multiple disabled />
    </div>
    <div class="m20">
      <van-checkbox v-model="checked" disabled >匿名评价</van-checkbox>
    </div>
    <div class="m20">
      <van-button type="primary" size="large" @click="look">返回</van-button>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";

export default {
  name: "",
  props: {},
  data() {
    return {
      pid: "",
      pid1: "",
      value: 0,
      message: "",
      image: "",
      checked: true,
      arr: [],
      fileList: [
        { url: "https://img.yzcdn.cn/vant/leaf.jpg" },
        // Uploader 根据文件后缀来判断是否为图片文件
        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
        // { url: "https://cloud-image", isImage: true },
      ],
    };
  },
  components: {},
  methods: {
    clickMy() {
      this.$router.go(-1);
    },
    getdata() {
      this.pid = this.$route.query.msg;
      this.pid1 = this.$route.query.msg1;
      console.log(this.pid, this.pid1);
      this.$api
        .evaluateOne(this.pid, this.pid1)
        .then((res) => {
          console.log(res.evaluateOne);
          //   Toast.success(res.msg);
          this.arr = res.evaluateOne;
          this.value = this.arr.rate;
          this.message = this.arr.content;
          this.checked = this.arr.anonymous;
          this.image = this.arr.goods[0].image_path;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    look() {
      //   console.log(this.pid.cid);
      //   console.log(this.value);
      //   console.log(this.message);
      //   console.log(this.checked);
      //   console.log(this.pid._id);
      //   console.log(this.pid.order_id);
      //   console.log(this.fileList);
      this.$router.go(-1);

      //         id: 商品cid
      // rate: 分数
      // content: 内容
      // anonymous: 是否匿名
      // _id: 商品的_id
      // order_id: 商品的order_id
      // image: []
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