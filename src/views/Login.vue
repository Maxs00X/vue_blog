<template>
  <!-- 登录组件 -->
  <div class="login-container">
    <div class="login-box">
      <div class="avatar-box">
        <img src="../assets/logo1.jpg" alt="" />
        <br />
        <br />
        <el-form
          label-width="0px"
          class="login-form"
          :model="loginForm"
          :rules="rules"
        >
          <el-form-item prop="uname">
            <el-input
              placeholder="账号"
              prefix-icon="el-icon-user-solid"
              v-model="loginForm.uname"
            ></el-input>
          </el-form-item>
          <el-form-item prop="pwd">
            <el-input
              placeholder="密码"
              prefix-icon="el-icon-key"
              v-model="loginForm.pwd"
              type="password"
            ></el-input>
          </el-form-item>
          <el-from-item class="btns">
            <el-button type="primary">登录</el-button>
            <el-button type="success" class="sign-up">注册</el-button>
          </el-from-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      circleUrl: "/assets/logo.png",
      loginForm: {
        uname: "admin",
        pwd: "123456",
      },
      rules: {
        uname: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        pwd: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
      methods:{

      }
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.login-container {
  width: 100%;
  height: 100%;
  padding: 0%;
  background-color: #33cc99;
}
.login-box {
  float: right;
  width: 500px;
  height: 100%;
  padding: 0%;
  background-color: aliceblue;
  box-shadow: -10px 0px 5px #888888;
  position: relative;
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
.login-form {
  padding: 0;
}
.btns > .sign-up {
  float: right;
}
</style>
