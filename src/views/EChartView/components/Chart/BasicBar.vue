<script setup>
import { useEChart } from '../../useEChart'
import { ref } from 'vue'

const options = {
  title: {
    text: '項目完成進度分析',
    left: 'center',
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
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
    name: '樣\n本\n編\n號',
    nameLocation: 'start',
    nameRotate: 0,
    nameGap: 50,
    nameTextStyle: {
      align: 'right',
      lineHeight: 20,
    },
    axisLabel: {
      rotate: 45,
      margin: 8,
      align: 'right',
      fontSize: 8,
    },
    grid: {
      left: '10%',
      right: '10%',
      bottom: '15%',
    },
  },
  yAxis: {
    type: 'value',
    name: '完成進度 (%)',
    min: 0,
    max: 100,
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
      name: '完成進度',
      type: 'bar',
      data: [
        23.5, 76.3, 41.8, 12.4, 53.1, 79.0, 62.4, 47.6, 9.5, 83.7, 36.4, 14.8,
        60.2, 71.6, 20.9, 10.2, 33.7, 57.3,
      ],
      barWidth: '50%',
      itemStyle: {
        color: '#4CAF50',
      },
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
