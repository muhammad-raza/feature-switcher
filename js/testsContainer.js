define(['jquery', 'underscore', 'backbone', 'js/testsData', 'js/testItem'], function($, _, Backbone, TestsData, TestItem){

	var TestsContainer = Backbone.View.extend({
        el: $('.js-tests-list'),

        events: {
            "click .js-test-item": "displayExperimentVariants"
        },

        initialize: function() {
            this.tests = TestsData.getData().tests;            
            this.testItem = new TestItem();            
        },

        displayExperimentVariants: function(evt) {
            var target = $(evt.target);
            if (!target.hasClass('.js-test-item')){
                target = $(evt.target).parent('.js-test-item');
            }
            target.toggleClass('show');
        },

        render: function () {
            for (var test in this.tests) {
                // $(this.el).html(this.testItem.render({testName: test}).el);
            }
            // this.$el.html('raza');
        }
	});
	return TestsContainer;
});