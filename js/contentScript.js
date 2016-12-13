require(['jquery', 'underscore', 'backbone', 'js/testsContainer'], function($, _, Backbone, TestsContainer){

	var ContentScript = Backbone.View.extend({
    
        initialize: function() {
            var tests = new TestsContainer();
            tests.render();
        }
	});
	new ContentScript();
});