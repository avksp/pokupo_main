var AnimateInfoSeller = function () {
    _$('#user_information_slidedown').unbind('click');
    _$('#user_information_slidedown').click(function (e) {
        e.preventDefault();
        var _$this = _$(this);
        _$(this)
                .closest('.slidedown')
                .toggleClass('active')
                .find('.slidedown__content[data-target="' + _$this.data('target') + '"]')
                .slideToggle(500, function(){
                    _$(this).css('overflow', 'inherit');
                });
    });
    _$('.info_seller_dropdown__trigger').unbind('click');
    _$('.info_seller_dropdown__trigger').click(function (e) {
        e.preventDefault();
        var _$this = _$(this);

        if (_$this.is('.disabled')) {
            return false;
        }

        if (0 < _$('.info_seller_dropdown__trigger.active').length) {
            _$('.info_seller_dropdown__trigger.active')
                    .not(this).removeClass('active')
                    .closest('.info_seller_dropdown')
                    .find('.info_seller_dropdown__content').addClass('hidden');
        }

        _$this.toggleClass('active')
                .closest('.info_seller_dropdown')
                .find('.info_seller_dropdown__content[data-target="' + _$this.data('target') + '"]')
                .toggleClass('hidden');
    });
    _$('.info_seller_dropdown__content a').unbind('click');
    _$('.info_seller_dropdown__content a').click(function () {
        _$(this).closest('.info_seller_dropdown__content').toggleClass('hidden').
                siblings('.info_seller_dropdown__trigger').toggleClass('active');
    });
    
    _$(document).click(function (e) {
        var _$this = _$(e.target);

        if (_$this.is('.info_seller_dropdown__trigger')) {
            //
        } else {
            if (1 !== _$this.parents().filter('.info_seller_dropdown__content').length) {
                _$('.info_seller_dropdown__trigger.active').
                        removeClass('active').
                        siblings('.info_seller_dropdown__content').addClass('hidden');
            }
        }
    });
};