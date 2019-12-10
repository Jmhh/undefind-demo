<template>
  <div class="loginForm">
    <div class="form">
      <h3>系统登录</h3>
      <el-form :model="loginForm" status-icon ref="loginForm" label-width="0" class="demo-ruleForm">
        <el-form-item prop="user">
          <el-input type="text" v-model="loginForm.user" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label prop="checkPass">
          <el-input type="password" v-model="loginForm.pass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('loginForm')" size="mini">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: [""],
  data() {
    return {
      userData: "",
      loginForm: {
        user: "admin",
        pass: "123456"
      }
    };
  },

  components: {},

  async created() {},

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$http
            .get("/login")
            .then(res => {
              if (res) {
                this.userData = res.data;
                this.$store.dispatch("setUserName", res.data.name);
                this.$store.dispatch("setUserToken", res.data.jwtToken);
                setTimeout(() => {
                  this.$message({
                    message: `登录成功,当前用户 ${res.data.name}`,
                    type: "success"
                  });
                }, 500);
              }
            })
            .then(() => {
              this.$router.replace({
                path: "/index"
              });
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style lang="scss" scoped>
.loginForm {
  display: flex;
  align-items: center;
  justify-content: center;
  height: -webkit-fill-available;
  background-color: #eaf0f7;
  .form {
    padding: 20px;
    background: #fff;
    border-radius: 3px;
  }
}
</style>
