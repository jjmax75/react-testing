const webpack = require( 'webpack' );
const webpackConfig = require( '../../webpack.config.js' );
webpackConfig.entry = {};

module.exports = function( config ) {
  config.set({

    frameworks: [ 'jasmine' ],

    // list of files / patterns to load in the browser
    files: [
        './tests.webpack.js'
    ],

    preprocessors: {
      './tests.webpack.js': [ 'babel', 'webpack', 'sourcemap' ]
    },
    
    // test results reporter to use
    // possible values: 'dots', 'progress', 'mocha'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: [ 'mocha' ],

    colors: true,
    
    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
    
    // to watch use autoWatch
    singleRun: true,
    
    autoWatch: false,
    
    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: [ 'PhantomJS' ],
    
    webpack: webpackConfig,
    
    webpackMiddleware: {
      noInfo: true
    }
    
  });
};
