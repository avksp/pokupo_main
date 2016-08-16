module.exports = {
    main: {
        files: [
            {
                expand: true,
                cwd: 'themes/default/default/src/fonts/',
                src: '**',
                dest: 'themes/default/default/fonts/'
            },
            {
                expand: true,
                cwd: 'themes/infoskills/default/src/fonts/',
                src: '**',
                dest: 'themes/infoskills/default/fonts/'
            },
        ]
    }
};