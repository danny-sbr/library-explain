<script setup>
import CodeBlock from '@/components/CodeBlock.vue'
import { codeString } from './explainFullCalendar'
</script>
<template>
  <div class="py-8">
    <h2 class="text-3xl font-bold text-gray-800 mb-6">
      使用 FullCalendar 製作活動日曆
    </h2>

    <h3 class="text-2xl font-semibold text-gray-700 mt-8 mb-4">前言</h3>
    <p class="text-gray-600 leading-relaxed mb-6">
      在專案開發中，常會遇到需要展示活動日曆的需求，例如行事曆、工作排程等。FullCalendar
      是一個功能強大且易於使用的日曆元件，支援多種視圖、互動功能，以及自訂顯示。此篇文章將帶你了解如何透過
      FullCalendar 的選項設定（options）以及可帶入的
      props，來建立一個活動日曆應用。
    </p>

    <h3 class="text-2xl font-semibold text-gray-700 mt-8 mb-4">
      選項設定 (Options)
    </h3>
    <p class="text-gray-600 leading-relaxed mb-4">
      以下是此範例中使用的 FullCalendar
      設定選項，這些選項可以自訂日曆的行為與外觀：
    </p>
    <ol class="list-decimal list-inside space-y-2 text-gray-600 mb-8">
      <li class="ml-4">
        <strong class="text-gray-800">plugins</strong>：使用的插件列表，包括
        <code class="bg-gray-100 px-1 rounded">dayGridPlugin</code
        >（月視圖）、<code class="bg-gray-100 px-1 rounded">timeGridPlugin</code
        >（週/日視圖）、<code class="bg-gray-100 px-1 rounded"
          >interactionPlugin</code
        >（互動功能）。
      </li>
      <li class="ml-4">
        <strong class="text-gray-800">headerToolbar</strong
        >：配置日曆標頭工具列的按鈕位置，<code class="bg-gray-100 px-1 rounded"
          >left</code
        >、<code class="bg-gray-100 px-1 rounded">center</code> 和
        <code class="bg-gray-100 px-1 rounded">right</code> 可控制按鈕顯示區域。
      </li>
      <li class="ml-4">
        <strong class="text-gray-800">initialView</strong
        >：設定初始顯示的視圖模式，例如
        <code class="bg-gray-100 px-1 rounded">dayGridMonth</code>
        顯示月曆視圖。
      </li>
      <li class="ml-4">
        <strong class="text-gray-800">initialEvents</strong>：設定初始事件資料。
      </li>
      <li class="ml-4">
        <strong class="text-gray-800">editable</strong
        >：允許事件拖拉與修改，預設為
        <code class="bg-gray-100 px-1 rounded">true</code>。
      </li>
      <li class="ml-4">
        <strong class="text-gray-800">selectable</strong
        >：允許日期選取功能，可配合
        <code class="bg-gray-100 px-1 rounded">select</code> 事件來新增活動。
      </li>
      <li class="ml-4">
        <strong class="text-gray-800">dayMaxEvents</strong
        >：控制單日顯示的最大事件數量，超過後會顯示 "更多" 的連結。
      </li>
      <li class="ml-4">
        <strong class="text-gray-800">weekends</strong>：是否顯示週末，透過
        <code class="bg-gray-100 px-1 rounded">handleWeekendsToggle</code>
        函式切換顯示與否。
      </li>
      <li class="ml-4">
        <strong class="text-gray-800">initialDate</strong>：日曆初始顯示的日期。
      </li>
      <li class="ml-4">
        <strong class="text-gray-800">footerToolbar</strong
        >：設定頁尾工具列的按鈕配置，例如切換年份。
      </li>
      <li class="ml-4">
        <strong class="text-gray-800">height</strong> 和
        <strong class="text-gray-800">contentHeight</strong
        >：日曆的高度與內容高度設定。
      </li>
      <li class="ml-4">
        <strong class="text-gray-800">aspectRatio</strong>：控制日曆的寬高比例。
      </li>
      <li class="ml-4">
        <strong class="text-gray-800">nowIndicator</strong
        >：顯示當前時間的指示標記。
      </li>
      <li class="ml-4">
        <strong class="text-gray-800">locale</strong>：設定語系，此範例設為
        <code class="bg-gray-100 px-1 rounded">zh-tw</code>。
      </li>
      <li class="ml-4">
        <strong class="text-gray-800">timeZone</strong>：時區設定，使用
        <code class="bg-gray-100 px-1 rounded">local</code> 表示本地時間。
      </li>
    </ol>

    <h3 class="text-2xl font-semibold text-gray-700 mt-8 mb-4">
      可帶入的 Props
    </h3>
    <p class="text-gray-600 mb-4">以下是可以傳入的 props 列表及其用途：</p>
    <ul class="list-disc list-inside space-y-2 text-gray-600 mb-8">
      <li class="ml-4">
        <strong class="text-gray-800">currentEvents</strong
        >：活動陣列，儲存目前顯示的所有事件。
      </li>
      <li class="ml-4">
        <strong class="text-gray-800">calendarOptions</strong
        >：日曆設定物件，包含所有 FullCalendar 的設定選項。
      </li>
      <li class="ml-4">
        <strong class="text-gray-800">handleDateSelect</strong
        >：處理日期選取的函式，可在使用者選取日期時新增活動。
      </li>
      <li class="ml-4">
        <strong class="text-gray-800">handleEventClick</strong
        >：處理活動點擊的函式，用於刪除活動。
      </li>
      <li class="ml-4">
        <strong class="text-gray-800">handleEvents</strong>：更新
        <code class="bg-gray-100 px-1 rounded">currentEvents</code
        >，當事件更新時被呼叫。
      </li>
      <li class="ml-4">
        <strong class="text-gray-800">handleDateClick</strong
        >：處理日期點擊的函式，可在日曆被點擊時顯示點擊日期。
      </li>
      <li class="ml-4">
        <strong class="text-gray-800">handleEventAdd</strong>、<strong
          class="text-gray-800"
          >handleEventChange</strong
        >
        和
        <strong class="text-gray-800">handleEventRemove</strong
        >：分別處理活動的新增、變更及移除事件。
      </li>
      <li class="ml-4">
        <strong class="text-gray-800">renderEventContent</strong
        >：自訂活動顯示內容的函式，提供更豐富的活動呈現格式。
      </li>
    </ul>

    <h3 class="text-2xl font-semibold text-gray-700 mt-8 mb-4">
      HTML 參考範例
    </h3>
    <p class="text-gray-600 mb-6">
      以下是一個簡單的 HTML 結構範例，展示如何在模板中使用 FullCalendar
      的設定和事件處理函式。
    </p>

    <div class="bg-gray-50 rounded-lg p-4 mb-8">
      <CodeBlock>
        {{ codeString }}
      </CodeBlock>
    </div>

    <h3 class="text-2xl font-semibold text-gray-700 mt-8 mb-4">結論</h3>
    <p class="text-gray-600 leading-relaxed">
      透過 FullCalendar
      提供的多樣化設定選項，我們可以輕鬆建立一個自訂化的活動日曆應用。上述介紹的設定選項與事件處理函式，讓我們可以控制日曆的行為與顯示內容，使其更符合應用需求。
    </p>
  </div>
</template>
<style scoped></style>
