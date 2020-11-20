<template>
  <div class="b-image">
    <van-panel title="登录/注册">
    <div class="lrtitle">登录/注册</div>
      <div>
        <van-form @submit="onSubmit">
          <van-field
            v-model="nickname"
            name="用户名"
            placeholder="USERNAME"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            v-model="password"
            type="password"
            name="密码"
            placeholder="PASSWORD"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
          <van-field
            v-model="password"
            type="password"
            name="密码"
            placeholder="PASSWORD"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
          <van-field
            v-model="password"
            type="password"
            name="密码"
            placeholder="PASSWORD"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
          <van-field
            v-model="verify"
            name="验证码"
            placeholder="验证码"
            :rules="[{ required: true, message: '请填写验证码' }]"
          >
          </van-field>
          <div style="margin: 16px">
            <van-button type="primary" native-type="login"> 提交 </van-button>
            <van-button type="danger" native-type="register"> 注册 </van-button>
          </div>
        </van-form>
      </div>
    </van-panel>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.b-image {
  background: url("https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2302918245,2826021973&fm=26&gp=0.jpg");
  padding: 100px 20px 20px 20px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.lrtitle{
    margin-bottom: 60px;
}
</style>