<script setup></script>
<template>
  <div class="mt-6 p-4 bg-blue-50 rounded-lg">
    <h3 class="text-xl font-bold text-blue-800">
      defineField 與 useField 的差異
    </h3>
    <p>defineField 使用可以直接在 useForm 解構出來無須再 import useField</p>
    <p>
      在巢狀表單中，內層子組件的 useField 會與外層 useForm
      建立的表單上下文共享同一個環境。因此當我們在巢狀表單中進行驗證時，會一併驗證所有使用
      useField 和 defineField 的表單欄位。不過要注意的是，defineField 只能在
      useForm 所在的元件中使用，如果要在子組件中設置表單欄位，就必須使用
      useField 來處理。
    </p>
  </div>
</template>
<style scoped></style>
