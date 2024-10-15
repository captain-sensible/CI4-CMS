module.exports = function(grunt) {
   grunt.initConfig({
       sass: {
           dist: {
               options: {
                   style: 'compressed',
               },
               
				   
				   files: [{  expand: true,cwd: 'scss', src: ['**/*.scss'],  dest: 'public/css', ext: '.css'   }]
				   
  
               
           },
       },
       watch: {
           sass: {
               files: ['**/*.scss'],
               tasks: ['sass:dist']
           }
       }
   });

   grunt.loadNpmTasks('grunt-contrib-sass');
   grunt.loadNpmTasks('grunt-contrib-watch');

   grunt.registerTask('default', ['sass:dist']);
};
