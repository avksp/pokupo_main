var AnimateMessage = function () {
    _$(":input:not(:checkbox):not(:button):not([type=hidden]):not([type=search]):not(.no-label)").floatlabel();
    _$('.open-modal').click(function () {
        openModal(_$(this).data('target'));
    });

    _$('.modal .close-modal').click(function () {
        var modal = _$(this).closest('.modal');
        modal.removeClass('in');
        _$('body').removeClass('modal-open');
    });

    _$(document).click(function (event) {
        if (_$(event.target).is('.modal')) {
            closeModal();
        }
    });

    function openModal(target) {
        _$('#' + target).addClass('in');
        _$('body').addClass('modal-open');
    }

    function closeModal(target) {
        var modal = (typeof (target) === 'undefined') ? _$('.modal') : _$('#' + target);

        _$('body').removeClass('modal-open');
        modal.removeClass('in');
    }
    
    _$('#submit_modal_message_form').click(function(){
        if(_$('#topic_user').val() && _$('#topic_name').val() && _$('#topic_text').val()){
            var modal =  _$('.modal .close-modal').closest('.modal');
            modal.removeClass('in');
            _$('body').removeClass('modal-open');
        }
    });
    _$('#js-toggleChat-collapse').click(function(){
        _$(this).hide();
        _$('#js-toggleChat-expand').show();
    });
    _$('#js-toggleChat-expand').click(function(){
        _$(this).hide();
        _$('#js-toggleChat-collapse').show();
    });
    if(typeof (_$('[rel=tooltip]').tooltip) == 'function')
        _$('[rel=tooltip]').tooltip();
};


