$(document).ready(function(){
    var scrollLink = $('.scroll');
    var navElement = $("header");
    $('.lightb').simpleLightbox();
    //smooth scrolling
    scrollLink.click(function(e){
        
        $('body,html').animate({scrollTop:$(this.hash).offset().top -75}, 700);
    });
    

    //active link switch hide show nav bg
    $(window).scroll(function(){
        var scrollbarRealLoc = $(this).scrollTop();
        if (scrollbarRealLoc > 0 ){
            navElement.addClass('show');
        }else{
            navElement.removeClass('show');
        }
        
            
                
        });
    

});
