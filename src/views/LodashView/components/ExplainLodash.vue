<script setup>
// 引入所需的元件和函式庫
import CodeBlock from '@/components/CodeBlock.vue'

// 定義程式碼範例字串，用於展示如何使用 Lodash
const codeString = `<script setup>
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
const users = ref([
  { id: 1, name: '小明', age: 25, salary: 45000.856, active: true, department: '工程部' },
  { id: 2, name: '小華', age: 30, salary: 52000.234, active: false, department: '設計部' },
  { id: 3, name: '小美', age: 28, salary: 48000.789, active: true, department: '工程部' }
])

// map：轉換陣列中的每個元素
const upperCaseNames = map(users.value, user => user.name.toUpperCase())

// filter：篩選符合條件的元素
const activeUsers = filter(users.value, user => user.active)

// isPlainObject：檢查是否為純物件
const isObject = isPlainObject({ name: '測試' }) // true
const isArray = isPlainObject([1, 2, 3]) // false

// pickBy：根據條件選擇物件屬性
const filteredUser = pickBy(users.value[0], (value, key) => key !== 'id')

// keys：獲取物件的所有鍵值
const userKeys = keys(users.value[0])

// round：四捨五入數字
const roundedSalary = round(users.value[0].salary, 2)

// groupBy：根據指定屬性分組
const usersByDepartment = groupBy(users.value, 'department')

// floor：向下取整
const flooredSalary = floor(users.value[0].salary, -2)
<\\/script>

<template>
  <div>
    <h2>使用者資料：</h2>
    <pre>{{ JSON.stringify(users, null, 2) }}</pre>

    <h2>處理結果：</h2>
    <p>轉換為大寫名稱：{{ upperCaseNames }}</p>
    <p>活躍使用者：{{ activeUsers.length }} 位</p>
    <p>四捨五入薪資：{{ roundedSalary }}</p>
  </div>
</template>`
</script>

