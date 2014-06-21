#!/usr/bin/env node

module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 8000,
          base: 'web',
          keepalive: true,
          livereload: true
        }
      }
    }
  });

  grunt.registerTask('server', ['connect:server'])

  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-ftp-deploy');
};