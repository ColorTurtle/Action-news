var ArticleView = Backbone.View.extend({
	
	className: 'jumbotron',

	// articleTemplate: _.template($('#article-template').text()),
	template: $('#article-template').html(),
	
	render: function(){
		var tmpl = _.template(this.template);

		this.$el.html(tmpl(this.model.toJSON()));
		return this;
	}
});


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
});

var articleListView = new ArticleListView();

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

var ArticleMainView = Backbone.View.extend({
	className: 'jumbotron',

	template: $('#articleMain-template').html(),
	
	render: function(){
		var tmpl = _.template(this.template);

		this.$el.html(tmpl(this.model.toJSON()));
		return this;
	}
});

var articleMainView = ArticleMainView();
