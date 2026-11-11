# 伊恩老大的旅行日記

以白色柴犬伊恩為主角的繁體中文靜態網站，使用米白、森林綠與咖啡色。只有 HTML、CSS、JavaScript，無資料庫、無建置步驟、無套件依賴。圖片皆為本機檔案，不依賴外部圖片服務或網路字型。

## 先儲存完整網站

下載並解壓縮 `ian-travel-website.zip`，把整個資料夾保留在電腦。也可直接保存專案中的以下所有檔案：

```text
index.html         網站主頁，包含六個導覽區塊
style.css          網站配色、字型與響應式版面
script.js          範例內容與互動功能
assets/            白柴範例圖片、原創插畫及網站圖示
README.md          這份說明
CHECKS.md          基本功能檢查結果
.nojekyll          告訴 GitHub Pages 直接提供靜態檔案
```

## 如何預覽

使用 Chrome 的步驟：

1. 下載 `ian-travel-website.zip`，在 Windows 按右鍵選「解壓縮全部」，macOS 則連按兩下 ZIP 解壓縮。
2. 開啟解壓縮後的資料夾，確認能同時看到 `index.html`、`style.css`、`script.js` 和 `assets` 資料夾。
3. 先開啟 Chrome，再把 `index.html` 拖進 Chrome 視窗，就能預覽網站。也可以在檔案上按右鍵，選「開啟方式 → Google Chrome」。
4. 不要直接在 ZIP 預覽視窗裡開啟 HTML，也不要只取出 `index.html`；CSS、JavaScript 與圖片必須保持原本的相對位置。

不用安裝 Node.js 或執行建置。也支援現代版本的 Edge、Firefox 與 Safari。

若要以固定網址預覽，請在網站資料夾開啟終端機，使用已安裝的 Python 3：

```bash
python3 -m http.server 8000
```

Windows 也可使用 `py -m http.server 8000`。接著在瀏覽器開啟 `http://localhost:8000`，結束時在終端機按 Ctrl+C。不同連接埠視為不同網站，使用固定網址可保持本機資料一致。

## 如何部署到 GitHub Pages

1. 登入 GitHub，建立一個儲存庫，例如 `ian-travel`。若使用免費個人方案，請設為 Public。
2. 選擇 **Add file → Upload files**，把解壓縮後的檔案和 `assets` 資料夾上傳到儲存庫根目錄。`index.html` 必須直接位於根目錄；不要再多包一層資料夾。若要保留頁尾「下載網站檔案」，也請把原始 ZIP 一起上傳；否則請刪除 `index.html` 中這個下載連結。若上傳介面未包含隱藏檔 `.nojekyll`，本網站因未使用 Jekyll 特殊路徑，仍可正常運作。
3. 按 **Commit changes**。
4. 到 **Settings → Pages → Build and deployment**，選擇 **Deploy from a branch**。
5. 選擇 `main` 分支、`/ (root)`，按 **Save**。
6. 等待 GitHub 完成部署，開啟 Pages 顯示的網址，通常是 `https://你的帳號.github.io/ian-travel/`。部署進度可在 Actions 查看。

所有圖片、CSS、JavaScript 使用相對路徑，所以支援 GitHub Pages 的儲存庫子目錄。網站沒有 API 金鑰或後端設定。更新內容後，重新上傳變更的檔案並 Commit 即可。

## 替換成伊恩的真實照片

- 首頁照片：替換 `assets/ian-hero.png`，保留檔名即可。建議橫式 3:2、主角位於中央偏右。首頁使用 `object-fit: cover`，會依版面裁切。
- 旅遊紀錄：修改 `script.js` 最上方的 `JOURNALS`，每筆的 `image` 是圖片路徑，`alt` 是圖片的繁體中文描述。可改成 `assets/ian-forest.jpg` 等路徑。
- 照片區：修改 `script.js` 的 `PHOTOS`，設定圖片路徑、標題與描述。
- 若用 JPG 取代 PNG，請把 `index.html` 和 `script.js` 裡的路徑一併修改。GitHub Pages 的檔名區分大小寫。
- 替換真實照片後，請同步更新首頁的「範例圖片」標籤、照片區說明與圖片替代文字。
- 建議上傳前壓縮照片，每張約 200–500 KB，並移除不想公開的 EXIF 定位資訊。

目前的白柴照片為 AI 生成範例，四張風景 SVG 為本專案原創插畫，不代表伊恩的真實外貌或實際旅行。日記、景點、日期與費用均為示範。景點未經實際驗證，出發前請另行確認寵物規範。

## 修改文字與配色

- 首頁、區塊介紹、行程介紹文字：編輯 `index.html`。
- 日記、友善景點、照片：編輯 `script.js` 的 `JOURNALS`、`PLACES`、`PHOTOS`。
- 預設行程與花費：編輯 `DEFAULT_PLAN`、`DEFAULT_EXPENSES`。瀏覽器已有儲存資料時會優先使用已存資料。修改預設值不會覆寫個人的紀錄。
- 配色：編輯 `style.css` 最上方的 `:root` 變數，例如 `--cream`、`--green`、`--brown`。
- 修改照片排列：照片區目前預設五張的格狀版型；增減張數時可同步調整 CSS 的 `.gallery-grid`。

## 功能與資料保存

- 六個頁內導覽區塊、目前區塊提示、手機選單。
- 旅遊紀錄地區篩選、完整日記對話框。
- 寵物友善景點類型篩選。
- 兩天行程切換、新增、編輯、刪除、依時間排序、還原範例。
- 出門清單勾選。
- 花費新增與刪除、總計、預算餘額或超支提示、人均分攤。幣別為新臺幣；加總採整數分計算，避免常見小數誤差；平均金額最多顯示小數點後兩位。
- CSV 下載含 UTF-8 BOM，方便用試算表開啟。
- 照片放大，支援上一張、下一張與鍵盤方向鍵；Escape 可關閉對話框。
- 自動儲存行程、出門清單、花費、預算與人數至 `localStorage`。**這些資料只在目前的瀏覽器和網站來源內，不會上傳、跨裝置同步，或改寫網站原始碼。** 清除網站資料、使用無痕模式、切換網址或瀏覽器可能無法保留資料。
- 點「儲存手帳」可下載 JSON 備份；在行程區點「載入手帳備份」可還原。載入前會要求確認，因為會取代現有個人紀錄。備份只包含行程、花費與出門清單，不包含照片或程式碼。
- 「下載網站檔案」下載的是網站程式碼範本，不包含瀏覽器中的個人資料。若之後自行修改原始碼，請重新製作 ZIP，或刪除這個下載連結，避免下載到舊版。
- 無任何追蹤、登入或資料庫。

## 更新下載 ZIP（選用）

本次交付將 `ian-travel-website.zip` 一併放進 GitHub 分支，方便直接下載。之後更新程式碼時，也請更新 ZIP，確保頁尾的下載檔案與網站一致。

製作 ZIP 時，選取 `index.html`、`style.css`、`script.js`、`assets`、`README.md`、`CHECKS.md` 與 `.nojekyll`；請勿把舊 ZIP、`.git` 或 `.openai` 一起壓入。也可在 GitHub 切換到要審查的分支，選擇 **Code → Download ZIP** 取得完整分支原始碼。
