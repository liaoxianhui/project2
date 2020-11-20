<template>
  <div class="b-image">
    <div class="sign">
      <div class="fw-b fs-20">登录/注册</div>
      <van-form style="background:rgba(255,255,255,.5)">
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
          v-model="phone"
          name="手机号码"
          label="手机号码"
          placeholder="手机号码"
        />
        <div class="df">
          <van-field
            class="vanfield"
            v-model="phonecode"
            name="手机验证码"
            label="手机验证码"
            placeholder="验证码"
          />
          <van-button
            type="primary"
            size="normal"
            style="width: 140px; font-size: 12px;margin:10px 0"
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
          <van-button type="primary" @click="signin" style="margin-right: 40px">
            登录
          </van-button>
          <van-button type="danger" @click="submit"> 注册 </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import { Notify } from "vant";
import { Toast } from "vant";
export default {
  name: "",
  props: {},
  data() {
    return {
      username: "",
      password: "",
      verify: "",
      verify1: "",
      phone: "",
      phonecode: "",
    };
  },
  components: {},
  methods: {
    submit() {
      this.$api
        .register(this.username, this.password, this.verify1)
        .then((res) => {
          console.log(res);
          if (res.code === 200) {
            Toast.success(res.msg);
            this.$router.push("/");
          } else if (res.code === -1) {
            Toast.fail(res.msg);
            if (res.msg === "用户名已存在") {
              this.username = "";
              this.password = "";
              this.verify1 = "";
            } else if (res.msg === "请输入完整信息") {
              this.verify1=''
            }
          } else if (res.code === -2) {
            Toast.fail(res.msg);
            this.verify1 = "";
          }
          this.code();
        })
        .catch((err) => {
          console.log(err);
        });
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
    signin() {
      this.$api
        .login(this.username, this.password, this.verify1)
        .then((res) => {
          console.log(res);
          if(res.code===200){
            Toast.success(res.msg);
            this.$router.push("/");
          }else if(res.code===-1){
            Toast.fail(res.msg);
            if(res.msg==='请输入完整信息'){
              this.verify1=''
            }else if(res.msg==='用户名错误'){
              this.username=''
              this.password=''
              this.verify1=''
            }else if(res.msg==='密码错误'){
              this.password=''
              this.verify1=''
            }
          }else if(res.code===-2){
            Toast.fail(res.msg);
            this.verify1=''
          }
          this.code();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.code();
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.b-image {
  background: url("https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3241474867,349606499&fm=26&gp=0.jpg");
  padding: 100px 20px 20px 20px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.sign {
  background: rgba(255,255,255,0.2);
  box-shadow: rgb(151, 146, 146) 0px 0px 10px 5px;
  padding: 20px;
}
.vanfield {
  margin: 10px 0;
  background:rgba(255,255,255,.7)
}
</style>