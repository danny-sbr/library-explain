<script setup>
import MyPrintJS from './components/MyPrintJS.vue'
import ExplainPrintJS from './components/ExplainPrintJS.vue'
</script>

<template>
  <div class="print-js-view">
    <h1>列印功能展示</h1>
    <MyPrintJS />
    <ExplainPrintJS />
  </div>
</template>

<style scoped>
.print-js-view {
  padding: 20px;
}

h1 {
  color: #2c3e50;
  margin-bottom: 20px;
}
</style>
