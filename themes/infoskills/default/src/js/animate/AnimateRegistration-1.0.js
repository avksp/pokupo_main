var AnimateRegistration = function () {
    if (Routing.route == 'registration') {
        _$('#phone').mask("?9 999 999 99 99");
        _$(":input:not(:checkbox):not(:button):not([type=hidden]):not([type=search]):not(.no-label)").floatlabel();
    
        var step = Routing.params.step;
        var progress = 0;
        var current = step / 4;

        var canvas = document.getElementById('progressCircle');
        var circle = new ProgressCircle({
            canvas: canvas,
        });

        var color = _$('#progressCircle').css("borderColor") ;

        circle.addEntry({
            fillColor: color ? color : '#ffa800',
            progressListener: function () {
                return progress;
            }
        }).start(30);

        var intervalId;
        if (progress < current) {
            intervalId = setInterval(function () {
                if (progress < current) {
                    progress = progress + 0.015;
                } else {
                    clearInterval(intervalId);
                }
//                progress = (progress < current) ? progress + 0.015 : progress;
            }, 30);

        } else {
            intervalId = setInterval(function () {
                if (progress > current) {
                    progress = progress - 0.015;
                } else {
                    clearInterval(intervalId);
                }
            }, 30);
        }
    }
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
            _$("#bdate").val(dateText);
        }
    });
    _$('#country_list').chosen({
        disable_search_threshold: 6,
        width: '100%'
    });
    setTimeout(function(){
        _$('#country_list').trigger('chosen:updated');
    }, 1000);
    if(typeof (_$('[rel=tooltip]').tooltip) == 'function')
        _$('[rel=tooltip]').tooltip();
};

