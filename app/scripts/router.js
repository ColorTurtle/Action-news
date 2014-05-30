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
		this.items = new NewsArticleCollection;
		console.log(this.items);
	},

	home: function(){
		console.log('Welcome to the Home Page!')
	},

	link1: function(){
		$('.main-content').html('');
		new LinkOneView();
		console.log('Link 1 was just clicked.')
	},

	link2: function(){
		console.log('Link 2 was just clicked.')
	},

	link3: function(){
		console.log('Link 3 was just clicked.')
	},

	link4: function(){
		console.log('Link 4 was just clicked.')
	},

	link5: function(){
		console.log('Link 5 was just clicked.')
	}
});
