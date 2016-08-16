var AnimateUserInformation = function(){
    _$('.user_information_dropdown__trigger').click(function (e) {
        var _$this = _$(this);

        if (_$this.is('.disabled')) {
            return false;
        }

        if (0 < _$('.user_information_dropdown__trigger.active').length) {
            _$('.user_information_dropdown__trigger.active')
                    .not(this).removeClass('active')
                    .closest('.dropdown')
                    .find('.user_information_dropdown__content').addClass('hidden');
        }

        _$this.toggleClass('active')
                .closest('.dropdown')
                .find('.user_information_dropdown__content')
                .toggleClass('hidden');
    });

    _$('.user_information_dropdown__content a').click(function () {
        _$(this).closest('.user_information_dropdown__content').toggleClass('hidden').
                siblings('.user_information_dropdown__trigger').toggleClass('active');
    });
    
    _$(document).click(function (e) {
        var _$this = _$(e.target);

        if (_$this.is('.user_information_dropdown__trigger')) {
            //
        } else {
            if (1 !== _$this.parents().filter('.user_information_dropdown__content').length) {
                _$('.user_information_dropdown__trigger').
                        removeClass('active').
                        siblings('.user_information_dropdown__content').addClass('hidden');
            }
        }
    });
    if(typeof (_$('.icon-user').tooltip) == 'function')
        _$('.icon-user').tooltip();
};


