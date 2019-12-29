<template>
  <div class="layout">
    <div class="content-left">
      <Navbar />
    </div>
    <div class="content-right">
      <Topbar />
      <div v-loading="loading">
        <transition name="fade-transform" mode="out-in">
          <keep-alive>
            <router-view :key="key" />
          </keep-alive>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Topbar from "@/components/Topbar.vue";

export default {
  name: "home",
  data() {
    return {
      screenWidth: document.body.clientWidth
    };
  },
  mounted() {
    const that = this;
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth;
        that.screenWidth = window.screenWidth;
      })();
    };
  },
  watch: {
    screenWidth(val) {
      // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
      if (!this.timer) {
        // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
        this.screenWidth = val;
        this.timer = true;
        let that = this;
        setTimeout(function() {
          // 打印screenWidth变化的值
          if (that.screenWidth < 1120) {
            console.log(that.screenWidth);
            that.$store.dispatch("setSideBar");
          }
          that.timer = false;
        }, 400);
      }
    }
  },
  components: {
    Navbar,
    Topbar
  },
  computed: {
    key() {
      return this.$route.path;
    },
    loading() {
      return this.$store.getters.loading;
    }
  }
};
</script>
<style lang='scss' scoped>
.layout {
  display: flex;
  min-height: 100vh;
  .content-left {
    background: #4d79f6;
    z-index: 999;
  }
  .content-right {
    flex: 1;
    padding: 90px 20px 20px 20px;
    background: #eaf0f7;
  }
}
</style>