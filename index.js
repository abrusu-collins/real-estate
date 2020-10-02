$('.fa').on('click',function(){
	const Qualities=$('#qualities').position().top;

	$('html,body').animate({
		scrollTop:Qualities
	},900);
});

