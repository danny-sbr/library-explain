/**
 * 設定多個 ECharts 實例之間的 dataZoom 同步功能
 * @param {EChartsType[]} allInstances - 所有需要同步的 ECharts 圖表實例陣列
 * @returns {void}
 */
export function setupDataZoomSyncing(allInstances) {
  /**
   * 同步多個圖表的 dataZoom 狀態
   * @param {EChartsType} allInstances - 觸發事件的圖表實例
   * @param {EChartsType[]} dispatchedInstances - 需要被同步的圖表實例陣列
   * @param {Object} params - dataZoom 事件的參數
   * @param {number} params.start - 縮放的起始百分比（0-100）
   * @param {number} params.end - 縮放的結束百分比（0-100）
   * @returns {void}
   * @description
   * 此函式負責將一個圖表的 dataZoom 狀態同步到其他圖表：
   * 1. 建立包含縮放範圍的動作參數
   * 2. 遍歷所有目標圖表實例
   * 3. 排除觸發事件的原始圖表
   *    程式碼範例：
   *    ```
   *    if (dispatchedInstance !== allInstances)
   *    ```
   * 4. 向其他圖表發送縮放動作指令
   *    程式碼範例：
   *    ```
   *    dispatchedInstance.dispatchAction(dispatchActionParams)
   *    ```
   */

  function syncDataZoom(allInstances, dispatchedInstances, params) {
    const dispatchActionParams = {
      type: 'dataZoom',
      start: params.start,
      end: params.end,
    }
    dispatchedInstances.forEach(dispatchedInstance => {
      if (dispatchedInstance !== allInstances) {
        dispatchedInstance.dispatchAction(dispatchActionParams)
      }
    })
  }

  /**
   * 建立一個防止循環同步的處理函式
   * @param {EChartsType[]} allInstances - 所有需要同步的圖表實例陣列
   * @param {boolean} isSyncing - 是否正在同步的狀態標記
   * @returns {Function} 返回一個處理 dataZoom 事件的函式
   * @description
   * 1. 如果正在同步中，直接返回避免循環
   * 2. 設定同步狀態為 true 開始同步
   * 3. 執行同步操作
   * 4. 同步完成後，重設狀態為 false
   */
  const preventCyclicSync = (allInstances, isSyncing) => {
    return params => {
      if (isSyncing) return
      isSyncing = true
      syncDataZoom(allInstances, allInstances, params)
      isSyncing = false
    }
  }

  /**
   * 為所有圖表實例綁定 dataZoom 事件監聽器
   * @description
   * 1. 遍歷每個圖表實例
   * 2. 為每個實例建立獨立的同步狀態標記
   * 3. 綁定 dataZoom 事件監聽器，當觸發縮放時進行同步
   * @private
   */
  allInstances.forEach(instance => {
    let isSyncing = false
    instance.on('dataZoom', preventCyclicSync(allInstances, isSyncing))
  })
}
