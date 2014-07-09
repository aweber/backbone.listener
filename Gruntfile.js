module.exports = function(grunt) {
  grunt.initConfig({
    bower: {
      dev: {
        dest: 'lib'
      }
    },
    clean: {
      bower_components: "bower_components",
      coverage: "coverage",
      lib: "lib",
      min: "backbone.listener-min.*"
    },
    coveralls: {
      options: {
        src: 'coverage/lcov.info',
        force: false
      }
    },
    jasmine : {
      src : 'backbone.listener.js',
      options: {
        specs : 'spec/*.spec.js',
        template: require('grunt-template-jasmine-istanbul'),
        templateOptions: {
          coverage: 'coverage/coverage.json',
          report:  {
            type: 'lcov',
            options: {
              dir: 'coverage'
            }
          }
        },
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
  grunt.loadNpmTasks('grunt-coveralls');

  grunt.registerTask('test', ['jshint', 'jasmine', 'coveralls']);
  grunt.registerTask('default', ['bower', 'test', 'uglify']);

};
