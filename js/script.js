$(document).ready(function(){
    $(".typing").typed({
        strings:["UX/UI Designer.","Product Designer.","Web Designer."],
        typeSpeed:50,
        startDelay:0,
        backSpeed: 35,
        backDelay: 450,
        loop: true,
        cursorChar:"",
        contextType: 'html'
    });
  


    // menu open fa and close
    var scrollLink = $('.scroll');
    var navElement = $("header");
    var responsiveNav = $('.rMenu');
    var togElement = $('#toggle');
    var toggle = false;
    var newIcon = '<i class="fas fa-times"></i>';
    var oldIcon = '<i class="fa fa-bars"></i>';

    $('#toggle').click(function(){
        console.log('clicked');

        if (toggle == false){
            responsiveNav.addClass('rMenuShow'); 
            toggle = true; 
            togElement.html(newIcon); 
        } else if (toggle == true) {
            responsiveNav.removeClass('rMenuShow');
            toggle = false;
            togElement.html(oldIcon);

        }

    });


    


    //smooth scrolling
    scrollLink.click(function(e){
        e.preventDefault();
        $('body,html').animate({scrollTop:$(this.hash).offset().top -75}, 700);
        responsiveNav.removeClass('rMenuShow');
        togElement.html(oldIcon);
        toggle = false;
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


