<template>
  <div ref="chartRef" style="width: 600px; height: 400px"></div>
</template>

<script setup>
import * as echarts from 'echarts'
import { onMounted, ref } from 'vue'

const chartRef = ref(null)

const title = '範例標題'
const textColor = '#333'
const zoomShow = true
const start = ref(0)
const end = ref(100)
const xAxisData = [
  '週一 上午',
  '週二 上午',
  '週三 上午',
  '週四 上午',
  '週五 上午',
  '週六 上午',
  '週日 上午',
]
const seriesData = [
  {
    name: '數據 1',
    type: 'bar',
    data: [10, 15, 8, 12, 20, 10, 18],
  },
]

function setFormatter(params) {
  return params.map(item => `${item.seriesName}: ${item.value}`).join('<br>')
}

onMounted(() => {
  const chart = echarts.init(chartRef.value)

  const option = {
    title: {
      text: title,
      top: '5%',
      left: '10%',
      textStyle: {
        fontWeight: '800',
        fontSize: 16,
      },
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
        shadowStyle: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
      formatter(params) {
        return setFormatter(params)
      },
    },
    legend: {
      show: false,
      left: 80,
      bottom: 25,
      textStyle: {
        color: textColor,
      },
    },
    dataZoom: [
      {
        type: 'inside',
        zoomLock: true,
        start: start.value,
        end: end.value,
      },
      {
        type: 'slider',
        height: 25,
        show: zoomShow,
        showDetail: true,
        zoomLock: true,
        left: 70,
        right: 80,
        brushSelect: false,
        bottom: 5,
        showDataShadow: false,
        textStyle: {
          color: textColor,
        },
        backgroundColor: 'transparent',
        fillerColor: '#62a0d52e',
      },
    ],
    xAxis: [
      {
        type: 'category',
        data: xAxisData,
        axisLabel: {
          interval: 0,
          fontSize: 12,
          formatter(value) {
            return `{a|${value.split(' ')[0]}} \n {b|${value.split(' ')[1]}}`
          },
          rich: {
            a: {
              color: 'red',
              fontSize: 24,
            },
            b: {
              color: '#000',
              fontWeight: 'bolder',
            },
          },
        },
        axisPointer: {
          type: 'shadow',
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
        name: '數量',
        nameTextStyle: {
          color: textColor,
          padding: [0, 40, 0, 0],
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(255, 255, 255, .6)',
          },
        },
        axisLabel: {
          color: textColor,
        },
      },
    ],
    series: seriesData,
    grid: {
      top: '20%',
      left: '10%',
      right: '12%',
      bottom: '35%',
    },
  }

  chart.setOption(option)
})
</script>
