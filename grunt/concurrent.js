module.exports = {

    // Опции
    options: {
        limit: 3
    },

    clear: [
        'clean'
    ],

    // Задачи разработки
    devFirst: [
        'clean',
        'jshint'
    ],
    devSecond: [
        'cssmin',
        'uglify',
        'htmlmin'
    ],
    devTherd: [
        'imagemin',
        'copy'
    ],

    // Производственные задачи
    prodFirst: [
        'clean',
        'jshint'
    ],
    prodSecond: [
        'cssmin',
        'uglify',
        'htmlmin'
    ],
    prodTherd: [
        'imagemin',
        'copy'
    ],

    // Задачи изображений
    imgFirst: [
        'imagemin'
    ]
};