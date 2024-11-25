<script setup>
import { useEChart } from '../../useEChart'
import { ref } from 'vue'

const options = {
  title: {
    text: '方法 A 成功與失敗分佈',
    left: 'center',
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)',
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    data: ['成功', '失敗'],
  },
  series: [
    {
      name: '項目分佈',
      type: 'pie',
      radius: '50%',
      data: [
        {
          value: 5320,
          name: '成功',
        },
        {
          value: 12480,
          name: '失敗',
        },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
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
