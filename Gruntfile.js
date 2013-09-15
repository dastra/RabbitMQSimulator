module.exports = function(grunt) {
    grunt.initConfig({
        concat: {
            js: {
                src: [
                    'components/*.js'
                ],
                dest: 'web/js/scripts.js'
            },
            processing: {
                src: [
                    'processing/*.pde'
                ],
                dest: 'web/js/Simulator.pde'
            }
        },
        watch: {
            files: ['components/*.js', '*.pde'],
            tasks: 'default'
        },
        copy: {
            main: {
                cwd: 'web/',
                expand: true,
                src: ['**'],
                dest: 'static/',
              },
        }
    });

    grunt.registerTask('default', ['concat', 'copy']);

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
};