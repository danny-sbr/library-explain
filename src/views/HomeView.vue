<script setup></script>

<template>
  <div class="p-8">
    <h1 class="text-slate-800 text-center mb-8">功能展示與程式碼說明</h1>

    <div class="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
      <div class="bg-gray-50 p-6 rounded-lg shadow">
        <h2 class="text-blue-500 mb-4 text-2xl">條碼掃描器</h2>
        <p class="text-gray-600 mb-4">
          使用 onscan.js 實作的條碼掃描功能，支援：
        </p>
        <ul class="pl-6 space-y-2 text-gray-600">
          <li>實體條碼掃描器輸入</li>
          <li>鍵盤輸入模擬</li>
          <li>完整的事件處理與除錯功能</li>
        </ul>
      </div>

      <div class="bg-gray-50 p-6 rounded-lg shadow">
        <h2 class="text-blue-500 mb-4 text-2xl">網頁截圖工具</h2>
        <p class="text-gray-600 mb-4">
          使用 html2canvas 實作的網頁截圖功能，特色：
        </p>
        <ul class="pl-6 space-y-2 text-gray-600">
          <li>將 HTML 元素轉換成圖片</li>
        </ul>
      </div>

      <div class="bg-gray-50 p-6 rounded-lg shadow">
        <h2 class="text-blue-500 mb-4 text-2xl">活動日曆</h2>
        <p class="text-gray-600 mb-4">
          使用 FullCalendar 實作的行事曆功能，提供：
        </p>
        <ul class="pl-6 space-y-2 text-gray-600">
          <li>多種視圖模式（月、週、日）</li>
          <li>事件的新增、編輯與刪除</li>
          <li>支援中文化介面</li>
          <li>完整的拖放支援</li>
        </ul>
      </div>

      <div class="bg-gray-50 p-6 rounded-lg shadow">
        <h2 class="text-blue-500 mb-4 text-2xl">QR Code 產生器</h2>
        <p class="text-gray-600 mb-4">
          使用 qrcode.js 函式庫，輕鬆在 Vue 3 中產生 QR Code。
        </p>
        <ul class="pl-6 space-y-2 text-gray-600">
          <li>簡單快速產生 QR Code</li>
          <li>支援自訂 QR Code 大小和樣式</li>
          <li>可設定錯誤修正等級</li>
          <li>支援多種輸出格式（DataURL、Canvas、SVG）</li>
        </ul>
      </div>

      <div class="bg-gray-50 p-6 rounded-lg shadow">
        <h2 class="text-blue-500 mb-4 text-2xl">列印功能</h2>
        <p class="text-gray-600 mb-4">
          使用 Print.js 實作的網頁列印功能，提供：
        </p>
        <ul class="pl-6 space-y-2 text-gray-600">
          <li>支援多種內容類型列印（HTML、PDF、圖片、JSON）</li>
          <li>自訂列印標題與頁尾</li>
          <li>完整的樣式保留功能</li>
          <li>支援進階列印選項設定</li>
          <li>簡單的訂單資訊列印範例</li>
        </ul>
      </div>

      <div class="bg-gray-50 p-6 rounded-lg shadow">
        <h2 class="text-blue-500 mb-4 text-2xl">ECharts 圖表</h2>
        <p class="text-gray-600 mb-4">使用 ECharts 實作的圖表功能，提供：</p>
        <ul class="pl-6 space-y-2 text-gray-600">
          <li>支援多種圖表類型</li>
          <li>自訂圖表樣式</li>
          <li>支援多種輸出格式</li>
          <li>支援進階圖表選項設定</li>
          <li>簡單的圖表範例</li>
        </ul>
      </div>
      <div class="bg-gray-50 p-6 rounded-lg shadow">
        <h2 class="text-blue-500 mb-4 text-2xl">表單驗證</h2>
        <p class="text-gray-600 mb-4">
          使用 vee-validate 實作的表單驗證功能，提供：
        </p>
        <ul class="pl-6 space-y-2 text-gray-600">
          <li>支援多種表單驗證規則</li>
        </ul>
      </div>
    </div>
  </div>
</template>
