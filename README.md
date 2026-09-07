# ★ 傑尼のBJD部屋 ★

> 外表平成，內臟令和。  
> BJD、娃写真、教學、日記，以及各種奇怪東西的個人網站。

這是一個使用 Astro 製作的靜態網站。

網站內容主要以 Markdown 保存，目標是：

- 資料盡量掌握在自己手上
- 搬家容易
- 不依賴單一平台
- 猴子半年沒碰也能重新看懂
- 龍蝦可以協助維護，但不要把馬桶拆掉重蓋

---

# 🐒 傑尼：失憶時從這裡開始

## 我要啟動網站

第一次在一台新電腦抓下 repo：

```bash
npm install
npm run dev
```

平常如果已經安裝過：

```bash
npm run dev
```

然後瀏覽器開：

```text
http://localhost:4321/
```

如果出現奇怪問題：

1. 先確認檔案有存檔。
2. 看終端機錯誤訊息。
3. 檢查檔名有沒有 `.astro.astro`、`.md.md` 等套娃。
4. 檢查 import 的 `../` 層數。
5. 重開 `npm run dev`。

資深工程師第一式：

> 你重開過了嗎？

---

# 📝 我要發文章

不要自己從零開始寫格式。

複製 repo 根目錄：

```text
ARTICLE_TEMPLATE.md
```

## BJD 教學放這裡

```text
src/content/guides/
```

例如：

```text
src/content/guides/change-eyes.md
```

網址會變成：

```text
/guides/change-eyes/
```

## 日記放這裡

```text
src/content/diary/
```

例如：

```text
src/content/diary/2026-09-07.md
```

網址會變成：

```text
/diary/2026-09-07/
```

文章列表會自動產生。

**不要手動把新文章加入 index.astro。**

---

# ✏️ 文章最基本格式

```md
---
title: "文章標題"
description: "簡短介紹"
date: 2026-09-07
draft: true
tags:
  - BJD
  - 範例
---

# 文章標題

這裡開始寫正文。
```

## draft 是什麼？

```yaml
draft: true
```

代表草稿，不公開。

準備公開時改成：

```yaml
draft: false
```

---

# 🗑️ 我要刪文章

找到文章的 `.md`：

```text
src/content/guides/
```

或：

```text
src/content/diary/
```

刪掉該檔案即可。

文章列表會自動更新。

如果只是暫時不想公開，不一定要刪檔案，可以改：

```yaml
draft: true
```

---

# 🖼️ 我要放圖片

網站圖片主要放：

```text
public/assets/
```

目前建議：

```text
public/assets/
├─ backgrounds/
├─ banners/
├─ dividers/
├─ icons/
└─ photos/
   ├─ guides/
   ├─ diary/
   ├─ dolls/
   └─ header/
```

Markdown 插圖：

```md
![圖片內容說明](/assets/photos/guides/example.jpg)
```

不要把大量完全沒用到的手機原始照片全部塞進 Git。

網站使用的圖片可以放進 repo。

原始高解析照片另外備份比較好。

---

# 🕷️ 為什麼到處都是 index.astro？

因為每個資料夾的 `index.astro` 代表那個網址的首頁。

目前主要路由：

```text
src/pages/index.astro
→ /

src/pages/guides/index.astro
→ /guides/

src/pages/guides/[...id].astro
→ /guides/某篇文章/

src/pages/diary/index.astro
→ /diary/

src/pages/diary/[...id].astro
→ /diary/某篇文章/
```

所以：

```text
pages/index.astro
```

和：

```text
pages/guides/index.astro
```

不是同一隻猴。

不要再蜘蛛人互指。

---

# 🧱 網站主要結構

```text
src/
├─ components/
│  ├─ AdRotator.astro
│  ├─ RetroWindow.astro
│  ├─ Sidebar.astro
│  └─ ...
│
├─ content/
│  ├─ guides/
│  └─ diary/
│
├─ layouts/
│  ├─ BaseLayout.astro
│  └─ ArticleLayout.astro
│
├─ pages/
│  ├─ index.astro
│  ├─ guides/
│  └─ diary/
│
├─ styles/
│  └─ ...
│
└─ content.config.ts
```

## BaseLayout.astro

全網站共同骨架。

包含 Header、Sidebar、主要內容區、Footer 等。

只有要修改「全站共同結構」時才碰。

## ArticleLayout.astro

單篇文章共同版型。

BJD 教學和日記共用。

只有要修改「所有文章的共同外觀」時才碰。

## RetroWindow.astro

