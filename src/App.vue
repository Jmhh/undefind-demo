<template>
  <div id="app">
    <div class="layout">
      <div class="content-left">
        <Navbar />
      </div>
      <div class="content-right">
        <Topbar />
        <keep-alive>
          <router-view />
        </keep-alive>
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
  }
};
</script>

<style lang="scss">
@import "http://at.alicdn.com/t/font_1531966_k9m30lytqup.css";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
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
