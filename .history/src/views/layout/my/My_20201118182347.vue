<template>
  <div>
    <div class="ta-c fw-b mt10 mb10">会员中心</div>
    <div style="background: #eee" class="p20">
      <div class="ta-r">
        <van-icon name="setting-o" size="20" @click="icon" />
      </div>
      <div class="ta-c">
        <van-image round width="10rem" height="10rem" :src="avatar" />
      </div>
      <div class="ta-c mt10" v-if="username.length !== 0">
        欢迎{{ username }}
      </div>
      <div v-if="flag === 1" class="ta-c mt10" @click="exitsign">退出登录</div>
      <div v-else class="ta-c mt10" @click="clicklayin">请登录</div>
    </div>
    <div>
      <van-grid :column-num="5">
        <van-grid-item icon="pending-payment" text="待付款" />
        <van-grid-item icon="tosend" text="待发货" />
        <van-grid-item icon="shop-collect-o" text="待收货" />
        <van-grid-item icon="records" text="评价" badge="5" />
        <van-grid-item icon="notes-o" text="已完成" />
      </van-grid>
    </div>
    <div>
      <van-cell is-link icon="like-o" @click="order">全部订单</van-cell>
      <van-cell is-link icon="star-o" @click="collection">收藏商品</van-cell>
      <van-cell is-link icon="label-o" @click="address">地址管理</van-cell>
      <van-cell is-link icon="idcard" @click="browser">最近浏览</van-cell>
    </div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
import { Dialog } from "vant";

export default {
  name: "",
  props: {},
  data() {
    return {
      arr: [],
      username: "",
      flag: -1,
      avatar: "https://img.yzcdn.cn/vant/cat.jpeg",
    };
  },
  components: {},
  methods: {
    clicklayin() {
      this.$router.push("/layin");
    },
    getdata() {
      this.$api
        .user()
        .then((res) => {
          console.log(res.userInfo);
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
    },
    showPopup() {},
    collection() {
      this.$router.push("/collection");
    },
    browser() {
      this.$router.push("/browser");
    },
    order() {
      this.$router.push("/order");
    },
    address() {
       this.$router.push({
        path: "/address",
        query: {
          num: 0,
        },
      });
    },

    exitsign() {
      this.$api
        .loginOut()
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      this.flag = -1;
      this.$router.go(0);
    },
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
    this.getdata();
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>