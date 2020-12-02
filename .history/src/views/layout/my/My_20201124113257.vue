<template>
  <div>
    <!-- 标题 -->
    <div class="ta-c fw-b mt10 mb10">会员中心</div>
    <div style="background: #eee" class="p20">
      <div class="ta-r">
        <!-- 设置图标 -->
        <van-icon name="setting-o" size="20" @click="icon" />
      </div>
      <div class="ta-c">
        <!-- 头像 -->
        <van-image round width="10rem" height="10rem" :src="avatar" />
      </div>
      <!-- 用户名 -->
      <div class="ta-c mt10" v-if="username.length !== 0">
        欢迎{{ username }}
      </div>
      <!-- 退出 -->
      <div v-if="flag === 1" class="ta-c mt10" @click="exitsign">退出登录</div>
      <!-- 请登录 -->
      <div v-else class="ta-c mt10" @click="clicklayin">请登录</div>
    </div>
    <div>
      <!-- 代付款、、、已完成 -->
      <van-grid :column-num="5">
        <van-grid-item icon="pending-payment" text="待付款" />
        <van-grid-item icon="tosend" text="待发货" />
        <van-grid-item icon="shop-collect-o" text="待收货" />
        <van-grid-item
          icon="records"
          text="评价"
          :badge="count"
          @click="evaluate"
        />
        <van-grid-item icon="notes-o" text="已完成" @click="Completed" />
      </van-grid>
    </div>
    <!-- 全部订单、、、最近浏览 -->
    <div>
      <van-cell is-link icon="like-o" @click="order">全部订单</van-cell>
      <van-cell is-link icon="star-o" @click="collection">收藏商品</van-cell>
      <van-cell is-link icon="label-o" @click="address">地址管理</van-cell>
      <van-cell is-link icon="idcard" @click="browser">最近浏览</van-cell>
    </div>
  </div>
</template>

<script>
// 引用
import { Dialog } from "vant";

export default {
  name: "",
  props: {},
  data() {
    return {
      arr: [],
      count: "",
      username: "",
      flag: -1,
      avatar: "https://img.yzcdn.cn/vant/cat.jpeg",
    };
  },
  components: {},
  methods: {
    // 跳转登录/注册
    clicklayin() {
      this.$router.push("/layin");
    },
    // 发请求
    getdata() {
      // 获取用户信息
      this.$api
        .user()
        .then((res) => {
          // console.log(res);
          if (res.userInfo === undefined) {
            this.flag = -1;
          } else {
            this.flag = 1;
          }
          this.arr = res.userInfo;
          this.username = res.userInfo.nickname;
          this.avatar = res.userInfo.avatar;
        })
        .catch((err) => {
          console.log(err);
        });
      // 获取未评价数量
      this.$api
        .tobeEvaluated()
        .then((res) => {
          // console.log(res.data.list);
          this.count = res.data.list.length;
        })
        .catch((err) => {
          console.log(err);
        });
        // 获取订单数量
      this.$api
        .getOrderNum()
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 跳转评价
    evaluate() {
      if (this.arr === undefined) {
        Dialog.confirm({
          title: "提示",
          message: "您还未登录,是否去登录?",
        })
          .then(() => {
            // on confirm
            this.$router.push("/layin");
          })
          .catch(() => {
            // on cancel
          });
      } else {
        this.$router.push("/evaluate");
      }
    },
    // 跳转完成订单
    Completed() {
      if (this.arr === undefined) {
        Dialog.confirm({
          title: "提示",
          message: "您还未登录,是否去登录?",
        })
          .then(() => {
            // on confirm
            this.$router.push("/layin");
          })
          .catch(() => {
            // on cancel
          });
      } else {
        this.$router.push({
          path: "/order",
          query: {
            msg: 4,
          },
        });
      }
    },
    // 跳转收藏
    collection() {
      if (this.arr === undefined) {
        Dialog.confirm({
          title: "提示",
          message: "您还未登录,是否去登录?",
        })
          .then(() => {
            // on confirm
            this.$router.push("/layin");
          })
          .catch(() => {
            // on cancel
          });
      } else {
        this.$router.push("/collection");
      }
    },
    // 跳转最近浏览
    browser() {
      if (this.arr === undefined) {
        Dialog.confirm({
          title: "提示",
          message: "您还未登录,是否去登录?",
        })
          .then(() => {
            // on confirm
            this.$router.push("/layin");
          })
          .catch(() => {
            // on cancel
          });
      } else {
        this.$router.push({
          path: "/browser",
          query: {
            msg: this.username,
          },
        });
      }
    },
    // 跳转订单
    order() {
      if (this.arr === undefined) {
        Dialog.confirm({
          title: "提示",
          message: "您还未登录,是否去登录?",
        })
          .then(() => {
            // on confirm
            this.$router.push("/layin");
          })
          .catch(() => {
            // on cancel
          });
      } else {
        this.$router.push("/order");
      }
    },
    // 跳转地址
    address() {
      if (this.arr === undefined) {
        Dialog.confirm({
          title: "提示",
          message: "您还未登录,是否去登录?",
        })
          .then(() => {
            // on confirm
            this.$router.push("/layin");
          })
          .catch(() => {
            // on cancel
          });
      } else {
        this.$router.push({
          path: "/address",
          query: {
            num: 0,
          },
        });
      }
    },
    // 退出
    exitsign() {
      this.$api
        .loginOut()
        .then((res) => {
          console.log(res);
          this.flag = -1;
          this.$router.go(0);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 个人信息修改
    icon() {
      if (this.username.length === 0) {
        Dialog.confirm({
          title: "提示",
          message: "您还未登录,是否去登录?",
        })
          .then(() => {
            // on confirm
            this.$router.push("/layin");
          })
          .catch(() => {
            // on cancel
          });
      } else {
        this.$router.push("/personal");
      }
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
</style>