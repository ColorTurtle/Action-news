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
