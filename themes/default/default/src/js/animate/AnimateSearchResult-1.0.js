var AnimateSearchResult = function () {
    _$('#advansed_search_form_slidedown').unbind('click');
    _$('#advansed_search_form_slidedown').click(function (e) {
        e.preventDefault();
        var _$this = _$(this);
        _$(this)
                .closest('.slidedown')
                .toggleClass('active')
                .find('.slidedown__content[data-target="' + _$this.data('target') + '"]')
                .slideToggle(500, function () {
                    _$(this).css('overflow', 'inherit');
                });
    });
    if (Routing.route == 'search') {
        var sl = _$('#advansed_search_form_slidedown').closest('.slidedown');
        if(!sl.hasClass('active')){
            sl.toggleClass('active')
                .find('.slidedown__content[data-target="' + _$('#advansed_search_form_slidedown').data('target') + '"]')
                .slideToggle(500, function () {
                    _$(this).css('overflow', 'inherit');
                });
        }
    }

    _$('#advansed_search_form__category_dropdown__trigger').unbind('click');
    _$('#advansed_search_form__category_dropdown__trigger').click(function (e) {
        e.preventDefault();
        var _$this = _$(this);

        if (_$this.is('.disabled')) {
            return false;
        }

        if (0 < _$('#advansed_search_form__category_dropdown__trigger.active').length) {
            _$('#advansed_search_form__category_dropdown__trigger.active')
                    .not(this).removeClass('active')
                    .closest('.dropdown')
                    .find('.dropdown__content').addClass('hidden');
        }

        _$this.toggleClass('active')
                .closest('.dropdown')
                .find('.dropdown__content')
                .toggleClass('hidden');
    });
    _$('#advansed_search_form__category_dropdown__content a').unbind('click');
    _$('#advansed_search_form__category_dropdown__content a').click(function () {
        _$(this).closest('#advansed_search_form__category_dropdown__content').toggleClass('hidden').
                siblings('#advansed_search_form__category_dropdown__trigger').toggleClass('active');
    });

    _$(document).click(function (e) {
        var _$this = _$(e.target);

        if (_$this.is('#advansed_search_form__category_dropdown__trigger')) {
            //
        } else {
            if (1 !== _$this.parents().filter('#advansed_search_form__category_dropdown__content').length) {
                _$('#advansed_search_form__category_dropdown__trigger.active').
                        removeClass('active').
                        siblings('#advansed_search_form__category_dropdown__content').addClass('hidden');
            }
        }
    });




    _$('#typeSearch').chosen({
        disable_search_threshold: 6,
        width: '100%'
    });
    _$('#typeSeller').chosen({
        disable_search_threshold: 6,
        width: '100%'
    });

    _$("#multilocation").fancytree({
        minExpandLevel: 1,
        rootVisible: false,
        checkbox: true,
        selectMode: 3,
        icons: false,
        loadChildren: function (event, ctx) {
            // ctx.node.fixSelection3AfterClick();
        },
        select: function (event, data) {
            // Get a list of all selected nodes, and convert to a key array:
            var selKeys = _$.map(data.tree.getSelectedNodes(), function (node) {
                return parseInt(node.key, 10);
            });
            Parameters.filter.idSelectCategories = selKeys;

            _$("#js-multilocation").removeClass('checked').addClass('part');
            if (data.tree.getSelectedNodes().length === 0) {
                _$("#js-multilocation").removeClass('part');
            }
        },
        keydown: function (event, data) {
            if (event.which === 32) {
                data.node.toggleSelected();
                return false;
            }
        }
    });


    /* «Выпадайка» */
    _$('.content_filter_sort_dropdown__trigger').unbind('click');
    _$('.content_filter_sort_dropdown__trigger').click(function (e) {
        e.preventDefault();
        var _$this = _$(this);

        if (_$this.is('.disabled')) {
            return false;
        }

        if (0 < _$('.content_filter_sort_dropdown__trigger.active').length) {
            _$('.content_filter_sort_dropdown__trigger.active')
                    .not(this)
                    .removeClass('active')
                    .closest('.dropdown')
                    .find('.content_filter_sort_dropdown__content')
                    .addClass('hidden');
        }

        _$this.toggleClass('active')
                .closest('.dropdown')
                .find('.content_filter_sort_dropdown__content[data-target="' + _$this.data('target') + '"]')
                .toggleClass('hidden');
    });

    /* Скрываем выпадайку по клику мимо неё */
    _$(document).click(function (e) {
        var _$this = _$(e.target);

        if (_$this.is('.content_filter_sort_dropdown__trigger')) {
            //
        } else {
            if (1 !== _$this.parents().filter('.content_filter_sort_dropdown__content').length) {
                _$('.content_filter_sort_dropdown__trigger.active')
                        .removeClass('active').
                        siblings('.content_filter_sort_dropdown__content')
                        .addClass('hidden');
            }
        }
    });

    /* По клику на внутреннюю ссылку «выпадайка» закрывается */
    _$('.content_filter_sort_dropdown__content a').unbind('click');
    _$('.content_filter_sort_dropdown__content a').click(function () {
        _$(this).closest('.content_filter_sort_dropdown__content')
                .toggleClass('hidden').
                siblings('.content_filter_sort_dropdown__trigger')
                .toggleClass('active');
    });

    _$('.b-item__order-button .btn').click(function () {
        var _$this = _$(this);
        var item = _$this.closest('.b-item__popover');

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
    if(typeof (_$('[rel=tooltip]').tooltip) == 'function')
        _$('[rel=tooltip]').tooltip();
};

