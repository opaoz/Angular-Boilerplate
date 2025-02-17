/**
 * @file cloudinary.js
 * @author Albert Cyberhulk
 * @date 7/02/16
 */

// Uploads remaining files to cloudinary
module.exports = {
  cloudinary: {
      // Options for cloudinary
      options: {
        replace: true, // replaces originals with uploaded ones // default false
        dir: '<%= project.dist %>/', // path where the occurencies should be replaced
        credentials: { // cloudinary credentials
          'api_key': '311552493797948',
          'api_secret': 'IZ9Q25aTQY13TfgnqD-GA70yBpw',
          'cloud_name': 'cyberhulk-net'
        }
      },
      // source files to be processed
      files: [
        {
          expand: true, // set to true to find whole path
          cwd: '<%= project.dist %>',
          src: [
            'images/**/*.ico', 'images/**/*.png', 'images/**/*.jpeg'
          ]
        },
        {
          expand: true, // set to true to find whole path
          cwd: '<%= project.dist %>',
          src: [
            'styles/**/*.css'
          ]
        },
        { 
          expand: true, // set to true to find whole path
          cwd: '<%= project.dist %>',
          src: [
            'scripts/**/*.js'
          ]
        }
      ]
    }
};
