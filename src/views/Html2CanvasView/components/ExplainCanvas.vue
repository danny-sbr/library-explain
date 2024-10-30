<script setup>
import CodeBlock from '@/components/CodeBlock.vue'
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
  <CodeBlock>{{ codeString }}</CodeBlock>

  <h2>html2canvas 簡介</h2>
  <p>
    html2canvas 是一個強大的 JavaScript 函式庫，能夠將 HTML 元素轉換成 Canvas
    元素，並生成對應的圖片。這個函式庫非常適合用於截圖功能，無需後端支援即可在前端完成。透過
    html2canvas，我們可以輕鬆地將網頁內容轉換成圖片，並進行下載或分享。
  </p>

  <h2>html2canvas 設定選項</h2>
  <p>以下是所有可用的設定選項：</p>

  <table>
    <thead>
      <tr>
        <th>名稱</th>
        <th>預設值</th>
        <th>描述</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>allowTaint</strong></td>
        <td>false</td>
        <td>是否允許跨來源圖片污染（taint）Canvas</td>
      </tr>
      <tr>
        <td><strong>backgroundColor</strong></td>
        <td>#ffffff</td>
        <td>Canvas 的背景色，如果 DOM 中未指定。設為 null 表示透明背景</td>
      </tr>
      <tr>
        <td><strong>canvas</strong></td>
        <td>null</td>
        <td>使用現有的 Canvas 元素作為繪製基礎</td>
      </tr>
      <tr>
        <td><strong>foreignObjectRendering</strong></td>
        <td>false</td>
        <td>若瀏覽器支援，是否使用 ForeignObject 進行渲染</td>
      </tr>
      <tr>
        <td><strong>imageTimeout</strong></td>
        <td>15000</td>
        <td>載入圖片的超時時間（毫秒）。設為 0 以禁用超時</td>
      </tr>
      <tr>
        <td><strong>ignoreElements</strong></td>
        <td>(element) => false</td>
        <td>刪除符合條件的元素的判斷函式</td>
      </tr>
      <tr>
        <td><strong>logging</strong></td>
        <td>true</td>
        <td>是否啟用除錯的記錄功能</td>
      </tr>
      <tr>
        <td><strong>onclone</strong></td>
        <td>null</td>
        <td>文件複製後的回呼函式，可用於修改渲染內容而不影響原始文件</td>
      </tr>
      <tr>
        <td><strong>proxy</strong></td>
        <td>null</td>
        <td>
          用於載入跨來源圖片的代理伺服器 URL。如果未設置，則不載入跨來源圖片
        </td>
      </tr>
      <tr>
        <td><strong>removeContainer</strong></td>
        <td>true</td>
        <td>是否清除 html2canvas 暫時建立的複製 DOM 元素</td>
      </tr>
      <tr>
        <td><strong>scale</strong></td>
        <td>window.devicePixelRatio</td>
        <td>用於渲染的縮放比例。預設為瀏覽器的裝置像素比率</td>
      </tr>
      <tr>
        <td><strong>useCORS</strong></td>
        <td>false</td>
        <td>是否嘗試使用 CORS 從伺服器載入圖片</td>
      </tr>
      <tr>
        <td><strong>width</strong></td>
        <td>元素寬度</td>
        <td>Canvas 的寬度</td>
      </tr>
      <tr>
        <td><strong>height</strong></td>
        <td>元素高度</td>
        <td>Canvas 的高度</td>
      </tr>
      <tr>
        <td><strong>x</strong></td>
        <td>元素的 x 偏移量</td>
        <td>裁剪 Canvas 的 x 座標</td>
      </tr>
      <tr>
        <td><strong>y</strong></td>
        <td>元素的 y 偏移量</td>
        <td>裁剪 Canvas 的 y 座標</td>
      </tr>
      <tr>
        <td><strong>scrollX</strong></td>
        <td>元素的 scrollX</td>
        <td>渲染元素時的 x 滾動位置（例如當元素使用 position: fixed 時）</td>
      </tr>
      <tr>
        <td><strong>scrollY</strong></td>
        <td>元素的 scrollY</td>
        <td>渲染元素時的 y 滾動位置（例如當元素使用 position: fixed 時）</td>
      </tr>
      <tr>
        <td><strong>windowWidth</strong></td>
        <td>Window.innerWidth</td>
        <td>渲染元素時使用的視窗寬度，可能會影響媒體查詢等</td>
      </tr>
      <tr>
        <td><strong>windowHeight</strong></td>
        <td>Window.innerHeight</td>
        <td>渲染元素時使用的視窗高度，可能會影響媒體查詢等</td>
      </tr>
    </tbody>
  </table>

  <p>
    如果您希望排除某些元素不被渲染，可以在這些元素上添加
    <code>data-html2canvas-ignore</code> 屬性，html2canvas
    將會自動忽略這些元素。
  </p>
  <p>
    以上內容參考自
    <a
      href="https://html2canvas.hertzen.com/"
      target="_blank"
      class="styled-link"
      >html2canvas 官方網站</a
    >。
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

.styled-link {
  color: #007bff;
  text-decoration: none;
  transition:
    color 0.3s,
    border-bottom-color 0.3s;
}

.styled-link:hover {
  color: #0056b3;
}
</style>
