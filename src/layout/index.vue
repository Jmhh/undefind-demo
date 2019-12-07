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