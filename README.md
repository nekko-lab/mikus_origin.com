# Miku's Origin (MO) Official Website

ネットワークコンテンツ研究会 **Miku's Origin (MO)** の公式サイトリポジトリです。  
Next.js を用いた完全静的サイト（SSG）として構築されています。

---

# Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Lint**: ESLint (Flat Config)
- **Formatter**: Prettier
- **SEO**: next-sitemap
- **Image Optimization**: sharp

---

# セットアップ

## 1. Clone

```bash
git clone https://github.com/nekko-lab/mikus-origin.com.git
cd mikus-origin.com
```

## 2. Install

```bash
npm install
```

## 3. 開発サーバー起動

```bash
npm run dev
-> https://localhost:3000
```

で確認できます。

# Scripts

| コマンド            | 内容             |
| ------------------- | ---------------- |
| `npm run dev`       | 開発サーバー     |
| `npm run build`     | 本番ビルド       |
| `npm run start`     | 本番サーバー起動 |
| `npm run lint`      | 静的解析         |
| `npm run format`    | Prettier整形     |
| `npm run typecheck` | 型チェック       |

# ディレクトリ構造

```bash
app/
 ├── page.tsx        # トップページ
 ├── layout.tsx      # 共通レイアウト
 ├── about/          # Aboutページ
 ├── members/        # メンバー紹介
 ├── activities/     # 活動内容
 └── recruit/        # 募集ページ
```

[App Router](https://nextjs.org/docs/app)によるファイルベースルーティングを採用採用

# デプロイ

本サイトは **完全静的生成(SSG)** を前提としています。

```bash
npm run build
```

出力された `.next` を配信環境に配置してください。
想定環境は以下

- Nginx
- オンプレ
- CDN配信
