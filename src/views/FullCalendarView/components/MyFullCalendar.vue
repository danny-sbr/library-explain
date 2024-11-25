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
      `Are you sure you want to delete the event '${clickInfo.event.title}'`,
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
  buttonText: {
    today: '今天',
    month: '月',
    week: '週',
    day: '日',
    list: '列表',
  },
  locale: 'zh-tw',
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
  return { html: `<b>${arg.timeText}</b> <i>${arg.event.title}</i>` }
}
</script>

<template>
  <h1 class="text-center">FullCalendar 功能展示</h1>
  <div class="flex min-h-screen font-sans text-sm">
    <div class="w-72 bg-blue-50 border-r border-gray-300 p-6">
      <div class="mb-6">
        <h2 class="text-lg font-semibold">使用說明</h2>
        <ul class="list-disc list-inside mt-4">
          <li>選擇日期後會提示您建立新活動</li>
          <li>可以拖曳、放置和調整活動大小</li>
          <li>點擊活動即可刪除</li>
        </ul>
      </div>
      <div class="mb-6">
        <label class="flex items-center space-x-2">
          <input
            type="checkbox"
            :checked="calendarOptions.weekends"
            @change="handleWeekendsToggle"
            class="form-checkbox h-5 w-5 text-blue-600"
          />
          <span>顯示週末</span>
        </label>
      </div>
      <div>
        <h2 class="text-lg font-semibold">
          所有事件 ({{ currentEvents.length }})
        </h2>
        <ul class="mt-4 space-y-2">
          <li
            v-for="event in currentEvents"
            :key="event.id"
            class="flex items-center"
          >
            <b class="mr-2">{{ event.startStr }}</b>
            <i class="text-gray-600">{{ event.title }}</i>
          </li>
        </ul>
      </div>
    </div>
    <div class="flex-grow p-6">
      <FullCalendar class="w-full" :options="calendarOptions">
        <template v-slot:eventContent="arg">
          <b class="mr-1">{{ arg.timeText }}</b>
          <i>{{ arg.event.title }}</i>
        </template>
      </FullCalendar>
    </div>
  </div>
</template>
