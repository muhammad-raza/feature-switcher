require.config({
    baseUrl: "../",
    paths: {
        jquery: "../bower_components/jquery/dist/jquery",
        underscore:"../bower_components/underscore/underscore",
        backbone:"../bower_components/backbone/backbone",
        localStorage: "../bower_components/backbone.localstorage/backbone.localStorage"
    },
    shim: {
    	jquery: {
    		exports: '$'
    	},
    	underscore: {
    		exports: '_'
    	},
        localStorage: {
            exports: 'Storage'
        },
    	backbone: {
    		exports: 'Backbone',
    		deps: ['jquery', 'underscore']
    	}
    }
});