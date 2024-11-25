<script setup>
import BasicLine from './components/Chart/BasicLine.vue'
import BasicPie from './components/Chart/BasicPie.vue'
import StackedBar from './components/Chart/StackedBar.vue'
import BasicBar from './components/Chart/BasicBar.vue'
import BarLineMix from './components/Chart/BarLineMix.vue'
import CategoryComparison from './components/Chart/CategoryComparison.vue'
import HorizontalBar from './components/Chart/HorizontalBar.vue'
</script>
<template>
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
