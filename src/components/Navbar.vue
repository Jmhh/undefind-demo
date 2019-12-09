<template>
  <div class="nav">
    <div class="logo"></div>
    <el-row class="tac">
      <el-col :span="24">
        <el-menu
          :default-active="active"
          background-color="#4d79f6"
          class="el-menu-vertical-demo"
          :collapse="isCollapse"
        >
          <el-menu-item
            v-for="item in routeData"
            :key="item.name"
            :index="item.id"
            @click="handleGo(item.name)"
          >
            <i :class="item.icon"></i>
            <span>{{item.text}}</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "",
  props: [""],
  data() {
    return {
      active: "",
      routeData: [
        {
          name: "index",
          text: "首页",
          id: "1",
          icon: "iconfont icondaohang-shouye-copy"
        },
        {
          name: "analysis",
          text: "学情分析",
          id: "2",
          icon: "iconfont iconfenxi1"
        },
        { name: "exam", text: "测试", id: "3", icon: "iconfont iconceshi4" },
        {
          name: "class",
          text: "班级",
          id: "4",
          icon: "iconfont iconbeikejiaoan"
        }
      ]
    };
  },

  computed: {
    isCollapse() {
      return this.$store.getters.isCollapse;
    }
  },

  components: {},

  //   created() {
  //     console.log(this.$route.path);
  //   },

  watch: {
    $route() {
      this.active = this.fliterActive(this.$route.path);
    }
  },
  methods: {
    handleGo(data) {
      this.$router.push({ path: `/${data}` });
    },
    fliterActive(data) {
      const map = {
        "/index": "1",
        "/analysis": "2",
        "/exam": "3",
        "/class": "4"
      };
      return map[data];
    }
  }
};
</script>
<style lang="scss" scoped>
.logo {
  height: 50px;
  background: #fbce44;
}
</style>
