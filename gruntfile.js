module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pug: {
          compile: {
            options: {
              data: {
                debug: false
              }
            },
            files: {
              'index.html': 'src/index.pug',
              '404.html'  : 'src/404.pug'
            }
          }
        },
        watch: {
            files: {
                files: '**/*.pug',
                tasks: ['pug'],
            }
        }
    });

    // Load the plugins
    grunt.loadNpmTasks('grunt-contrib-pug');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['pug'] );
    grunt.registerTask('w', ['watch']);
};
