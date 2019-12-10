<template>
  <div>
    <div class="analysis-main">
      <div class="analysis-item" style="width: 98%">
        <BarChart v-if="ratios" :ratios="ratios" />
      </div>

      <div style="width: 98%">
        <BoxCard :statsData="statsData" />
      </div>

      <div class="classTabl">
        <el-table :data="tableData" border stripe style="width: 98%">
          <el-table-column prop="id" label="学号"></el-table-column>
          <el-table-column prop="studentRealname" label="姓名"></el-table-column>
          <el-table-column prop="totalScore" label="成绩"></el-table-column>
          <el-table-column prop="sex" label="性别" width="180"></el-table-column>
          <el-table-column prop="team" label="班级" width="180"></el-table-column>
          <el-table-column
            align="center"
            label="操作"
            width="250"
            class-name="small-padding fixed-width"
          >
            <template slot-scope="scope">
              <el-button
                type="warning"
                size="mini"
                icon="el-icon-search"
                @click="handleUpdate(scope.row)"
              >分析</el-button>
              <el-button
                type="primary"
                size="mini"
                icon="el-icon-edit"
                @click="handleUpdate(scope.row)"
              >编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import BoxCard from "../Index/components/BoxCard";
import BarChart from "../Index/components/BarChart";
export default {
  name: "",
  props: [""],
  data() {
    return {
      statsData: [],
      ratios: "",
      tableData: []
    };
  },

  components: { BoxCard, BarChart },

  async created() {
    const statsData = await this.$http.get("/stats");
    const ratios = await this.$http.get("/ratios");
    const tableData = await this.$http.get("/students");
    this.statsData = statsData.data;
    this.ratios = ratios.data.data;
    this.tableData = tableData.data;
  },

  methods: {
    handleUpdate(data) {
      console.log(data);
      this.$alert(data, `学生数据`, {
        dangerouslyUseHTMLString: true
      });
    }
  }
};
</script>
<style lang='scss' >
@import "@/assets/style/card.scss";
.analysis-item {
  margin-bottom: 20px;
  padding: 10px 0;
  background-color: #fff;
}
.classTabl {
  .el-table__header-wrapper th {
    text-align: center;
  }
  .el-table__body-wrapper td {
    text-align: center;
  }
}
</style>