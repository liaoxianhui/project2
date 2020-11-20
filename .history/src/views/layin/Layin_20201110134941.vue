<template>
  <div class="b-image">
    <div class="sign">
      <div class="fw-b fs-20">登录/注册</div>
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="手机号码"
          placeholder="手机号码"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="手机验证码"
          placeholder="手机验证码"
        />
        <div>
          <van-field
            v-model="password"
            type="password"
            name="密码"
            label="验证码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
          <div v-html="verify"></div>
        </div>

        <div style="margin: 16px">
          <van-button round type="primary" native-type="submit">
            登录
          </van-button>
          <van-button round type="danger" native-type="submit">
            注册
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      username: "",
      password: "",
      verify: "",
    };
  },
  components: {},
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    },
  },
  mounted() {
    this.$api
      .register({
        nickname: this.username,
        password: this.password,
        verify: this.verify,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
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
.sign {
  background: white;
  box-shadow: rgb(151, 146, 146) 0px 0px 10px 5px;
  padding: 20px;
}
</style>