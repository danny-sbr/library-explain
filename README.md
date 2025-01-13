# Vue 3 功能展示專案

此專案使用 Vue 3 + Vite 建立，展示多個實用的函式庫整合應用。

## 系統需求

### Node.js 版本
- 建議使用 Node.js 18.0.0 或更高版本
- 專案已在 Node.js v20.18.0 版本測試通過

## 主要功能

### 1. 條碼掃描器 (onscan.js)
- 支援實體條碼掃描器輸入
- 支援鍵盤輸入模擬
- 完整的事件處理與除錯功能
- 可自訂掃描器設定與事件處理

### 2. 網頁截圖工具 (html2canvas)
- 將任意 HTML 元素轉換成圖片
- 支援自訂截圖區域
- 提供多種輸出格式選項
- 可調整輸出圖片品質

### 3. 活動日曆 (FullCalendar)
- 支援多種視圖模式（月、週、日）
- 事件的新增、編輯與刪除功能
- 完整的中文化介面
- 支援拖放操作

### 4. QR Code 產生器
整合 qrcode.js 函式庫：
- 快速產生 QR Code
- 支援自訂 QR Code 大小和樣式
- 可設定錯誤修正等級
- 支援多種輸出格式（DataURL、Canvas、SVG）

### 5. 列印功能
使用 Print.js 實作：
- 支援多種內容類型列印（HTML、PDF、圖片、JSON）
- 自訂列印標題與頁尾
- 完整的樣式保留功能
- 支援進階列印選項設定
- 提供訂單資訊列印範例

### 6. 表單驗證
整合 vee-validate 函式庫：
- 支援多種表單驗證規則
- 即時驗證功能
- 自訂錯誤訊息

### 7. ECharts 圖表
整合 ECharts 函式庫：
- 支援多種圖表類型
- 自訂圖表樣式
- 支援多種輸出格式
- 支援進階圖表選項設定
- 提供簡單的圖表範例

## 開發環境設定

### 建議開發工具
- Visual Studio Code
- Vue.js Devtools 瀏覽器擴充功能
- Git 版本控制系統

### 建議的 VS Code 擴充功能
- Vue Official
- ESLint
- Prettier
- GitLens


### 安裝 pnpm
本專案使用 pnpm 作為套件管理工具。若尚未安裝 pnpm，請先執行：

```sh
npm install -g pnpm
```

### 專案設定

```sh
# 安裝專案相依套件
pnpm install
```

### 開發環境啟動

```sh
pnpm dev
```

啟動後，打開瀏覽器訪問 http://localhost:5300 即可看到專案畫面。

### 生產環境建置

```sh
pnpm build
```

### 程式碼檢查

```sh
pnpm lint
```

## 專案結構
```
├── src/
│   ├── assets/                 # 靜態資源
│   │
│   ├── components/            # 共用元件
│   │   └── CodeBlock.vue      # 程式碼區塊元件
│   │
│   ├── layout/                # 版面配置
│   │   └── DefaultLayout.vue  # 預設版面
│   │
│   ├── style/                 # 樣式檔案
│   │   ├── main.css          # 主要樣式
│   │   └── normalize.css      # CSS Reset
│   │
│   ├── views/                 # 頁面元件
│   │   ├── EChartView/       # 圖表功能
│   │   │   ├── components/
│   │   │   │   ├── Chart/
│   │   │   │   │   ├── BarLineMix.vue
│   │   │   │   │   ├── BasicBar.vue
│   │   │   │   │   ├── BasicLine.vue
│   │   │   │   │   ├── BasicPie.vue
│   │   │   │   │   ├── CategoryComparison.vue
│   │   │   │   │   ├── HorizontalBar.vue
│   │   │   │   │   └── StackedBar.vue
│   │   │   │   ├── ConnectChart.vue
│   │   │   │   ├── ExplainEChart.vue
│   │   │   │   └── MyChart.vue
│   │   │   └── EChartView.vue
│   │   │
│   │   ├── FullCalendarView/  # 行事曆功能
│   │   │   ├── components/
│   │   │   │   ├── MyFullCalendar.vue
│   │   │   │   ├── ExplainFullCalendar.vue
│   │   │   │   └── event-utils.js
│   │   │   └── FullCalendarView.vue
│   │   │
│   │   ├── Html2CanvasView/   # 截圖功能
│   │   │   ├── components/
│   │   │   │   ├── ExplainCanvas.vue
│   │   │   │   └── MyHtml2Canvas.vue
│   │   │   └── Html2CanvasView.vue
│   │   │
│   │   ├── OnScanView/        # 掃描器功能
│   │   │   ├── components/
│   │   │   │   ├── ExplainScan.vue
│   │   │   │   └── MyScan.vue
│   │   │   └── OnScanView.vue
│   │   │
│   │   ├── PrintJsView/       # 列印功能
│   │   │   ├── components/
│   │   │   │   ├── ExplainPrintJS.vue
│   │   │   │   └── MyPrintJS.vue
│   │   │   └── PrintJsView.vue
│   │   │
│   │   ├── QRcodeView/        # QR Code功能
│   │   │   ├── components/
│   │   │   │   ├── ExplainQRcode.vue
│   │   │   │   └── MyQRcode.vue
│   │   │   └── QRcodeView.vue
│   │   │
│   │   ├── VeeValidateView/   # 表單驗證功能
│   │   │   ├── components/
│   │   │   │   ├── DefineFieldZod.vue
│   │   │   │   ├── DiffDefinedUseField.vue
│   │   │   │   ├── ExplainDefineField.vue
│   │   │   │   └── UseFieldZod.vue
│   │   │   └── VeeValidateView.vue
│   │   │
│   │   └── HomeView.vue       # 首頁
│   │
│   ├── router/                # 路由設定
│   │   └── index.js
│   │
│   ├── stores/                # 狀態管理
│   │   └── counter.js
│   │
│   ├── App.vue                # 根元件
│   └── main.js               # 應用程式入口
│
├── public/                    # 公開資源
│   └── favicon.ico
│
├── index.html                # HTML 模板
├── vite.config.js           # Vite 設定
├── package.json             # 專案配置
├── pnpm-lock.yaml          # 相依套件版本鎖定
├── .gitignore              # Git 忽略檔案
├── .prettierrc.json        # Prettier 設定
├── .editorconfig           # 編輯器設定
└── README.md               # 專案說明文件
```
