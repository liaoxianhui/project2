<template>
  <div>
    <div class="pf t0 w100 ta-c zi999 p10 bw">购物车</div>
    <div v-if="arr.length === 0"><van-empty description="购物车为空" /></div>
    <div style="margin-top: 50px; margin-bottom: 100px">
      <div v-for="(item, index) in arr" :key="index" class="df jc-sb">
        <van-checkbox
          style="margin-left: 10px"
          v-model="item.check"
          @change="changecheck"
        ></van-checkbox>
        <div class="df jc-sb">
          <div><img :src="item.image_path" width="100" alt="" /></div>
          <div class="mr10 df fd-c jc-sa" style="width: 230px">
            <div
              style="
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                color: red;
              "
            >
              {{ item.name }}
            </div>
            <div class="df jc-sb w100">
              <div class="cr">￥{{ item.mallPrice }}</div>
              <div class="df ai-c">
                <div>
                  <van-stepper
                    v-model="item.count"
                    theme="round"
                    button-size="20"
                    min="1"
                    max="50"
                    integer
                    @change="changeadd(item.count, item.cid, item.mallPrice)"
                  />
                </div>
                <div class="ml10">
                  <!-- <van-icon name="close" @click="del(item.cid)" /> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <van-submit-bar
        :price="allcount * 100"
        button-text="去结算"
        @submit="onSubmit"
        style="margin-bottom: 50px"
      >
        <van-checkbox v-model="checked" @change="clickchecked"
          >全选</van-checkbox
        >
        <van-button
          size="small"
          round
          style="background: #f7392c; color: white; margin-left: 10px"
          @click="alldel"
          >删除</van-button
        >
      </van-submit-bar>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      v: 1,
      checked: false,
      arr: [],
      arr1: [],
      value: 1,
      flag: "",
      arr3: [],
    };
  },
  components: {},
  methods: {
    onSubmit() {
      this.arr3 = this.arr.filter((item) => {
        return item.check === true;
      });
      // console.log(this.arr3);
      this.$router.push({
        path:"/settlement",
        query:{
          msg:JSON.stringify(this.arr3)
        }
      });
    },
    changecheck() {
      this.checked = this.arr.every((item) => {
        return item.check === true;
      });
    },
    clickchecked() {
      this.arr.map((item) => {
        item.check = this.checked;
      });
    },
    getdata() {
      this.$api
        .getCard()
        .then((res) => {
          console.log(res.shopList);
          this.arr = res.shopList;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    del(cid) {
      console.log(cid);
      this.flag = cid;
      this.$api
        .deleteShop(this.flag)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      this.getdata();
    },
    alldel() {
      this.arr.map((item) => {
        if (item.check === true) {
          this.arr1.push(item.cid);
        }
      });
      this.$api
        .deleteShop(this.arr1)
        .then((res) => {
          console.log(res);
          this.getdata();
        })
        .catch((err) => {
          console.log(err);
        });
      this.getdata();
    },
    changeadd(count, cid, mallPrice) {
      this.$api
        .editCart(count, cid, mallPrice)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getdata();
  },
  computed: {
    allcount() {
      let sum = 0;
      this.arr.map((item) => {
        if (item.check) {
          sum = sum + item.mallPrice * item.count;
        }
      });
      return sum;
    },
  },
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>