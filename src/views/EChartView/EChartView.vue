<script setup>
import { useEChart } from './useEChart'
import { ref } from 'vue'
import EchartComp1 from './components/EchartComp1.vue'
const chartRef = ref(null)

const a = {
  title: {
    text: 'ECharts 假資料圖表',
    left: 'center',
    top: '10%',
    textStyle: {
      color: '#000',
    },
  },
  tooltip: {
    trigger: 'axis',
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [{ data: [90, 180, 120, 60, 95, 130, 160], type: 'bar' }],
  dataZoom: [
    {
      type: 'slider',
      show: false,
      start: 0,
      end: 100,
    },
  ],
}
const b = {
  title: {
    text: 'ECharts 樣例圖表',
    left: 'center',
    top: '10%',
    textStyle: {
      color: '#000',
    },
  },
  tooltip: {
    trigger: 'axis',
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [{ data: [120, 200, 150, 80, 70, 110, 130], type: 'bar' }],
  dataZoom: [
    {
      type: 'slider',
      show: true,
      start: 0,
      end: 100,
    },
  ],
}

const aRef = ref(a)
const bRef = ref(b)
const { setOption } = useEChart(chartRef, a)
</script>
<template>
  <button class="btn" @click="setOption(aRef)">圖表 A</button>
  <button class="btn" @click="setOption(bRef)">圖表 B</button>
  <div ref="chartRef" style="width: 100%; height: 100vh"></div>
  <EchartComp1 />
</template>
<style scoped>
.btn {
  @apply px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50;
}
</style>
