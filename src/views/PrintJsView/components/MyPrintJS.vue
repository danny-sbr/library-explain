<script setup>
import { ref } from 'vue'
import print from 'print-js'

const orderNumber = ref('TX-2024-001')
const customerName = ref('王小明')

const handlePrint = () => {
  print({
    printable: 'barcodePrintDom',
    type: 'html',
    targetStyle: ['*'],
    header: '<h3 style="text-align: center; font-size: 20px">訂單編號資訊</h3>',
    scanStyles: false,
  })
}
</script>

<template>
  <div class="print-container">
    <h1 class="title">Print.js 功能展示</h1>
    <div class="instruction">
      <p>請點擊下方按鈕列印訂單資訊</p>
      <ul>
        <li>點擊按鈕後，會開啟瀏覽器列印功能，列印出訂單資訊</li>
        <li>列印的內容會包含訂單編號、客戶姓名和自定義的 Header</li>
      </ul>
    </div>
    <div class="print-controls">
      <button @click="handlePrint" class="print-btn">列印訂單資訊</button>
    </div>

    <div id="barcodePrintDom" class="print-content">
      <div class="order-info">
        <div class="info-row">
          <span class="label">訂單編號：</span>
          <span>{{ orderNumber }}</span>
        </div>
        <div class="info-row">
          <span class="label">客戶姓名：</span>
          <span>{{ customerName }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.print-container {
  padding: 20px;
}

.print-controls {
  margin-bottom: 20px;
}

.print-btn {
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.print-btn:hover {
  background-color: #45a049;
}

.print-content {
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 4px;
}

.order-info {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.info-row {
  display: flex;
  gap: 10px;
}

.label {
  font-weight: bold;
  min-width: 80px;
}
.instruction {
  background-color: #f5f5f5;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;

  ul {
    padding-left: 20px;
  }

  li {
    margin-bottom: 8px;
    color: #666;
  }
}
.title {
  text-align: center;
}
</style>
