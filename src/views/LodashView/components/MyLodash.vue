<script setup>
import { ref } from 'vue'
import {
  map,
  filter,
  isPlainObject,
  pickBy,
  keys,
  round,
  groupBy,
  floor,
} from 'lodash-es'

// 範例資料
const originalData = ref({
  users: [
    {
      id: 1,
      name: '小明',
      age: 25,
      salary: 45000.856,
      active: true,
      department: '工程部',
    },
    {
      id: 2,
      name: '小華',
      age: 30,
      salary: 52000.234,
      active: false,
      department: '設計部',
    },
    {
      id: 3,
      name: '小美',
      age: 28,
      salary: 48000.789,
      active: true,
      department: '工程部',
    },
    {
      id: 4,
      name: '小王',
      age: 35,
      salary: 60000.123,
      active: true,
      department: '管理部',
    },
  ],
  numbers: [3.14159, 2.71828, 1.41421, 4.6692],
  testObject: { name: '測試', age: 25, items: [1, 2, 3] },
  testArray: [1, 2, 3],
  testNull: null,
})

const results = ref({})
const currentOperation = ref('')

// map 範例：將使用者名稱轉換為大寫
const handleMapExample = () => {
  currentOperation.value = 'map'
  const result = map(originalData.value.users, user => ({
    ...user,
    name: user.name.toUpperCase(),
  }))
  results.value.map = {
    original: originalData.value.users,
    result: result,
    description: '使用 map 將所有使用者名稱轉換為大寫',
  }
}

// filter 範例：篩選活躍的使用者
const handleFilterExample = () => {
  currentOperation.value = 'filter'
  const result = filter(originalData.value.users, user => user.active)
  results.value.filter = {
    original: originalData.value.users,
    result: result,
    description: '使用 filter 篩選出活躍的使用者',
  }
}

// isPlainObject 範例：檢查是否為純物件
const handleIsPlainObjectExample = () => {
  currentOperation.value = 'isPlainObject'
  const testCases = [
    { data: originalData.value.testObject, label: '普通物件' },
    { data: originalData.value.testArray, label: '陣列' },
    { data: originalData.value.testNull, label: 'null' },
    { data: 'string', label: '字串' },
  ]
  const result = testCases.map(testCase => ({
    ...testCase,
    isPlainObject: isPlainObject(testCase.data),
  }))
  results.value.isPlainObject = {
    original: testCases,
    result: result,
    description: '使用 isPlainObject 檢查不同類型的資料是否為純物件',
  }
}

// pickBy 範例：根據條件選擇物件屬性
const handlePickByExample = () => {
  currentOperation.value = 'pickBy'
  const user = originalData.value.users[0]
  const result = pickBy(user, (value, key) => key !== 'id' && value !== false)
  results.value.pickBy = {
    original: user,
    result: result,
    description: '使用 pickBy 選擇非 id 且值不為 false 的屬性',
  }
}

// keys 範例：獲取物件的所有鍵值
const handleKeysExample = () => {
  currentOperation.value = 'keys'
  const user = originalData.value.users[0]
  const result = keys(user)
  results.value.keys = {
    original: user,
    result: result,
    description: '使用 keys 獲取物件的所有屬性名稱',
  }
}

// round 範例：四捨五入數字
const handleRoundExample = () => {
  currentOperation.value = 'round'
  const result = map(originalData.value.numbers, num => ({
    original: num,
    rounded: round(num, 2),
  }))
  results.value.round = {
    original: originalData.value.numbers,
    result: result,
    description: '使用 round 將數字四捨五入到小數點後 2 位',
  }
}

// groupBy 範例：根據部門分組
const handleGroupByExample = () => {
  currentOperation.value = 'groupBy'
  const result = groupBy(originalData.value.users, 'department')
  results.value.groupBy = {
    original: originalData.value.users,
    result: result,
    description: '使用 groupBy 根據部門將使用者分組',
  }
}

