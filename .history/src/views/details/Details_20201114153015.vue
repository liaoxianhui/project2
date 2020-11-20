<template>
  <div>
    <div class="pr zi99" style="top: 20px">
      <van-icon
        name="arrow-left"
        @click="iconreturn"
        style="margin-left: 20px"
      />
    </div>
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
    <div>
      <div class="df jc-sb">
        <div class="pl16">{{ arr.name }}</div>
        <div class="pr15 cr">￥{{ arr.present_price }}</div>
      </div>
      <div class="df jc-sb pl16 pr15 cg fs-12 p10">
        <div>运费:0</div>
        <div>剩余:{{ arr.amount }}</div>
        <div v-if="v === -1" class="df ai-c jc-fe" style="width: 26%">
          <div class="mr10">收藏</div>
          <van-icon name="like" size="18" color="red" @click="collection1" />
        </div>
        <div v-else class="df ai-c jc-fe" style="width: 26%">
          <div class="mr10">取消收藏</div>
          <van-icon name="like-o" size="18" color="red" @click="collection2" />
        </div>
      </div>
    </div>
    <div>
      <van-cell value="进入店铺" is-link icon="shop-o" style="">
        <!-- 使用 title 插槽来自定义标题 -->
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #title>
          <span class="custom-title">有赞的店 </span>
          <van-tag type="danger">官方</van-tag>
        </template>
      </van-cell>
    </div>
    <div>
      <van-tabs v-model="active" style="margin-bottom: 50px">
        <van-tab title="商品详情" class="ta-c">
          <div
            v-html="arr.detail"
            style="width: 100%; margin: 0px; padding: 0px"
          ></div>
        </van-tab>
        <van-tab title="商品评价" class="ta-c">评价</van-tab>
      </van-tabs>
    </div>
    <div>
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" dot />
        <van-goods-action-icon icon="cart-o" text="购物车" badge="5" />
        <van-goods-action-icon icon="shop-o" text="店铺" badge="12" />
        <van-goods-action-button type="warning" text="加入购物车" />
        <van-goods-action-button
          type="danger"
          text="立即购买"
          @click="showPopup"
        />
      </van-goods-action>
    </div>
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
          <div class=" mb10" style="width:200px;">{{arr.name}}</div>
          <div class=" cr">￥{{ arr.present_price }}</div>
        </div>
      </div>
      <van-cell-group class="df jc-sb m10 fs-14">
        <div>
          <div>购买数量</div>
          <div class="df">
            <div style="margin-right: 10px; color: #999A9B">
              剩余{{ arr.amount }}件
            </div>
            <div class="cr">每人限购50件</div>
          </div>
        </div>
        <div>
          <van-stepper v-model="value" min="1" max="50" integer />
        </div>
      </van-cell-group>
      <div class="cw ta-c br mt20" style="padding: 10px 0">立即购买</div>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      flag: "",
      active: 0,
      arr: [],
      v: -1,
      show: false,
    };
  },
  components: {},
  methods: {
    showPopup() {
      this.show = true;
    },
    getData() {
      this.$api
        .goodOne(this.flag)
        .then((res) => {
          console.log(res);
          this.arr = res.goods.goodsOne;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    collection1() {
      this.v = 1;
    },
    collection2() {
      this.v = -1;
    },
    iconreturn() {
      this.$router.go(-1);
    },
  },
  mounted() {
    this.flag = this.$route.query.msg;
    console.log(this.$route.query.msg);
    this.getData();
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