// ==UserScript==
// @name         mute-wordle-mastodon
// @version      0.1
// @description  mute wordle
// @author       @raito@mistodon.cloud
// @match        https://mistodon.cloud/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @require      https://code.jquery.com/jquery-3.3.1.js
//
// 以下のサイトを参考にさせてもらいました。コードをパクらせていただきました。感謝します。
// https://qiita.com/BlueRayi/items/2effe1b7f9784eef249f
//
// ==/UserScript==

/* globals $ */

(function() {
    'use strict';
    /* ミュートしたい単語のリスト */
    const wordmute_list = [
        ':large_green_square:',
        ':large_yellow_square:',
        ':black_large_square:',
    ];
    const observer = new MutationObserver(records => {
        wordmute_list.forEach(element => {
            $('div.status__content__text').find(`img[title="${element}"]`).closest('p').replaceWith('<span style="background-color:#020203">mute-wordle-mastodonがこの投稿をミュートしました</spam>');
        });
    });
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();
