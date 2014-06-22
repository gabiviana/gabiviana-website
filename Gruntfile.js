#!/usr/bin/env node

module.exports = function (grunt) {
  'use strict';
  require('time-grunt')(grunt);

  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 8000,
          base: 'web',
          keepalive: true
        }
      }
    },
    useminPrepare: {
      html: 'web/index.html',
      options: {
        root: 'web',
        dest: 'dist'
      }
    },
    usemin: {
      html: 'dist/index.html',
      css: ['dist/css/{,*/}*.css'],
      options: {
        dirs: ['dist']
      }
    },
    clean: {
        dist: ['.tmp', 'dist/*']
    },
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: 'web',
          dest: 'dist',
          src: [
            '*.{ico,txt,html,php}',
            '.htaccess',
            'portfolio/*.*',
            'img/*.{gif,png,jpg}',
            'css/*.css',
            'fonts/*.*'
          ]
        }]
      }
    },
    cssmin: {
      dist: {
        files: {
          'dist/css/gabiviana.css': [
              '.tmp/css/{,*/}*.css',
              'web/css/{,*/}*.css'
          ]
        }
      }
    },
  });

  grunt.registerTask('server', ['connect:server']);

  grunt.registerTask('build', [
    'clean:dist',
    'useminPrepare',
    'concat',
    'cssmin',
    'uglify',
    'copy',
    'usemin'
  ]);

  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jst');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-ftp-deploy');
  grunt.loadNpmTasks('grunt-usemin');
  grunt.loadNpmTasks('time-grunt');
};