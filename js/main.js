(function ($) {
    "use strict";

    // Navbar on scrolling
    $(window).on('scroll', {passive: true}, function () {
        if ($(this).scrollTop() > 200) {
            if (!$('.navbar-toggler').hasClass('collapsed')) {
                // Close the navbar collapse on scroll
                $('.navbar-toggler').click();
            }
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');

            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });


    // Scroll to Bottom
    $(window).on('scroll', {passive: true}, function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-bottom').fadeOut('slow');
        } else {
            $('.scroll-to-bottom').fadeIn('slow');
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });


    // Back to top button
    $(window).on('scroll', {passive: true}, function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').on('click', function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Gallery carousel
    $(".gallery-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            },
            1200:{
                items:5
            }
        }
    });

})(jQuery);

// Get the action button and popup container elements
// Gift popup functionality
document.addEventListener('DOMContentLoaded', function() {
    // Gift popup
    const giftBtn = document.getElementById('giftBtn');
    const popupOverlay = document.getElementById('popupOverlay');
    const closePopupBtn = document.getElementById('close-popup');

    if (giftBtn && popupOverlay && closePopupBtn) {
        // Open gift popup
        giftBtn.addEventListener('click', function() {
            popupOverlay.style.display = 'flex';
            void popupOverlay.offsetWidth;
            popupOverlay.classList.add('active');
        }, { passive: true });

        // Close gift popup
        function closeGiftPopup() {
            popupOverlay.classList.remove('active');
            setTimeout(() => {
                popupOverlay.style.display = 'none';
            }, 300);
        }

        closePopupBtn.addEventListener('click', closeGiftPopup, { passive: true });
        popupOverlay.addEventListener('click', function(e) {
            if (e.target === popupOverlay) {
                closeGiftPopup();
            }
        }, { passive: true });
    }

    // Travel popup
    const travelBtn = document.getElementById('travelBtn');
    const travelOverlay = document.getElementById('travelOverlay');
    const closeTravelBtn = document.getElementById('close-travel');

    if (travelBtn && travelOverlay && closeTravelBtn) {
        // Open travel popup
        travelBtn.addEventListener('click', function() {
            travelOverlay.style.display = 'flex';
            void travelOverlay.offsetWidth;
            travelOverlay.classList.add('active');
        }, { passive: true });

        // Close travel popup
        function closeTravelPopup() {
            travelOverlay.classList.remove('active');
            setTimeout(() => {
                travelOverlay.style.display = 'none';
            }, 300);
        }

        closeTravelBtn.addEventListener('click', closeTravelPopup, { passive: true });
        travelOverlay.addEventListener('click', function(e) {
            if (e.target === travelOverlay) {
                closeTravelPopup();
            }
        }, { passive: true });
    }
});

