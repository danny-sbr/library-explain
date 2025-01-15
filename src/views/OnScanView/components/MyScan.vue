<script setup>
import { onMounted, onUnmounted } from 'vue'
import onScan from 'onscan.js'

onMounted(() => {
  const scannerOptions = {
    // 掃描成功時觸發的回呼，會傳入掃描的字串和數量
    onScan: function (sScanned, iQty) {
      console.log('Scanned: ' + iQty + 'x ' + sScanned) // 顯示掃描的結果
    },

    // 掃描按鈕長按時觸發的回呼，需設定 scanButtonKeyCode
    onScanButtonLongPress: function () {
      console.log('Scan button long press detected') // 顯示按鈕長按事件
    },

    // 掃描失敗時（例如長度不足等）觸發的回呼，傳入包含錯誤資訊的物件
    onScanError: function (oDebug) {
      console.error('Scan error:', oDebug) // 顯示錯誤資訊
    },

    // 偵測到每一個按鍵事件時觸發，傳入按鍵代號及完整事件
    onKeyDetect: function (iKeyCode, oEvent) {
      console.log('onKeyDetect oEvent', oEvent)
      console.log('Key detected:', iKeyCode) // 顯示按鍵代號
      return iKeyCode !== 27 // 如果按鍵是 "Esc"，則不處理此事件
    },

    // 處理符合掃描碼的每一個字元，尚未確定是否為完整��描
    onKeyProcess: function (sChar, oEvent) {
      console.log('onKeyProcess oEvent', oEvent)
      console.log('Processing character:', sChar) // 顯示處理中的字元
    },

    // 當偵測到貼上事件時觸發，需設定 reactToPaste 為 true
    onPaste: function (sPasted, oEvent) {
      console.log('onPaste', oEvent)
      console.log('Pasted text detected:', sPasted) // 顯示貼上的文字
    },

    // 從 keydown 事件中提取字元，如果返回 null 則忽略該事件
    keyCodeMapper: function (oEvent) {
      console.log('keyCodeMapper oEvent', oEvent)
      const char = onScan.decodeKeyEvent(oEvent) // 使用內建方法解碼按鍵
      console.log('keyCodeMapper char', char)
      return char !== null ? char : null // 若無法解碼則返回 null
    },

    // 每次按鍵後等待的時間（毫秒）來檢查掃描是否結束
    timeBeforeScanTest: 100,

    // 每個字元之間的平均時間（毫秒），若超過則觸發 scanError
    avgTimeByChar: 30,

    // 掃描碼的最小長度，若未達此長度則視為錯誤掃描
    minLength: 6,

    // 掃描碼結束時的後綴按鍵代號，例如 Enter（13）和 Tab（9）
    suffixKeyCodes: [9, 13],

    // 掃描碼開頭的前綴按鍵代號（若有）
    prefixKeyCodes: [],

    // 忽略掃描事件，當焦點在指定的元素上時（例如輸入框）
    ignoreIfFocusOn: 'input, textarea',

    // 掃描按鈕的按鍵代號，僅當按鈕本身即是按鍵時有效
    scanButtonKeyCode: 112, // 假設掃描按鈕為 F1 鍵

    // 長按掃描按鈕的時間（毫秒）後觸發 onScanButtonLongPress
    scanButtonLongPressTime: 500,

    // 成功處理的事件是否停止即時傳遞
    stopPropagation: true,

    // 成功處理的事件是否阻止預設行為
    preventDefault: true,

    // 設為 true 則強制所有相關事件先傳給 onScan，再向下傳遞
    captureEvents: true,

    // 單次掃描成功的數量
    singleScanQty: 1,

    // 設為 true 表示從 keydown 事件中偵測掃描輸入
    reactToKeydown: true,

    // 設為 true 表示從 paste 事件中偵測掃描輸入
    reactToPaste: false,
  }

  // 初始化 onScan.js，並將選項附加到 document
  onScan.attachTo(document, scannerOptions)

  document.addEventListener('scan', function (sScanned, iQty) {
    console.log('this is scan', sScanned, iQty)
  })
})

onUnmounted(() => {
  onScan.detachFrom(document)
  document.removeEventListener('scan', function (sScanned, iQty) {
    console.log('this is scan destroy', sScanned, iQty)
  })
})
</script>

<template>
  <h1 class="text-center">條碼掃描器功能展示</h1>
  <div class="max-w-[600px] mx-auto p-5">
    <div class="bg-gray-100 p-4 rounded-lg mb-4">
      <p class="mb-4">請在下方輸入框進行測試：</p>
      <ul class="pl-5 text-gray-600 space-y-6 list-disc">
        <li>可以使用實體條碼掃描器掃描</li>
        <li>可以直接用鍵盤輸入文字</li>
        <li>按下 F12 開啟瀏覽器開發者工具</li>
        <li>切換到 Console 頁籤查看事件觸發的詳細資訊</li>
      </ul>
    </div>
    <input
      type="text"
      id="reader"
      placeholder="請在此處掃描或輸入"
      class="w-full p-2.5 text-base border-2 border-gray-300 rounded mt-2.5 focus:border-green-500 focus:outline-none"
    />
  </div>
</template>
