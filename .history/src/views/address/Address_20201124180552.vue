<template>
  <div>
    <!-- 标题 -->
    <div class="m-header df jc-sb ai-c pf w100 zi99">
      <div class="ml20" @click="clickMy"><van-icon name="arrow-left" /></div>
      <div>我的地址</div>
      <div class="mr20" style="opacity: 0"><van-icon name="arrow-left" /></div>
    </div>
    <!-- 显示内容 -->
    <div style="margin-top:50px">
      <van-address-list
        v-model="chosenAddressId"
        :list="list"
        default-tag-text="默认"
        @add="onAdd"
        @edit="onEdit"
        @select="clickdefalut"
      />
    </div>
    <!-- 没有地址显示的是内容 -->
    <div v-if="list.length === 0" class="ta-c cg">暂无地址</div>
  </div>
</template>

<script>
import { Toast } from "vant";

export default {
  name: "",
  props: {},
  data() {
    return {
      chosenAddressId: "1",
      list: [],
      num: 0,
    };
  },
  components: {},
  methods: {
    // 返回上一页
    clickMy() {
      // console.log(this.num);
      if (this.num == 0) {
        this.$router.push("/my");
      }
      if (this.num == 1) {
        this.$router.push("/settlementnow");
      }
      if (this.num == 2) {
        this.$router.push("/settlement");
      }
    },
    // 添加地址
    onAdd() {
      // Toast("新增地址");
      this.$router.push("/addressadd");
    },
    // 编辑地址
    onEdit(item, index) {
      // console.log(item);
      // console.log(index);
      this.$router.push({
        path: "/addressincrease",
        query: {
          msg: item,
        },
      });
    },
    // 请求
    getdata() {
      this.$api
        .getAddress()
        .then((res) => {
          // console.log(res.address);
          this.list = res.address;
          // this.chosenAddressId = res.address.isDefault;
          this.list.map((item, index) => {
            if (item.isDefault === true) {
              this.$set(item, "id", item._id);
              this.chosenAddressId = item._id;
              // console.log(this.chosenAddressId);
            }
          });
          // this.num = this.$route.query.num;
          // console.log(this.num);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 选择
    clickdefalut(item, index) {
      // console.log(item);
      // console.log(index);
      if (this.num !== 0) {
        this.$api
          .setDefaultAddress(item._id)
          .then((res) => {
            console.log(res);
            // if (this.num === 1) {
            //   this.$router.push("/settlementnow");
            // } else if (this.num === 2) {
            //   this.$router.push("/settlement");
            // }
            this.$router.go(-1);
          })
          .catch((err) => {
            console.log(err);
          });
      }else{}
    },
  },
  mounted() {
    // 调用
    this.getdata();
    if (this.$route.query.num) {
      this.num = JSON.parse(this.$route.query.num);
    }
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