<script setup>
import { ref } from 'vue'
import html2canvas from 'html2canvas'
import ExplainCanvas from './components/ExplainCanvas.vue'
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
  <div class="container">
    <div ref="captureArea" class="capture-area">
      <h1 class="title">這是要截圖的內容</h1>
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
  <ExplainCanvas />
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.capture-area {
  padding: 30px;
  background-color: #f8f9fa;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.title {
  color: #2c3e50;
  margin-bottom: 16px;
  font-size: 24px;
}

.content {
  color: #495057;
  line-height: 1.6;
}

.instruction {
  margin-top: 20px;
  padding: 15px;
  background-color: #e9ecef;
  border-radius: 6px;
  color: #495057;
}

.capture-btn {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.capture-btn:hover {
  background-color: #45a049;
}

.screenshot-container {
  margin-top: 20px;
}

.screenshot-img {
  max-width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
