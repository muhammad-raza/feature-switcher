define(['jquery', 'underscore', 'backbone', 'js/testsList'], function($, _, Backbone, TestsList){

	var TestsFetcher = Backbone.View.extend({
        initialize: function(){
            this.testsList = new TestsList; 
            var that = this;
            this.testsList.fetch({
                success: function(model, collection){
                    if (!collection || collection.length === 0){                        
                        that.sync();
                    }
                }
            });            
        },

        sync: function(){
            this.ajax('http://www.mocky.io/v2/585483190f00000626c732ac', _.bind(this.updateTestList, this));
        },

        getCookie: function(cookie) {
            var runningTests = '';
            if (cookie && cookie.value) {
                runningTests = cookie.value;
            }

            console.log(runningTests)

            this.testsList.each(function(model) {
                model.destroy();
            });       
            var obj = {obj: this.testExperiments.tests}, that = this;
            _.each(Object.values(obj), function(test){
                that.testsList.create(test);
            });      

        },

        tabUrl: function(tab) {
            var url;
            if (tab && tab.length > 0) {
                url = tab[0].url;
                if (url) {
                    chrome.cookies.get({url: 'http://www.autotrader.co.uk', name: 'GeoLocation'}, _.bind(this.getCookie, this));
                }
            }
        },
        
        updateTestList: function(val) {
            this.testExperiments = val;
            chrome.tabs.query({active: true, currentWindow: true}, _.bind(this.tabUrl, this));
        },

        ajax: function(url, callback) {
            Backbone.ajax({
                method: 'GET',
                dataType: 'json',
                url: url,
                success: callback
            }); 
        }

	});
	return TestsFetcher;
});