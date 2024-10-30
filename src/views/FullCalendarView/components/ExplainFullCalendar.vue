<script setup>
import CodeBlock from '@/components/CodeBlock.vue'
import { codeString } from './explainFullCalendar'
</script>
<template>
  <h2>使用 FullCalendar 製作活動日曆</h2>

  <h3>前言</h3>
  <p>
    在專案開發中，常會遇到需要展示活動日曆的需求，例如行事曆、工作排程等。FullCalendar
    是一個功能強大且易於使用的日曆元件，支援多種視圖、互動功能，以及自訂顯示。此篇文章將帶你了解如何透過
    FullCalendar 的選項設定（options）以及可帶入的
    props，來建立一個活動日曆應用。
  </p>

  <h3>選項設定 (Options)</h3>
  <p>
    以下是此範例中使用的 FullCalendar
    設定選項，這些選項可以自訂日曆的行為與外觀：
  </p>
  <ol>
    <li>
      <strong>plugins</strong>：使用的插件列表，包括
      <code>dayGridPlugin</code
      >（月視圖）、<code>timeGridPlugin</code>（週/日視圖）、<code>interactionPlugin</code>（互動功能）。
    </li>
    <li>
      <strong>headerToolbar</strong
      >：配置日曆標頭工具列的按鈕位置，<code>left</code>、<code>center</code> 和
      <code>right</code> 可控制按鈕顯示區域。
    </li>
    <li>
      <strong>initialView</strong>：設定初始顯示的視圖模式，例如
      <code>dayGridMonth</code> 顯示月曆視圖。
    </li>
    <li><strong>initialEvents</strong>：設定初始事件資料。</li>
    <li>
      <strong>editable</strong>：允許事件拖拉與修改，預設為 <code>true</code>。
    </li>
    <li>
      <strong>selectable</strong>：允許日期選取功能，可配合
      <code>select</code> 事件來新增活動。
    </li>
    <li>
      <strong>dayMaxEvents</strong>：控制單日顯示的最大事件數量，超過後會顯示
      "更多" 的連結。
    </li>
    <li>
      <strong>weekends</strong>：是否顯示週末，透過
      <code>handleWeekendsToggle</code> 函式切換顯示與否。
    </li>
    <li><strong>initialDate</strong>：日曆初始顯示的日期。</li>
    <li>
      <strong>footerToolbar</strong>：設定頁尾工具列的按鈕配置，例如切換年份。
    </li>
    <li>
      <strong>height</strong> 和
      <strong>contentHeight</strong>：日曆的高度與內容高度設定。
    </li>
    <li><strong>aspectRatio</strong>：控制日曆的寬高比例。</li>
    <li><strong>nowIndicator</strong>：顯示當前時間的指示標記。</li>
    <li><strong>locale</strong>：設定語系，此範例設為 <code>zh-tw</code>。</li>
    <li>
      <strong>timeZone</strong>：時區設定，使用
      <code>local</code> 表示本地時間。
    </li>
  </ol>

  <h3>可帶入的 Props</h3>
  <p>以下是可以傳入的 props 列表及其用途：</p>
  <ul>
    <li><strong>currentEvents</strong>：活動陣列，儲存目前顯示的所有事件。</li>
    <li>
      <strong>calendarOptions</strong>：日曆設定物件，包含所有 FullCalendar
      的設定選項。
    </li>
    <li>
      <strong>handleDateSelect</strong
      >：處理日期選取的函式，可在使用者選取日期時新增活動。
    </li>
    <li>
      <strong>handleEventClick</strong>：處理活動點擊的函式，用於刪除活動。
    </li>
    <li>
      <strong>handleEvents</strong>：更新
      <code>currentEvents</code>，當事件更新時被呼叫。
    </li>
    <li>
      <strong>handleDateClick</strong
      >：處理日期點擊的函式，可在日曆被點擊時顯示點擊日期。
    </li>
    <li>
      <strong>handleEventAdd</strong>、<strong>handleEventChange</strong> 和
      <strong>handleEventRemove</strong>：分別處理活動的新增、變更及移除事件。
    </li>
    <li>
      <strong>renderEventContent</strong
      >：自訂活動顯示內容的函式，提供更豐富的活動呈現格式。
    </li>
  </ul>

  <h3>HTML 參考範例</h3>
  <p>
    以下是一個簡單的 HTML 結構範例，展示如何在模板中使用 FullCalendar
    的設定和事件處理函式。
  </p>

  <CodeBlock>
    {{ codeString }}
  </CodeBlock>

  <h3>結論</h3>
  <p>
    透過 FullCalendar
    提供的多樣化設定選項，我們可以輕鬆建立一個自訂化的活動日曆應用。上述介紹的設定選項與事件處理函式，讓我們可以控制日曆的行為與顯示內容，使其更符合應用需求。
  </p>
</template>
<style scoped></style>
