// contact_question.js



$(document).ready(function(){
    
    //더보기 버튼을 클릭시,
    $('section>a').click(function(e){
        
        //이동막기
        e.preventDefault();
        
        //li.question-wrap 보여주면서 내려가기
        $('li.question-wrap').slideDown(500).show()
        
        $('article.question').css({
            height: '+800px'
        })
    });
    
});//jQuery