<script setup></script>

<template>
  <div class="container">
    <h1>功能展示與程式碼說明</h1>

    <div class="feature-list">
      <div class="feature">
        <h2>條碼掃描器</h2>
        <p>使用 onscan.js 實作的條碼掃描功能，支援：</p>
        <ul>
          <li>實體條碼掃描器輸入</li>
          <li>鍵盤輸入模擬</li>
          <li>完整的事件處理與除錯功能</li>
        </ul>
      </div>

      <div class="feature">
        <h2>網頁截圖工具</h2>
        <p>使用 html2canvas 實作的網頁截圖功能，特色：</p>
        <ul>
          <li>將 HTML 元素轉換成圖片</li>
        </ul>
      </div>

      <div class="feature">
        <h2>活動日曆</h2>
        <p>使用 FullCalendar 實作的行事曆功能，提供：</p>
        <ul>
          <li>多種視圖模式（月、週、日）</li>
          <li>事件的新增、編輯與刪除</li>
          <li>支援中文化介面</li>
          <li>完整的拖放支援</li>
        </ul>
      </div>
      <div class="feature">
        <h2>QR Code 產生器</h2>
        <p>使用 qrcode.js 函式庫，輕鬆在 Vue 3 中產生 QR Code。</p>
        <ul>
          <li>簡單快速產生 QR Code</li>
          <li>支援自訂 QR Code 大小和樣式</li>
          <li>可設定錯誤修正等級</li>
          <li>支援多種輸出格式（DataURL、Canvas、SVG）</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  padding: 2rem;
}

h1 {
  color: #2c3e50;
  text-align: center;
  margin-bottom: 2rem;
}

.feature-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.feature {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #3498db;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

ul {
  padding-left: 1.5rem;
}

li {
  margin: 0.5rem 0;
  color: #666;
}

p {
  color: #555;
  margin-bottom: 1rem;
}
</style>
