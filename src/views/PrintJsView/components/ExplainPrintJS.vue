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
    { 訂單編號：'TX-001', 客戶：'王小明' },
    { 訂單編號：'TX-002', 客戶：'李小華' }
  ],
  properties: ['訂單編號', '客戶'],
  type: 'json'
})`
</script>

<template>
  <div>
    <h2 class="text-2xl font-semibold text-gray-800 mb-4">Print.js 使用說明</h2>
    <p class="mb-6 text-gray-700">
      Print.js 是一個小巧但功能強大的 JavaScript 列印工具，可以輕鬆列印 HTML
      元素、PDF、圖片和 JSON 資料。
    </p>

    <h2 class="text-2xl font-semibold text-gray-800 mb-4">安裝與設定</h2>
    <CodeBlock>{{ installCode }}</CodeBlock>

    <h2 class="text-2xl font-semibold text-gray-800 mb-4">主要選項說明</h2>
    <div class="overflow-x-auto mb-6">
      <table class="w-full text-left border border-gray-300">
        <thead>
          <tr>
            <th class="p-4 bg-gray-100 border-b border-gray-300">選項</th>
            <th class="p-4 bg-gray-100 border-b border-gray-300">類型</th>
            <th class="p-4 bg-gray-100 border-b border-gray-300">說明</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="p-4 border-b border-gray-300">printable</td>
            <td class="p-4 border-b border-gray-300">String | Array</td>
            <td class="p-4 border-b border-gray-300">要列印的元素 ID 或資料</td>
          </tr>
          <tr>
            <td class="p-4 border-b border-gray-300">type</td>
            <td class="p-4 border-b border-gray-300">String</td>
            <td class="p-4 border-b border-gray-300">
              列印類型：'html'、'pdf'、'image'、'json'
            </td>
          </tr>
          <tr>
            <td class="p-4 border-b border-gray-300">header</td>
            <td class="p-4 border-b border-gray-300">String</td>
            <td class="p-4 border-b border-gray-300">列印頁面的標題 HTML</td>
          </tr>
          <tr>
            <td class="p-4 border-b border-gray-300">targetStyle</td>
            <td class="p-4 border-b border-gray-300">Array</td>
            <td class="p-4 border-b border-gray-300">要包含的 CSS 選擇器</td>
          </tr>
          <tr>
            <td class="p-4 border-b border-gray-300">scanStyles</td>
            <td class="p-4 border-b border-gray-300">Boolean</td>
            <td class="p-4 border-b border-gray-300">
              是否掃描並包含頁面中的樣式
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 class="text-2xl font-semibold text-gray-800 mb-4">使用範例</h2>
    <h3 class="text-xl font-semibold text-gray-800 mb-2">基本用法</h3>
    <CodeBlock>{{ basicCode }}</CodeBlock>

    <h3 class="text-xl font-semibold text-gray-800 mb-2">進階選項</h3>
    <CodeBlock>{{ advancedCode }}</CodeBlock>

    <h3 class="text-xl font-semibold text-gray-800 mb-2">其他列印類型</h3>
    <CodeBlock>{{ otherTypesCode }}</CodeBlock>

    <h2 class="text-2xl font-semibold text-gray-800 mb-4">注意事項</h2>
    <ul class="list-disc list-inside space-y-2 text-gray-700">
      <li>確保要列印的元素有唯一的 ID</li>
      <li>如果要列印樣式，建議設定 targetStyle: ['*']</li>
      <li>列印 PDF 時需要確保瀏覽器支援 PDF 預覽</li>
      <li>列印 JSON 資料時需要指定要顯示的屬性</li>
    </ul>
  </div>
</template>
