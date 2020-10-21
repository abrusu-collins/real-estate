$('#contact').on('click',function(){
	const Cont=$('#cont').position().top;

	$('html,body').animate({
		scrollTop:Cont
	},900);
});

document.querySelector('.toggler').onclick = () => {
  document.querySelector('.nav').classList.toggle('open');
}