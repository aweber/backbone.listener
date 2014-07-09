require.config({
  paths: {
    backbone: 'lib/backbone/backbone.js',
    jquery: 'lib/jquery/dist/jquery.min.js',
    underscore: 'lib/underscore/underscore.js'
  },
  shim: {
    backbone: {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone'
    },
    underscore: {
      exports: '_'
    }
  }
});
