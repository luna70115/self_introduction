import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import { fileURLToPath, URL } from "node:url";
import eslint from "vite-plugin-eslint";
import { viteMockServe } from "vite-plugin-mock";
import { quasar, transformAssetUrls } from "@quasar/vite-plugin";
import { createHtmlPlugin } from "vite-plugin-html";
import { imagetools } from "vite-imagetools";
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // 載入指定模式的環境變數，並指定環境變數目錄為 "env"
  const env = loadEnv(mode, process.cwd() + "/env");

  // 僅提取以 VITE_ 開頭的環境變數
  const viteEnv = Object.keys(env)
    .filter((key) => key.startsWith("VITE_"))
    .reduce((acc, key) => {
      acc[key] = env[key];
      return acc;
    }, {});

  // 在控制台輸出當前模式及載入的 VITE_ 開頭環境變數，便於調試
  console.log("當前模式:", mode);
  console.log("載入的 VITE 環境變數:", viteEnv);

  return {
    base: "/self_introduction/",
    envDir: "./env", // 指定環境變數文件的目錄
    plugins: [
      // Vue 插件，用於支援 Vue 單文件組件
      vue({
        template: { transformAssetUrls } // 處理資源文件的 URL 路徑，讓 Vue 支援 Quasar 資源加載
      }),
      imagetools(),
      // Quasar 插件，用於支援 Quasar UI 元件庫
      quasar({
        sassVariables: "src/quasar-variables.sass" // 自訂 Quasar Sass 變數
      }),
      /** 自動導入插件 */
      AutoImport({
        imports: [
          "vue",
          "vue-router",
          "pinia",
          {
            "@arshown/vue3-i18n": ["useI18n"]
            // 列出自動導入的函數或方法
            // 這裡可以加入其他常用的函數
          }
        ],
        include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
        dts: "src/auto-imports.d.ts", // 自動生成類型定義檔案
        // 配置 ESLint 支援自動導入，避免未使用的變數報錯
        eslintrc: {
          enabled: true, // 預設為 false，這裡設為 true 啟用 ESLint 支援
          filepath: "./.eslintrc-auto-import.json", // 配置文件的路徑
          globalsPropValue: true // 設定全域變數的屬性值，預設為 true
        }
      }),
      /** ESLint 插件 */
      {
        // ESLint 插件設定：在本地開發模式下不因警告報錯，但出錯時中止編譯
        ...eslint({
          failOnWarning: false, // 忽略警告
          failOnError: true // 嚴重錯誤中止編譯
        }),
        apply: "serve",
        enforce: "post"
      },
      // 模擬 API 請求插件，支援本地開發 Mock 數據
      viteMockServe({
        mockPath: "mock", // 指定 Mock 資料夾路徑
        enable: true // 啟用 Mock 服務
      }),
      createHtmlPlugin({
        // 配置將環境變數注入到 index.html
        inject: {
          data: {
            VITE_FAVICON_URL: env.VITE_FAVICON_URL, // favicon 路徑
            VITE_PROJECT_DESCRIPTION: env.VITE_PROJECT_DESCRIPTION, // meta 描述
            VITE_SITE_TITLE: env.VITE_SITE_TITLE // 網站標題
          }
        }
      })
    ],
    css: {
      preprocessorOptions: {
        scss: {
          // 自動引入全域 SCSS 變數
          additionalData: `
          @import "@/assets/scss/variables.main.scss";
          `
        }
      }
    },
    /** 快捷路徑設定 */
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)) // 設定 `@` 指向 `src` 資料夾
      }
    },
    /** 支援全域使用 await */
    esbuild: {
      supported: {
        "top-level-await": true // 瀏覽器可處理頂層 await 特性
      }
    },
    /** 本地開發 Server 設定 */
    server: {
      port: 8080, // 本地開發伺服器的端口號
      proxy: {
        "/api": {
          target: "http://localhost:3000", // 將 /api 請求代理到本地 3000 端口
          changeOrigin: true, // 更改來源，以符合後端 API 的 CORS 設定
          rewrite: (path) => path.replace(/^\/api/, "") // 去除 /api 前綴
        }
      },
      cors: {
        origin: "*" // 允許所有來源跨域請求
      }
    },
    /** 打包設定 */
    build: {
      // 根據 Git 分支決定輸出目錄，如果是 "online" 分支，輸出到 `dist_online`，否則輸出到 `dist`
      outDir: "dist",
      rollupOptions: {
        output: {
          // 定義資源文件的輸出路徑和命名規則
          assetFileNames: (assetInfo) => {
            let extType = assetInfo.name.split(".").at(1); // 獲取文件的擴展名
            if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
              extType = "img"; // 如果是圖片文件，將擴展名設置為 "img"
            }
            return `assets/${extType}/[name]-[hash][extname]`; // 根據文件類型輸出到相應目錄
          },
          // 定義代碼塊的輸出路徑和命名規則
          chunkFileNames: "assets/js/[name]-[hash].js",
          entryFileNames: "assets/js/[name]-[hash].js",
          // 自定義代碼分塊策略
          manualChunks(id) {
            if (id.includes("node_modules")) {
              // 將 node_modules 內的模組單獨打包，並以其第一層目錄命名
              return id
                .toString()
                .split("node_modules/")[1]
                .split("/")[0]
                .toString();
            }
            if (id.includes("pages")) {
              // 將 views 目錄的模組單獨打包為 "pages"
              return "pages";
            }
          }
        }
      }
    }
  };
});
