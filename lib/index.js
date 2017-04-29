
$(document).ready(function(){
    
    $('.ui.sticky').sticky({
        context: '#fullpage'
    });

    $('.ui.sticky.menubar').visibility({
        type: 'fixed',
    });

    $('.contactbutton').click(function() {
        $('html, body').animate({
            scrollTop: $("#footer").offset().top - 140
        });
    });

    window.onscroll = function(ev) {
        if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
          $('#footer').addClass('showFooter');
        } else {
          $('#footer').removeClass('showFooter');
        }
    };


});
