// about_history.js - onePage_scrollaction



$(window).scroll(function () {
    //현재 스크롤바 위치
    var scrollT = $(this).scrollTop();
    console.log('스크롤 위치: ' + scrollT); //300정도?
    
    //scrollT이 100보다 커졌을때,
    if (scrollT > 100) {
        
        $('div.history-tit').css({
            color: 'purple',
            transition: 'all .8s 0.5s'
        });
        
        $('div.years').css({
            display: 1,
            top: '+5px',
            transition: 'all .8s 0.5s'
        });
        
        $('div.years>h3').css({
            color: 'purple',
            transition: 'all .8s 1s'
        });

        $('div.history-box>span.line').css({
            color: 'purple',
            transition: 'all .8s 1s'
        });
        
        $('div.history-box>span.color-line').css({
            transform: 'scaleY(1)'
        });
        
        $('div.content-wrap').css({
            top: '+5px',
            transition: 'all .8s'
        });

    };//if



}); //scroll


$(document).ready(function () {

    //새로고침 시에, 스크롤 위치 처음으로 변경(가장 상단으로 이동)
    $('html, body').stop().animate({
        scrollTop: '0'
    }, 100);



}); //jQuery





















