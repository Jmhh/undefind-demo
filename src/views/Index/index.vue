<template>
  <div class="main">
    <BoxCard :statsData="statsData" />
    <el-row :gutter="20">
      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
        <div class="card">
          <div class="title">
            <span class="card-title">班级测试情况</span>
            <div class="toolbar">
              <span class="active">最近一个月</span>
              <span>整个学期</span>
            </div>
          </div>
          <div style="margin-top:20px;min-height:300px">
            <lineChart v-if="testStage" :testStage="testStage" />
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
        <div class="card">
          <div class="title">
            <span class="card-title">学生测试情况</span>
            <div class="toolbar">
              <span class="active">最新测试</span>
              <span>上一次测试</span>
            </div>
          </div>
          <div class="card-table">
            <StudentList :tableData="studentListData" />
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <div class="card">
          <div class="title">
            <span class="card-title">学情分析中心</span>
          </div>
          <div class="analysis-main">
            <el-row :gutter="20">
              <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
                <div class="analysis-card">
                  <div class="info">
                    <h3>[ 数学期中测试 ]</h3>
                    <span>
                      平均分：
                      <b style="color:rgb(158, 227, 121)">{{testPeriodAvgs.avgScore}}</b>
                    </span>
                    <span>
                      最高分：
                      <b style="color:rgb(104, 220, 231)">{{testPeriodAvgs.maxScore}}</b>
                    </span>
                    <span>
                      最低分：
                      <b style="color:rgb(255, 140, 140)">{{testPeriodAvgs.minScore}}</b>
                    </span>
                  </div>
                  <div class="progess">
                    <h3>及格率:</h3>
                    <el-progress
                      :stroke-width="8"
                      :percentage="testPeriodAvgs.passRate"
                      status="success"
                    ></el-progress>
                    <PieChart :testPeriodAvgs="testPeriodAvgs" />
                  </div>
                </div>
              </el-col>
              <el-col :xs="24" :sm="16" :md="16" :lg="16" :xl="16">
                <h3 class="correctRatio">知识点正确率</h3>
                <BarChart v-if="ratios" :ratios="ratios" />
              </el-col>
            </el-row>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import BoxCard from "./components/BoxCard";
import PieChart from "./components/PieChart";
import StudentList from "./components/StudentList";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
export default {
  name: "",
  props: [""],
  data() {
    return {
      statsData: "",
      studentListData: [], //学生测试去情况数据
      testStage: "", //班级测试情况数据
      testPeriodAvgs: "", //最新一次测试情况数据
      ratios: "" //最新一次知识点正确率
    };
  },

  beforeCreate() {},

  components: {
    BoxCard,
    PieChart,
    StudentList,
    LineChart,
    BarChart
  },

  async created() {
    // this.$http.get("/news", "type=top&key=123456").then(res => {
    //   console.log(res.data);
    //   // this.newsListShow = res.data.data;
    // });
    // this.$http.get("/stats").then(res => {
    //   console.log(res.data);
    // });
    this.getData();
  },

  methods: {
    async getData() {
      try {
        const statsData = await this.$http.get("/stats"); //获取状态信息
        const studentLists = await this.$http.get("/studentLists"); //获取学生测试列表
        const testStage = await this.$http.get("/testStage"); //获取学生测试列表
        const testPeriodAvgs = await this.$http.get("/testPeriodAvgs"); //获取最新一次测试情况数据
        const ratios = await this.$http.get("/ratios"); //获取最新一次测试情况数据
        this.statsData = statsData.data;
        this.studentListData = studentLists.data;
        this.testStage = testStage.data.data;
        this.testPeriodAvgs = testPeriodAvgs.data;
        this.ratios = ratios.data.data;
        //console.log(ratios.data);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/style/card.scss";
h3.correctRatio {
  font-size: 15px;
  margin-top: 20px;
  font-weight: 600;
  color: #50649c;
  text-align: left;
}
</style>
