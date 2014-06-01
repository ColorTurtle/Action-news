var MainRouter = Backbone.Router.extend({
	routes: {
		""				: "home",
		"link1"		: "link1",
		"link2"		: "link2",
		"link3"		: "link3",
		"link4"		: "link4",
		"link5"		: "link5"
	},

	initialize: function(){
		// this.items = new ArticleCollection();
		// this.items.push(articleListItems);
		// console.log(this.items.models);
	},

	home: function(){
		// $('.main-content').html('');
		console.log('Welcome to the Home Page!');
		// $(".main-content").html(articleView.render().el);


		// new ArticleView();
		// console.log('Fetch is about to fetch.');
		// this.items.fetch({
		// 	success: function(items){
		// 		items.each(function(item){
		// 			new ArticleView({model: item});
		// 			console.log('Fetch finished');
		// 		});
		// 	},
		// 	error: function(){
		// 		console.log('Houston, we have a problem.')
		// 	}
		// });
		// console.log('Fetch should have completed.');
	},

	link1: function(){
		$('.main-content').html('');
		new LinkOneView();
		console.log('Link 1 was just clicked.')
	},

	link2: function(){
		$('.main-content').html('');
		new LinkTwoView();
		console.log('Link 2 was just clicked.')
	},

	link3: function(){
		$('.main-content').html('');
		new LinkThreeView();
		console.log('Link 3 was just clicked.')
	},

	link4: function(){
		$('.main-content').html('');
		new LinkFourView();
		console.log('Link 4 was just clicked.')
	},

	link5: function(){
		$('.main-content').html('');
		new LinkFiveView();
		console.log('Link 5 was just clicked.')
	}
});
