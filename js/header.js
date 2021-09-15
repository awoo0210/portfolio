// header.js

$(document).ready(function() {
            $('nav.menu').mouseenter(function() {
                $('div#sub').stop().slideDown()
            }); //mouseenter

            $('.inner-sub').mouseleave(function() {
                $('div#sub').stop().slideUp();
            }); //mouseleave
        });