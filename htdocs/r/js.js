var ie = false;
var opera = false;

if ( ($.browser.msie) || (!!window.MSInputMethodContext) ){
	ie = true;
}
if($.browser.opera) opera = true;


$(document).ready(function(){
	$('.bal-ButPlay a, .bal-VKButton a, .bal-YTButton a').hover(function(){
		$(this).parent().addClass('hvrd');
	},function(){
		$(this).parent().removeClass('hvrd');
	});

	if(ie || opera){
		$('.bal-Trailer').css({'bottom':'-600px'});
	}

});


$(window).load(function(){


});