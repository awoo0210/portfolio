//about_membernation.js



$(window).scroll(function () {
    //현재 스크롤바 위치
    var scrollT = $(this).scrollTop();
    console.log('스크롤 위치: ' + scrollT); //300정도?
    
    //scrollT이 100보다 커졌을때,
    if (scrollT > 100) {
        
        $('ul.nation-wrap').css({
            top: '+5px',
            transition: 'all .8s 0.5s'
        });

    };//if



}); //scroll

$(document).ready(function(){
    
    
    
    
    
});//jQuery