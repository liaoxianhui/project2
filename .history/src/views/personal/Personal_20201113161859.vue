<template>
  <div>
    <div class="m-header df jc-sb ai-c">
      <div class="ml20" @click="clickMy"><van-icon name="arrow-left" /></div>
      <div>个人信息</div>
      <div class="mr20" style="opacity: 0"><van-icon name="arrow-left" /></div>
    </div>
    <div>
      <van-cell-group>
        <van-cell title="github" />
        <van-cell title="头像" value="内容" />
        <van-field v-model="value" label="用户名" placeholder="请输入用户名" />
        <van-field v-model="value" label="呢称" placeholder="请输入呢称" />
        <van-field name="radio" label="单选框">
          <template #input>
            <van-radio-group v-model="radio" direction="horizontal">
              <van-radio name="1">单选框 1</van-radio>
              <van-radio name="2">单选框 2</van-radio>
            </van-radio-group>
          </template>
        </van-field>
        <van-field
          v-model="email"
          label="邮箱"
          placeholder="邮箱"
          clearable
          :rules="[
            { required: true, message: '请填写您的邮箱！' },
            {
              pattern: /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/,
              message: '邮箱格式错误！',
            },
          ]"
        />

        <van-cell title="单元格" value="内容" />
        <van-cell title="单元格" value="内容" />
        <van-cell title="单元格" value="内容" />
        <van-cell title="单元格" value="内容" />
      </van-cell-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      value: "",
      radio: 1,
      email: "",
    };
  },
  components: {},
  methods: {
    clickMy() {
      this.$router.push("/my");
    },
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