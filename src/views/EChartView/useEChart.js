import { nextTick, unref, onMounted, onUnmounted, shallowRef } from 'vue'
import * as echarts from 'echarts'

export function useEChart(elRef, initialOption = {}) {
  /* 這裡的 chartInstance 使用 shallowRef 方式宣告是因為 echart 實體是 immutable，
    因此使用 shallowRef 避免深層代理
    參見 https://github.com/apache/echarts/issues/17723#issuecomment-1268311307
    參見 https://segmentfault.com/a/1190000044349638
  */

  const chartInstance = shallowRef(null)
  let resizeObserver

  // 初始化圖表
  const initChart = () => {
    const el = unref(elRef)
    if (!el) return
    chartInstance.value = echarts.init(el)
    setOption(initialOption)
  }

  // 設置圖表選項
  const setOption = newOption => {
    nextTick(() => {
      if (chartInstance.value) {
        chartInstance.value.setOption(newOption)
      } else {
        initChart()
      }
    })
  }

  function resize() {
    chartInstance.value?.resize()
  }

  function watchEl() {
    if (!resizeObserver && elRef.value) {
      resizeObserver = new ResizeObserver(() => resize())
      resizeObserver.observe(elRef.value)
    }
  }

  // 當元件掛載時，初始化圖表並監聽視窗大小調整
  onMounted(() => {
    initChart()
    watchEl()
  })

  // 當元件卸載時，斷開 resizeObserver
  // 並且釋放圖表實體
  onUnmounted(() => {
    if (resizeObserver) {
      resizeObserver.disconnect()
    }
    if (chartInstance.value) {
      chartInstance.value.dispose()
    }
  })

  return {
    setOption,
    chartInstance,
  }
}
