$(document).ready(function () {

    $('.header__hamburger').click(function (e) {
        e.preventDefault();
        $('.header__hamburger').toggleClass('state-active');
        $('.header__menu').toggleClass('state-active');
        $('body').toggleClass('state-lock');
    });

    $('.intro__menu-showHover').on('mouseenter', function () {
        var ourClass = $(this).attr('data-cat');
        $('.intro__menu-showHover').removeClass('state-active');
        $(this).addClass('state-active');
        $('.intro__top').addClass('state-active');
        $('#intro__picture').removeClass().addClass(
            $(this).attr('data-cat'));
        $('.intro__title:not([data-cats=' + ourClass + '])').hide();
        $('.intro__title[data-cats*=' + ourClass + ']').show();
        return false;
    });

    var $root = $('html, body');

    $('a[href^="#"]').click(function () {
        $root.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        return false;
    });

});