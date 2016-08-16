var AnimateCatalog = function () {
    /* Баян-меню */
    _$('.with-submenu').click(function (e) {
        var _$this = _$(e.target);
        if (1 !== _$this.parents().filter('.submenu').length) {
            _$(this)
                    .toggleClass('active')
                    .children('.submenu').toggleClass('active');
        }
    });
    if(typeof (_$('[rel=tooltip]').tooltip) == 'function')
        _$('[rel=tooltip]').tooltip();

    if(Routing.IsCategory()) {
        _$('section.store').addClass('nosidebar');
        _$('#catalogBtn').click(function () {
            _$('aside.b-sidebar')
                .find('a.btn')
                .siblings('.b-sidebar__dropdown')
                .toggleClass('hidden');
            _$('section.store').toggleClass('nosidebar');
        });
    }
    else if(Routing.IsGoods()){
        _$('section.store').addClass('nosidebar');

        _$('#catalogBtn').click(function () {
            _$('aside.b-sidebar')
                .find('a.btn')
                .siblings('.b-sidebar__dropdown')
                .toggleClass('hidden');
        });
        _$('#catalogBtn').siblings('.b-sidebar__dropdown').addClass('dropdown__content');
    }
    else{
        _$('#catalogBtn').hide()
            .siblings('.b-sidebar__dropdown')
            .toggleClass('hidden');
        _$('section.store').removeClass('nosidebar');
    }
};
