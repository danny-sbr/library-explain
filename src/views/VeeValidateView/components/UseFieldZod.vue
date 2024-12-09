<script setup>
import { useForm, useField } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

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
      .or(z.string().regex(/^\d+$/, '請輸入有效的數字').transform(Number)),
  }),
)

const { handleSubmit, resetForm } = useForm({
  validationSchema,
  initialValues: {
    username: '',
    email: '',
    age: '',
  },
})

const {
  value: username,
  errorMessage: nameError,
  handleBlur: handleUsernameBlur,
} = useField('username', undefined, {
  validateOnValueUpdate: false,
})
const {
  value: email,
  errorMessage: emailError,
  handleBlur: handleEmailBlur,
} = useField('email', undefined, {
  validateOnValueUpdate: false,
})
const {
  value: age,
  errorMessage: ageError,
  handleBlur: handleAgeBlur,
} = useField('age', undefined, {
  validateOnValueUpdate: false,
})

const onSubmit = handleSubmit(values => {
  console.log('表單提交成功：', values)
  alert('表單提交成功！')
  resetForm()
})
</script>

<template>
  <h2 class="text-2xl font-bold my-6 text-center">useField 表單驗證</h2>
  <div class="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
    <form @submit.prevent="onSubmit" class="space-y-6">
      <div class="space-y-2">
        <label for="username" class="block font-semibold">姓名：</label>
        <input
          id="username"
          name="username"
          type="text"
          @blur="handleUsernameBlur(e, true)"
          v-model="username"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <span class="text-red-500 text-sm" v-if="nameError">{{
          nameError
        }}</span>
      </div>
      <!-- 省略其他欄位 -->

      <div class="space-y-2">
        <label for="email" class="block font-semibold">電子郵件：</label>
        <input
          id="email"
          name="email"
          v-model="email"
          @blur="handleEmailBlur(e, true)"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <span class="text-red-500 text-sm" v-if="emailError">{{
          emailError
        }}</span>
      </div>

      <div class="space-y-2">
        <label for="age" class="block font-semibold">年齡：</label>
        <input
          id="age"
          name="age"
          v-model="age"
          @blur="handleAgeBlur(e, true)"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <span class="text-red-500 text-sm" v-if="ageError">{{ ageError }}</span>
      </div>

      <div class="flex space-x-4">
        <button
          type="submit"
          class="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors"
        >
          提交
        </button>
        <button
          type="button"
          @click="resetForm"
          class="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors"
        >
          重置
        </button>
      </div>
    </form>
  </div>
</template>
