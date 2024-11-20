import { ref, nextTick, unref, onMounted, watch, onUnmounted } from 'vue'
import * as echarts from 'echarts'

export function useEChart(elRef, initialOption = {}, autoChartSize = true) {
  /* 這裡的 chartInstance 使用 let 方式宣告是因為避免 echart 實體被 vue 3 代理，
    因此使用 let 而不是使用 ref
    參見 https://github.com/apache/echarts/issues/17723
    參見 https://blog.csdn.net/youyudehan/article/details/135222342
  */
  let chartInstance
  const option = ref(initialOption)

  // 初始化圖表
  const initChart = () => {
    const el = unref(elRef)
    if (!el) return
    chartInstance = echarts.init(el)
    setOption(option.value)
  }

  // 設置圖表選項
  const setOption = newOption => {
    option.value = newOption
    nextTick(() => {
      if (chartInstance) {
        chartInstance.setOption(option.value)
      } else {
        initChart()
      }
    })
  }

  // 監聽選項變更，動態更新圖表
  watch(option, newOption => {
    setOption(newOption)
  })

  function resize() {
    chartInstance?.resize()
  }

  function watchEl() {
    const resizeObserver = new ResizeObserver(() => resize())
    resizeObserver.observe(elRef.value)
  }

  // // 當元件掛載時初始化圖表並監聽視窗大小調整
  onMounted(() => {
    initChart()
    window.addEventListener('resize', resize)
    if (autoChartSize) watchEl()
  })

  // 當元件卸載時移除監聽事件，並銷毀圖表實例
  onUnmounted(() => {
    window.removeEventListener('resize', resize)
  })

  return {
    setOption,
    chartInstance,
  }
}
