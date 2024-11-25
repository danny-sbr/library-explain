<script setup>
import { useEChart } from '../../useEChart'
import { ref } from 'vue'

const options = {
  title: {
    text: '進行中與新項目對比',
    left: 'center',
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
  legend: {
    data: ['進行中項目', '新項目'],
    top: '40px',
    left: 'center',
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '10%',
    containLabel: true,
  },
  xAxis: {
    type: 'category',
    data: [
      '2024-01',
      '2024-02',
      '2024-03',
      '2024-04',
      '2024-05',
      '2024-06',
      '2024-07',
      '2024-08',
      '2024-09',
      '2024-10',
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
      '2025-12',
    ],
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
  series: [
    {
      name: '進行中項目',
      type: 'bar',
      data: [
        10, 15, 20, 18, 22, 25, 30, 28, 15, 12, 18, 20, 25, 22, 28, 30, 15, 12,
        18, 20, 10, 15, 25, 28,
      ],
    },
    {
      name: '新項目',
      type: 'bar',
      data: [
        5, 7, 10, 8, 12, 10, 15, 13, 7, 6, 8, 10, 12, 11, 15, 13, 7, 6, 8, 10,
        5, 7, 12, 13,
      ],
    },
  ],
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
}

const chartRef = ref(null)
useEChart(chartRef, options)
</script>
<template>
  <div ref="chartRef" class="w-full h-full"></div>
</template>
<style scoped></style>
