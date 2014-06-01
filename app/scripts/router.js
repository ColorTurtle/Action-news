var MainRouter = Backbone.Router.extend({
	routes: {
		""						: "home",
		"link2"				: "linkTwo",
		"link3"				: "linkThree",
		"link4"				: "linkFour",
		"link5"				: "linkFive",
		"article:id"	: 	"articleMainView"
	},

	initialize: function(){
		this.items = new ArticleCollection();
		// this.items.push(articleListItems);
		console.log(this.items.models);
	},

	home: function(){
		$('.main-content').html('');
		articleListView.render();
		console.log('Welcome to the Home Page!');
	},

	linkTwo: function(){
		$('.main-content').html('');
		console.log('Link 2 was just clicked.');
		new LinkTwoView();
	},

	linkThree: function(){
		$('.main-content').html('');
		console.log('Link 3 was just clicked.');
		new LinkThreeView();
	},

	linkFour: function(){
		$('.main-content').html('');
		console.log('Link 4 was just clicked.');
		new LinkFourView();
	},

	linkFive: function(){
		$('.main-content').html('');
		console.log('Link 5 was just clicked.');
		new LinkFiveView();
	}

	// articleMainView: function(articleId){
	// 	console.log('Article ' + articleId + ' was just clicked', this.items.models);
	// 	var item = this.items.find(function(item){
	// 		console.log('are you seeing the new view?')
	// 		return item.get('id') == articleId;
	// 	});
	// 	new ArticleMainView({model: item})
	// }

});
