<template>
  <div>
    <!-- 标题 -->
    <div class="m-header df jc-sb ai-c">
      <div class="ml20" @click="clickMy"><van-icon name="arrow-left" /></div>
      <div>评价中心</div>
      <div class="mr20" style="opacity: 0"><van-icon name="arrow-left" /></div>
    </div>
    <!-- 显示商品图片和星级评价 -->
    <div class="df m20">
      <div class="mr20"><img :src="pid.image_path" alt="" width="100px" /></div>
      <div class="df fd-c jc-c">
        <div class="mb20">商品评分</div>
        <div><van-rate v-model="value" @change="onChange" /></div>
      </div>
    </div>
    <!-- 评论的内容 -->
    <div>
      <van-field
        v-model="message"
        rows="3"
        autosize
        type="textarea"
        placeholder="说说您的购买感受，亲"
      />
    </div>
    <!-- 上传图片 -->
    <div class="m10">
      <van-uploader v-model="fileList" multiple />
    </div>
    <!-- 匿名评价 -->
    <div class="m20">
      <van-checkbox v-model="checked">匿名评价</van-checkbox>
    </div>
    <div class="m20">
      <van-button type="primary" size="large" @click="submit">提交</van-button>
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
      value: 1,
      message: "",
      checked: true,
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
    onChange(value) {
      Toast("改为：" + value + "星");
    },
    getdata() {
      this.pid = this.$route.query.msg;
    },
    submit() {
      //   console.log(this.pid.cid);
      //   console.log(this.value);
      //   console.log(this.message);
      //   console.log(this.checked);
      //   console.log(this.pid._id);
      //   console.log(this.pid.order_id);
      //   console.log(this.fileList);
      if (this.message === "") {
        Toast.fail("请评论您购买的感受");
      } else {
        this.$api
          .comment(
            this.pid.cid,
            this.value,
            this.message,
            this.checked,
            this.pid._id,
            this.pid.order_id,
            []
            //   this.fileList,
          )
          .then((res) => {
            console.log(res);
            this.$router.go(-1);
            Toast.success(res.msg);
          })
          .catch((err) => {
            console.log(err);
          });
      }

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