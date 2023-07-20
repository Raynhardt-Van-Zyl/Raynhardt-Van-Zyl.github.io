$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

    // Show "scroll to top" button when scrolling down
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#scrollTop').fadeIn();
        } else {
            $('#scrollTop').fadeOut();
        }
    });

    // Scroll to top when the "scroll to top" button is clicked
    $('#scrollTop').click(function() {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('#scrollTop').fadeIn();
    } else {
        $('#scrollTop').fadeOut();
    }
});

$('#scrollTop').click(function() {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
});

