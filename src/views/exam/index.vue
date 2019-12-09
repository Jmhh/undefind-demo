<template>
  <div class="exam-main">
    <div class="paper-content-list">
      <div class="paper-content-list">
        <el-row :gutter="20">
          <div v-if="examList && examList.length > 0">
            <el-col class="volume-lists" :span="6" v-for="(item, index) in examList" :key="index">
              <el-card class="box-card" shadow="hover">
                <div slot="header" class="header">
                  <div class="info-right">
                    <div class="test-text">
                      <div class="test-time">
                        <span>{{ item.name }}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="text item">
                  <div class="list-part">
                    <p>
                      知识点掌握情况
                      <span class="count">
                        {{
                        item.correctCount
                        }} %
                      </span>
                    </p>
                    <p>班级平均分：{{item.avgScore}} 分</p>
                  </div>
                  <div class="footer-item">
                    <span>
                      年级排名&emsp;第&nbsp;
                      <b style="color:#409EFF">
                        {{
                        item.ranking
                        }}
                      </b>&nbsp;名
                    </span>
                    <div class="ranking-icon">
                      <el-button type="primary" size="mini" @click="handleRank(item)">
                        <i class="iconfont icondaohang-xueqingfenxi"></i> 分析
                      </el-button>
                    </div>
                  </div>
                </div>
              </el-card>
            </el-col>
          </div>
          <div v-else class="main">没有内容</div>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: [""],
  data() {
    return {
      examList: []
    };
  },
  async created() {
    const examList = await this.$http.get("/examList");
    this.examList = examList.data.data;
  },

  methods: {
    handleRank(data) {
      console.log(data);
      this.$alert(data, `分析${data.name}数据`, {
        dangerouslyUseHTMLString: true
      });
    }
  }
};
</script>
<style lang='scss' scoped>
.volume-lists {
  margin-bottom: 20px;
  .test-time {
    font-size: 16px;
    font-weight: bold;
    color: #50649c;
  }
  .text.item {
    font-size: 13px;
    color: #a4abc5;
  }
  .list-part {
    text-align: left;
    display: flex;
    justify-content: space-between;
    p {
      color: #999;
      font-weight: bold;
    }
  }
  .footer-item {
    display: flex;
    margin: 10px 0;
    justify-content: space-between;
    align-items: center;
  }
}
</style>