<template>
  <div>
    <div v-if="v === -1"><van-empty description="未登录" /></div>
    <div>
      <van-submit-bar
        :price="3050"
        button-text="提交订单"
        @submit="onSubmit"
        style="margin-bottom: 50px"
      >
        <van-checkbox v-model="checked" @click="clickchecked()"
          >全选</van-checkbox
        >
        <!-- <template #tip>
          你的收货地址不支持同城送,
          <span @click="onClickEditAddress">修改地址</span>
        </template> -->
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
    };
  },
  components: {},
  methods: {
    onSubmit() {},
    clickchecked(e) {
      // this.checked = !this.checked;
      console.log(e);
    },
  },
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>