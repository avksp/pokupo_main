module.exports = {
    all: {
        files: [
            {
                expand: true,
                cwd: 'themes/infoskills/default/src/images/',
                src: ['**/*.{png,jpg,gif}'],
                dest: 'themes/infoskills/default/images/'
            },
            {
                expand: true,
                cwd: 'themes/default/black_yellow/src/images/',
                src: ['**/*.{png,jpg,gif}'],
                dest: 'themes/default/black_yellow/images/'
            },
            {
                expand: true,
                cwd: 'themes/default/blue/src/images/',
                src: ['**/*.{png,jpg,gif}'],
                dest: 'themes/default/blue/images/'
            },
            {
                expand: true,
                cwd: 'themes/default/brown_green/src/images/',
                src: ['**/*.{png,jpg,gif}'],
                dest: 'themes/default/brown_green/images/'
            },
            {
                expand: true,
                cwd: 'themes/default/default/src/images/',
                src: ['**/*.{png,jpg,gif}'],
                dest: 'themes/default/default/images/'
            },
            {
                expand: true,
                cwd: 'themes/default/pink_blue/src/images/',
                src: ['**/*.{png,jpg,gif}'],
                dest: 'themes/default/pink_blue/images/'
            },
            {
                expand: true,
                cwd: 'themes/default/red_black/src/images/',
                src: ['**/*.{png,jpg,gif}'],
                dest: 'themes/default/red_black/images/'
            },
            {
                expand: true,
                cwd: 'themes/default/red_green/src/images/',
                src: ['**/*.{png,jpg,gif}'],
                dest: 'themes/default/red_green/images/'
            }]
    }
};