<script setup>
import CodeBlock from '@/components/CodeBlock.vue'
const declareZodSchemaCode = `
const validationSchema = toTypedSchema(
  z.object({
    username: z
      .string()
      .min(2, '名字至少需要 2 個字')
      .max(20, '名字不能超過 20 個字'),
    email: z.string().email('請輸入有效的電子郵件'),
    age: z
      .number({
        invalid_type_error: '請輸入有效的數字喲',
        required_error: '年齡為必填欄位',
      })
      .min(1, '年齡必須大於 0')
      .max(120, '年齡必須小於 120')
      .or(z.string().regex(/^\\d+$/, '請輸入有效的數字').transform(Number)),
  }),
)`

const useFormCode = `
const onSubmit = handleSubmit(values => {
  console.log('表單提交成功：', values)
  alert('表單提交成功！')
  resetForm()
})
`

const useFieldCode = `
const {
  value: username,
  errorMessage: nameError,
  handleBlur: handleUsernameBlur,
} = useField('username')
const {
  value: email,
  errorMessage: emailError,
  handleBlur: handleEmailBlur,
} = useField('email')
const {
  value: age,
  errorMessage: ageError,
  handleBlur: handleAgeBlur,
} = useField('age')
`

const submitCode = `
const onSubmit = handleSubmit(values => {
  console.log('表單提交成功：', values)
  alert('表單提交成功！')
  resetForm()
})
`

const templateCode = `
<template>
  <form @submit.prevent="onSubmit" class="space-y-6">
    <div class="space-y-2">
      <label for="username" class="block font-semibold">姓名：</label>
      <input id="username" name="username" type="text" v-model="username" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <span class="text-red-500 text-sm" v-if="nameError">{{ nameError }}</span>
    </div>
    <!-- 省略其他欄位 -->
  </form>
</template>
`
</script>
<template>
  <div class="space-y-4">
    <h2 class="text-2xl font-bold">步驟一：宣告 zod schema</h2>
    <p>
      第一步驟是先宣告一個 zod 的 schema，接著使用 toTypedSchema 函式將 zod 的
      schema 轉換成 vee-validate 可以使用的格式。
    </p>
    <p>程式碼如下</p>
    <CodeBlock class="my-4">{{ declareZodSchemaCode }}</CodeBlock>
    <h2 class="text-2xl font-bold">步驟二：使用 useForm</h2>
    <p>第二步驟是使用 useForm 函式，並將以下內容傳入：</p>
    1. 轉換後的 vee-validate schema 2. 解構出 handleSubmit 和 resetForm 兩個函式
    其中 handleSubmit 函式會在表單提交時使用到，用來處理表單的驗證與提交邏輯。
    <ul>
      <li>1. 轉換後的 vee-validate schema</li>
      <li>2. 解構出 handleSubmit 和 resetForm 兩個函式</li>
    </ul>
    <p>程式碼如下</p>
    <CodeBlock class="my-4">{{ useFormCode }}</CodeBlock>

    <h2 class="text-2xl font-bold">步驟三：使用 useField</h2>
    <p>
      步驟三是使用 useField 函式來處理需要驗證的欄位。從 useField 中可以解構出
      value 和 errorMessage，如果需要在欄位失去焦點時進行驗證，則需要額外解構出
      handleBlur 函式。
    </p>
    <p>程式碼如下</p>
    <CodeBlock class="my-4">{{ useFieldCode }}</CodeBlock>
    <h2 class="text-2xl font-bold">步驟四：宣告 onSubmit</h2>
    <p>
      步驟四是宣告 onSubmit 函式，用於處理表單提交事件。我們需要將 handleSubmit
      函式傳入，當表單驗證成功並提交後，會執行 resetForm 函式來重置表單內容。
    </p>
    <p>程式碼如下</p>
    <CodeBlock class="my-4">{{ submitCode }}</CodeBlock>

    <h2 class="text-2xl font-bold">步驟五：在模板中使用</h2>
    <p>
      在模板中，我們需要：
      <br />1. 使用 v-model 綁定第一個返回值 <br />2. 使用 v-bind
      綁定第二個返回值（attrs） <br />3. 可以直接使用 errors 物件來顯示錯誤訊息
    </p>
    <CodeBlock class="my-4">{{ templateCode }}</CodeBlock>
  </div>
</template>
<style scoped></style>