粉紅色古早 Windows 視窗。

視覺犯罪的重要基礎設施。

## Sidebar.astro

側邊欄。

MENU、廣告、網站小垃圾等主要住這裡。

## AdRotator.astro

無收入廣告輪播系統。

新增假廣告時，優先修改這裡的廣告資料。

---

# 🦞 龍蝦：開始工作前看這裡

這個網站允許 AI 協助維護。

但應該依任務採取最小必要修改。

## 如果任務是新增文章

優先只：

1. 建立或修改 Markdown。
2. 整理 Markdown 排版。
3. 處理文章需要的圖片。
4. 檢查 frontmatter。
5. 檢查圖片 alt。
6. 確認文章放在正確 collection。

不要因為新增一篇文章就重構網站。

## 如果任務是修改單篇文章

優先修改：

```text
src/content/
```

除非人類明確要求修改全站功能或共同版型，否則不要修改：

```text
src/layouts/BaseLayout.astro
src/layouts/ArticleLayout.astro
src/content.config.ts
```

## 如果任務是修改網站功能

修改前先確認相關 component / layout 的用途。

盡量：

* 修改既有元件
* 保留目前資料結構
* 保留文章相容性
* 避免沒有必要的大規模重構
* 不因為「可以寫得更漂亮」就重寫能正常工作的東西

人類故意做醜的視覺設計，不代表需要修正。

**復古、Y2K、古早個人網站、俗艷、像素感、假廣告等可能是刻意設計。**

---

# 💾 Git 猴用流程

開始工作前：

```bash
git pull
```

完成一個可以正常運作的小階段：

```bash
git status
git add .
git commit -m "描述這次做了什麼"
git push
```

例如：

```bash
git commit -m "新增換眼睛教學"
```

```bash
git commit -m "建立日記文章系統"
```

```bash
git commit -m "調整首頁Y2K視覺"
```

不用再建立：

```text
網站最終版
網站最終版2
網站最終版真的
網站最終版真的最終版
網站最終版中的最終版了你信我一次
```

Git 已經負責保存歷史版本。

---

# 🚨 常見事故

## Astro 找不到 import

例如：

```text
Could not import ../layouts/BaseLayout.astro
```

先檢查目前檔案所在的資料夾深度。

例如：

```text
src/pages/index.astro
```

到 layouts 是：

```text
../layouts/
```

但：

```text
src/pages/guides/index.astro
```

到 layouts 是：

```text
../../layouts/
```

---

## 網址 404

檢查對應的 `.astro` 是否真的存在於：

```text
src/pages/
```

以及副檔名有沒有套娃。

---

## 同一網址被兩個檔案搶走

例如同時存在：

```text
src/pages/guides.astro
```

和：

```text
src/pages/guides/index.astro
```

兩者都會想成為：

```text
/guides/
```

不要同時留著。

---

## favicon 換了但瀏覽器裝死

先試：

```text
Ctrl + F5
```

還是不行可以用無痕視窗確認。

瀏覽器很愛快取 favicon。

---

## npm run dev 說找不到 astro

新電腦 clone repo 後先：

```bash
npm install
```

再：

```bash
npm run dev
```

`node_modules` 不會跟著 Git 一起搬家。

---

# ★ 網站設計原則 ★

> 外表平成，內臟令和。

外觀可以：

* 醜
* 閃
* 粉紅
* Y2K
* 古早個人網站
* Windows 95 / 98
* 假廣告
* 奇怪 GIF
* 像素素材
* 視覺污染

內部盡量：

* 結構清楚
* Markdown 優先
* 自動產生文章列表
* 共用 Layout / Component
* Responsive
* Accessible
* 容易備份
* 容易搬家
* 容易讓失憶猴重新接手

---

Powered by 🦞
Maintained by 🐒

```

這份現在就已經能當**網站駕駛手冊 + 龍蝦 system prompt 的窮人版 + 失憶猴急救包**。

而且有個好處：龍蝦之後收到「幫我發這篇」時，可以先讀 `README.md` 和 `ARTICLE_TEMPLATE.md`，通常根本不必把全 repo 掃一遍。這正好符合你前面說的 **「龍蝦其實能幹很多，只是不要亂噴 token」**。

至於分類管理，我目前故意沒有在 README 裡亂寫具體操作，因為我們**還沒做集中式分類設定**。等下一坨把 categories 做完，再把那節補進 README；不然現在寫了，未來猴照著不存在的功能操作，會開始毆打過去的我們。🐒
```
