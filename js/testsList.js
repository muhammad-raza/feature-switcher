define(['jquery', 'underscore', 'backbone', 'localStorage'], function($, _, Backbone){

	var TestsModel = Backbone.Model.extend({ 
	});

	var testsModel = TestsModel;

	var TestsList = Backbone.Collection.extend({
        model: testsModel,
        localStorage: new Backbone.LocalStorage('tests')
    
	});
	return TestsList;
});