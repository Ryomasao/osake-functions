# osake・WebアプリケーションのCloudFunction用

公式
https://firebase.google.com/docs/functions/get-started?hl=ja

## 必要なパッケージ
* Node v8系
CloudFunctionのNode.jsランタイムが v6 or v8 とのことなのであわせる
デフォルトv6でdeploy時に設定する必要があるみたい

開発環境では、v8.13.0を使用している 

<b>fiebase cliのインストール</b>
```sh
$ npm install firebase-tools -g
```

当初、ローカルでfirebase-toolsをインストールし、npxで使用していたが、deployのタイミングで「コマンド firebase」が見つからないってなるので、公式ドキュメント通りにグローバル環境にインストールする。  


firebase-cliの新機能・バグ修正は以下のパッケージを個別にインストールする。


<b>念のため最新版を取り込む</b>
```sh
$ npm install firebase-functions@latest firebase-admin@latest --save
```

## deploy

`functions`ディレクトリ内の`index.js`の関数がデプロイされる。

```sh
$ firebase deploy --only functions
```

現在は`/hellWorld'のHTTPリクエストを受け付ける関数のみ記載。
新しい関数を定義する場合も`index.js`に追記する。




