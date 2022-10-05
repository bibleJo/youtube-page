$(document).ready(function(){
    let arrow = 0;
    $('.arrow').click(function(){
        if(arrow == 0){
            arrow = 1
            $(this).css({'transform':'rotate(180deg)'})
        }
        else if(arrow  == 1){
            arrow = 0
            $(this).css({'transform':'rotate(0deg)'})
        }
        $(this).siblings('.main_overflow').slideToggle()
    })

})