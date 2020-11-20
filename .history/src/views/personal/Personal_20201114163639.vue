<template>
  <div>
    <div class="m-header df jc-sb ai-c">
      <div class="ml20" @click="clickMy"><van-icon name="arrow-left" /></div>
      <div>个人信息</div>
      <div class="mr20" style="opacity: 0"><van-icon name="arrow-left" /></div>
    </div>
    <div>
      <van-form @submit="onSubmit">
        <van-cell-group>
          <van-cell title="github" />
          <div class="df jc-sb ai-c ml15 mr20">
            <div class="fs-14" style="color: #646595">头像</div>
            <div>
              <van-image round width="60px" height="60px" :src="avatar" />
            </div>
          </div>
          <van-field
            v-model="username"
            name="用户名"
            label="用户名"
            placeholder="请输入用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            v-model="nickname"
            label="呢称"
            placeholder="请输入呢称"
            :rules="[{ required: true, message: '请填写呢称' }]"
          />
          <van-field label="性别">
            <template #input>
              <van-radio-group v-model="radio" direction="horizontal">
                <van-radio name="1">男</van-radio>
                <van-radio name="2">女</van-radio>
              </van-radio-group>
            </template>
          </van-field>
          <van-field
            v-model="email"
            label="邮箱"
            placeholder="邮箱"
            name="邮箱"
            clearable
            :rules="[
              { required: true, message: '请填写您的邮箱！' },
              {
                pattern: /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/,
                message: '邮箱格式错误！',
              },
            ]"
          />

          <van-cell title="选择单个日期" :value="date" @click="show = true" />
          <van-calendar v-model="show" @confirm="onConfirm" />
        </van-cell-group>
        <div style="margin: 16px">
          <van-button round block type="info" native-type="submit">
            保存
          </van-button>
          <van-button round block @click="cancel" style="margin-top: 20px">
            取消
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
  name: "",
  props: {},
  data() {
    return {
      value: "",
      radio: "1",
      email: "",
      date: "",
      show: false,
      username: "",
      userInfo: [],
      nickname: "",
      avatar: "",
      gender: "",
      year:'',
      month:'',
      day:'',
    };
  },
  components: {},
  methods: {
    clickMy() {
      this.$router.push("/my");
    },
    formatDate(date) {
      return `${date.getYear() + 1900}/${
        date.getMonth() + 1
      }/${date.getDate()}`;
    },
    onConfirm(date) {
      this.show = false;
      this.date = this.formatDate(date);
    },
    onSubmit(values) {
      console.log("submit", values);
      this.$api
        .saveUser( this.gender, this.year, this.month, this.day, this.nickname )
        .then((res) => {
          console.log(res);
          if(res.code===200){
            Toast.success(res.msg);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    cancel() {
      this.$router.push("/my");
    },
  },
  mounted() {
    this.$api
      .user()
      .then((res) => {
        console.log(res.userInfo);
        this.userInfo = res.userInfo;
        this.date =
          res.userInfo.year + "/" + res.userInfo.month + "/" + res.userInfo.day;
        this.username = this.userInfo.username;
        this.nickname = this.userInfo.nickname;
        this.avatar = this.userInfo.avatar;
        if (res.userInfo.gender === "男") {
          this.radio = "1";
        } else if (res.userInfo.gender === "女") {
          this.radio = "2";
        }
        if (this.radio === "1") {
          this.gender = "男";
        } else if (this.radio === "2") {
          this.gender = "女";
        }
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
.m-header {
  height: 50px;
  line-height: 50px;
  background: #eee;
}
</style>