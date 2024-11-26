<script setup>
import BasicLine from './Chart/BasicLine.vue'
import BasicPie from './Chart/BasicPie.vue'
import StackedBar from './Chart/StackedBar.vue'
import BasicBar from './Chart/BasicBar.vue'
import BarLineMix from './Chart/BarLineMix.vue'
import CategoryComparison from './Chart/CategoryComparison.vue'
import HorizontalBar from './Chart/HorizontalBar.vue'
</script>
<template>
  <h2 class="text-2xl font-bold text-gray-800 mb-6">使用 ECharts 製作圖表</h2>
  <div class="bg-gray-100 p-4 rounded-lg mb-4">
    <p class="mb-4">圖表功能展示說明：</p>
    <ul class="pl-5 text-gray-600 space-y-3 list-disc">
      <li>堆疊長條圖：展示多組資料的堆疊比較</li>
      <li>圓餅圖：呈現資料的占比分布</li>
      <li>折線圖：顯示資料的趨勢變化</li>
      <li>長條圖：比較不同類別的數值大小</li>
      <li>混合圖：結合長條圖與折線圖的複合展示</li>
      <li>類別比較：不同類別間的數據對比</li>
      <li>橫向長條圖：水平方向的數據比較</li>
    </ul>
  </div>
  <div class="grid grid-rows-12 grid-cols-12 h-[calc(100vh-60px)] w-full">
    <div class="row-span-4 col-span-6">
      <StackedBar />
    </div>
    <div class="row-span-4 col-span-6">
      <BasicPie />
    </div>
    <div class="row-span-4 col-span-6">
      <BasicLine />
    </div>
    <div class="row-span-4 col-span-6">
      <BasicBar />
    </div>
    <div class="row-span-4 col-span-6">
      <BarLineMix />
    </div>
    <div class="row-span-4 col-span-6">
      <CategoryComparison />
    </div>
  </div>
  <HorizontalBar />
</template>
<style scoped></style>
