module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files: {
                    './style.css': 'main.scss',
                    //'../../web/css/get2-style.css': 'src/sass/main.scss'
                }
            }
        },
        postcss: { // Begin Post CSS Plugin
            options: {
                map: false,
                processors: [
				]
            },
            dist: {
                src: './style.css'
            }
        },
        cssmin: {
            target: {
                files: {
                    './style.min.css': ['./style.css']
                }
            }
        },
        watch: { // Compile everything into one task with Watch Plugin
            css: {
                files: '**/*.scss',
                tasks: ['sass', 'postcss', 'cssmin']
            }
        }
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.registerTask('default', ['watch']);
};
