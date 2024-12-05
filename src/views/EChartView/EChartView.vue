<script setup>
import ExplainEChart from './components/ExplainEChart.vue'
import MyChart from './components/MyChart.vue'
import SyncOneEventMultipleChart from './components/SyncOneEventMultipleChart.vue'
import SyncOneEventTwoChart from './components/SyncOneEventTwoChart.vue'
import ConnectChart from './components/ConnectChart.vue'
</script>
<template>
  <div class="space-y-10">
    <ExplainEChart />
    <MyChart />
    <SyncOneEventTwoChart />
    <SyncOneEventMultipleChart />
    <ConnectChart />
  </div>
</template>
<style scoped></style>
