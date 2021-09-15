// index.js



$(document).ready(function () {



    //1)Header - 메뉴 //////////////////////////////

    $('nav.menu').mouseover(function () {
        $('div.sub').stop().slideDown(600);
    }); //mouseover

    $('div.inner-sub').mouseleave(function () {
        $('div.sub').stop().slideUp(600);
    }); //mouseleave






    //2)Main - 메뉴 //////////////////////////////


$(window).scroll(function () {
    //현재 스크롤바 위치
    var scrollT = $(this).scrollTop();
    console.log('스크롤 위치: ' + scrollT); //300정도?
    
    //scrollT이 100보다 커졌을때,
    if (scrollT > 0) {
        
        $('div.image-box>img').css({
           transform: 'scale(1.5)',
            transition: 'all 6s 0.5s',
        });

    };//if



}); //scroll






    //3)Vote Room - 버튼 //////////////////////////////

    $('a.vote-btnL').click(function (e) {

        e.preventDefault();
        console.log('이동막기 : ');

        $('div.vote-wrap').animate({
            marginLeft: '+=' + '720px' //-600씩 중첩
        }, 'slow', function () {
            $('.vote-box:last').prependTo('.vote-wrap');
            $('.vote-wrap').css('margin-left', 0);
        }) //animate
    }); //click()


    $('a.vote-btnR').click(function (e) {

        e.preventDefault();
        console.log('이동막기 : ');

        $('div.vote-wrap').animate({
            marginLeft: '-=' + '720px' //+600씩 중첩
        }, 'slow', function () {
            $('.vote-box:first').appendTo('.vote-wrap');
            $('.vote-wrap').css('margin-left', 0);
        }) //animate
    }); //click()



    //4)News Room - 버튼 //////////////////////////////



    //5)Video Room - 버튼 //////////////////////////////



    //6)Sns Room - 버튼 //////////////////////////////




    //7)Sponsors Room - 버튼 //////////////////////////////

    //-1. 오른쪽으로 이동하는 함수 만들기
    var page = 0;

    page++; //1증하고 시작


    function automove() {

        if (page == 5) {
            $('.sponsors-container').css({
                left: 0
            });
            page = 1;
        } //if

        $('.sponsors-container').animate({
            left: 300 * -page
        });

    } //automove() 함수
    
    //자동 변수
        var slide = setInterval(function () {
            automove();
        }, 1000);
    
    



}); //jQuery