// floor 範例：向下取整
const handleFloorExample = () => {
  currentOperation.value = 'floor'
  const result = map(originalData.value.users, user => ({
    name: user.name,
    originalSalary: user.salary,
    flooredSalary: floor(user.salary, -2), // 取整到百位數
  }))
  results.value.floor = {
    original: originalData.value.users,
    result: result,
    description: '使用 floor 將薪資向下取整到百位數',
  }
}
</script>

<template>
  <h1 class="title">Lodash 功能展示</h1>
  <div>
    <!-- 原始資料展示區域 -->
    <div class="data-area">
      <h2 class="display">原始測試資料</h2>
      <div class="content">
        <p><strong>使用者資料：</strong></p>
        <pre class="data-display">{{
          JSON.stringify(originalData.users, null, 2)
        }}</pre>
        <p><strong>數字陣列：</strong> {{ originalData.numbers }}</p>
      </div>
      <div class="instruction">
        <p>請點擊下方任一按鈕，查看對應 Lodash 函式的使用效果。</p>
        <p>操作結果會顯示在按鈕下方。</p>
      </div>
    </div>

    <!-- 功能按鈕區域 -->
    <div class="buttons-container">
      <button @click="handleMapExample" class="function-btn">map 範例</button>
      <button @click="handleFilterExample" class="function-btn">
        filter 範例
      </button>
      <button @click="handleIsPlainObjectExample" class="function-btn">
        isPlainObject 範例
      </button>
      <button @click="handlePickByExample" class="function-btn">
        pickBy 範例
      </button>
      <button @click="handleKeysExample" class="function-btn">keys 範例</button>
      <button @click="handleRoundExample" class="function-btn">
        round 範例
      </button>
      <button @click="handleGroupByExample" class="function-btn">
        groupBy 範例
      </button>
      <button @click="handleFloorExample" class="function-btn">
        floor 範例
      </button>
    </div>

    <!-- 結果顯示區域 -->
    <div
      class="result-container"
      v-if="currentOperation && results[currentOperation]"
    >
      <h3 class="result-title">{{ results[currentOperation].description }}</h3>
      <div class="result-content">
        <div class="result-section">
          <h4 class="section-title">原始資料：</h4>
          <pre class="data-display">{{
            JSON.stringify(results[currentOperation].original, null, 2)
          }}</pre>
        </div>
        <div class="result-section">
          <h4 class="section-title">處理結果：</h4>
          <pre class="data-display result">{{
            JSON.stringify(results[currentOperation].result, null, 2)
          }}</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.title {
  @apply text-center text-3xl font-bold mb-6 text-gray-800;
}

.data-area {
  @apply p-8 bg-gray-50 border-2 border-gray-200 rounded-lg mb-5 shadow-sm;
}

.display {
  @apply text-gray-800 mb-4 text-center text-xl;
}

.content {
  @apply text-gray-600 leading-relaxed;
}

.data-display {
  @apply bg-white p-4 rounded border text-sm overflow-x-auto text-gray-700;
}

.instruction {
  @apply mt-5 p-4 bg-blue-100 rounded-md text-blue-800;
}

.buttons-container {
  @apply grid grid-cols-2 md:grid-cols-4 gap-3 mb-6;
}

.function-btn {
  @apply bg-blue-500 text-white border-0 px-4 py-3 rounded text-sm cursor-pointer transition-all duration-300 hover:bg-blue-600 hover:transform hover:scale-105;
}

.result-container {
  @apply mt-6 p-6 bg-green-50 border-2 border-green-200 rounded-lg shadow-sm;
}

.result-title {
  @apply text-green-800 mb-4 text-lg font-semibold;
}

.result-content {
  @apply space-y-4;
}

.result-section {
  @apply bg-white p-4 rounded-lg border;
}

.section-title {
  @apply text-gray-700 font-medium mb-2;
}

.result .data-display {
  @apply bg-green-100 border-green-300;
}
</style>
