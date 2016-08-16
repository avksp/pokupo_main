var AnimateSearch = function () {
    _$('.search_dropdown__trigger').click( function (e) {
        e.preventDefault();
        var _$this = _$(this);

        if (_$this.is('.disabled')) {
            return false;
        }

        if (0 < _$('.search_dropdown__trigger.active').length) {
            _$('.search_dropdown__trigger.active')
                    .not(this).removeClass('active')
                    .closest('.dropdown')
                    .find('.dropdown__content').addClass('hidden');
        }

        _$this.toggleClass('active')
                .closest('.dropdown')
                .find('.dropdown__content[data-target="' + _$this.data('target') + '"]')
                .toggleClass('hidden');
    });

    _$('.dropdown__content a').click( function () {
        _$(this).closest('.dropdown__content').toggleClass('hidden').
                siblings('.search_dropdown__trigger').toggleClass('active');
    });
    _$(document).click(function (e) {
        var _$this = _$(e.target);

        if (_$this.is('.search_dropdown__trigger')) {
            //
        } else {
            if (1 !== _$this.parents().filter('.dropdown__content').length) {
                _$('.search_dropdown__trigger.active').
                        removeClass('active').
                        siblings('.dropdown__content').addClass('hidden');
            }
        }
    });
    if(typeof (_$('[rel=tooltip]').tooltip) == 'function')
        _$('[rel=tooltip]').tooltip();
};
