import { nextTick, unref, onMounted, onUnmounted } from 'vue'
import * as echarts from 'echarts'

export function useEChart(elRef, initialOption = {}) {
  /* 這裡的 chartInstance 使用 let 方式宣告是因為避免 echart 實體被 vue 3 代理，
    因此使用 let 而不是使用 ref
    參見 https://github.com/apache/echarts/issues/17723
    參見 https://blog.csdn.net/youyudehan/article/details/135222342
  */
  let chartInstance
  let resizeObserver

  // 初始化圖表
  const initChart = () => {
    const el = unref(elRef)
    if (!el) return
    chartInstance = echarts.init(el)
    setOption(initialOption)
  }

  // 設置圖表選項
  const setOption = newOption => {
    nextTick(() => {
      if (chartInstance) {
        chartInstance.setOption(newOption)
      } else {
        initChart()
      }
    })
  }

  function resize() {
    chartInstance?.resize()
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
    if (chartInstance) {
      chartInstance.dispose()
    }
  })

  return {
    setOption,
    chartInstance,
  }
}
