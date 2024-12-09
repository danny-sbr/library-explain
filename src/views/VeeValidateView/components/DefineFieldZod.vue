<script setup>
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

const validationSchema = toTypedSchema(
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
      .or(z.string().regex(/^\d+$/, '請輸入有效的數字').transform(Number)),
  }),
)

const { defineField, handleSubmit, resetForm, errors } = useForm({
  validationSchema: validationSchema,
})

const [username, usernameAttrs] = defineField('username')
const [email, emailAttrs] = defineField('email')
const [age, ageAttrs] = defineField('age')

const onSubmit = handleSubmit(values => {
  console.log('表單提交成功：', values)
  alert('表單提交成功！')
  resetForm()
})
</script>

<template>
  {{ console.log('error', errors) }}
  <h2 class="text-2xl font-bold my-6 text-center">defineField 表單驗證</h2>
  <div class="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
    <form @submit.prevent="onSubmit" class="space-y-6">
      <div class="space-y-2">
        <label for="username" class="block font-semibold">使用者名稱：</label>
        <input
          id="username"
          autocomplete="off"
          v-model="username"
          type="text"
          v-bind="usernameAttrs"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          :class="{
            'border-red-500': errors.username,
          }"
        />
        <p v-if="errors.username" class="text-red-500 text-sm">
          {{ errors.username }}
        </p>
      </div>

      <div class="space-y-2">
        <label for="email" class="block font-semibold">電子郵件：</label>
        <input
          id="email"
          autocomplete="off"
          v-model="email"
          v-bind="emailAttrs"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          :class="{
            'border-red-500': errors.email,
          }"
        />
        <p v-if="errors.email" class="text-red-500 text-sm">
          {{ errors.email }}
        </p>
      </div>

      <div class="space-y-2">
        <label for="age" class="block font-semibold">年齡：</label>
        <input
          id="age"
          v-model="age"
          v-bind="ageAttrs"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          :class="{
            'border-red-500': errors.age,
          }"
        />
        <p v-if="errors.age" class="text-red-500 text-sm">
          {{ errors.age }}
        </p>
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
