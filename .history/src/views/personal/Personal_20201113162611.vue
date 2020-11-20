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
            <van-radio-group
              v-model="radio"
              label="性别"
              direction="horizontal"
            >
              <van-radio name="1">男</van-radio>
              <van-radio name="2">女</van-radio>
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

        <van-field
          readonly
          clickable
          name="calendar"
          :value="value"
          label="日历"
          placeholder="点击选择日期"
          @click="showCalendar = true"
        />
        <van-calendar v-model="showCalendar" @confirm="onConfirm" />
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
      value: "",
      showCalendar: false,
    };
  },
  components: {},
  methods: {
    clickMy() {
      this.$router.push("/my");
    },
    onConfirm(date) {
      this.value = `${date.getMonth() + 1}/${date.getDate()}`;
      this.showCalendar = false;
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