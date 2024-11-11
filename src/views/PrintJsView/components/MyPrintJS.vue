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
  <div class="p-5">
    <h1 class="text-center">Print.js 功能展示</h1>
    <div class="bg-gray-100 p-4 rounded-lg mb-5">
      <p class="mb-4">請點擊下方按鈕列印訂單資訊</p>
      <ul class="pl-5 text-gray-600 space-y-6 list-disc">
        <li>點擊按鈕後，會開啟瀏覽器列印功能，列印出訂單資訊</li>
        <li>列印的內容會包含訂單編號、客戶姓名和自定義的 Header</li>
      </ul>
    </div>
    <div class="mb-5">
      <button @click="handlePrint" class="print-btn">列印訂單資訊</button>
    </div>

    <div id="barcodePrintDom" class="border border-gray-300 p-5 rounded">
      <div class="flex flex-col gap-2.5">
        <div class="flex gap-2.5">
          <span class="font-bold">訂單編號：</span>
          <span>{{ orderNumber }}</span>
        </div>
        <div class="flex gap-2.5">
          <span class="font-bold">客戶姓名：</span>
          <span>{{ customerName }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.print-btn {
  @apply bg-green-500 text-white px-5 py-2.5 border-none rounded cursor-pointer hover:bg-green-600;
}
</style>
