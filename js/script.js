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

(function () {
    const items = document.querySelectorAll(".timeline-section li");
  
    function isElementInViewport(el) {
      let rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function slideIn() {
      for (let i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          items[i].classList.add("slide-in");
        } else {
          items[i].classList.remove("slide-in");
        }
      }
    }
  
    window.addEventListener("load", slideIn);
    window.addEventListener("scroll", slideIn);
    window.addEventListener("resize", slideIn);
  })();

