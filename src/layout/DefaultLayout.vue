<script setup>
import { RouterLink } from 'vue-router'

const links = [
  { to: '/', text: '首頁' },
  { to: '/scan', text: '掃描器' },
  { to: '/image-capture', text: '截圖工具' },
  { to: '/full-calendar', text: '活動日曆' },
  { to: '/qrcode', text: 'QR Code' },
  { to: '/print-js', text: '列印功能' },
  { to: '/echart', text: 'EChart' },
  { to: '/vee-validate', text: '表單驗證' },
]
</script>

<template>
  <header>
    <nav class="bg-slate-800 p-2.5">
      <RouterLink
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        class="inline-block p-2.5 no-underline text-gray-100 hover:text-blue-400 hover:opacity-90"
      >
        {{ link.text }}
      </RouterLink>
    </nav>
  </header>

  <article class="container mx-auto py-5">
    <slot />
  </article>

  <footer class="bg-slate-800 text-gray-100 text-center py-5">
    <p class="my-[5px]">&copy; All rights reserved.</p>
  </footer>
</template>

<style scoped></style>
