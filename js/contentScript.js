require(['jquery', 'underscore', 'backbone', 'js/testsContainerView', 'js/testsDataFetcher'], function($, _, Backbone, TestsContainer, TestsFetcher){

	var ContentScript = Backbone.View.extend({
    
        initialize: function() {
        	var tests = new TestsContainer();        	
        	new TestsFetcher();        	

            
            // tests.render();
        }
	});
	new ContentScript();
});