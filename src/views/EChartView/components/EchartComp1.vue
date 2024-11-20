<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import * as echarts from 'echarts'

// 宣告圖表實例的參考
const chartRef = ref(null)
let myChart = null

// 圖表配置選項
const options = {
  title: {
    text: '月份銷售數據',
  },
  tooltip: {
    trigger: 'axis',
  },
  xAxis: {
    type: 'category',
    data: ['一月', '二月', '三月', '四月', '五月', '六月'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      name: '銷售額',
      type: 'line',
      data: [150, 230, 224, 218, 135, 147],
    },
  ],
}

// 初始化圖表的函式
const initChart = () => {
  if (chartRef.value) {
    myChart = echarts.init(chartRef.value)
    myChart.setOption(options)
  }
}

// 處理視窗大小改變的函式
const handleResize = () => {
  myChart?.resize()
}

// 元件掛載時初始化圖表
onMounted(() => {
  initChart()
  window.addEventListener('resize', handleResize)
})

// 元件卸載時清理
onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  myChart?.dispose()
})
</script>

<template>
  <div ref="chartRef" style="width: 600px; height: 400px"></div>
</template>

<style scoped></style>
