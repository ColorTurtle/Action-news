console.log('\'Allo \'Allo!');

$(document).ready(function(){

	router = new MainRouter();
	Backbone.history.start();

  // var articleTemplate = _.template($('.article-template').text())

  // // render preloaded data
  // _.each(articleList, function(item){
  //   $('.main-content').append(articleTemplate(item))
  // })
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