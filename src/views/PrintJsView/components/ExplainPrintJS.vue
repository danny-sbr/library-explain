<script setup>
import CodeBlock from '@/components/CodeBlock.vue'

const installCode = `// 使用 npm 安裝
npm install print-js

// 在元件中引入
import print from 'print-js'`

const basicCode = `// 基本列印 HTML 元素
print({
  printable: 'elementId',
  type: 'html',
  targetStyle: ['*'],
  header: '<h3>列印標題</h3>',
  scanStyles: false
})`

const advancedCode = `// 進階列印選項
print({
  printable: 'printArea',
  type: 'html',
  targetStyles: ['*'],  // 包含所有樣式
  style: '.custom-class { color: red }',  // 自訂樣式
  header: '<h3>自訂標題</h3>',
  footer: '<div>頁尾資訊</div>',
  maxWidth: 800,
  font: 'Arial',
  font_size: '12pt',
  honorMarginPadding: true,
  honorColor: true,
  scanStyles: true
})`

const otherTypesCode = `// 列印 PDF
print({
  printable: 'path/to/document.pdf',
  type: 'pdf'
})

// 列印圖片
print({
  printable: 'path/to/image.jpg',
  type: 'image'
})

// 列印 JSON 資料
print({
  printable: [
    { 訂單編號: 'TX-001', 客戶: '王小明' },
    { 訂單編號: 'TX-002', 客戶: '李小華' }
  ],
  properties: ['訂單編號', '客戶'],
  type: 'json'
})`
</script>

<template>
  <div class="container">
    <h2>Print.js 使用說明</h2>
    <p>
      Print.js 是一個小巧但功能強大的 JavaScript 列印工具，可以輕鬆列印 HTML
      元素、PDF、圖片和 JSON 資料。
    </p>

    <h2>安裝與設定</h2>
    <CodeBlock>{{ installCode }}</CodeBlock>

    <h2>主要選項說明</h2>
    <table>
      <thead>
        <tr>
          <th>選項</th>
          <th>類型</th>
          <th>說明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>printable</td>
          <td>String | Array</td>
          <td>要列印的元素 ID 或資料</td>
        </tr>
        <tr>
          <td>type</td>
          <td>String</td>
          <td>列印類型：'html'、'pdf'、'image'、'json'</td>
        </tr>
        <tr>
          <td>header</td>
          <td>String</td>
          <td>列印頁面的標題 HTML</td>
        </tr>
        <tr>
          <td>targetStyle</td>
          <td>Array</td>
          <td>要包含的 CSS 選擇器</td>
        </tr>
        <tr>
          <td>scanStyles</td>
          <td>Boolean</td>
          <td>是否掃描並包含頁面中的樣式</td>
        </tr>
      </tbody>
    </table>

    <h2>使用範例</h2>
    <h3>基本用法</h3>
    <CodeBlock>{{ basicCode }}</CodeBlock>

    <h3>進階選項</h3>
    <CodeBlock>{{ advancedCode }}</CodeBlock>

    <h3>其他列印類型</h3>
    <CodeBlock>{{ otherTypesCode }}</CodeBlock>

    <h2>注意事項</h2>
    <ul>
      <li>確保要列印的元素有唯一的 ID</li>
      <li>如果要列印樣式，建議設定 targetStyle: ['*']</li>
      <li>列印 PDF 時需要確保瀏覽器支援 PDF 預覽</li>
      <li>列印 JSON 資料時需要指定要顯示的屬性</li>
    </ul>
  </div>
</template>

<style scoped>
.container {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f5f5f5;
}

ul {
  padding-left: 20px;
}

li {
  margin: 8px 0;
}

h2 {
  color: #2c3e50;
  margin-top: 1.5em;
}

h3 {
  color: #2c3e50;
  margin-top: 1em;
}

@media screen and (max-width: 768px) {
  table {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }
}
</style>
