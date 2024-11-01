<script setup>
import MyQRcode from './components/MyQRcode.vue'
import ExplainQRcode from './components/ExplainQRcode.vue'
</script>
<template>
  <div class="center">
    <MyQRcode />
  </div>
  <ExplainQRcode />
</template>
<style scoped lang="scss">
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
