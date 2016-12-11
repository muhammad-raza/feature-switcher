require.config({
    baseUrl: "../",
    paths: {
        jquery: "../bower_components/jquery/dist/jquery",
        underscore:"../bower_components/underscore/underscore",
        backbone:"../bower_components/backbone/backbone",
        bootstrap:"../bower_components/bootstrap/dist/js/bootstrap"
    },
    shim: {
    	jquery: {
    		exports: '$'
    	},
    	underscore: {
    		exports: '_'
    	},
    	backbone: {
    		exports: 'Backbone',
    		deps: ['jquery', 'underscore']
    	}
    }
});