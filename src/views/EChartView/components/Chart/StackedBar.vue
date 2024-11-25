<script setup>
import { useEChart } from '../../useEChart'
import { ref } from 'vue'

const options = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
  legend: {
    data: ['成功項目', '失敗項目'],
  },
  xAxis: {
    type: 'category',
    data: ['方法 A', '方法 B'],
  },
  yAxis: {
    type: 'value',
    name: '項目數量',
  },
  series: [
    {
      name: '成功項目',
      type: 'bar',
      stack: '總數',
      data: [5320, 6210],
      barWidth: '30%',
    },
    {
      name: '失敗項目',
      type: 'bar',
      stack: '總數',
      data: [12435, 13210],
      barWidth: '30%',
    },
  ],
  color: ['#73C0DE', '#E06760'],
}

const chartRef = ref(null)
useEChart(chartRef, options)
</script>
<template>
  <div ref="chartRef" class="w-full h-full"></div>
</template>
<style scoped></style>
