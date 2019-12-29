<template>
  <div>
    <Table :timeStatus="timeStatus" :status="status" />
  </div>
</template>

<script>
import Table from "@/components/table";
export default {
  name: "",
  data() {
    return {
      timeStatus: "preview", //preview edit
      status: "next" //this next
    };
  },

  components: {
    Table
  },

  created() {},

  methods: {}
};
</script>
<style lang='scss' scoped>
</style>