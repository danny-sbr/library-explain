# Vue 3 功能展示專案

此專案使用 Vue 3 + Vite 建立，展示多個實用的函式庫整合應用。

## 系統需求

### Node.js 版本
- 建議使用 Node.js 18.0.0 或更高版本
- 專案已在 Node.js v20.18.0 版本測試通過

## 主要功能

### 1. 條碼掃描器 (onscan.js)
- 支援實體條碼掃描器輸入
- 提供鍵盤輸入模擬功能
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

## 開發環境設定

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
│   │   ├── main.css           # 主要樣式
│   │   └── normalize.css      # CSS Reset
│   │
│   ├── components/            # 共用元件
│   │   └── CodeBlock.vue      # 程式碼區塊元件
│   │
│   ├── views/                 # 頁面元件
│   │   ├── HomeView/         
│   │   │   └── HomeView.vue   # 首頁
│   │   │
│   │   ├── FullCalendarView/  # 行事曆功能
│   │   │   ├── components/
│   │   │   │   ├── MyFullCalendar.vue
│   │   │   │   ├── ExplainFullCalendar.vue
│   │   │   │   ├── explainFullCalendar.js
│   │   │   │   └── event-utils.js
│   │   │   └── FullCalendarView.vue
│   │   │
│   │   ├── Html2CanvasView/   # 截圖功能
│   │   │   ├── components/
│   │   │   │   └── ExplainCanvas.vue
│   │   │   └── Html2CanvasView.vue
│   │   │
│   │   └── OnScanView/        # 掃描器功能
│   │       ├── components/
│   │       │   ├── MyScan.vue
│   │       │   └── ExplainScan.vue
│   │       └── OnScanView.vue
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
