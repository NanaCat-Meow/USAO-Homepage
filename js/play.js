$(function () {
    $(".music-thumb").on("click", function () {
        if ($('.sp-spacer').is(':visible')) { //スマートフォン判定if (今回は使用しない)//
            // window.open('https://www.youtube.com/embed/Trg3AeJNsbs?rel=0&autoplay=1', '_blank');
        } else {
            videoControl("playVideo", $(this).prev("iframe"));
            $(this).hide();
        }
    });
    function videoControl(action, tgt) {
        var $playerWindow = $(tgt)[0].contentWindow;
        $playerWindow.postMessage('{"event":"command","func":"' + action + '","args":""}', '*');
    }
});

// 読み込んだらフェードアウト
$(window).load(function () {
    // 消えるタイミングはお好みで
    $('.loadpos').delay(1500).fadeOut(300);
});
// 10秒待っても読み込みが終わらない時は強制的にローディング画面をフェードアウト
function stopload() {
    $('.loadpos').delay(1000).fadeOut(700);
}
setTimeout('stopload()', 10000);

function msg() {
    alert("現在販売されておりません。");
}