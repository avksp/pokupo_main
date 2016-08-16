var AnimateCart = function () {
    setTimeout(function(){
    _$('#cart_dropdown__trigger').unbind('click');
    _$('#cart_dropdown__trigger').click( function (e) {
        var _$this = _$(this);

        if (_$this.is('.disabled')) {
            return false;
        }

        if (0 < _$('#cart_dropdown__trigger.active').length) {
            _$('#cart_dropdown__trigger.active')
                    .not(this).removeClass('active')
                    .closest('.dropdown')
                    .find('#cart_dropdown__content').addClass('hidden');
        }

        _$this.toggleClass('active')
                .closest('.dropdown')
                .find('#cart_dropdown__content')
                .toggleClass('hidden');
    });

    // _$('#cart_dropdown__content a').unbind('click');
    // _$('#cart_dropdown__content a').click(function () {
    //     _$(this).closest('#cart_dropdown__content').toggleClass('hidden').
    //             siblings('#cart_dropdown__trigger').toggleClass('active');
    // });
    
    _$(document).click(function (e) {
        var _$this = _$(e.target);

        if (_$this.is('#cart_dropdown__trigger, .btn-circle--drop')) {
            if(_$('.b-cart-menu__goods li').length === 0){
                _$('#cart_dropdown__trigger').
                    removeClass('active').
                    siblings('#cart_dropdown__content').addClass('hidden');
            }
        } else {
            if (1 !== _$this.parents().filter('#cart_dropdown__content').length) {
                _$('#cart_dropdown__trigger').
                        removeClass('active').
                        siblings('#cart_dropdown__content').addClass('hidden');
            }
        }
    });

        if(typeof (_$('[rel=tooltip]').tooltip) == 'function')
            _$('[rel=tooltip]').tooltip();
    }, 1500);
};


