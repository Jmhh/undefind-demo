<template>
  <div>
    <el-row :gutter="20">
      <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6">
        <div class="card">
          <div class="card-profile">
            <div class="card-profile-info">
              <el-tag size="mini">学生人数</el-tag>
              <h3>{{statsData.studentCount}} 人</h3>
              <p>
                <i class="iconfont iconhuoqutubiao"></i> 当前管理学生人数
              </p>
            </div>
            <div class="card-profile-icon">
              <i class="iconfont iconnianji"></i>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6">
        <div class="card">
          <div class="card-profile">
            <div class="card-profile-info">
              <el-tag type="success" size="mini">管理班级</el-tag>
              <h3>{{statsData.clasCount}} 班</h3>
              <p>
                <i class="iconfont iconlijichakan"></i> 当前管理班级数
              </p>
            </div>
            <div class="card-profile-icon">
              <i class="iconfont iconlaoshi1"></i>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6">
        <div class="card">
          <div class="card-profile">
            <div class="card-profile-info">
              <el-tag type="warning" size="mini">测试平均分</el-tag>
              <h3>{{statsData.avgScore}} 分</h3>
              <p>
                <i class="iconfont iconxiajiang"></i> 最新一次测试班级平均分变化
              </p>
            </div>
            <div class="card-profile-icon">
              <i class="iconfont iconshijuan"></i>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="6">
        <div class="card">
          <div class="card-profile">
            <div class="card-profile-info">
              <el-tag type="danger" size="mini">题库数目</el-tag>
              <h3>{{statsData.topicCount}} 题</h3>
              <p>
                <i class="iconfont iconshangsheng"></i> 最新题库录入数目
              </p>
            </div>
            <div class="card-profile-icon">
              <i class="iconfont icondaohang-shiti"></i>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "",
  props: ["statsData"],
  data() {
    return {};
  },

  components: {},

  created() {},

  methods: {}
};
</script>
<style lang='scss' scoped>
@import "@/assets/style/card.scss";
</style>