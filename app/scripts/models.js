var NewsArticle = Backbone.Model.extend ({
	idAttribute: '_.id'
});

var NewsArticleCollection = Backbone.Collection.extend({
	model: NewsArticle,

});