_$(window).scroll(function(){
    var $scrollup = _$('.back-to-top');
    if (_$(this).scrollTop() > 120) { $scrollup.fadeIn(); _$('header').addClass("sticky"); }
    else { $scrollup.fadeOut(); _$('header').removeClass("sticky"); }
});


console.log(pjQuery('.back-to-top').length);
pjQuery('.back-to-top').click(function () {
    pjQuery("html, body").animate({
        scrollTop: 0
    }, 600);
    return false;
});