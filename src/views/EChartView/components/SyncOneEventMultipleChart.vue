<script setup>
import { useEChart } from '../useEChart'
import { ref, onMounted } from 'vue'
import { setupDataZoomSyncing } from './util/setupDataZoomSyncing'
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

const options3 = structuredClone(options1)
const options4 = structuredClone(options2)

const chartRef1 = ref(null)
const chartRef2 = ref(null)
const chartRef3 = ref(null)
const chartRef4 = ref(null)

const { chartInstance: chartInstance1 } = useEChart(chartRef1, options1)
const { chartInstance: chartInstance2 } = useEChart(chartRef2, options2)
const { chartInstance: chartInstance3 } = useEChart(chartRef3, options3)
const { chartInstance: chartInstance4 } = useEChart(chartRef4, options4)
onMounted(() => {
  setupDataZoomSyncing([
    chartInstance1.value,
    chartInstance2.value,
    chartInstance3.value,
    chartInstance4.value,
  ])
})
</script>
<template>
  <h2 class="text-2xl text-center font-bold text-gray-800 mb-4">
    同步一個事件多個圖表範例
  </h2>
  <div class="mb-4 text-3xl font-bold">
    詳細撰寫模式請打開專案自行觀看程式碼
  </div>
  <ul class="bg-gray-100 text-gray-600 list-disc pl-6 space-y-2 p-4 rounded-lg">
    <li>此範例展示了多個圖表之間的資料縮放同步功能</li>
    <li>當您在任一圖表上進行縮放操作時，其他圖表會同步更新</li>
    <li>使用滑鼠滾輪或拖曳下方滑桿來測試縮放效果</li>
    <li>所有圖表共用相同的資料範圍，確保視覺一致性</li>
  </ul>
  <div class="flex">
    <div iv class="h-[50vh] w-1/2">
      <div ref="chartRef1" class="w-full h-full"></div>
    </div>
    <div class="h-[50vh] w-1/2">
      <div ref="chartRef2" class="w-full h-full"></div>
    </div>
  </div>
  <div class="flex">
    <div class="h-[50vh] w-1/2">
      <div ref="chartRef3" class="w-full h-full"></div>
    </div>
    <div class="h-[50vh] w-1/2">
      <div ref="chartRef4" class="w-full h-full"></div>
    </div>
  </div>
</template>
<style scoped></style>
