<script setup>
import { ref, onMounted } from 'vue'
import QRCode from 'qrcode'

const qrText = 'Hello Vue 3!' // 欲顯示的 QR Code 文字
const qrCodeUrl = ref('')

onMounted(async () => {
  try {
    qrCodeUrl.value = await QRCode.toDataURL(qrText)
  } catch (error) {
    console.error(error)
  }
})
</script>
<template>
  <h1 class="title">QR Code 產生器功能展示</h1>
  <div class="center">
    <img :src="qrCodeUrl" alt="QR Code" />
    <p>{{ qrText }}</p>
  </div>
</template>
<style scoped>
.title {
  text-align: center;
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
