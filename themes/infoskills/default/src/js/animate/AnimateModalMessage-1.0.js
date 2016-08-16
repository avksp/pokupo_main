var AnimateModalMessage = function(){
    _$('.modal .b-modal-info__actions button').click(function () {
        var modal = _$(this).closest('.modal');
        modal.removeClass('in');
        _$('body').removeClass('modal-open');
    });
};