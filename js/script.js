$(document).ready(function(){
    $(".typing").typed({
        strings:["UX/UI Designer","Web Designer","Front-end Developer"],
        typeSpeed:50,
        startDelay:0,
        backSpeed: 35,
        backDelay: 450,
        loop: true,
        cursorChar:"",
        contextType: 'html'
    });
    var scrollLink = $('.scroll');
    var navElement = $("header");
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
                /*$(this).parent().sibling().child().removeClass('active');*/
                console.log($(this).parent().parent().children().children().removeClass('active'));
                $(this).addClass('active');
                
                console.log("hello");
            
                
            }
        });
    })

});


