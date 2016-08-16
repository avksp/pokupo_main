var AnimateRegistrationSeller = function(){
    if (Routing.route == 'registration_seller') {
        _$('[rel=tooltip]').tooltip();
        _$('#phone').mask("?9 999 999 99 99");
        _$(":input:not(:checkbox):not(:button):not([type=hidden]):not([type=search]):not(.no-label)").floatlabel();

        var step = Routing.params.step - 1;
        var progress = 0;
        var current = step / 3;

        var canvas = document.getElementById('progressCircle');
        var circle = new ProgressCircle({
            canvas: canvas,
        });

        var color = _$('#progressCircle').css("borderColor") ;

        circle.addEntry({
            fillColor: color ? color : '#ffa800',
            progressListener: function () {
                return progress;
            }
        }).start(0);

        var intervalId;
        if (progress < current) {
            intervalId = setInterval(function () {
                if (progress < current) {
                    progress = progress + 0.015;
                } else {
                    clearInterval(intervalId);
                }
//                progress = (progress < current) ? progress + 0.015 : progress;
            }, 30);

        } else {
            intervalId = setInterval(function () {
                if (progress > current) {
                    progress = progress - 0.015;
                } else {
                    clearInterval(intervalId);
                }
            }, 30);
        }
    }
};