<template>
  <div>
    <!-- 返回上一页的图标 -->
    <div class="pr zi99" style="top: 20px">
      <van-icon
        name="arrow-left"
        @click="iconreturn"
        style="margin-left: 20px"
      />
    </div>
    <!-- 轮播图 -->
    <div>
      <van-swipe :autoplay="3000">
        <van-swipe-item>
          <img v-lazy="arr.image" style="width: 100%" />
        </van-swipe-item>
        <van-swipe-item>
          <img v-lazy="arr.image_path" style="width: 100%" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- <div>{{ 123 }}</div> -->
    <!-- 显示信息 -->
    <div>
      <div class="df jc-sb">
        <div class="pl16">{{ arr.name }}</div>
        <div class="pr15 cr">￥{{ arr.present_price }}</div>
      </div>
      <div class="df jc-sb pl16 pr15 cg fs-12 p10">
        <div>运费:0</div>
        <div>剩余:{{ arr.amount }}</div>
        <!-- 收藏和取消收藏 -->
        <div v-if="v === -1" class="df ai-c jc-fe" style="width: 26%">
          <div class="mr10">取消收藏</div>
          <van-icon name="like" size="18" color="red" @click="collection1" />
        </div>
        <div v-else class="df ai-c jc-fe" style="width: 26%">
          <div class="mr10">收藏</div>
          <van-icon name="like-o" size="18" color="red" @click="collection2" />
        </div>
      </div>
    </div>
    <div>
      <van-cell value="进入店铺" is-link icon="shop-o">
        <!-- 使用 title 插槽来自定义标题 -->
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #title>
          <span class="custom-title"> 有赞的店 </span>
          <van-tag type="danger">官方</van-tag>
        </template>
      </van-cell>
    </div>
    <!-- 标签页 -->
    <div>
      <van-tabs v-model="active" style="margin-bottom: 50px">
        <van-tab title="商品详情" class="ta-c">
          <div
            v-html="arr.detail"
            style="width: 100%; margin: 0px; padding: 0px"
          ></div>
        </van-tab>
        <van-tab title="商品评价">
          <div v-if="arr1.length" class="m10">
            <div v-for="(item, index) in arr1" :key="index">
              <div class="df jc-sb">
                <div class="df">
                  <div>
                    <van-image
                      width="50px"
                      height="50px"
                      round
                      :src="item.user.avatar"
                    />
                  </div>
                  <div>
                    <div>{{ item.comment_nickname }}</div>
                    <div><van-rate v-model="item.rate" readonly /></div>
                  </div>
                </div>
                <div>{{ item.comment_time }}</div>
              </div>
              <div>评论图片{{ item.images.length }}张</div>
              <div>评论内容：{{ item.content }}</div>
            </div>
          </div>
          <!-- 当没有评论时，显示的内容 -->
          <div v-else class=" ta-c">暂无评论</div>
        </van-tab>
      </van-tabs>
    </div>
    <!-- 结尾显示的购物车、加入购物车、立即购买按钮 -->
    <div>
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" dot />
        <van-goods-action-icon
          icon="cart-o"
          text="购物车"
          :badge="count"
          @click="clickcart"
        />
        <van-goods-action-icon icon="shop-o" text="店铺" />
        <van-goods-action-button
          type="warning"
          text="加入购物车"
          @click="add(arr.id)"
        />
        <van-goods-action-button
          type="danger"
          text="立即购买"
          @click="showPopup"
        />
      </van-goods-action>
    </div>
    <!-- 点了立即购买显示的弹出层 -->
    <van-popup
      v-model="show"
      closeable
      close-icon="close"
      position="bottom"
      :style="{ height: '36%' }"
    >
      <div class="df">
        <van-image
          width="100px"
          height="100px"
          fit="cover"
          :src="arr.image"
          class="p"
        />
        <div style="margin: 10px">
          <div class="mb10" style="width: 200px">{{ arr.name }}</div>
          <div class="cr">￥{{ arr.present_price }}</div>
        </div>
      </div>
      <van-cell-group class="df jc-sb m10 fs-14">
        <div>
          <div>购买数量</div>
          <div class="df">
            <div style="margin-right: 10px; color: #999a9b">
              剩余{{ arr.amount }}件
            </div>
            <div class="cr">每人限购50件</div>
          </div>
        </div>
        <div>
          <van-stepper v-model="value" min="1" max="50" integer />
        </div>
      </van-cell-group>
      <div class="cw ta-c br mt20" style="padding: 10px 0" @click="buy">
        立即购买
      </div>
    </van-popup>
  </div>
</template>

<script>
import { Toast } from "vant";
import { Dialog } from "vant";

export default {
  name: "",
  props: {},
  data() {
    return {
      flag: "",
      active: 0,
      arr: [],
      arr1: [],
      v: 1,
      show: false,
      value: null,
      count: "",
      rate: 1,
    };
  },
  components: {},
  methods: {
    // 跳转到结算，传值
    buy() {
      // console.log(this.arr);
      this.$router.push({
        name: "Settlementnow",
        query: {
          msg: JSON.stringify([this.arr]),
          idDirect: true,
          count: this.value,
        },
      });
    },
    // 跳转购物车
    clickcart() {
      this.$router.push("/shoppingcart");
    },
    // 加入购物车
    add(goodsId) {
      console.log(goodsId);
      this.$api
        .addShop(goodsId)
        .then((res) => {
          console.log(res);
          if (res.code === 200) {
            Toast.success(res.msg);
            this.getcount();
          } else if (res.code === -1) {
            if (res.msg === "请登录") {
              Dialog.confirm({
                title: "提示",
                message: "您还未登录,是否去登录!",
              })
                .then(() => {
                  // on confirm
                  this.$router.push("/layin");
                })
                .catch(() => {
                  // on cancel
                });
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 立即购买
    showPopup() {
      this.$api
        .user()
        .then((res) => {
          console.log(res);
          if (res.userInfo === undefined) {
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
            this.show = true;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 请求
    getData() {
      this.$api
        .goodOne(this.flag)
        .then((res) => {
          console.log(res.goods.comment);
          this.arr = res.goods.goodsOne;
          this.arr1 = res.goods.comment;
          this.getcoll();
          this.$saveHistory({
            key: "browse",
            item: this.arr,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 购物车里商品的数量
    getcount() {
      this.$api
        .getCard()
        .then((res) => {
          // console.log(res);
          this.count = res.shopList.length;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 取消收藏
    collection1() {
      this.v = 1;
      this.$api
        .cancelCollection(this.arr.id)
        .then((res) => {
          console.log(res);
          Toast.success(res.msg);
          this.getcoll();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 收藏
    collection2() {
      this.$api
        .collection(this.arr)
        .then((res) => {
          console.log(res);
          if (res.code === 200) {
            Toast.success(res.msg);
            this.v = -1;
          } else if (res.code === -1) {
            if (res.msg === "请登录") {
              Dialog.confirm({
                title: "提示",
                message: "您还未登录,是否去登录!",
              })
                .then(() => {
                  // on confirm
                  this.$router.push("/layin");
                })
                .catch(() => {
                  // on cancel
                });
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 返回上一页
    iconreturn() {
      this.$router.go(-1);
    },
    // 请求收藏
    getcoll() {
      this.$api
        .isCollection(this.arr.id)
        .then((res) => {
          console.log(res);
          if (res.isCollection === 1) {
            this.v = -1;
          } else {
            this.v = 1;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    // 接收传过来的值
    this.flag = this.$route.query.msg;
    console.log(this.$route.query.msg);
    // 调用
    this.getData();
    this.getcount();
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.p {
  margin: 10px;
}
</style>