<script setup></script>
<template>
  <div class="mt-6 p-4 bg-blue-50 rounded-lg">
    <h3 class="text-xl font-bold text-blue-800">
      defineField 與 useField 的差異
    </h3>
    <ul class="list-disc list-inside mt-2 space-y-2 text-blue-900">
      <li>
        defineField 提供更簡潔的語法，不需要手動處理 handleBlur
        等事件，所有的驗證邏輯都封裝在返回的屬性中
      </li>
      <li>
        使用 defineField 時，錯誤訊息直接從 errors
        物件中獲取，而不需要為每個欄位單獨解構 errorMessage
      </li>
      <li>
        defineField 的表單驗證是即時的，不需要額外設定 handleBlur 來觸發驗證
      </li>
    </ul>
  </div>
</template>
<style scoped></style>
