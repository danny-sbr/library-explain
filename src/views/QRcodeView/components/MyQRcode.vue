<script setup>
import { ref, onMounted } from 'vue'
import QRCode from 'qrcode'

const qrProductText = 'P-20241223-0001'
const productCodeUrl = ref('') // 產品編號的 QR Code URL

const qrEmployeeText = 'EMP-01-1001'
const employeeCodeUrl = ref('') // 員工編號的 QR Code URL

const qrMaterialText = 'MAT-PL-0001'
const materialCodeUrl = ref('') // 材料編號的 QR Code URL

onMounted(async () => {
  try {
    // 產品 QR Code：專注在基本視覺樣式設定
    // color: 設定黑白對比色
    // margin: 設定 QR Code 周圍的邊距
    // width/height: 明確指定輸出尺寸
    // quality: 設定最高品質輸出
    productCodeUrl.value = await QRCode.toDataURL(qrProductText, {
      color: {
        dark: '#0000FF',
        light: '#FFFFFF',
      },
      margin: 2,
      width: 180,
      height: 180,
      quality: 1,
    })
  } catch (error) {
    console.error(error)
  }
  try {
    // 員工 QR Code：專注在輸出格式和渲染選項
    // type: 指定輸出為 JPEG 格式
    // rendererOpts: 設定渲染相關選項
    // - quality: 圖片壓縮品質 (0.8 = 80%)
    // - imageSmoothing: 啟用圖片平滑處理，提升視覺效果
    employeeCodeUrl.value = await QRCode.toDataURL(qrEmployeeText, {
      type: 'image/jpeg',
      rendererOpts: {
        quality: 0.8,
        imageSmoothing: true,
      },
    })
  } catch (error) {
    console.error(error)
  }
  try {
    // 材料 QR Code：專注在 QR Code 技術參數
    // maskPattern: QR Code 的遮罩圖案（0-7），影響點陣圖案的分布
    // version: QR Code 版本（1-40），決定 QR Code 的大小和資料容量
    // errorCorrectionLevel: 'Q' 表示約 25% 的錯誤修正能力
    // scale: 設定縮放比例，數值越大 QR Code 越清晰
    materialCodeUrl.value = await QRCode.toDataURL(qrMaterialText, {
      maskPattern: 4,
      version: 4,
      errorCorrectionLevel: 'Q',
      scale: 4,
    })
  } catch (error) {
    console.error(error)
  }
})
</script>
<template>
  <h1 class="text-center">QR Code 產生器功能展示</h1>

  <div class="max-w-[600px] mx-auto p-5 mb-8">
    <div class="bg-gray-100 p-4 rounded-lg">
      <p class="mb-4">查看程式碼以了解 QRCode 設定選項：</p>
      <ul class="pl-5 text-gray-600 space-y-6 list-disc">
        <li>找到 MyQRcode.vue 檔案</li>
        <li>
          可以觀察三種不同的 QR Code 設定方式：
          <ul class="pl-5 mt-2 space-y-2 list-circle">
            <li>基本視覺樣式（顏色、邊距、尺寸）</li>
            <li>輸出格式設定（JPEG、壓縮品質）</li>
            <li>進階技術參數（遮罩、錯誤修正）</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>

  <div class="flex flex-col items-center justify-center gap-10">
    <div class="flex flex-col items-center justify-center gap-4">
      <img :src="productCodeUrl" alt="QR Code" />
      <p>{{ qrProductText }}</p>
      <p class="text-sm text-gray-600">
        基本視覺樣式設定：自訂顏色、邊距與尺寸
      </p>
    </div>
    <div class="flex flex-col items-center justify-center gap-4">
      <img :src="employeeCodeUrl" alt="QR Code" />
      <p>{{ qrEmployeeText }}</p>
      <p class="text-sm text-gray-600">JPEG 格式輸出：圖片壓縮與平滑處理</p>
    </div>
    <div class="flex flex-col items-center justify-center gap-4">
      <img :src="materialCodeUrl" alt="QR Code" />
      <p>{{ qrMaterialText }}</p>
      <p class="text-sm text-gray-600">進階技術參數：遮罩圖案、錯誤修正等級</p>
    </div>
  </div>
</template>
<style scoped></style>
