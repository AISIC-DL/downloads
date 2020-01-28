# downloads


# カスタマイズアプリテンプレートの使い方
1. 「カスタマイズアプリテンプレート.zip」をダウンロードする。
2. ダウンロードしたzipファイルを元にkintoneアプリを作成する。
3. 作成したアプリにレコード作成時にキーととなるような文字列フィールドを追加する。このとき、フィールドコードを適宜変更しておく。
4. 作成したアプリ内のプラグインの「JSEdit for kintone」を使って、template_c.js内の下記箇所に、追加した文字列フィールドのフィールドコードを追記する。追加の仕方は下記を参考にする。(追加したフィールドコードが「氏名」の場合)
    ```
    // レコードタイトル生成用
    const recordTitleFields = ['氏名', 'no'];

    // lookupKey生成用
    const lookupKeyFields = ['氏名', 'no'];
    ```

# カスタマイズアプリテンプレート(共通ファイル無し)の使い方
1. 「カスタマイズアプリテンプレート(共通ファイル無し).zip」をダウンロードする。
2. ダウンロードしたzipファイルを元にkintoneアプリを作成する。
3. 作成したアプリにレコード作成時にキーととなるような文字列フィールドを追加する。このとき、フィールドコードを適宜変更しておく。
4. 作成したアプリ内のプラグインの「JSEdit for kintone」を使って、template_c.js内の下記箇所に、追加した文字列フィールドのフィールドコードを追記する。追加の仕方は下記を参考にする。(追加したフィールドコードが「氏名」の場合)
    ```
    // レコードタイトル生成用
    const recordTitleFields = ['氏名', 'no'];

    // lookupKey生成用
    const lookupKeyFields = ['氏名', 'no'];
    ```
5. 「kintoneシステム管理＞JavaScript / CSSでカスタマイズ」内の『PC用のJavaScriptファイル』『スマートフォン用のJavaScriptファイル』に「kintone-js-sdk.min.js」「kintone_tools.min.js」を追加する。  
この時、「kintone-js-sdk.min.js」の下に「kintone_tools.min.js」をセットする。
