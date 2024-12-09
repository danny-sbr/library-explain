<script setup>
import CodeBlock from '@/components/CodeBlock.vue'

const declareZodSchemaCode = `const validationSchema = toTypedSchema(
  z.object({
    username: z
      .string({
        invalid_type_error: '請輸入有效的字串',
        required_error: '名字為必填欄位',
      })
      .min(2, '名字至少需要 2 個字')
      .max(20, '名字不能超過 20 個字'),
    email: z
      .string({
        invalid_type_error: '請輸入有效的電子郵件',
        required_error: '電子郵件為必填欄位',
      })
      .email('請輸入有效的電子郵件'),
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

const useFormCode = `const { defineField, handleSubmit, resetForm, errors } = useForm({
  validationSchema: validationSchema,
})`

const defineFieldCode = `const [username, usernameAttrs] = defineField('username', {
  validateOnInput: false,
  validateOnChange: false,
  validateOnModelUpdate: false,
  validateOnBlur: true,
})
const [email, emailAttrs] = defineField('email', {
  validateOnInput: false,
  validateOnChange: false,
  validateOnModelUpdate: false,
  validateOnBlur: true,
})
const [age, ageAttrs] = defineField('age', {
  validateOnInput: false,
  validateOnChange: false,
  validateOnModelUpdate: false,
  validateOnBlur: true,
})
`

const templateCode = `<input
  id="username"
  autocomplete="off"
  v-model="username"
  type="text"
  v-bind="usernameAttrs"
  class="w-full px-3 py-2 border border-gray-300 rounded-md"
  :class="{
    'border-red-500': errors.username,
  }"
/>
<p v-if="errors.username" class="text-red-500 text-sm">
  {{ errors.username }}
</p>`

const submitCode = `const onSubmit = handleSubmit(values => {
  console.log('表單提交成功：', values)
  alert('表單提交成功！')
  resetForm()
})`
</script>

<template>
  <div class="space-y-4">
    <h2 class="text-2xl font-bold">步驟一：宣告 zod schema</h2>
    <p>
      首先需要宣告一個 zod schema，並使用 toTypedSchema
      函式將其轉換為可用的格式。這個 schema
      定義了表單欄位的驗證規則，包含錯誤訊息的設定。
    </p>
    <CodeBlock class="my-4">{{ declareZodSchemaCode }}</CodeBlock>

    <h2 class="text-2xl font-bold">步驟二：使用 useForm</h2>
    <p>
      使用 useForm 函式時，需要解構出 defineField、handleSubmit、resetForm 和
      errors。其中 defineField 是這個方法特有的函式，用於定義表單欄位。
    </p>
    <CodeBlock class="my-4">{{ useFormCode }}</CodeBlock>

    <h2 class="text-2xl font-bold">步驟三：使用 defineField</h2>
    <p>
      defineField 函式會返回一個陣列，包含兩個元素：
      <br />- 第一個元素是欄位的值（可用於 v-model） <br />-
      第二個元素是欄位的屬性（包含驗證相關的屬性，需要用 v-bind 綁定）
    </p>
    <CodeBlock class="my-4">{{ defineFieldCode }}</CodeBlock>

    <h2 class="text-2xl font-bold">步驟四：處理表單提交</h2>
    <p>
      最後，使用 handleSubmit
      來處理表單提交事件。驗證成功後可以執行相應的操作，並使用 resetForm
      重置表單。
    </p>
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
