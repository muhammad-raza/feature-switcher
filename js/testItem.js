define(['jquery', 'underscore', 'backbone'], function($, _, Backbone){

	var TestsItem = Backbone.View.extend({
        tagName: 'li',
        template: _.template('<%= testName %>'),
        
        initialize: function() {
        },

        render: function(item) {
          console.log(this.$el)
            this.$el.html(this.template(item));
            return this;
        }
	});
	return TestsItem;
});