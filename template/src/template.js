//=============================================================================
//【ファイル名】
//    template.js
//【アプリ名】
//    テンプレート
//-----------------------------------------------------------------------------
//  Copyright (c) 2020 AISIC.Inc
//=============================================================================

(function () {
    'use strict';
    // =============================================
    // イベントモード
    // =============================================
    const EVENT_HANDLER_MODE = KintoneTools.isMobileMode() ? 'mobile.': '';

    // =============================================
    // 定数
    // =============================================
    // レコードタイトル生成用
    const recordTitleFields = ['no'];

    // lookupKey生成用
    const lookupKeyFields = ['no'];

    // =============================================
    // 共通関数
    // =============================================
    // ---------------------------------------------
    // 共通入力画面制御
    // ---------------------------------------------
    const setCommonInputCtrl = record => {
        
        record.uid.disabled = true;
        record.no.disabled = true;
        record.lookup_key.disabled = true;
        record.record_title.disabled = true;

    };  // setCommonInputCtrl

    // ---------------------------------------------
    // validation
    // ---------------------------------------------
    const validation = event => {
        
        const record = event.record;
        
        let errorFlg = false;
        
        let errorMsg = '';

        //     if (record.XXXXX.value) {
        //         record.XXXXX.error = '入力しないでください。';
        //         errorFlg = true;
        //     }
        // }

        if (errorFlg === true) {
            event.error = '入力内容に不備があります。';
        }
        
    };  // validation

    // =============================================
    // ADD EVENT HANDLER
    // =============================================
    // ---------------------------------------------
    // EVENT:create.show
    // ---------------------------------------------
    kintone.events.on([
        EVENT_HANDLER_MODE + 'app.record.create.show'
    ], async event => {
        const record = event.record;
        
        setCommonInputCtrl(record);
    
        return event;
    }); // create.show

    // ---------------------------------------------
    // EVENT:create.submit
    // ---------------------------------------------
    kintone.events.on([
        EVENT_HANDLER_MODE + 'app.record.create.submit'
    ], async event => {
        const record = event.record;
        
        validation(event);
        if (event.error) {
            return event;
        }
    
        try {
            const client = new KintoneRestAPIClient();
    
            let resp = await client.record.getRecords({
                "app": KintoneTools.getThisAppId(),
                "query": 'order by uid desc limit 1',
                "isGuest": true
            }).then(function(resp) {
                console.log(resp);
                return resp;
            }).catch(function(error) {
                console.log(error);
                return Promise.reject(new Error('GET : ' + KintoneTools.getThisAppId() + ' / ' + error.message));
            });
            console.log(resp);
    
            KintoneTools.setNextUid(record, resp.records);
            record.no.value = record.uid.value;
            KintoneTools.setLookupKey(record, lookupKeyFields);
            KintoneTools.setRecordTitle(record, recordTitleFields);
    
        } catch (error) {
            console.log(error);
            event.error = error;
        } finally {
            return event;
        }
    }); // create.submit

    // ---------------------------------------------
    // EVENT:create.submit.success
    // ---------------------------------------------
    kintone.events.on([
        EVENT_HANDLER_MODE + 'app.record.create.submit.success'
    ], async event => {
        const record = event.record;
    
        return event;
    }); // create.submit.success

    // // ---------------------------------------------
    // // [Promise非対応]
    // // EVENT:create.change.<field_code>
    // // ---------------------------------------------
    // kintone.events.on([
    //     EVENT_HANDLER_MODE + 'app.record.create.change.<field_code>'
    // ], event => {
    //     const record = event.record;
    
    //     return event;
    // }); // create.change.<field_code>

    // ---------------------------------------------
    // EVENT:edit.show
    // ---------------------------------------------
    kintone.events.on([
        EVENT_HANDLER_MODE + 'app.record.edit.show', 'app.record.index.edit.show'
    ], async event => {
        const record = event.record;
        
        setCommonInputCtrl(record);
    
        return event;
    }); // edit.show

    // ---------------------------------------------
    // EVENT:edit.submit
    // ---------------------------------------------
    kintone.events.on([
        EVENT_HANDLER_MODE + 'app.record.edit.submit', 'app.record.index.edit.submit'
    ], async event => {
        const record = event.record;
        
        validation(event);
        if (event.error) {
            return event;
        }
        
        KintoneTools.setLookupKey(record, lookupKeyFields);
        KintoneTools.setRecordTitle(record, recordTitleFields);
    
        return event;
    }); // edit.submit

    // ---------------------------------------------
    // EVENT:edit.submit.success
    // ---------------------------------------------
    kintone.events.on([
        EVENT_HANDLER_MODE + 'app.record.edit.submit.success', 'app.record.index.edit.submit.success'
    ], async event => {
        const record = event.record;
    
        return event;
    });

    // ---------------------------------------------
    // [Promise非対応]
    // EVENT:edit.change.<field_code>
    // ---------------------------------------------
    kintone.events.on([
        EVENT_HANDLER_MODE + 'app.record.edit.change.<field_code>', 'app.record.index.edit.change.<field_code>'
    ], event => {
        const record = event.record;
    
        return event;
    }); // edit.change.<field_code>

    // ---------------------------------------------
    // EVENT:detail.show
    // ---------------------------------------------
    kintone.events.on([
        EVENT_HANDLER_MODE + 'app.record.detail.show'
    ], async event => {
        const record = event.record;
    
        return event;
    }); // detail.show

    // ---------------------------------------------
    // EVENT:delete.submit
    // ---------------------------------------------
    kintone.events.on([
        EVENT_HANDLER_MODE + 'app.record.detail.delete.submit', 'app.record.index.delete.submit'
    ], async event => {
        const record = event.record;
    
        return event;
    }); // delete.submit

    // ---------------------------------------------
    // EVENT:process.proceed
    // ---------------------------------------------
    kintone.events.on([
        EVENT_HANDLER_MODE + 'app.record.detail.process.proceed'
    ], async event => {
        const record = event.record;
    
        return event;
    }); // process.proceed

    // ---------------------------------------------
    // EVENT:index.show
    // ---------------------------------------------
    kintone.events.on([
        EVENT_HANDLER_MODE + 'app.record.index.show'
    ], async event => {
        const record = event.record;
    
        return event;
    }); // index.show

    // ---------------------------------------------
    // EVENT:print.show
    // ---------------------------------------------
    kintone.events.on([
        'app.record.print.show'
    ], async event => {
        const record = event.record;
    
        return event;
    }); // print.show

    // ---------------------------------------------
    // EVENT:report.show
    // ---------------------------------------------
    kintone.events.on([
        EVENT_HANDLER_MODE + 'app.record.report.show'
    ], async event => {
        const record = event.record;
    
        return event;
    }); // report.show

    // ---------------------------------------------
    // EVENT:portal.show
    // ---------------------------------------------
    kintone.events.on([
        EVENT_HANDLER_MODE + 'portal.show'
    ], async event => {
        const record = event.record;
    
        return event;
    }); // portal.show
})();

