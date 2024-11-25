<script setup>
import { useEChart } from '../../useEChart'
import { ref } from 'vue'
const options = {
  title: {
    text: '測試數據比較',
    left: 'center',
  },
  tooltip: {
    trigger: 'axis',
  },
  legend: {
    data: ['方法 A', '方法 B'],
    top: '10%',
  },
  xAxis: {
    type: 'category',
    data: [
      '樣本 1',
      '樣本 2',
      '樣本 3',
      '樣本 4',
      '樣本 5',
      '樣本 6',
      '樣本 7',
      '樣本 8',
      '樣本 9',
      '樣本 10',
      '樣本 11',
      '樣本 12',
      '樣本 13',
      '樣本 14',
      '樣本 15',
      '樣本 16',
      '樣本 17',
      '樣本 18',
    ],
    axisLabel: {
      rotate: 45,
      margin: 8,
      fontSize: 8,
    },
  },
  yAxis: {
    type: 'value',
    name: '比率 (%)',
    axisLabel: {
      formatter: '{value} %',
    },
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
      name: '方法 A',
      type: 'line',
      data: [
        23.45, 45.67, 67.89, 32.54, 56.78, 89.01, 78.92, 45.23, 34.56, 65.78,
        76.34, 54.67, 23.56, 67.89, 56.34, 78.45, 34.56, 65.78,
      ],
    },
    {
      name: '方法 B',
      type: 'line',
      data: [
        56.78, 78.9, 45.67, 89.01, 56.78, 34.56, 78.92, 67.45, 89.23, 45.67,
        78.9, 34.56, 67.89, 78.92, 45.23, 56.78, 89.01, 34.56,
      ],
    },
  ],
}

const chartRef = ref(null)
useEChart(chartRef, options)
</script>
<template>
  <div ref="chartRef" class="w-full h-full"></div>
</template>
