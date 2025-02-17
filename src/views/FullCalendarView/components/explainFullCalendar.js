export const codeString = `<template>
<div class="demo-app">
  <div class="demo-app-sidebar">
    <div class="demo-app-sidebar-section">
      <h2>Instructions</h2>
      <ul>
        <li>Select dates and you will be prompted to create a new event</li>
        <li>Drag, drop, and resize events</li>
        <li>Click an event to delete it</li>
      </ul>
    </div>
    <div class="demo-app-sidebar-section">
      <label>
        <input
          type="checkbox"
          :checked="calendarOptions.weekends"
          @change="handleWeekendsToggle"
        />
        toggle weekends
      </label>
    </div>
    <div class="demo-app-sidebar-section">
      <h2>All Events ({{ currentEvents.length }})</h2>
      <ul>
        <li v-for="event in currentEvents" :key="event.id">
          <b>{{ event.startStr }}</b>
          <i>{{ event.title }}</i>
        </li>
      </ul>
    </div>
  </div>
  <div class="demo-app-main">
    <FullCalendar class="demo-app-calendar" :options="calendarOptions">
      <template v-slot:eventContent="arg">
        <b>{{ arg.timeText }}</b>
        <i>{{ arg.event.title }}</i>
      </template>
    </FullCalendar>
  </div>
</div>
</template>

<script setup>
import { ref } from 'vue'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { INITIAL_EVENTS, createEventId } from './event-utils'

// 先宣告所有處理函式
const currentEvents = ref([])

// 方法：處理日期選取
const handleDateSelect = selectInfo => {
const title = prompt('Please enter a new title for your event')
const calendarApi = selectInfo.view.calendar
calendarApi.unselect() // 清除日期選取

if (title) {
  calendarApi.addEvent({
    id: createEventId(),
    title,
    start: selectInfo.startStr,
    end: selectInfo.endStr,
    allDay: selectInfo.allDay,
  })
}
}

// 方法：處理事件點擊
const handleEventClick = clickInfo => {
if (
  confirm(
    "Are you sure you want to delete the event " + clickInfo.event.title,
  )
) {
  clickInfo.event.remove()
}
}

// 方法：設置事件
const handleEvents = events => {
currentEvents.value = events
}

// 方法：處理週末顯示切換
const handleWeekendsToggle = () => {
calendarOptions.value.weekends = !calendarOptions.value.weekends
}

// 最後才定義 calendarOptions
const calendarOptions = ref({
plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
headerToolbar: {
  left: 'prev,next today',
  center: 'title',
  right: 'dayGridMonth,timeGridWeek,timeGridDay',
},
initialView: 'dayGridMonth',
initialEvents: INITIAL_EVENTS,
editable: true,
selectable: true,
selectMirror: true,
dayMaxEvents: true,
weekends: true,

initialDate: '2024-11-01',
footerToolbar: {
  right: 'prevYear,nextYear',
},
height: 'auto',
contentHeight: 500,
aspectRatio: 1.5,
nowIndicator: true,
locale: 'zh-tw',
timeZone: 'local',

// 事件處理
dateClick: handleDateClick,
eventAdd: handleEventAdd,
eventChange: handleEventChange,
eventRemove: handleEventRemove,
eventContent: renderEventContent,
select: handleDateSelect,
eventClick: handleEventClick,
eventsSet: handleEvents,
})

// 日期點擊處理
function handleDateClick(info) {
console.log('日期被點擊：', info.dateStr)
}

// 事件新增處理
function handleEventAdd(addInfo) {
console.log('新事件被新增：', addInfo.event)
}

// 事件修改處理
function handleEventChange(changeInfo) {
console.log('事件被修改：', changeInfo.event)
}

// 事件移除處理
function handleEventRemove(removeInfo) {
console.log('事件被移除：', removeInfo.event)
}

// 自定義事件顯示內容
function renderEventContent(arg) {
console.log('自訂顯示內容：', arg.event.title)
return { html: "<b>" + arg.timeText + "</b>" + "<i>" + arg.event.title + "</i>" }
}
<\\/script>
`
