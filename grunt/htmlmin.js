module.exports = {
    dist: {
        options: {
            collapseWhitespace: true,
            preserveLineBreaks:true
        },
        files:[
            {
                expand: true,
                cwd: 'themes/default/default/src/tmpl/',
                src: ['*.html'],
                dest: 'themes/default/default/tmpl/'
            },
            {
                expand: true,
                cwd: 'themes/default/default/src/',
                src: ['loader.html'],
                dest: 'themes/default/default/'
            },
            {
                expand: true,
                cwd: 'themes/default/black_yellow/src/',
                src: ['loader.html'],
                dest: 'themes/default/black_yellow/'
            },
            {
                expand: true,
                cwd: 'themes/default/blue/src/',
                src: ['loader.html'],
                dest: 'themes/default/blue/'
            },
            {
                expand: true,
                cwd: 'themes/default/brown_green/src/',
                src: ['loader.html'],
                dest: 'themes/default/brown_green/'
            },
            {
                expand: true,
                cwd: 'themes/default/pink_blue/src/',
                src: ['loader.html'],
                dest: 'themes/default/pink_blue/'
            },
            {
                expand: true,
                cwd: 'themes/default/red_black/src/',
                src: ['loader.html'],
                dest: 'themes/default/red_black/'
            },
            {
                expand: true,
                cwd: 'themes/default/red_green/src/',
                src: ['loader.html'],
                dest: 'themes/default/red_green/'
            },
            {
                expand: true,
                cwd: 'themes/default/payment/src/',
                src: ['loader.html'],
                dest: 'themes/default/payment/'
            },
            {
                expand: true,
                cwd: 'themes/default/payment_dark/src/',
                src: ['loader.html'],
                dest: 'themes/default/payment_dark/'
            },
            {
                expand: true,
                cwd: 'themes/default/payment_company/src/',
                src: ['loader.html'],
                dest: 'themes/default/payment_company/'
            },
            {
                expand: true,
                cwd: 'themes/default/payment_company_white/src/',
                src: ['loader.html'],
                dest: 'themes/default/payment_company_white/'
            },
            {
                expand: true,
                cwd: 'themes/infoskills/default/src/tmpl/',
                src: ['*.html'],
                dest: 'themes/infoskills/default/tmpl/'
            },
            {
                expand: true,
                cwd: 'themes/infoskills/default/src/',
                src: ['loader.html'],
                dest: 'themes/infoskills/default/'
            },
        ]
    }
};