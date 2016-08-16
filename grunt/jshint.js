module.exports = {
    options: {
        reporter: require('jshint-stylish')
    },
    main: [
        'scripts/main.js',
        'themes/default/default//src/js/animate/*.js',
        'themes/infoskills/default/src/js/animate/*.js'
    ]
};