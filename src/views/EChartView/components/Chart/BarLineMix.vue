<script setup>
import { useEChart } from '../../useEChart'
import { ref } from 'vue'

const chartRef = ref(null)
const options = {
  title: {
    text: '項目交期分析',
    left: 'center',
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
  legend: {
    data: ['項目數量', '項目數量趨勢'],
    top: '40px',
    left: 'center',
  },
  xAxis: {
    type: 'category',
    data: [
      '2024-11',
      '2024-12',
      '2025-01',
      '2025-02',
      '2025-03',
      '2025-04',
      '2025-05',
      '2025-06',
      '2025-07',
      '2025-08',
      '2025-09',
      '2025-10',
      '2025-11',
    ],
    name: '月份',
    axisLabel: {
      rotate: 45,
      margin: 8,
      align: 'right',
      fontSize: 8,
    },
  },
  yAxis: {
    type: 'value',
    name: '項目數量',
  },
  dataZoom: [
    {
      type: 'inside',
      zoomLock: true,
    },
    {
      type: 'slider',
      height: 15,
      show: true,
      showDetail: true,
      zoomLock: false,
      left: '70',
      right: '80',
      brushSelect: false,
      bottom: 5,
      showDataShadow: false,
      backgroundColor: 'transparent',
      fillerColor: '#62a0d52e',
    },
  ],
  series: [
    {
      name: '項目數量',
      type: 'bar',
      data: [4, 8, 10, 6, 7, 5, 9, 3, 6, 8, 12, 9, 4],
      itemStyle: {
        color: '#5470c6',
      },
    },
    {
      name: '項目數量趨勢',
      type: 'line',
      data: [4, 8, 10, 6, 7, 5, 9, 3, 6, 8, 12, 9, 4],
      lineStyle: {
        color: '#91cc75',
      },
    },
  ],
}

useEChart(chartRef, options)
</script>
<template>
  <div ref="chartRef" class="w-full h-full"></div>
</template>
<style scoped></style>
