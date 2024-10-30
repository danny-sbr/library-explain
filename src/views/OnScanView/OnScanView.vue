<script setup>
import MyScan from '@/views/OnScanView/components/MyScan.vue'
import ExplainScan from '@/views/OnScanView/components/ExplainScan.vue'
</script>
<template>
  <MyScan />
  <div class="center">
    <ExplainScan />
  </div>
</template>

<style scope>
.center {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
