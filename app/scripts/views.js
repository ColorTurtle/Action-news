var ArticleView = Backbone.View.extend({
	
	className: 'jumbotron',

	// articleTemplate: _.template($('#article-template').text()),
	template: $('#article-template').html(),
	
	// initialize: function(){
	// 	console.log('Home page should show the article-template');
	// 	$('.main-content').append( this.el );
	// 	this.render();

	// },

	render: function(){
		var tmpl = _.template(this.template);

		this.$el.html(tmpl(this.model.toJSON()));
		return this;
	}
});

// Replace This with ArticleCollection
// var article = new Article({
// 		title: 'Cat saves life of infant',
// 		author: 'Pro Felina',
// 		date: '5/27/14',
// 		image: 'http://lorempixel.com/100/100/cats',
// 		summary: 'Stand in front of the computer screen leave hair everywhere or claw drapes behind the couch but missing',
// 		articleContent: "Stand in front of the computer screen leave hair everywhere or claw drapes behind the couch but missing until dinner time play time stare at ceiling. Stretch make muffins. Leave hair everywhere rub face on everything for chase imaginary bugs intrigued by the shower give attitude, mark territory, chew foot. Intently sniff hand. Rub face on everything. Behind the couch hide when guests come over stare at ceiling leave hair everywhere so make muffins stick butt in face. Chew iPad power cord under the bed. Give attitude stand in front of the computer screen inspect anything brought into the house intently stare at the same spot and flop over inspect anything brought into the house lick butt. Stretch cat snacks, so mark territory for chase mice. Need to chase tail run in circles hate dog or hide when guests come over. Stand in front of the computer screen hide when guests come over make muffins chase mice yet stare at ceiling. Hopped up on goofballs chew foot intently stare at the same spot or leave hair everywhere. Burrow under covers use lap as chair and flop over so under the bed play time make muffins. Make muffins chase mice. Hunt anything that moves all of a sudden go crazy and destroy couch missing until dinner time or hide when guests come over for nap all day for intrigued by the shower. Leave hair everywhere leave hair everywhere swat at dog. Run in circles. Intently stare at the same spot flop over. Sleep on keyboard stare at ceiling but run in circles hunt anything that moves chew iPad power cord but give attitude yet chew foot. Chase mice play time and leave hair everywhere all of a sudden go crazy, for sweet beast. Climb leg stick butt in face or make muffins. Climb leg give attitude, and why must they do that destroy couch. Stare at ceiling. Stare at ceiling make muffins, for rub face on everything make muffins, leave hair everywhere, but nap all day. Leave hair everywhere chase imaginary bugs mark territory for rub face on everything but hopped up on goofballs. Hide when guests come over hate dog yet under the bed so why must they do that swat at dog, swat at dog lick butt. Inspect anything brought into the house. Shake treat bag. Under the bed stretch but behind the couch so intently sniff hand hunt anything that moves rub face on everything or intently sniff hand. Lick butt leave hair everywhere leave dead animals as gifts leave dead animals as gifts or play time lick butt, under the bed. Shake treat bag. Hopped up on goofballs. Stare at ceiling burrow under covers climb leg hate dog so give attitude. Flop over flop over."	
// });


// articleView = new ArticleView({
//     model: article
// });

// $(".main-content").html(articleView.render().el);
// End Replacement


var ArticleListView = Backbone.View.extend({
	el:$('.main-content'),

	initialize: function(){
		this.collection = new ArticleCollection(articleList);
		this.render();
	},

	render: function(){
		var that = this;
		_.each(this.collection.models, function(item){
			that.renderArticle(item);
		}, this);
	},

	renderArticle: function(item) {
		var articleView = new ArticleView({
			model: item
		});
		this.$el.append(articleView.render().el);
	}
})

var articleListView = new ArticleListView();

var LinkOneView = Backbone.View.extend({
	
	className: 'jumbotron',

	linkOneTemplate: _.template($('#link-one-template').text()),
	
	initialize: function(){
		console.log('You at the Link One Page');
		$('.main-content').append(this.el);
		this.render();
	},

	render: function(){
		this.$el.html(this.linkOneTemplate());
	}

});

var LinkTwoView = Backbone.View.extend({
	
	className: 'jumbotron',

	linkTwoTemplate: _.template($('#link-two-template').text()),
	
	initialize: function(){
		console.log('You at the Link Two Page');
		$('.main-content').append(this.el);
		this.render();
	},

	render: function(){
		this.$el.html(this.linkTwoTemplate());
	}

});

var LinkThreeView = Backbone.View.extend({
	
	className: 'jumbotron',

	linkThreeTemplate: _.template($('#link-three-template').text()),
	
	initialize: function(){
		console.log('You at the Link Three Page');
		$('.main-content').append(this.el);
		this.render();
	},

	render: function(){
		this.$el.html(this.linkThreeTemplate());
	}

});

var LinkFourView = Backbone.View.extend({
	
	className: 'jumbotron',

	linkFourTemplate: _.template($('#link-four-template').text()),
	
	initialize: function(){
		console.log('You at the Link Four Page');
		$('.main-content').append(this.el);
		this.render();
	},

	render: function(){
		this.$el.html(this.linkFourTemplate());
	}

});

var LinkFiveView = Backbone.View.extend({
	
	className: 'jumbotron',

	linkFiveTemplate: _.template($('#link-five-template').text()),
	
	initialize: function(){
		console.log('You at the Link Five Page');
		$('.main-content').append(this.el);
		this.render();
	},

	render: function(){
		this.$el.html(this.linkFiveTemplate());
	}

});