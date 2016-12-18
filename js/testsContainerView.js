define(['jquery', 'underscore', 'backbone', 'js/testItemView', 'js/testsList'], function($, _, Backbone, TestItem, TestsList){
    var testsList = new TestsList;
	var TestsContainer = Backbone.View.extend({
        el: $('.js-tests-list'),

        events: {
            "click .js-test-item": "displayExperimentVariants"
        },

        initialize: function() {
            // this.listenTo(testsList, 'add', this.render);
            // testsList.fetch();
            // this.listenTo(TestsList, 'reset', this.render);
            // this.listenTo(TestsList, 'all', this.render);
            // this.tests = TestsData.getData().tests;            
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
            console.log('rendering')
            // for (var test in this.tests) {
                // $(this.el).html(this.testItem.render({testName: test}).el);
            // }
            // this.$el.html('raza');
        }
	});
	return TestsContainer;
});