<template>
  <!-- 登录组件 -->
  <div class="signup-container">
    <div class="background"><img :src="bgImage" width="100%" height="100%" alt=""/></div>
    <div class="signup-box">
      <div class="avatar-box">
        <img :src="circleUrl" alt="" />
        <br />
        <br />
        <el-form
          label-width="0px"
          class="signUpForm"
          ref="signUpForm"
          :model="signUpForm"
          :rules="rules"
        >
          <el-form-item prop="username">
            <el-input
              placeholder="账号"
              prefix-icon="el-icon-user-solid"
              v-model="signUpForm.username"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              placeholder="密码"
              prefix-icon="el-icon-key"
              v-model="signUpForm.password"
              type="password"
            ></el-input>
          </el-form-item>
          <el-from-item class="btns">
            <el-button type="primary" class="login" @click="signUp('loginForm')"
              >登录</el-button
            >
            <el-button type="success" class="sign-up" @click="routerCheck"
              >注册</el-button
            >
          </el-from-item>
        </el-form>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  name: "signUp",
  data() {
    return {
      circleUrl: require("../assets/img/logo1.jpg"),
      bgImage: require("../assets/img/50782598.png"),
      signUpForm: {
        username: "admin",
        password: "123456",
      },
      rules: {
        username: [{ required: true, message: "请输入用户名", trigger: "blur" },],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    signUp(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (!valid) return;
        const { data: res } = await this.$axios.post(
          "user/signup",
          this.loginForm
        );
        console.log(res);
        /*
        1.数据回传后端验证账号是否存在
        2.保存后端发来的token
        3.跳转到主页
        */
        //  this.$router.pusth({path: "/Main"})
      });
    },
    routerCheck() {
      this.$router.push({ path: "/Main" });
    },
  },
};
</script>

<style lang="less" scoped>
.signup-container {
  width: 100%;
  height: 100%;
  padding: 0%;
  background-color: #33cc99;
}

.background{
    width:100%;  
    height:100%;  /**宽高100%是为了图片铺满屏幕 */
    z-index:0;
    position: absolute;
}

.signup-box {
  float: right;
  width: 500px;
  height: 100%;
  padding: 0%;
  background-color: aliceblue;
  box-shadow: -5px 0px 5px #888888;
  position: absolute;
  right: 0px;
  z-index: 1;
}

.avatar-box {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 30%;
  transform: translate(-50%, -50%);
  img {
    max-width: 100%;
    height: auto;
    border-radius: 50%;
  }
}

.signup-form {
  padding: 0;
}

.btns > .sign-up {
  float: right;
}
</style>
