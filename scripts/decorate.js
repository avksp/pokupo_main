jQuery(document).ready(function($) {
    $(window).on('load', function(){
		var $popup = $('#pokupoModalMessage');
		 if ($popup.is(':hover')) {setTimeout(function(){$popup.fadeOut('fast')},8000);}
		 else {setTimeout(function(){$popup.fadeOut('fast')},4000);}
    }); 
});		

jQuery('.back-to-top').click(function () {
  jQuery("html, body").animate({
	  scrollTop: 0
  }, 600);
  return false;
});
