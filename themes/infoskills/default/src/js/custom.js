//	Scroll to top

_$(window).scroll(function(){
  var $scrollup = _$('.back-to-top');
  if (_$(this).scrollTop() > 120) { $scrollup.fadeIn(); _$('header').addClass("sticky"); }
  else { $scrollup.fadeOut(); _$('header').removeClass("sticky"); }
});

pjQuery('.back-to-top').click(function () {
  pjQuery("html, body").animate({
	  scrollTop: 0
  }, 600);
  return false;
});	  
	  

_$(document).click(function (e){ // событие клика по веб-документу
	var div = _$("#menu-click");
	var div2 = _$("#menu-click-list");
	var inp1 = _$("input.btn-search-click");
	var inp2 = _$("input.btn_close-click");
	var form1 = _$("div.search-click-slide-form");	
	if (!div.is(e.target) && div.has(e.target).length === 0 && div.prop("checked") && !div2.is(e.target) && div2.has(e.target).length === 0)	{ 
		    div.removeAttr("checked");
		}
	if (!form1.is(e.target) && form1.has(e.target).length === 0 && inp1.prop("checked") && !inp2.prop("checked") && !inp1.is(e.target) && inp1.has(e.target).length === 0)	{ 
		    inp1.removeAttr("checked");
		}

	if (inp1.prop("checked") && !inp2.prop("checked") && inp2.is(e.target) && inp2.has(e.target).length === 0)	{ 
		    inp1.removeAttr("checked");
		}		
		
});
