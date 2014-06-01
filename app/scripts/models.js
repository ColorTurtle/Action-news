// Array to fill article template on home page
var Article = Backbone.Model.extend({
	// idAttribute: '_.id',

	defaults:{
			title:"Untitled",
			author: "Annonymous",
			date: "Unknown",
			image: "http://placehold.it/400x200/045FB4/ffffff/&text=Missing_Image",
			articleContent: "Whoops! There seems to be a glitch (and we are working on it right now!)"
		}
});

var ArticleCollection = Backbone.Collection.extend({
	model: Article,
	
});


