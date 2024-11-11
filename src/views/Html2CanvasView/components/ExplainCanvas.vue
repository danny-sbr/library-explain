<script setup>
// 引入所需的元件和函式庫
import CodeBlock from '@/components/CodeBlock.vue'

// 定義程式碼範例字串，用於展示如何使用 html2canvas
const codeString = `<script setup>
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
<\\/script>

<template>
  <div>
    <div ref="captureArea" class="capture-area">
      <h1>這是要截圖的內容</h1>
      <p>這段文字和內容會被轉換成圖片。</p>
    </div>
    <button @click="captureScreenshot">截圖</button>
    <img v-if="screenshot" :src="screenshot" alt="截圖結果" />
  </div>
</template>

<style scoped>
.capture-area {
  padding: 20px;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
}
</style>`
</script>

<template>
  <!-- 使用 CodeBlock 元件顯示程式碼範例 -->
  <CodeBlock>{{ codeString }}</CodeBlock>

  <!-- html2canvas 說明區塊 -->
  <h2 class="text-2xl font-bold mt-6 mb-4">html2canvas 簡介</h2>
  <p class="mb-6">
    html2canvas 是一個強大的 JavaScript 函式庫，能夠將 HTML 元素轉換成 Canvas
    元素，並生成對應的圖片。這個函式庫非常適合用於截圖功能，無需後端支援即可在前端完成。透過
    html2canvas，我們可以輕鬆地將網頁內容轉換成圖片，並進行下載或分享。
  </p>

  <!-- 設定選項說明區塊 -->
  <h2 class="text-2xl font-bold mt-6 mb-4">html2canvas 設定選項</h2>
  <p class="mb-4">以下是所有可用的設定選項：</p>

  <!-- 設定選項表格 -->
  <div class="overflow-x-auto">
    <table class="w-full border-collapse my-4">
      <thead>
        <tr>
          <th class="border border-gray-300 bg-gray-100 p-2 text-left">名稱</th>
          <th class="border border-gray-300 bg-gray-100 p-2 text-left">
            預設值
          </th>
          <th class="border border-gray-300 bg-gray-100 p-2 text-left">描述</th>
        </tr>
      </thead>
      <tbody>
        <!-- 表格內容 -->
        <tr>
          <td class="border border-gray-300 p-2">
            <strong>allowTaint</strong>
          </td>
          <td class="border border-gray-300 p-2">false</td>
          <td class="border border-gray-300 p-2">
            是否允許跨來源圖片污染（taint）Canvas
          </td>
        </tr>
        <!-- ... 其他設定選項 ... -->
      </tbody>
    </table>
  </div>

  <!-- 額外說明區塊 -->
  <p class="mb-4">
    如果您希望排除某些元素不被渲染，可以在這些元素上添加
    <code class="bg-gray-100 px-1 rounded">data-html2canvas-ignore</code>
    屬性，html2canvas 將會自動忽略這些元素。
  </p>

  <!-- 參考來源連結 -->
  <p class="mb-4">
    以上內容參考自
    <a
      href="https://html2canvas.hertzen.com/"
      target="_blank"
      class="text-blue-600 hover:text-blue-800 transition-colors duration-300"
      >html2canvas 官方網站</a
    >。
  </p>
</template>
<style scoped>
table {
  @apply w-full border-collapse my-4;
}

th,
td {
  @apply border border-gray-300 p-2 text-left;
}

th {
  @apply bg-gray-100;
}
</style>
