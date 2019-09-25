$(document).ready(function(){

    var scrollLink = $('.scroll');

    //smooth scrolling
    scrollLink.click(function(e){
        e.preventDefault();
        $('body,html').animate({scrollTop:$(this.hash).offset().top -75}, 700);
    });

    //active link switch
    $(window).scroll(function(){
        var scrollbarLocation = $(this).scrollTop() + 100;
        console.log(scrollbarLocation);
        console.log(scrollbarLocation -75);
        scrollLink.each(function(){
            var sectionOffset = $(this.hash).offset().top;
            if (sectionOffset <= scrollbarLocation){
                $('.scroll').removeClass('active');
                $(this).addClass('active');
            }else if (scrollbarLocation < 1237) {
                $('.scroll').removeClass('active');
                
            }
        });
    })

});
