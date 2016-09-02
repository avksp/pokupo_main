var AnimateStandalonePayment = function () {

    _$('html').addClass('pkp_html');
    _$('body').addClass('pkp_body');

    if(_$.isFunction('selecter'))
        _$(".j-pkp-select").selecter({
            label: "По умолчанию"
        });

    /*scrollbar*/
    _$(".j-scroll").mCustomScrollbar();

    /*rollup*/
    _$('.j-pkp-rollup__trigger').on('click', function (e) {
        _$(this).toggleClass('pkp-rollup__trigger_closed').parent().find('.j-pkp-rollup__content').slideToggle();
        e.preventDefault();
    });

    /*валидация*/
    _$('.j-pkp-payment').on('submit', function () {
        var form = _$(this);
        var input = form.find('.j-pkp-req-input');
        var pattern = /\w+@\w+\.\w{2,6}/gi;
        var errorMsg = input.siblings('.pkp-error-msg');
        if (input.val().length === 0) {
            input.addClass('pkp-input_error');
            errorMsg.text('Обязательное поле').fadeIn();
            return false;
        }
        if (!pattern.test(input.val())) {
            input.addClass('pkp-input_error');
            errorMsg.text('Введите e-mail корректно').fadeIn();
            return false;
        }
        if (pattern.test(input.val())) {
            input.removeClass('pkp-input_error');
            errorMsg.fadeOut();
        }
    });

    /* tooltips */
    function toolTips() {
        var container = _$('#pkp-container'),
            containerWidth = container.outerWidth();
        if (containerWidth <= 800 && containerWidth >= 784) {
            _$('.pkp-payment-method .pkp-payment-method__item:nth-child(3n + 1)').each(function () {
                _$(this).find('.pkp-tooltip__content').removeAttr('class').addClass('pkp-tooltip__content pkp-tooltip__content_left');
            });
            _$('.pkp-payment-method .pkp-payment-method__item:nth-child(3n + 2)').each(function () {
                _$(this).find('.pkp-tooltip__content').removeAttr('class').addClass('pkp-tooltip__content pkp-tooltip__content_center');
            });
            _$('.pkp-payment-method .pkp-payment-method__item:nth-child(3n + 3)').each(function () {
                _$(this).find('.pkp-tooltip__content').removeAttr('class').addClass('pkp-tooltip__content pkp-tooltip__content_right');
            });
        }

        if (containerWidth < 795 && containerWidth >= 554) {
            _$('.pkp-payment-method .pkp-payment-method__item:nth-child(2n+1)').each(function () {
                _$(this).find('.pkp-tooltip__content').removeAttr('class').addClass('pkp-tooltip__content pkp-tooltip__content_left');
            });
            _$('.pkp-payment-method .pkp-payment-method__item:nth-child(2n)').each(function () {
                _$(this).find('.pkp-tooltip__content').removeAttr('class').addClass('pkp-tooltip__content pkp-tooltip__content_right');
            });
        }

        if (containerWidth < 554) {
            _$('.pkp-payment-method .pkp-payment-method__item').each(function () {
                _$(this).find('.pkp-tooltip__content').removeAttr('class').addClass('pkp-tooltip__content pkp-tooltip__content_center');
            });
        }
    }

    /*стили привязаны к размеру контейнера*/
    function media() {
        var container = _$('#pkp-container'),
            containerWidth = container.outerWidth();
        if (containerWidth <= 800 && containerWidth > 784) {
            container.removeAttr('class').addClass('pkp-container_800');
        }
        else if (containerWidth < 784 && containerWidth > 715) {
            container.removeAttr('class').addClass('pkp-container_784');
        }
        else if (containerWidth < 715 && containerWidth > 640) {
            container.removeAttr('class').addClass('pkp-container_715');
        }
        else if (containerWidth < 640) {
            container.removeAttr('class').addClass('pkp-container_640');
        }
    }

    toolTips();
    media();

    _$(window).on('resize', function () {
        toolTips();
        media();
    });
};