<template>
  <!-- 使用 CodeBlock 元件顯示程式碼範例 -->
  <CodeBlock>{{ codeString }}</CodeBlock>

  <!-- Lodash 簡介區塊 -->
  <h2 class="text-2xl font-bold mt-6 mb-4">Lodash 簡介</h2>
  <p class="mb-6">
    Lodash 是一個現代化的 JavaScript 實用工具函式庫，提供了豐富的資料處理功能。
    它以模組化、高效能和跨瀏覽器相容性著稱，能大幅簡化 JavaScript
    中常見的程式設計任務。Lodash 提供了超過 200
    個函式，涵蓋陣列、物件、字串、數字等各種資料類型的操作，是現代 JavaScript
    開發中不可或缺的工具。
  </p>

  <!-- 常用函式說明區塊 -->
  <h2 class="text-2xl font-bold mt-6 mb-4">常用函式說明</h2>
  <p class="mb-4">以下是本範例中使用的 Lodash 函式說明：</p>

  <!-- 函式說明表格 -->
  <div class="overflow-x-auto">
    <table class="w-full border-collapse my-4">
      <thead>
        <tr>
          <th class="border border-gray-300 bg-gray-100 p-2 text-left">
            函式名稱
          </th>
          <th class="border border-gray-300 bg-gray-100 p-2 text-left">語法</th>
          <th class="border border-gray-300 bg-gray-100 p-2 text-left">
            功能描述
          </th>
          <th class="border border-gray-300 bg-gray-100 p-2 text-left">範例</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-gray-300 p-2">
            <strong>map</strong>
          </td>
          <td class="border border-gray-300 p-2">
            <code class="text-sm">map(collection, iteratee)</code>
          </td>
          <td class="border border-gray-300 p-2">
            對集合中的每個元素執行函式，返回新陣列
          </td>
          <td class="border border-gray-300 p-2">
            <code class="text-sm">map([1,2,3], n => n*2)</code>
          </td>
        </tr>
        <tr>
          <td class="border border-gray-300 p-2">
            <strong>filter</strong>
          </td>
          <td class="border border-gray-300 p-2">
            <code class="text-sm">filter(collection, predicate)</code>
          </td>
          <td class="border border-gray-300 p-2">
            篩選出符合條件的元素，返回新陣列
          </td>
          <td class="border border-gray-300 p-2">
            <code class="text-sm">filter([1,2,3], n => n > 1)</code>
          </td>
        </tr>
        <tr>
          <td class="border border-gray-300 p-2">
            <strong>isPlainObject</strong>
          </td>
          <td class="border border-gray-300 p-2">
            <code class="text-sm">isPlainObject(value)</code>
          </td>
          <td class="border border-gray-300 p-2">
            檢查值是否為純物件（Plain Object）
          </td>
          <td class="border border-gray-300 p-2">
            <code class="text-sm">isPlainObject({})</code>
          </td>
        </tr>
        <tr>
          <td class="border border-gray-300 p-2">
            <strong>pickBy</strong>
          </td>
          <td class="border border-gray-300 p-2">
            <code class="text-sm">pickBy(object, predicate)</code>
          </td>
          <td class="border border-gray-300 p-2">
            根據條件選擇物件的屬性，返回新物件
          </td>
          <td class="border border-gray-300 p-2">
            <code class="text-sm">pickBy(obj, Boolean)</code>
          </td>
        </tr>
        <tr>
          <td class="border border-gray-300 p-2">
            <strong>keys</strong>
          </td>
          <td class="border border-gray-300 p-2">
            <code class="text-sm">keys(object)</code>
          </td>
          <td class="border border-gray-300 p-2">
            獲取物件的所有可枚舉屬性名稱
          </td>
          <td class="border border-gray-300 p-2">
            <code class="text-sm">keys({a:1, b:2})</code>
          </td>
        </tr>
        <tr>
          <td class="border border-gray-300 p-2">
            <strong>round</strong>
          </td>
          <td class="border border-gray-300 p-2">
            <code class="text-sm">round(number, precision)</code>
          </td>
          <td class="border border-gray-300 p-2">將數字四捨五入到指定精度</td>
          <td class="border border-gray-300 p-2">
            <code class="text-sm">round(4.006, 2)</code>
          </td>
        </tr>
        <tr>
          <td class="border border-gray-300 p-2">
            <strong>groupBy</strong>
          </td>
          <td class="border border-gray-300 p-2">
            <code class="text-sm">groupBy(collection, iteratee)</code>
          </td>
          <td class="border border-gray-300 p-2">根據指定條件將集合元素分組</td>
          <td class="border border-gray-300 p-2">
            <code class="text-sm">groupBy(['one', 'two'], 'length')</code>
          </td>
        </tr>
        <tr>
          <td class="border border-gray-300 p-2">
            <strong>floor</strong>
          </td>
          <td class="border border-gray-300 p-2">
            <code class="text-sm">floor(number, precision)</code>
          </td>
          <td class="border border-gray-300 p-2">將數字向下取整到指定精度</td>
          <td class="border border-gray-300 p-2">
            <code class="text-sm">floor(4.006, 2)</code>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- 安裝說明區塊 -->
  <h2 class="text-2xl font-bold mt-6 mb-4">安裝與引入</h2>
  <p class="mb-4">
    <strong>使用 npm 安裝：</strong>
  </p>
  <CodeBlock>npm install lodash-es</CodeBlock>

  <p class="mb-4 mt-4">
    <strong>模組化引入（推薦）：</strong>
  </p>
  <CodeBlock>import { map, filter, groupBy } from 'lodash-es'</CodeBlock>

  <p class="mb-4 mt-4">
    <strong>完整引入：</strong>
  </p>
  <CodeBlock>import _ from 'lodash-es'</CodeBlock>

  <!-- 使用建議區塊 -->
  <h2 class="text-2xl font-bold mt-6 mb-4">使用建議</h2>
  <div class="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
    <ul class="space-y-2">
      <li class="flex items-start">
        <span class="text-blue-600 mr-2">•</span>
        <span
          >建議使用 <code class="bg-gray-100 px-1 rounded">lodash-es</code> 而非
          <code class="bg-gray-100 px-1 rounded">lodash</code>，以獲得更好的
          Tree-shaking 支援</span
        >
      </li>
      <li class="flex items-start">
        <span class="text-blue-600 mr-2">•</span>
        <span>使用按需引入可以減少最終打包檔案的大小</span>
      </li>
      <li class="flex items-start">
        <span class="text-blue-600 mr-2">•</span>
        <span>在處理大量資料時，Lodash 的效能通常優於原生 JavaScript 方法</span>
      </li>
      <li class="flex items-start">
        <span class="text-blue-600 mr-2">•</span>
        <span>Lodash 提供了更好的跨瀏覽器相容性，特別是在舊版瀏覽器中</span>
      </li>
    </ul>
  </div>

  <!-- 參考來源連結 -->
  <p class="mb-4">
    以上內容參考自
    <a
      href="https://lodash.com/"
      target="_blank"
      class="text-blue-600 hover:text-blue-800 transition-colors duration-300"
      >Lodash 官方網站</a
    >
    和
    <a
      href="https://lodash.com/docs/"
      target="_blank"
      class="text-blue-600 hover:text-blue-800 transition-colors duration-300 ml-2"
      >官方文件</a
    >。
  </p>
</template>

<style scoped>
table {
  @apply w-full border-collapse my-4;
}

th,
td {
  @apply border border-gray-300 p-2 text-left;
}

th {
  @apply bg-gray-100;
}

code {
  @apply bg-gray-100 px-1 rounded text-sm;
}
</style>
