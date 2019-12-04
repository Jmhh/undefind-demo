<!-- 折线图 -->
<template>
  <div :style="{ height: height, width: width }" />
</template>

<script>
import echarts from "echarts";
import { debounce } from "@/utils";
require("echarts/theme/macarons"); // echarts theme
export default {
  props: {
    testStage: {
      type: Array,
      required: true
    },
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "300px"
    }
  },
  data() {
    return {
      chart: null,
      option: {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            lineStyle: {
              color: "#57617B"
            }
          }
        },
        legend: {
          icon: "rect",
          itemWidth: 14,
          itemHeight: 5,
          itemGap: 13,
          data: ["年级平均分", "班级平均分"],
          right: "4%",
          textStyle: {
            fontSize: 12,
            color: "#666"
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            axisTick: {
              show: false
            },
            axisLine: {
              //show: false,
              lineStyle: {
                color: "#a4abc5"
              }
            },
            axisLabel: {
              margin: 10,
              textStyle: {
                fontSize: 12,
                color: "#7c92a7"
              }
            },
            data: []
          }
        ],
        yAxis: [
          {
            type: "value",
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisLabel: {
              color: "#7c92a7"
            },
            splitArea: { show: false } //保留网格区域
          }
        ],
        series: [
          {
            name: "年级平均分",
            label: {
              normal: {
                show: true,
                position: "top"
              }
            },
            type: "line",
            smooth: true,
            lineStyle: {
              normal: {
                width: 1
              }
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(137, 189, 27, 0.8)"
                    },
                    {
                      offset: 0.8,
                      color: "rgba(137, 189, 27, 0.1)"
                    }
                  ],
                  false
                ),
                shadowColor: "rgba(0, 0, 0, 0.1)",
                shadowBlur: 10
              }
            },
            itemStyle: {
              normal: {
                color: "rgb(137,189,27)"
              }
            },
            data: []
          },
          {
            name: "班级平均分",
            label: {
              normal: {
                show: true,
                position: "top"
              }
            },
            type: "line",
            smooth: true,
            lineStyle: {
              normal: {
                width: 1
              }
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0.3,
                      color: "rgba(34, 185, 255, 0.8)"
                    },
                    {
                      offset: 0.8,
                      color: "rgba(34, 185, 255, 0.1)"
                    }
                  ],
                  false
                ),
                shadowColor: "rgba(0, 0, 0, 0.1)",
                shadowBlur: 10
              }
            },
            itemStyle: {
              normal: {
                color: "rgb(0,136,212)"
              }
            },
            data: []
          }
        ]
      }
    };
  },
  created() {
    if (this.testStage) this.resetData(this.testStage);
  },
  watch: {
    testStage: {
      handler(newValue) {
        this.resetData(newValue);
        this.initChart();
      },
      deep: true
    }
  },
  mounted() {
    this.initChart();
    this.__resizeHandler = debounce(() => {
      if (this.chart) {
        this.chart.resize();
      }
    }, 100);
    window.addEventListener("resize", this.__resizeHandler);
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    window.removeEventListener("resize", this.__resizeHandler);
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, "macarons");
      this.chart.setOption(this.option, true);
    },
    resetData(data) {
      //console.log(data);
      if (!data) return;
      data.forEach(item => {
        this.option.xAxis[0].data.push("测试" + item.title);
        this.option.series[0].data.push(item.gScore);
        this.option.series[1].data.push(item.cScore);
      });
    }
  }
};
</script>
