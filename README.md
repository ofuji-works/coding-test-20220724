# コーディングテスト

## Page

https://coding-test-20220724.pages.dev/

## Getting Started

```
$ npm install
$ npm start
```

## Available Scripts

- localhost:3000での起動

```
npm start
```

- テスト実行

```
npm test
```

- ビルド実行

```
npm run build
```

## デプロイ

mainブランチにマージ時、push時に自動でデプロイが実行される。

## ディレクトリ構造

```
src
├── __tests__             テストコード
│    ├── features         features以下のテストコード
│    ├── mocks　　　　　　　　　　　　　　　　　　　　　　　　　モックデータ
│    └── msw              msw実装
├── apis　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　api
├── components　　　　　　　　　　　　　　　　　　　　　　　　共通コンポーネント
│    ├── CheckBox
│    └── index.ts
├── config　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　設定値
│    └── index.ts
├── features　　　　　　　　　　　　　　　　　　　　　　　　　　　　機能実装
│    └── resas
│         ├── conmponent　　　　presentationa component
│         ├── container   container component    
│         ├── hook        hook
│         ├── index.ts    
│         └── types.ts    型定義
├── App.tsx
└── index.tsx

```

## 使用フレームワーク・言語
- React
- TypeScript
