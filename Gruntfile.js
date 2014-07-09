module.exports = function(grunt) {
  grunt.initConfig({
    bower: {
      install: {
         //just run 'grunt bower:install' and you'll see files from your Bower packages in lib directory
      }
    },
    clean: {
      components: "lib",
      min: "backbone.listener-min.*"
    },
    jasmine : {
      src : 'backbone.listener.js',
      options : {
        specs : 'spec/*.spec.js',
        vendor : [
          'lib/jquery/dist/jquery.min.js',
          'lib/underscore/underscore.js',
          'lib/backbone/backbone.js'
        ]
      }
    },
    jshint: {
      all: "backbone.listener.js"
    },
    uglify: {
      options: {
        sourceMap: true,
        sourceMapName: 'backbone.listener-min.map'
      },
      listener: {
        files: {
          'backbone.listener-min.js': ['backbone.listener.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('test', ['jshint', 'jasmine']);
  grunt.registerTask('default', ['bower', 'test', 'uglify']);

};
