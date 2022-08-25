(function ($) {
    "use strict";

    // Wow intialize
    new WOW().init();
    
    // Window on load
    $(window).on('load', function () {

        /*-----------------
            preloader
        ------------------*/
        var preLoder = $("#preloader");
        preLoder.fadeOut(50);

    });

    //Window on Scroll
    $(window).on("scroll", function () {
		var scroll = $(window).scrollTop();

		if (scroll >= 100) {
			$("header").addClass("headerbg");
		} else {
			$("header").removeClass("headerbg");
		}

	});
    // Document  ready
    $(document).ready(function() {
        /*-----------------
            Mobile Menu
        ------------------*/
        $(".btn-menu").on('click', function (){
        $(".main-menu").addClass('open');
        });

        $(".main-menu .btn-close").on('click', function (){
            $(this).parent().removeClass('open');
        });
    });    


})(jQuery);