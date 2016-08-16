module.exports = {
    options: {
        shorthandCompacting: false,
        roundingPrecision: -1
    },
    target: {
        files: {
            'themes/default/default/main_pkp.css': ['themes/default/default/src/styles/main_pkp.css'],
            'themes/default/default/main.css': ['themes/default/default/src/styles/main.css'],
            'themes/default/default/theme.css': ['themes/default/default/src/*.css'],
            'themes/default/black_yellow/theme.css': ['themes/default/black_yellow/src/*.css'],
            'themes/default/blue/theme.css': ['themes/default/blue/src/*.css'],
            'themes/default/brown_green/theme.css': ['themes/default/brown_green/src/*.css'],
            'themes/default/pink_blue/theme.css': ['themes/default/pink_blue/src/*.css'],
            'themes/default/red_black/theme.css': ['themes/default/red_black/src/*.css'],
            'themes/default/red_green/theme.css': ['themes/default/red_green/src/*.css'],

            // 'styles/payment.css': ['styles/src/payment.css'],
            // 'styles/payment_company.css': ['styles/src/payment_company.css'],
            // 'styles/payment_company_white.css': ['styles/src/payment_company_white.css'],
            // 'styles/payment_dark.css': ['styles/src/payment_dark.css'],

            'themes/default/payment/main.css': ['themes/default/payment/src/payment.css'],
            'themes/default/payment/theme.css': ['themes/default/payment/src/theme.css'],

            'themes/default/payment_company/main.css': ['themes/default/payment_company/src/payment_company.css'],
            'themes/default/payment_company/theme.css': ['themes/default/payment_company/src/theme.css'],

            'themes/default/payment_company_white/main.css': ['themes/default/payment_company_white/src/payment_company_white.css'],
            'themes/default/payment_company_white/theme.css': ['themes/default/payment_company_white/src/theme.css'],

            'themes/default/payment_dark/main.css': ['themes/default/payment_dark/src/payment_dark.css'],
            'themes/default/payment_dark/theme.css': ['themes/default/payment_dark/src/theme.css'],

            'themes/infoskills/default/theme.css': [
                'themes/infoskills/default/src/styles/theme_info.css',
                'themes/infoskills/default/src/styles/theme_disp_info.css',
                'themes/infoskills/default/src/styles/theme_payment.css',
            ],
            'themes/infoskills/default/main.css': [
                'themes/infoskills/default/src/styles/jquery-ui-1.10.2.custom.css',
                'themes/infoskills/default/src/styles/fotorama.css',
                'themes/infoskills/default/src/styles/reset.css',
                'themes/infoskills/default/src/styles/layout_info.css',
                'themes/infoskills/default/src/styles/layout_disp_info.css',
                'themes/infoskills/default/src/styles/layout_payment.css',
            ]
        }
    }
}