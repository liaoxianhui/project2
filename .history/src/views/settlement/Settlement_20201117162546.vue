<template>
  <div>
      <div class="m-header df jc-sb ai-c">
      <div class=" ml20" @click="clickMy"><van-icon name="arrow-left" /></div>
      <div>订单结算</div>
      <div class=" mr20" style="opacity: 0;"><van-icon name="arrow-left"/></div>
    </div>

    <div>
      <van-contact-card
        type="edit"
        :name="currentContact.name"
        :tel="currentContact.tel"
        @click="onEdit"
      />
    </div>
    <div></div>
  </div>
</template>

<script>
import { Toast } from "vant";

export default {
  name: "",
  props: {},
  data() {
    return {
      currentContact: {
        name: "张三",
        tel: "13000000000",
      },
    };
  },
  components: {},
  methods: {
    onEdit() {
      Toast("编辑");
    },
     clickMy(){
      this.$router.go('-1')
    }
  },
  mounted() {},
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