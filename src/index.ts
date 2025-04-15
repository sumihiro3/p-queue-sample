import PQueue from 'p-queue';

const queue = new PQueue({
  interval: 1000,      // 1秒ごとに
  intervalCap: 3,      // 最大3件まで実行
  concurrency: 3       // 同時実行は1件（順番に処理）
});

// アクセスする URL の Prefix
const urlPrefix = 'https://jsonplaceholder.typicode.com/posts/';

// 取得するURLの数
const count = 10;

// サイトにアクセスした結果を格納する配列
const results: string[] = [];

// p-queue-sampleのサンプルコード
console.log('p-queue サンプルプロジェクトが正常に初期化されました！');

// 簡単な関数の例
async function main(): Promise<void> {
  // countの数だけ URL にアクセスする
  for (let i = 0; i < count; i++) {
    const url = `${urlPrefix}${i + 1}`;
    queue.add(() => fetchSite(url));
  }

  await queue.onIdle(); // 全てのタスクが完了するまで待機
  console.log('✅ 全てのタスクが完了しました！');
  for (const [i, title] of results.entries()) {
    console.log(`${i + 1}. ${title}`);
  }
}

/**
 * 指定した URL にアクセスし、その結果を results 配列に格納する関数
 * @param url URL
 */
async function fetchSite(url: string): Promise<void> {
  const res = await fetch(url);
  const data = await res.json();
  console.log(`[${new Date().toISOString()}] Fetched: ${url}`);
  results.push(data.title); // タイトルを結果配列に追加
}

// 関数の実行
main().catch((error) => {
  console.error('エラーが発生しました:', error);
});
