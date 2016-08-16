var AnimateProfile = function (country) {
    _$(":input:not(:checkbox):not(:button):not([type=hidden]):not([type=search]):not(.no-label)").floatlabel();

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
    _$("#avatar_file").change(function () {
        _$('#button_avatar_file span').text(_$(this).val());
        _$('#button_trash_avatar_file').show();
    });
    _$('#button_trash_avatar_file').click(function () {
        _$(this).hide();
        _$('#button_avatar_file span').text('Загрузить аватар');
        _$("#avatar_file").val(null);
    });
    _$('.masked-phone').mask("?9 999 999 99 99", {placeholder: "_"});
    var phone = _$('#phone_profile').val();
    if(phone){
        var str = '';
        var empty = [1,4,7,9];
        for(var i = 0; i <= phone.length-1; i++){
            if(_$.inArray(i, empty) >= 0)
               str = str + ' '; 
            str = str + phone[i];
        }
        _$('#phone_profile').val(str).change();
    }
    

    _$('input[type="password"]').hidePassword(true);
    _$("#fullname").suggestions({
        serviceUrl: "https://dadata.ru/api/v2",
        token: "d89731fbdbf67193159dff06a06a50781df243af",
        type: "NAME",
        onSelect: function (suggestion) {
            var data = suggestion.data;
            _$('#fullname .suggestion-input').val('');
            if (data.surname !== null) {
                _$('#fullname__surname').val(data.surname).trigger("change");
            }

            if (data.name !== null) {
                _$('#fullname__name').val(data.name).trigger("change");
            }

            if (data.patronymic !== null) {
                _$('#fullname__patronymic').val(data.patronymic).trigger("change");
            }

            if (data.gender !== null) {
                _$('#fullname__gender-' + data.gender.toLowerCase()).attr('checked', true);
            }
        }
    });

    _$('.b-order-table__item label').click(function () {
        var _$this = _$(this);
        _$this.closest('tr').addClass('active').siblings().removeClass('active');
    });

    _$('.country_list_profile').chosen({
        disable_search_threshold: 6,
        width: '100%'
    });
    setTimeout(function(){
        if(country && country())
            _$('.country_list_profile').val(country().id);
        _$('.country_list_profile').trigger('chosen:updated');
    }, 1000);
    if(typeof (_$('[rel=tooltip]').tooltip) == 'function')
        _$('[rel=tooltip]').tooltip();
};