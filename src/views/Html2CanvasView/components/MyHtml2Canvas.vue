<script setup>
import { ref } from 'vue'
import html2canvas from 'html2canvas'

const captureArea = ref(null)
const screenshot = ref(null)

const captureScreenshot = async () => {
  if (captureArea.value) {
    try {
      const canvas = await html2canvas(captureArea.value)
      screenshot.value = canvas.toDataURL('image/png')
    } catch (error) {
      console.error('截圖失敗：', error)
    }
  }
}
</script>

<template>
  <h1 class="title">網頁截圖功能展示</h1>
  <div>
    <div ref="captureArea" class="capture-area">
      <h2 class="display">這是要截圖的內容</h2>
      <p class="content">這段文字和內容會被轉換成圖片。</p>
      <div class="instruction">
        <p>請點擊下方的「截圖」按鈕，將上方內容轉換成圖片。</p>
        <p>轉換完成後，圖片會顯示在按鈕下方。</p>
      </div>
    </div>
    <button @click="captureScreenshot" class="capture-btn">截圖</button>
    <div class="screenshot-container">
      <img
        v-if="screenshot"
        :src="screenshot"
        alt="截圖結果"
        class="screenshot-img"
      />
    </div>
  </div>
</template>

<style scoped>
.title {
  @apply text-center;
}

.container {
  @apply max-w-[800px] mx-auto p-5;
}

.capture-area {
  @apply p-8 bg-gray-50 border-2 border-gray-200 rounded-lg mb-5 shadow-sm;
}

.display {
  @apply text-gray-800 mb-4 text-center;
}

.content {
  @apply text-gray-600 leading-relaxed;
}

.instruction {
  @apply mt-5 p-4 bg-gray-200 rounded-md text-gray-600;
}

.capture-btn {
  @apply bg-green-500 text-white border-0 px-6 py-3 rounded text-base cursor-pointer transition-colors duration-300;
}

.capture-btn:hover {
  @apply bg-green-600;
}

.screenshot-container {
  @apply mt-5;
}

.screenshot-img {
  @apply max-w-full rounded-lg shadow-md;
}
</style>
