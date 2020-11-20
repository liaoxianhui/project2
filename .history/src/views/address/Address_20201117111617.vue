<template>
  <div>
    <div class="m-header df jc-sb ai-c">
      <div class="ml20" @click="clickMy"><van-icon name="arrow-left" /></div>
      <div>我的地址</div>
      <div class="mr20" style="opacity: 0"><van-icon name="arrow-left" /></div>
    </div>
    <div>
      <van-address-list
        v-model="chosenAddressId"
        :list="list"
        default-tag-text="默认"
        @add="onAdd"
        @edit="onEdit"
      />
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
      chosenAddressId: 0,
      list: [],
    };
  },
  components: {},
  methods: {
    clickMy() {
      this.$router.push("/my");
    },
    onAdd() {
      Toast("新增地址");
      this.$router.push("/addressincrease");
    },
    onEdit(item, index) {
      // console.log(item);
      // console.log(index);
      this.$router.push({
        path: "/addressincrease",
        query: {
          id: item._id,
        },
      });
    },
    getdata() {
      this.$api
        .getAddress()
        .then((res) => {
          console.log(res.address);
          this.list = res.address;
          this.chosenAddressId = res.address.isDefault;
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