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
  <div>
    <img :src="qrCodeUrl" alt="QR Code" />
    <p>{{ qrText }}</p>
    <!-- 顯示 QR Code 的文字 -->
  </div>
</template>
<style scoped></style>
