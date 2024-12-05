<script setup>
import { useEChart } from '../useEChart'
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts/core'

const options1 = {
  group: 'myGroup',
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
const options2 = {
  group: 'myGroup',
  title: {
    text: '測試數據比較',
    left: 'center',
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
  legend: {
    data: ['方法 A', '方法 B'],
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
  series: [
    {
      name: '方法 A',
      type: 'bar',
      data: [
        23.45, 45.67, 67.89, 32.54, 56.78, 89.01, 78.92, 45.23, 34.56, 65.78,
        76.34, 54.67, 23.56, 67.89, 56.34, 78.45, 34.56, 65.78,
      ],
    },
    {
      name: '方法 B',
      type: 'bar',
      data: [
        56.78, 78.9, 45.67, 89.01, 56.78, 34.56, 78.92, 67.45, 89.23, 45.67,
        78.9, 34.56, 67.89, 78.92, 45.23, 56.78, 89.01, 34.56,
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

const chartRef1 = ref(null)
const chartRef2 = ref(null)
const { chartInstance: chartInstance1 } = useEChart(chartRef1, options1)
const { chartInstance: chartInstance2 } = useEChart(chartRef2, options2)
onMounted(() => {
  echarts.connect([chartInstance1.value, chartInstance2.value])
})
</script>
<template>
  <h2 class="text-2xl text-center font-bold text-gray-800 mb-4">
    連接兩個圖表多個屬性連動
  </h2>
  <div class="mb-4 text-3xl font-bold">
    如需了解完整程式碼實作細節，請參考此專案原始碼
  </div>
  <ul class="bg-gray-100 text-gray-600 list-disc pl-6 space-y-2 p-4 rounded-lg">
    <li>此範例展示了兩個圖表之間的連動功能</li>
    <li>當您在任一圖表上進行操作時，另一個圖表會同步更新</li>
    <li>包含提示框、縮放、圖例等功能都會同步</li>
    <li>兩個圖表共用相同的資料範圍，確保視覺一致性</li>
  </ul>
  <div class="flex">
    <div ref="chartRef1" class="h-[50vh] w-full"></div>
    <div ref="chartRef2" class="h-[50vh] w-full"></div>
  </div>
</template>
<style scoped></style>
