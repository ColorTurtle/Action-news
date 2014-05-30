console.log('\'Allo \'Allo!');

$(document).ready(function(){

	router = new MainRouter();
	Backbone.history.start();

});

$('.js-link1').on('click', function(){
	$(this).addClass('active-link');
	$(this).siblings().removeClass('active-link')
});

$('.js-link2').on('click', function(){
	$(this).addClass('active-link');
	$(this).siblings().removeClass('active-link')
});

$('.js-link3').on('click', function(){
	$(this).addClass('active-link');
	$(this).siblings().removeClass('active-link')
});

$('.js-link4').on('click', function(){
	$(this).addClass('active-link');
	$(this).siblings().removeClass('active-link')
});

$('.js-link5').on('click', function(){
	$(this).addClass('active-link');
	$(this).siblings().removeClass('active-link')
});
