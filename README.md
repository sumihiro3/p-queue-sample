# p-queue-sample

TypeScriptで実装されたp-queueライブラリの使用例です。このプロジェクトは、非同期タスクの並列実行を制御するためのサンプル実装を提供します。

## 概要

[p-queue](https://github.com/sindresorhus/p-queue)は、Promise ベースのキューライブラリで、同時実行数の制限やタスクの優先順位付けなどの機能を提供します。このリポジトリでは、p-queueの基本的な使い方と実用的なユースケースをサンプルコードとして示しています。

## インストール方法

このプロジェクトは yarn を使用して依存関係を管理しています。

```bash
# リポジトリをクローン
git clone https://github.com/sumihiro3/p-queue-sample.git
cd p-queue-sample

# 依存関係のインストール
yarn install
```

### 必要要件

- Node.js 16.0.0 以上
- yarn 1.22.0 以上
- p-queue 6.6.2
    - 7 以降は CommonJS での使用ができないため、6.* を使用してください

## 使用方法

以下のコマンドでサンプルコードを実行できます：

```bash
# 開発モードで実行
yarn dev

# ビルドして実行
yarn build
yarn start
```

サンプルコードでは、以下のような基本的な使い方を示しています：

```typescript
import PQueue from 'p-queue';

// キューの作成（同時に最大3つのタスクを実行）
const queue = new PQueue({ concurrency: 3 });

// 非同期タスクをキューに追加
await queue.add(async () => {
  // 何らかの非同期処理
  return result;
});
```

## ライセンス

このプロジェクトは MIT ライセンスの下で公開されています。詳細は [LICENSE](LICENSE) ファイルを参照してください。
