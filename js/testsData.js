define(['jquery', 'underscore', 'backbone'], function($, _, Backbone){

	var TestsData = Backbone.View.extend(null, {
        getData: function() {
            return {
              "tests": {
                "attentionGrabberColourTest": {
                  "version": 1,
                  "description": "background colour test",
                  "salt": "attentionGrabberTest",
                  "buckets": [
                    {
                      "name": "inactive",
                      "value": -1,
                      "description": ""
                    },
                    {
                      "name": "red",
                      "value": 0,
                      "description": "red colour"
                    },
                    {
                      "name": "green",
                      "value": 1,
                      "description": "green colour"
                    },
                    {
                      "name": "blue",
                      "value": 2,
                      "description": "blue colour"
                    }
                  ],
                  "allocations": [
                    {
                      "rule": null,
                      "ranges":[
                        {
                          "length" : 0.25,
                          "bucketValue" : -1
                        },
                        {
                          "length" : 0.25,
                          "bucketValue" : 0
                        },
                        {
                          "length" : 0.25,
                          "bucketValue" : 1
                        },
                        {
                          "length" : 0.25,
                          "bucketValue" : 2
                        }
                      ]
                    }
                  ],
                  "testType" : "USER"
                }
              },
              "audit" : {
                "version" : 1,
                "updatedBy" : "raza",
                "updated" : 1379048400000
              }
            }
        }
	});
	return TestsData;
});