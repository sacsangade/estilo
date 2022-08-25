(function ($) {

    "use strict";
    
    //Owl Carousel Start
    function startCarousel(){

        /*-----------------
            Blog Carousel
        ------------------*/
        $('#blog-carousel').owlCarousel({
            center: true,
            items:2,
            loop:true,
            nav:false,
            dots:false,
            margin:30,
        });

        /*-----------------
            Client Carousel
        ------------------*/
        $('#client-logo-carousel').owlCarousel({
            loop:true,
            margin:50,
            nav:false,
            dots:false,
            responsive:{
                0: {
                    items:2
                },
                768: {
                    items:4
                },
                992: {
                    items:6
                }
                }
        });
    }

    //Owl Carousel Start
    function stopCarousel() {
        var owl = $('.owl-carousel');
        owl.trigger('destroy.owl.carousel');
        owl.addClass('off');
    }  
    /*-----------------
        Client Carousel
    ------------------*/
    $('#work-carousel').owlCarousel({
        center: true,
        items:2,
        loop:true,
        nav:false,
        dots:false,
        margin:30,
    });

    /*----------------------------
        Desktop Carousel Show
    ------------------------------*/
    if ( $(window).width() > 767 ) {
        startCarousel();
    }
    else
    {
        $('.owl-carousel').addClass('off');   
    }
       
    //Window on Resize
    $(window).on('resize', function(){
        
        /*----------------------------
        Desktop Carousel Show
        ------------------------------*/
        const widthwin = $(this).width()
        if ( widthwin > 767 ) {
            startCarousel();
        }
        else
        {
            stopCarousel();  
        }
    });

})(jQuery);

