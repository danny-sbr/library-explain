<script setup>
import CodeBlock from '@/components/CodeBlock.vue'

const installCode = `npm install qrcode`

const basicCode = `<script setup>
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
<\\/script>

<template>
  <div>
    <img :src="qrCodeUrl" alt="QR Code" />
    <p>{{ qrText }}</p>
  </div>
</template>`

const advancedCode = `// 使用選項設定 QR Code
const options = {
  width: 300,  // QR Code 寬度
  margin: 2,   // 邊距
  color: {
    dark: '#000000',  // QR Code 顏色
    light: '#ffffff'  // 背景顏色
  },
  errorCorrectionLevel: 'H'  // 錯誤修正等級：L, M, Q, H
}

// 產生 QR Code
QRCode.toDataURL(text, options)`

const canvasCode = `// 直接在 Canvas 上繪製
const canvas = document.getElementById('qr-canvas')
QRCode.toCanvas(canvas, text, options)`
</script>

<template>
  <div class="container">
    <h1>QR Code 產生器</h1>
    <p>使用 qrcode.js 函式庫在 Vue 3 中產生 QR Code。</p>

    <h2>快速入門</h2>
    <ol>
      <li>安裝 qrcode.js 套件</li>
      <CodeBlock>{{ installCode }}</CodeBlock>
      <li>在元件中匯入並使用</li>
    </ol>

    <h2>基本使用範例</h2>
    <p>以下是最基本的 QR Code 產生範例：</p>
    <CodeBlock>{{ basicCode }}</CodeBlock>

    <h2>功能特點</h2>
    <ul>
      <li>支援多種輸出格式（DataURL、Canvas、SVG）</li>
      <li>可自訂 QR Code 的外觀</li>
      <li>支援錯誤修正等級設定</li>
      <li>支援 UTF-8 編碼的文字</li>
    </ul>

    <h2>進階設定選項</h2>
    <p>可以透過選項物件來自訂 QR Code 的外觀：</p>
    <CodeBlock>{{ advancedCode }}</CodeBlock>

    <h2>選項說明</h2>
    <table>
      <thead>
        <tr>
          <th>選項</th>
          <th>預設值</th>
          <th>說明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>version</td>
          <td>自動</td>
          <td>QR Code 版本（1-40）</td>
        </tr>
        <tr>
          <td>errorCorrectionLevel</td>
          <td>'M'</td>
          <td>錯誤修正等級（L: 7%, M: 15%, Q: 25%, H: 30%）</td>
        </tr>
        <tr>
          <td>width</td>
          <td>256</td>
          <td>QR Code 的寬度（像素）</td>
        </tr>
        <tr>
          <td>margin</td>
          <td>4</td>
          <td>邊距大小（模組）</td>
        </tr>
      </tbody>
    </table>

    <h2>Canvas 模式</h2>
    <p>除了產生 DataURL，也可以直接在 Canvas 上繪製：</p>
    <CodeBlock>{{ canvasCode }}</CodeBlock>

    <h2>注意事項</h2>
    <ul>
      <li>文字內容過長可能會導致 QR Code 較為密集</li>
      <li>建議使用適當的錯誤修正等級來平衡掃描穩定性</li>
      <li>若需要在深色背景使用，可調整 light 和 dark 顏色</li>
    </ul>
  </div>
  <p>
    更多內容可以參考
    <a
      href="https://www.npmjs.com/package/qrcode"
      target="_blank"
      class="styled-link"
      >qrcode 官方網站</a
    >
  </p>
</template>

<style scoped>
table {
  border-collapse: collapse;
  width: 100%;
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

@media screen and (max-width: 768px) {
  table {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
}

.styled-link {
  color: #007bff;
  text-decoration: none;
  transition: color 0.3s ease;
}
</style>
