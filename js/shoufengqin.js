$(function(){
    $('.banner .pic').mouseenter(function(){
        $(this).children().css('opacity','0')
        $(this).css('width',400)
        $(this).siblings().css('width',160)
    })
    $('.banner .pic').mouseleave(function(){
        $(this).children().css('opacity','0')
        $('.pic').css('width',200)
    })
    // $('.banner .pic').mouseenter(function(){
    //     $(this).children().css('opacity','0')
    //     $(this).stop().animate({'width':400},300)
    //     $(this).siblings().stop().animate({'width':160},300)
    // })
    // $('.banner .pic').mouseleave(function(){
    //     $(this).children().css('opacity','0')
    //     $('.pic').stop().animate({'width':200},300)
    // })
})