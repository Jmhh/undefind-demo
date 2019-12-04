<!-- 折线图 -->
<template>
  <div class="data-per">
    <div class="text-title">测试成绩分布</div>
    <div class="data-per-content">
      <div class="data-per-item">
        <el-progress
          type="circle"
          :show-text="false"
          :percentage="testPeriodAvgs.excellentCount"
          :stroke-width="8"
          :width="78"
          color="#9EE379"
        ></el-progress>
        <div class="text">
          <span style="color:#9EE379">{{testPeriodAvgs.excellentCount}} %</span>
          <p>优秀</p>
        </div>
      </div>
      <div class="data-per-item">
        <el-progress
          type="circle"
          :show-text="false"
          :percentage="testPeriodAvgs.goodCount"
          :stroke-width="8"
          :width="78"
          color="#68DCE7"
        ></el-progress>
        <div class="text">
          <span style="color:#68DCE7">{{testPeriodAvgs.goodCount}} %</span>
          <p>良好</p>
        </div>
      </div>
      <div class="data-per-item">
        <el-progress
          type="circle"
          :show-text="false"
          :percentage="testPeriodAvgs.passCount"
          :stroke-width="8"
          :width="78"
          color="#FFD16E"
        ></el-progress>
        <div class="text">
          <span style="color:#FFD16E">{{testPeriodAvgs.passCount}} %</span>
          <p>及格</p>
        </div>
      </div>
      <div class="data-per-item">
        <el-progress
          type="circle"
          :show-text="false"
          :percentage=" testPeriodAvgs.failedCount"
          :stroke-width="8"
          :width="78"
          color="#FF8C8C"
        ></el-progress>
        <div class="text">
          <span style="color:#FF8C8C">{{testPeriodAvgs.failedCount}} %</span>
          <p>不及格</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["testPeriodAvgs"],
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.data-per {
  margin-top: 20px;
  .text-title {
    font-size: 15px;
    margin-bottom: 20px;
    font-weight: 600;
    color: #50649c;
  }
}
.data-per-content {
  display: flex;
}
.data-per-item {
  position: relative;
  margin-right: 10px;
  min-height: 80px;
  text-align: center;
  .text {
    position: absolute;
    width: 100%;
    top: 25%;
    text-align: center;
    font-size: 12px;
    color: #757575;
    span {
      font-size: 16px;
      font-weight: bold;
    }
  }
}
</style>
