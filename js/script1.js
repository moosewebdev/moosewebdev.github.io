$(document).ready(function(){
    var scrollLink = $('.scroll');
    var navElement = $("header");
    $('.lightb').simpleLightbox();
    
    
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
        
            
                
        });
    

});
