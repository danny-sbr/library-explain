<script setup>
import { useEChart } from '../../useEChart'
import { ref } from 'vue'

const chartRef = ref(null)
const data = [
  ['1 月', 1000],
  ['2 月', 1300],
  ['3 月', 1100],
  ['4 月', 1800],
  ['5 月', 1350],
  ['6 月', 1900],
]

// 計算階梯效果的輔助數據和差值標籤
const calculateStepData = () => {
  const stepData = []
  const labels = []

  data.forEach((item, index) => {
    if (index === 0) {
      stepData.push([item[0], 0, item[1]])
      labels.push('')
    } else {
      const prevValue = data[index - 1][1]
      const currentValue = item[1]
      const diff = currentValue - prevValue
      stepData.push([
        item[0],
        Math.min(prevValue, currentValue),
        Math.abs(currentValue - prevValue),
      ])
      labels.push(diff >= 0 ? `+${diff}` : `${diff}`)
    }
  })
  return { stepData, labels }
}

const { stepData, labels } = calculateStepData()

console.log(stepData)
console.log(labels)

const options = {
  title: {
    text: '月度收入瀑布圖',
    left: 'center',
  },
  tooltip: {
    trigger: 'axis',
    formatter: function (params) {
      const monthValue = data[params[0].dataIndex][1]
      return `${params[0].name}: ${monthValue}`
    },
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  xAxis: {
    type: 'category',
    data: data.map(item => item[0]),
  },
  yAxis: {
    type: 'value',
    name: '金額',
  },
  series: [
    {
      name: '基準',
      type: 'bar',
      stack: 'total',
      itemStyle: {
        color: 'transparent',
      },
      data: stepData.map(item => item[1]),
    },
    {
      name: '變化',
      type: 'bar',
      stack: 'total',
      itemStyle: {
        color: '#5470c6',
      },
      label: {
        show: true,
        position: 'top',
        formatter: params => {
          const index = params.dataIndex
          return labels[index]
        },
        fontSize: 12,
        color: params => {
          const index = params.dataIndex
          if (index === 0) return 'transparent'
          const diff = data[index][1] - data[index - 1][1]
          return diff >= 0 ? '#91cc75' : '#ee6666'
        },
      },
      data: stepData.map(item => item[2]),
    },
  ],
}

useEChart(chartRef, options)
</script>

<template>
  <div ref="chartRef" class="w-full h-[50vh]"></div>
</template>

<style scoped></style>
