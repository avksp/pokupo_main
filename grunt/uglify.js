module.exports = {
    my_target: {
        files: {
            'scripts/main.min.js': [
                'scripts/main.js'
            ],
            'themes/infoskills/default/main.js': [
                // 'themes/infoskills/default/src/js/main.js',
                'themes/infoskills/default/src/js/custom.js'
            ],
            'themes/infoskills/default/pokupo.widgets.animate.min.js': [
                'themes/infoskills/default/src/js/animate/*.js'
            ],
            'themes/infoskills/default/pokupo.components.min.js': [
                'themes/infoskills/default/src/js/lib/*.js'
            ],

            'themes/default/default/pokupo.widgets.animate.min.js': [
                'themes/default/default/src/js/animate/*.js'
            ],
            'themes/default/default/pokupo.components.min.js': [
                'themes/default/default/src/js/lib/jquery-ui.min.js',
                'themes/default/default/src/js/lib/jquery.fancytree-all.js',
                'themes/default/default/src/js/lib/fotorama.js',
                'themes/default/default/src/js/lib/floatlabels.js',
                'themes/default/default/src/js/lib/carousel.min.js',
                'themes/default/default/src/js/lib/chosen.jquery.js',
                'themes/default/default/src/js/lib/jquery.maskedinput.js',
                'themes/default/default/src/js/lib/placeholder.js',
                'themes/default/default/src/js/lib/jquery.password.js',
                'themes/default/default/src/js/lib/tooltip.js',
                'themes/default/default/src/js/lib/progress-circle.js',
                'themes/default/default/src/js/lib/jquery.fs.selecter.js',
                'themes/default/default/src/js/lib/jquery.mCustomScrollbar.concat.min.js',
                'themes/default/default/src/js/lib/jquery.suggestions-4.6.min.js'
            ],
        }
    }
};