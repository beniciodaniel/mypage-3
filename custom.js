(function ($) {

    function mediaSize() {
        
        if (window.matchMedia('(min-width: 2000px)').matches) {

            $('section > div').addClass('col-lg-3');

        } else {
            
            $('section > div').removeClass('col-lg-3');
        }
    };

    /* Call the function */
    mediaSize();
    /* Attach the function to the resize event listener */
    window.addEventListener('resize', mediaSize, false);

})(jQuery);