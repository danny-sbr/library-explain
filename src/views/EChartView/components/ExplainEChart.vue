<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import * as echarts from 'echarts'

// 引入所需的元件和函式庫
import CodeBlock from '@/components/CodeBlock.vue'

// 定義程式碼範例字串，用於展示如何使用 ECharts
const codeString = `<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import * as echarts from 'echarts'

const chartRef = ref(null)
let myChart = null

onMounted(() => {
  // 初始化 ECharts 實例
  myChart = echarts.init(chartRef.value)

  // 設定圖表配置
  const option = {
    title: {
      text: '範例圖表'
    },
    xAxis: {
      type: 'category',
      data: ['一月', '二月', '三月', '四月', '五月']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: [120, 200, 150, 80, 70],
      type: 'line'
    }]
  }

  // 使用配置設定渲染圖表
  myChart.setOption(option)
})
onUnmounted(() => {
  // 釋放 ECharts 實例資源
  if (myChart) {
    myChart.dispose()
    myChart = null
  }
})
<\\/script>

<template>
  <div ref="chartRef" style="width: 600px; height: 400px;"></div>
</template>`

const chartRef = ref(null)
let myChart = null

onMounted(() => {
  // 初始化 ECharts 實例
  myChart = echarts.init(chartRef.value)

  // 設定圖表配置
  const option = {
    title: {
      text: '範例圖表',
    },
    xAxis: {
      type: 'category',
      data: ['一月', '二月', '三月', '四月', '五月'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [120, 200, 150, 80, 70],
        type: 'line',
      },
    ],
  }

  // 使用配置設定渲染圖表
  myChart.setOption(option)
})
onUnmounted(() => {
  // 釋放 ECharts 實例資源
  if (myChart) {
    myChart.dispose()
    myChart = null
  }
})
</script>

<template>
  <h1 class="text-center">ECharts 圖表展示</h1>

  <div class="mb-5">
    <div ref="chartRef" style="width: 100%; height: 400px"></div>
  </div>

  <div class="mb-5">
    <h2 class="text-2xl font-bold">程式碼範例</h2>
    <CodeBlock>{{ codeString }}</CodeBlock>
  </div>
  <h2 class="text-2xl font-bold mt-6 mb-4">ECharts 簡介</h2>
  <p class="mb-6">
    ECharts 是一個功能強大的開源視覺化圖表函式庫，現已成為 Apache
    基金會的頂級專案。它提供了豐富的圖表類型，包括折線圖、柱狀圖、散點圖、圓餅圖等，並支援互動性功能和動畫效果。ECharts
    具有高度的客製化能力，不僅可以建立各種複雜的資料視覺化展示，還支援大數據渲染、Mobile
    優化等進階功能。其優秀的效能表現和完整的技術生態，使其成為現代網頁應用中最受歡迎的圖表解決方案之一。
  </p>

  <!-- 設定選項說明區塊 -->
  <h2 class="text-2xl font-bold mt-6 mb-4">ECharts 主要配置項</h2>
  <p class="mb-4">以下是常用的主要配置選項：</p>

  <!-- 設定選項表格 -->
  <div class="overflow-x-auto">
    <table class="w-full border-collapse my-4">
      <thead>
        <tr>
          <th class="border border-gray-300 bg-gray-100 p-2 text-left">
            配置項
          </th>
          <th class="border border-gray-300 bg-gray-100 p-2 text-left">用途</th>
          <th class="border border-gray-300 bg-gray-100 p-2 text-left">描述</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-gray-300 p-2">
            <strong>title</strong>
          </td>
          <td class="border border-gray-300 p-2">標題配置</td>
          <td class="border border-gray-300 p-2">設定圖表的標題、副標題等</td>
        </tr>
        <tr>
          <td class="border border-gray-300 p-2">
            <strong>tooltip</strong>
          </td>
          <td class="border border-gray-300 p-2">提示框</td>
          <td class="border border-gray-300 p-2">配置滑鼠懸停時的提示框內容</td>
        </tr>
        <tr>
          <td class="border border-gray-300 p-2">
            <strong>legend</strong>
          </td>
          <td class="border border-gray-300 p-2">圖例</td>
          <td class="border border-gray-300 p-2">配置圖表的圖例顯示</td>
        </tr>
        <tr>
          <td class="border border-gray-300 p-2">
            <strong>xAxis/yAxis</strong>
          </td>
          <td class="border border-gray-300 p-2">座標軸</td>
          <td class="border border-gray-300 p-2">設定 X 軸和 Y 軸的相關配置</td>
        </tr>
        <tr>
          <td class="border border-gray-300 p-2">
            <strong>series</strong>
          </td>
          <td class="border border-gray-300 p-2">系列列表</td>
          <td class="border border-gray-300 p-2">
            定義要顯示的數據系列，包含數據和圖表類型
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- 額外說明區塊 -->
  使用 ECharts 時，需要注意以下幾點：
  <ul class="list-disc pl-6 mb-4">
    <li>圖表容器必須要有明確的寬高</li>
    <li>在視窗大小改變時，需要調用 resize() 方法重新調整圖表大小</li>
    <li>在元件銷毀時，應該調用 dispose() 方法釋放資源</li>
  </ul>

  <!-- 參考來源連結 -->
  <p class="mb-4">
    以上內容參考自
    <a
      href="https://echarts.apache.org/"
      target="_blank"
      class="text-blue-600 hover:text-blue-800 transition-colors duration-300"
      >ECharts 官方網站</a
    >。
  </p>
</template>

<style scoped>
table {
  @apply w-full border-collapse my-4;
}

th,
td {
  @apply border border-gray-300 p-2 text-left;
}

th {
  @apply bg-gray-100;
}
</style>
