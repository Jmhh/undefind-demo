<template>
  <div class="topbar">
    <div :class="[isCollapse?'topbar-custom isCollapse':'topbar-custom '] ">
      <div class="topbar-left">
        <span class="collapse" @click="handleCollapse">
          <i class="iconfont icondaohang"></i>
        </span>
      </div>
      <div class="topbar-righ">
        <div class="badge">
          <el-badge is-dot class="item">
            <i class="iconfont iconicon_notice"></i>
          </el-badge>
        </div>
        <div class="uer">
          <i class="iconfont iconyonghufangkeshu"></i>
        </div>
        <div class="info">
          <i class="iconfont iconbangzhu"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: [""],
  data() {
    return {};
  },

  components: {},

  computed: {
    isCollapse() {
      return this.$store.getters.isCollapse;
    }
  },

  created() {},

  methods: {
    handleCollapse() {
      this.$store.dispatch("toggleSideBar");
    }
  }
};
</script>
<style lang='scss' scoped>
.topbar {
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 99;
  .topbar-custom {
    display: flex;
    justify-content: space-between;
    padding-left: 160px;
    min-height: 50px;
    background: #fff;
  }
  span.collapse {
    cursor: pointer;
  }
  .topbar-custom.isCollapse {
    padding-left: 80px;
  }
  .topbar-left {
    line-height: 50px;
    i {
      font-size: 22px;
    }
  }
  .topbar-righ {
    display: flex;
    padding: 0 20px;
    line-height: 50px;
    font-size: 12px;
    i {
      font-size: 22px;
      margin-left: 20px;
      cursor: pointer;
    }
    .badge i {
      color: #b8bac3;
      font-size: 16px;
    }
    .uer i {
      color: #22b9ff;
    }
    .info i {
      color: #fbce44;
    }
  }
}
</style>