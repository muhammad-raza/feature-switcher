define(['jquery', 'underscore', 'backbone', 'js/testsData', 'js/testItem'], function($, _, Backbone, TestsData, TestItem){

	var TestsContainer = Backbone.View.extend({
        el: $('.js-tests-list'),

        initialize: function() {
            this.tests = TestsData.getData().tests;            
            this.testItem = new TestItem();            
        },

        render: function () {
            for (var test in this.tests) {
                $(this.el).html(this.testItem.render({testName: test}).el);
            }
            // this.$el.html('raza');
        }
	});
	return TestsContainer;
});