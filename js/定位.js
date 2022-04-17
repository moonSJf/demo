$(function(){
    $('.banner .pic').eq(0).mouseenter(function(){
        $(this).children().css('opacity','0')
        $('.banner .pic').eq(1).stop().animate({'left':400},300)
        $('.banner .pic').eq(2).stop().animate({'left':560},300)
        $('.banner .pic').eq(3).stop().animate({'left':720},300)
        $('.banner .pic').eq(4).stop().animate({'left':880},300)
        $('.banner .pic').eq(5).stop().animate({'left':1040},300)
    })
    $('.banner .pic').mouseleave(function(){
        $(this).children().css('opacity','0.2')
        $('.banner .pic').eq(1).stop().animate({'left':200},300)
        $('.banner .pic').eq(2).stop().animate({'left':400},300)
        $('.banner .pic').eq(3).stop().animate({'left':600},300)
        $('.banner .pic').eq(4).stop().animate({'left':800},300)
        $('.banner .pic').eq(5).stop().animate({'left':1000},300)
    })

    $('.banner .pic').eq(1).mouseenter(function(){
        $(this).children().css('opacity','0')
        $('.banner .pic').eq(1).stop().animate({'left':160},300)
        $('.banner .pic').eq(2).stop().animate({'left':560},300)
        $('.banner .pic').eq(3).stop().animate({'left':720},300)
        $('.banner .pic').eq(4).stop().animate({'left':880},300)
        $('.banner .pic').eq(5).stop().animate({'left':1040},300)
    })

    $('.banner .pic').eq(2).mouseenter(function(){
        $(this).children().css('opacity','0')
        $('.banner .pic').eq(1).stop().animate({'left':160},300)
        $('.banner .pic').eq(2).stop().animate({'left':320},300)
        $('.banner .pic').eq(3).stop().animate({'left':720},300)
        $('.banner .pic').eq(4).stop().animate({'left':880},300)
        $('.banner .pic').eq(5).stop().animate({'left':1040},300)
    })
   
    $('.banner .pic').eq(3).mouseenter(function(){
        $(this).children().css('opacity','0')
        $('.banner .pic').eq(1).stop().animate({'left':160},300)
        $('.banner .pic').eq(2).stop().animate({'left':320},300)
        $('.banner .pic').eq(3).stop().animate({'left':480},300)
        $('.banner .pic').eq(4).stop().animate({'left':880},300)
        $('.banner .pic').eq(5).stop().animate({'left':1040},300)
    })
  
    $('.banner .pic').eq(4).mouseenter(function(){
        $(this).children().css('opacity','0')
        $('.banner .pic').eq(1).stop().animate({'left':160},300)
        $('.banner .pic').eq(2).stop().animate({'left':320},300)
        $('.banner .pic').eq(3).stop().animate({'left':480},300)
        $('.banner .pic').eq(4).stop().animate({'left':640},300)
        $('.banner .pic').eq(5).stop().animate({'left':1040},300)
    })
   
    $('.banner .pic').eq(5).mouseenter(function(){
        $(this).children().css('opacity','0')
        $('.banner .pic').eq(1).stop().animate({'left':160},300)
        $('.banner .pic').eq(2).stop().animate({'left':320},300)
        $('.banner .pic').eq(3).stop().animate({'left':480},300)
        $('.banner .pic').eq(4).stop().animate({'left':640},300)
        $('.banner .pic').eq(5).stop().animate({'left':800},300)
    })
   
})