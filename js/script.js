$(document).ready(function(){

    var scrollLink = $('.scroll');
    var navElement = $("nav");
    //smooth scrolling
    scrollLink.click(function(e){
        e.preventDefault();
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
        var scrollbarLocation = $(this).scrollTop() + 100;
        console.log(scrollbarLocation);
        console.log(scrollbarLocation -75);
        scrollLink.each(function(){

            var sectionOffset = $(this.hash).offset().top;

            if (sectionOffset <= scrollbarLocation){
                
                $(this).addClass('active');
                $(this).siblings().removeClass('active');
                console.log("hello");
            
                
            }
        });
    })

});
