var AnimateModalMessage = function(){
    var $popup = _$('#pokupoModalMessage');
    if ($popup.is(':hover'))
    {
        setTimeout(function(){
            $popup.fadeOut('fast');
        },8000);
    }
    else {
        setTimeout(function(){
            $popup.fadeOut('fast');
        },4000);}

    _$('.modal .b-modal-info__actions button').click(function () {
        var modal = _$(this).closest('.modal');
        modal.removeClass('in');
        _$('body').removeClass('modal-open');
    });
};