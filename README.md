![](https://github.com/psbss/MyPortfolio/workflows/Make%20deploy%20to%20server/badge.svg?branch=master)

# MyPortfolio
Yuu の個人ポートフォリオです．

## Feature -特徴-
- CSSフレームワークとして [Tailwind CSS](https://tailwindcss.com/) を採用。  
Tailwind CSS を利用することで、レスポンシブデザインを最小限のコストで実装しつつ、デザインを統一する事ができます。
- ビルドツールとして Webpack を採用。  
Tailwind CSS を利用する点でモジュールパンドラーが有効だと判断したため利用しています。
- CI/CD ツールとして Github Actions を採用  
github の master ブランチにプッシュすることで、ビルドされたファイルを自動でデプロイすることができます。

## Usage -利用方法-
npm パッケージのインストール(Node.jsがインストールされている前提です)
```
npm install
```

- ビルド
```
npm run Run
```

- 開発サーバの起動
```
npm run DevServer
```

- デプロイ用ビルド
```
npm run deploy
```
