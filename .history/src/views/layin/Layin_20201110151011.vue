<template>
  <div class="b-image">
    <div class="sign">
      <div class="fw-b fs-20">登录/注册</div>
      <van-form @submit="onSubmit">
        <van-field
          class="vanfield"
          v-model="username"
          name="用户名"
          placeholder="用户名"
        />
        <van-field
          class="vanfield"
          v-model="password"
          type="password"
          name="密码"
          placeholder="密码"
        />
        <van-field
          class="vanfield"
          v-model="password"
          type="phone"
          name="手机号码"
          label="手机号码"
          placeholder="手机号码"
        />
        <div class="df">
          <van-field
            class="vanfield"
            v-model="password"
            type="phonecode"
            name="手机验证码"
            label="手机验证码"
            placeholder="手机验证码"
          />
          <van-button
            type="primary"
            size="normal"
            style="width: 140px; font-size: 12px"
            >发送验证码</van-button
          >
        </div>

        <div class="df">
          <van-field
            v-model="verify1"
            name="验证码"
            label="验证码"
            placeholder="验证码"
          />
          <div v-html="verify" @click="code"></div>
        </div>

        <div style="margin: 16px" class="ta-c">
          <van-button
            type="primary"
            native-type="submit"
            style="margin-right: 40px"
          >
            登录
          </van-button>
          <van-button type="danger" native-type="submit"> 注册 </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import { Notify } from "vant";
import { Toast } from 'vant';
export default {
  name: "",
  props: {},
  data() {
    return {
      username: "",
      password: "",
      verify: "",
      verify1: "",
    };
  },
  components: {},
  methods: {
    onSubmit(values) {
      if (this.username === "" || this.password==='' || this.verify1==='') {
        Toast.fail('失败文案');
      }
      console.log("submit", values);
    },
    code() {
      this.$api
        .getAverify()
        .then((res) => {
          // console.log(res);
          this.verify = res;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.code();
    // this.$api
    //   .login({
    //     nickname: this.username,
    //     password: this.password,
    //     verify: this.verify,
    //   })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
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
.vanfield {
  margin: 20px 0;
}
</style>