<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="姓名" width="150"></el-table-column>
      <el-table-column sortable prop="score" label="成绩" width="120"></el-table-column>
      <el-table-column sortable prop="rank" label="排名" width="120"></el-table-column>
      <el-table-column prop="change" label="变化（上升/下降）">
        <template slot-scope="scope">
          <span>
            {{ scope.row.change}}
            <i
              :class="[scope.row.change>0?'iconfont iconshangjiantou':'iconfont iconxiajiantou']  "
            ></i>
          </span>
        </template>
      </el-table-column>
    </el-table>
    <div class="paging">
      <el-pagination
        background
        layout="prev, pager, next"
        :page-sizes="[10, 20]"
        :page-size="10"
        :total="36"
        small
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    tableData: {
      type: Array,
      required: true
    }
  },
  data() {
    return {};
  },

  components: {},

  created() {},

  methods: {}
};
</script>
<style lang='scss' scoped>
.card-table {
  i {
    font-size: 12px;
  }
  i.iconfont.iconxiajiantou {
    color: #f1646c !important;
  }
  i.iconfont.iconshangjiantou {
    color: #1ecab8 !important;
  }
}

.paging {
  padding: 10px;
  text-align: right;
}
</style>