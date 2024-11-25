<script setup>
import { useEChart } from '../../useEChart'
import { ref } from 'vue'

const options = {
  title: {
    text: '未完成任務數量分析',
    left: 'center',
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
  xAxis: {
    type: 'value',
    name: '未完成任務數量',
  },
  yAxis: {
    type: 'category',
    data: [
      '項目 A',
      '項目 B',
      '項目 C',
      '項目 D',
      '項目 E',
      '項目 F',
      '項目 G',
      '項目 H',
      '項目 I',
      '項目 J',
      '項目 K',
      '項目 L',
      '項目 M',
      '項目 N',
      '項目 O',
      '項目 P',
      '項目 Q',
      '項目 R',
      '項目 S',
      '項目 T',
      '項目 U',
      '項目 V',
      '項目 W',
      '項目 X',
      '項目 Y',
      '項目 Z',
      '項目 AA',
      '項目 AB',
      '項目 AC',
      '項目 AD',
      '項目 AE',
      '項目 AF',
      '項目 AG',
      '項目 AH',
      '項目 AI',
      '項目 AJ',
      '項目 AK',
      '項目 AL',
      '項目 AM',
      '項目 AN',
      '項目 AO',
      '項目 AP',
      '項目 AQ',
      '項目 AR',
      '項目 AS',
      '項目 AT',
      '項目 AU',
      '項目 AV',
      '項目 AW',
      '項目 AX',
      '項目 AY',
      '項目 AZ',
      '項目 BA',
      '項目 BB',
      '項目 BC',
      '項目 BD',
      '項目 BE',
      '項目 BF',
      '項目 BG',
      '項目 BH',
      '項目 BI',
      '項目 BJ',
      '項目 BK',
      '項目 BL',
      '項目 BM',
      '項目 BN',
    ],
    axisLabel: {
      rotate: 0,
      interval: 0,
    },
    name: '項目名稱',
  },
  series: [
    {
      name: '未完成任務數量',
      type: 'bar',
      data: [
        2, 3, 5, 3, 6, 2, 7, 4, 3, 5, 4, 5, 3, 6, 2, 2, 7, 2, 3, 4, 3, 6, 7, 3,
        2, 4, 7, 5, 4, 2, 8, 5, 6, 2, 2, 6, 2, 4, 5, 3, 2, 7, 4, 3, 3, 5, 3, 2,
        2, 0, 0, 4, 2, 3, 0, 0, 2, 2, 4, 0, 2, 2, 1, 0, 3, 2,
      ],
      barWidth: '50%',
      barCategoryGap: '40%',
    },
  ],
}

const chartRef = ref(null)
useEChart(chartRef, options)
</script>
<template>
  <div ref="chartRef" class="w-full h-[200vh]"></div>
</template>
<style scoped></style>
