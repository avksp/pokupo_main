var AnimateGoods = function () {
    _$('.b-catalog-item__photos').fotorama({
        width: 313,
        allowfullscreen: true,
        loop: true,
        autoplay: false,
        stopautoplayontouch: true,
        nav: 'thumbs',
        thumbwidth: 65,
        thumbheigth: 60,
        thumbmargin: 5,
        thumbborderwidth: 4,
        arrows: false,
        shadows: true,
        transition: 'slide'
    });

    _$('#more_block .tab__trigger').click(function () {
        var _$this = _$(this);
        _$this.siblings()
                .removeClass('selected');
        _$this.addClass('selected')
                .next()
                .addClass('selected');
    });
    _$('#opinion_btn').click(function(){
        _$('#more_block .tab__trigger, #more_block .tab__content').removeClass('selected');
        _$('#opinion, #opinion_content').addClass('selected');

        _$('html,body').animate({
                scrollTop: _$("#opinion").offset().top},
            'slow');
    });
    
    _$('#btn_to_cart').click(function () {
        var item = _$('.b-catalog-item .fotorama__stage__shaft .fotorama__active');

        var x = item.offset().left,
                y = item.offset().top,
                tx = _$('.menu-login').offset().left + 60;


        item.clone()
                .appendTo(_$('body'))
                .addClass('hallucination')
                .css({
                    position: 'absolute',
                    left: x,
                    top: y,
                    zIndex: 999
                })
                .animate({
                    opacity: 0.5,
                    left: tx,
                    top: 0,
                    width: 50,
                    height: 100
                },
                600,
                        function () {
                            _$(this).remove();
                        }
                );
    });
    if(typeof (Ya) != 'undefined'){
        new Ya.share({
            element: 'ya_share'
        });
    }
    if(typeof (_$('[rel=tooltip]').tooltip) == 'function')
        _$('[rel=tooltip]').tooltip();
};