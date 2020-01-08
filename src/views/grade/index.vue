<template>
  <div>
    <Table :timeStatus="timeStatus" :status="status" />
    <div class="progress">
      <el-carousel :autoplay="false" trigger="click" height="150px">
        <el-carousel-item v-for="(progress,i) in listData" :key="i">
          <div class="pro-item" v-for="item in progress" :key="item.rate">
            <el-progress :width="95" type="circle" :percentage="item.rate"></el-progress>
            <p>{{item.name}}</p>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
import Table from "@/components/table";
export default {
  name: "",
  data() {
    return {
      timeStatus: "preview", //preview edit
      status: "next", //this next
      listData: [],
      jsonData: [
        { name: "谢霆锋", rate: 45 },
        { name: "刘德华", rate: 24 },
        { name: "黎明", rate: 78 },
        { name: "张国荣", rate: 50 },
        { name: "郭富城", rate: 60 },
        { name: "周星驰", rate: 80 },
        { name: "梁朝伟", rate: 26 },
        { name: "王杰", rate: 30 },
        { name: "崔帅", rate: 90 },
        { name: "反恐精英", rate: 85 }
      ]
    };
  },

  components: {
    Table
  },

  created() {
    this.getList();
  },

  methods: {
    getList() {
      let arr = [];
      let chunk = 4;
      for (let i = 0; i < this.jsonData.length; i += chunk) {
        arr.push(this.jsonData.slice(i, i + chunk));
      }
      this.listData = arr;
    }
  }
};
</script>
<style lang='scss'>
.progress {
  background: #22b9ff;
}
.el-carousel__indicators--horizontal {
  display: none;
}
.el-carousel__item.is-active.is-animating {
  display: flex;
  justify-content: space-evenly;
}
.pro-item {
  margin: 20px 30px;
}
</style>