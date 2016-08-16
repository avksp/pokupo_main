var AnimateOrder = function(){
    _$('.masked-phone').mask("?9 999 999 99 99");
    _$(":input:not(:checkbox):not(:button):not([type=hidden]):not([type=search]):not(.no-label)").floatlabel();
    _$("select").floatlabel();
    
    pjQuery(function (_$) {
        _$.datepicker.regional.ru = {
            closeText: 'Закрыть',
            prevText: '&#x3c;Пред',
            nextText: 'След&#x3e;',
            currentText: 'Сегодня',
            monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
                'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн',
                'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
            dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
            dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
            dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
            weekHeader: 'Не',
            dateFormat: 'dd.mm.yy',
            firstDay: 1,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: ''};
    });
    _$.datepicker.setDefaults(_$.datepicker.regional.ru);
    _$("#birthDay").mask("99.99.9999", {placeholder: "_"}).datepicker({
        changeMonth: true,
        changeYear: true,
        dateFormat: 'dd.mm.yy',
        defaultDate: '-24Y',
        yearRange: "c-77:c+6",
        minDate: '-101Y',
        maxDate: '-18Y',
        onClose: function (dateText, inst) {
            _$("#birthDay").val(dateText);
        }
    });
    _$('.country_list_profile').chosen({
        disable_search_threshold: 6,
        width: '100%'
    });
    setTimeout(function(){
        _$('.country_list_profile').trigger('chosen:updated');
    }, 1000);

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