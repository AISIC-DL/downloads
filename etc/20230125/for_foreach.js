// // ==================================================
// // for文を使ったコード
// // ==================================================
// (() => {
//   'use strict';

//   kintone.events.on([
//     'app.record.create.submit',
//     'app.record.edit.submit',
//     'app.record.index.edit.submit'
//   ], event => {

//     const record = event.record;

//     console.log('処理開始');

//     for (let i = 0; i < record.一覧.value.length; i++) {
//       if (record.一覧.value[i].value.行番号.value === record.対象行番号.value) {
//         record.一覧.value[i].value.内容.value = record.セット文字.value;
//         console.log(i + '行目：内容を上書きする。');
//         return event;
//       } else {
//         console.log(i + '行目：なにもしない。');
//       }
//     }

//     console.log('処理終了');

//     return event;
//   });
// })();


// ==================================================
// forEachを使ったコード
// ==================================================
(() => {
  'use strict';

  kintone.events.on([
    'app.record.create.submit',
    'app.record.edit.submit',
    'app.record.index.edit.submit'
  ], event => {

    const record = event.record;

    console.log('処理開始');

    record.一覧.value.forEach((v, i) => {
      if (v.value.行番号.value === record.対象行番号.value) {
        v.value.内容.value = record.セット文字.value;
        console.log(i + '行目：内容を上書きする。');
        return event;
      } else {
        console.log(i + '行目：なにもしない。');
      }
    });

    console.log('処理終了');

    return event;
  });
})();
