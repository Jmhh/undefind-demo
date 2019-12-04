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
    ratios: {
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
            type: "cross"
          }
        },
        legend: {
          show: true,
          itemWidth: 16,
          itemHeight: 8,
          itemGap: 12,
          top: 5,
          right: 25,
          data: [
            "知识点合格数",
            "知识点不合格数",
            {
              name: "知识点合格率",
              icon: "diamond"
            }
          ],
          textStyle: {
            fontSize: 12,
            color: "#7c92a7"
          }
        },
        grid: {
          left: "5",
          right: "5%",
          bottom: "4%",
          top: "25%",
          //	        height: '85%',
          containLabel: true,
          z: 1
        },
        xAxis: [
          {
            type: "category",
            data: [],
            axisTick: {
              show: false
            },
            axisLine: {
              //show: false,
              lineStyle: {
                color: "#a4abc5",
                width: 0.5
              }
            },
            axisLabel: {
              margin: 10,
              textStyle: {
                fontSize: 12,
                color: "#7c92a7"
              }
            }
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
          },
          {
            type: "value",
            position: "right",
            splitLine: {
              show: true,
              lineStyle: {
                type: "dashed",
                color: "rgb(224, 231, 253)",
                width: 0.5
              }
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
            splitArea: { show: false }, //保留网格区域
            max: 100
          }
        ],
        series: [
          {
            name: "知识点合格数",
            yAxisIndex: 0,
            type: "bar",
            barWidth: "8",
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "rgb(55,144,241)"
                  },
                  {
                    offset: 1,
                    color: "rgb(51,194,253)"
                  }
                ])
              }
            },
            data: [],
            zlevel: 1
          },
          {
            name: "知识点不合格数",
            yAxisIndex: 0,
            type: "bar",
            barWidth: "8",
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "rgb(255,159,14)"
                  },
                  {
                    offset: 1,
                    color: "rgb(255,186,57)"
                  }
                ])
              }
            },
            data: [],
            zlevel: 1
          },
          {
            name: "知识点合格率",
            type: "line",
            yAxisIndex: 1,
            data: [],
            itemStyle: {
              normal: {
                color: "rgb(66,221,94)",
                lineStyle: {
                  width: 2,
                  type: "solid"
                }
              }
            },
            label: {
              normal: {
                show: false, //折线上方label控制显示隐藏
                position: "top"
              }
            },
            symbol: "circle",
            symbolSize: 6,
            zlevel: 1
          }
        ]
      }
    };
  },
  created() {
    if (this.ratios) this.resetData(this.ratios);
  },
  watch: {},
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
      data.forEach(item => {
        this.option.xAxis[0].data.push(item.name);
        this.option.series[0].data.push(item.successCount);
        this.option.series[1].data.push(item.failedCount);
        this.option.series[2].data.push(item.passRatios);
      });
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
