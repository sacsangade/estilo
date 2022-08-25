(function ($) {
    "use strict";

    // Window on load
    $(window).on('load', function () {

        /*-----------------
            preloader
        ------------------*/
        var preLoder = $("#preloader");
        preLoder.fadeOut(50);

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