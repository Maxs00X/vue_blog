<template>
  <div>
    <el-button type="text" @click="dialog = true"
      ><h2>头像图标</h2></el-button
    >

    <!-- 登录栏内容 -->

    <el-drawer
      title="登录栏"
      :before-close="handleClose"
      :visible.sync="dialog"
      direction="ltr"
      custom-class="demo-drawer"
      ref="drawer"
      size="20%"
      :with-header="false"
    >
      <div class="login-box">
        <el-form :model="form" class="loginForm">
          <el-form-item prop="username">
            <el-input
              placeholder="账号"
              prefix-icon="el-icon-user-solid"
              v-model="form.username"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              placeholder="密码"
              prefix-icon="el-icon-key"
              v-model="form.password"
              type="password"
            ></el-input>
          </el-form-item>
        </el-form>
        <div class="login_box_footer">
          <el-button @click="cancelForm">取 消</el-button>
          <el-button
            type="primary"
            class="login"
            @click="$refs.drawer.closeDrawer()"
            :loading="loading"
            >{{ loading ? "登录中 ..." : "登 录" }}</el-button
          >
        </div>
      </div>
    </el-drawer>

    <!-- main // 页面主内容 -->
    <div>
      <div v-for="item in list" :key="item.cid" class="content">{{item.cid}} + {{item.author}} + {{item.title}} + {{item.gtm_create}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      loading: false,
      form: {
        username: "Maxs Fang",
        password: "123456",
      },
      list: [],
      formLabelWidth: '70px',
      timer: null,
      rules: {
        username: [{ required: true, message: "请输入用户名", trigger: "blur" },],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  created() {
    this.getContentList()
  },
  methods: {
    handleClose(done) {
      if (this.loading) {
        return;
      }
      this.$confirm('确定要提交表单吗？')
        .then(_ => {
          this.loading = true;
          this.timer = setTimeout(() => {
            done();
            // 动画关闭需要一定的时间
            setTimeout(() => {
              this.loading = false;
            }, 400);
          }, 2000);
        })
        .catch(_ => {});
    },
    cancelForm() {
      this.loading = false;
      this.dialog = false;
      clearTimeout(this.timer);
    },
    async getContentList() {
     const {data: res} = await this.$axios.get('/content/getlist')
     if(res.code == 200){
       this.list = res.data
     }
    }
    
  }
}
</script>

<style scoped>
.login-box {
    position: relative;
    top: 30%;
    padding: 20px;
}

.login_box_footer > .login {
    float: right;
}

.content {
  position: relative;
  transform: translate(50%, 50%);
}
</style>