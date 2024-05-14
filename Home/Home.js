window.addEventListener('touchstart', touchStartHandler);

// Example event listener with passive option
window.addEventListener('touchstart', touchStartHandler, { passive: true });

function touchStartHandler(event) {
  // Your event handling code goes here
}


$(document).ready(function () {
    $(".main-banner").slick({
        loop: true,
        slidesToShow: 1,
        arrows: false,
    });
    $(".favorite-products").slick({
        loop: true,
        slidesToShow: 4,
        arrows: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

});

$(document).ready(function () {
    function toggleMenu() {
        $('.nav-items').toggleClass('active');
        $('body').toggleClass('active');
        $('.overlay').toggleClass('active');
    }

    $('.section-title').click(function () {
        $(this).next('.content').toggleClass('active');
        $(this).find('.expand').toggleClass('active');
    });

    $('.menu').click(function () {
        toggleMenu();
    });

    $('.close').click(function () {
        $('.nav-items').removeClass('active');
        $('body').removeClass('active');
        $('.overlay').removeClass('active');
    });

    $(document).on('click', function (event) {
        if (!$(event.target).closest('.nav-items').length && !$(event.target).hasClass('menu')) {
            $('.nav-items').removeClass('active');
            $('body').removeClass('active');
            $('.overlay').removeClass('active');
        }
    });
});

