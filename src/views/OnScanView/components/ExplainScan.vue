<script setup>
import CodeBlock from '@/components/CodeBlock.vue'

const initCode = `// 啟用整個文件的掃描事件
onScan.attachTo(document);
// 註冊事件監聽器
document.addEventListener('scan', function(sScancode, iQuantity) {
    alert(iQuantity + 'x ' + sScancode); 
});`

const exampleCode = `// 使用選項進行初始化
onScan.attachTo(document, {
    suffixKeyCodes: [13], // 預期掃描結束時為 Enter 鍵
    reactToPaste: true, // 支援貼上模式的內建掃描器（非鍵盤模式）
    onScan: function(sCode, iQty) { // 替代 document.addEventListener('scan')
        console.log('Scanned: ' + iQty + 'x ' + sCode); 
    },
    onKeyDetect: function(iKeyCode) { // 輸出所有可能相關的按鍵事件，用於除錯
        console.log('Pressed: ' + iKeyCode);
    }
});

// 程式模擬掃描以測試事件處理器
onScan.simulate(document, '1234567890123');

// 模擬按鍵代碼
onScan.simulate(document, [48,49,50]);

// 模擬 keydown 事件
onScan.simulate(document, [{keyCode:80, key:'P', shiftKey:true}, {keyCode:49,key:'1'}]);

// 動態更改選項
onScan.setOptions(document, {
    singleScanQty: 5 // 將每次掃描的數量設置為 5
});

// 完全移除 DOM 元素的 onScan.js 設定
onScan.detachFrom(document);`

const decodeCode = `onScan.attachTo(document, {
    onScan: function(sScanned, iQty) { ... },
    keyCodeMapper: function(oEvent) {
        // 若偵測到特殊按鍵程式碼
        if (oEvent.which == 'your_special_key_code') {
            return 'xxx';
        }
        // 其餘情況回傳預設解碼
        return onScan.decodeKeyEvent(oEvent);
    }
});`
</script>

<template>
  <div class="container">
    <h1>onScan.js</h1>
    <p>框架無關的 JavaScript 掃描事件函式庫，適用於硬體條碼掃描器。</p>

    <h2>快速入門</h2>
    <ol>
      <li>
        透過 <code>npm install onscan.js</code> 或
        <code>bower install onscan-js</code> 安裝
      </li>
      <li>包含 <code>onscan.min.js</code> 至您的腳本</li>
      <li>在頁面或檢視載入時，加入以下初始化程式碼</li>
    </ol>

    <CodeBlock>{{ initCode }}</CodeBlock>

    <h2>Demo &amp; 操作範例</h2>
    <p>
      <a
        href="https://a.kabachnik.info/onscan-js-playground.html"
        target="_blank"
        >線上 demo</a
      >
      <br />
      此外，安裝包中包含類似的 demo，可在本機的 lib 資料夾中載入
      <code>index.html</code> 進行測試。
    </p>

    <h2>需求條件</h2>
    <ol>
      <li>
        一台硬體條碼掃描器，並且符合以下任一條件：
        <ul>
          <li>以鍵盤模式運行（常稱為鍵盤楔模式）</li>
          <li>或以貼上（粘貼）模式運行</li>
        </ul>
      </li>
      <li>現代瀏覽器（IE9+）</li>
    </ol>

    <h2>運作原理</h2>
    <p>
      onScan.js
      透過測量輸入速度、檢查前綴和後綴字元等方式，區分一般輸入和掃描輸入。若偵測到掃描動作，會觸發在初始化時指定的
      DOM 元素上的自訂 JavaScript 事件 <code>scan</code>。
    </p>
    <p>
      有許多選項可微調偵測特定的掃描器型號。並且包含一些有用的額外功能（部分需要特定的硬體）：
    </p>
    <ul>
      <li>傳遞一個計數器隨著掃描程式碼一同返回</li>
      <li>若內建掃描按鈕長按一段時間，可加入第二個動作</li>
    </ul>

    <h2>範例</h2>
    <CodeBlock>{{ exampleCode }}</CodeBlock>

    <h2>選項</h2>
    <p>初始化 onScan.js 時可設定以下選項：</p>

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
          <td>onScan</td>
          <td><code>function(sScanned, iQty){}</code></td>
          <td>
            掃描成功後的回呼函式<br />參數：<br />- <code>sScanned</code> -
            掃描的程式碼<br />- <code>iQty</code> - 數量
          </td>
        </tr>
        <tr>
          <td>onScanButtonLongPress</td>
          <td><code>function(){}</code></td>
          <td>
            當掃描按鈕按住不放到達
            <code>scanButtonLongPressThreshold</code>
            所定義的時間後觸發。此功能僅當掃描按鈕作為鍵本身並設置
            <code>scanButtonKeyCode</code> 時有效。
          </td>
        </tr>
        <tr>
          <td>onScanError</td>
          <td><code>function(oDebug){}</code></td>
          <td>
            當掃描的字串因某些限制被丟棄時的回呼函式<br />參數：<br />-
            <code>oDebug</code> - 包含除錯資料的物件
          </td>
        </tr>
        <!-- 其餘選項可類似填寫 -->
      </tbody>
    </table>

    <h2>方法</h2>

    <table>
      <thead>
        <tr>
          <th>方法</th>
          <th>參數</th>
          <th>說明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>attachTo</td>
          <td>DOMElement, oOptions</td>
          <td>
            初始化並監聽指定 DOM 元素的掃描事件。使用
            <code>document</code>
            來處理所有可能的事件，這是大多數情況下的最佳選擇。
          </td>
        </tr>
        <tr>
          <td>detachFrom</td>
          <td>DOMElement</td>
          <td>移除指定 DOM 元素的所有掃描器偵測邏輯。</td>
        </tr>
        <tr>
          <td>simulate</td>
          <td>DOMElement, mStringOrArray</td>
          <td>
            為指定的掃描程式碼觸發
            <code>scan</code> 事件，用於手動觸發監聽器（例如測試用）。
          </td>
        </tr>
      </tbody>
    </table>

    <h2>解碼按鍵程式碼</h2>
    <p>
      onScan.js
      預設會忽略不符合字母或數字的按鍵程式碼。若遇到特別的字元，您可以自訂
      <code>keyCodeMapper</code> 函式來調整解碼方式，例如：
    </p>

    <CodeBlock>{{ decodeCode }}</CodeBlock>

    <h2>模擬按鍵程式碼</h2>
    <p>
      如果當下沒有條碼掃描器，您可以透過
      <code>onScan.simulate()</code> 以程式碼模擬鍵盤事件。
    </p>

    <p>您可以使用以下格式傳遞掃描程式碼：</p>
    <ul>
      <li>字串 - 直接傳入一組已解碼的字串</li>
      <li>
        按鍵程式碼陣列 - 如 <code>[70, 71, 80]</code>，會產生對應的
        <code>keydown</code> 事件
      </li>
      <li>
        事件物件陣列 - 如
        <code
          >[{keyCode: 70, key: "F", shiftKey: true}, {keyCode: 71, key:
          "g"}]</code
        >，這樣可以精確模擬事件
      </li>
    </ul>
  </div>
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
</style>
