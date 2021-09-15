// common.js


$(document).ready(function(){

    $('ul.bar-smenu').mouseenter(function(){
        $('ul.down-smenu').stop().slideDown(500);
    }); //Mouseenter

    $('ul.down-smenu').mouseleave(function(){
        $('ul.down-smenu').stop().slideUp(500);
    }); //Mouseleave


}); //jQuery