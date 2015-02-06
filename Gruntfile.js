/**
 * iswitch项目构建脚本
 *
 * @author https://github.com/ufologist
 */
var config = {
    dist: 'dist'
};

module.exports = function(grunt) {
    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);
    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        config: config,

        clean: {
            dist: ['<%= config.dist %>']
        },
        copy: {
            main: {
                src: '*.css',
                dest: '<%= config.dist %>/'
            }
        },
        cssmin: {
            options: {
                // keepSpecialComments not working
                // https://github.com/gruntjs/grunt-contrib-cssmin/issues/31
                report: 'gzip'
            },
            minify: {
                files: [{
                    expand: true,
                    src: ['*.css', '!*.min.css'],
                    dest: '<%= config.dist %>',
                    ext: '.min.css'
                }]
            }
        },
        // 搜索替换某些特殊的占位符(例如版本号)
        sed: {
            version: {
                path: '<%= config.dist %>',
                pattern: '%VERSION%',
                replacement: '<%= pkg.version %>',
                recursive: true
            },
            date: {
                path: '<%= config.dist %>',
                pattern: '%DATE%',
                replacement: grunt.template.today('yyyy-mm-dd'),
                recursive: true
            }
        }
    });

    grunt.registerTask('default', [
        'clean',
        'copy',
        'cssmin',
        'sed'
    ]);
};