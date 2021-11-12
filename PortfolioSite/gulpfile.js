


const { src, dest, watch, parallel, series }  = require('gulp');
const concat = require('gulp-concat');
const scss  = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify-es').default;
const imagemin = require('gulp-imagemin');
const deliteDist = require('del');



// BrowserSync обновляет страницу
function browsersync() {
    browserSync.init({
        server : {
            baseDir: 'app/'
        }
    });
}
// Удаляет папку dist перед build
function cleanDist() {
    return deliteDist('dist');
}

// Сжатие картинок
function images() {
    return src('app/images/**/*')
    .pipe(imagemin([
        imagemin.gifsicle({interlaced: true}),
        imagemin.mozjpeg({quality: 75, progressive: true}),
        imagemin.optipng({optimizationLevel: 5}),
        imagemin.svgo({
            plugins: [
                {removeViewBox: true},
                {cleanupIDs: false}
            ]
        })
    ]))
    .pipe(dest('dist/images'))
}

// Работа с js файлами
function scripts() {
    return src([
        'node_modules/jquery/dist/jquery.js',
        'node_modules/@fancyapps/ui/dist/fancybox.umd.js',
        'node_modules/@fancyapps/ui/dist/carousel.umd.js',
        'node_modules/@fancyapps/ui/dist/carousel.autoplay.umd.js',
        'node_modules/wow.js/dist/wow.js',
        'node_modules/slick-slider/slick/slick.js',
        // 'app/js/resume.js'
        // 'portfolio.js'
        // 'app/js/main.js'
        'app/js/about.js'

    ])
    .pipe(concat('about.min.js'))
    // .pipe(uglify())
    .pipe(dest('app/js'))
    .pipe(browserSync.stream())
}

// Компиляция scss в css с минификацией после сохранения
function styles() {
    return src([
        // 'app/scss/style.scss',
        // 'app/scss/portfolio.scss'
        'app/scss/about.scss'
    ])
    .pipe(scss({outputStyle: 'compressed'}))
    .pipe(concat('about.min.css'))
    .pipe(autoprefixer({
        overrideBrowserslist: ['last 10 version'],
        grid: true
    }))
    .pipe(dest('app/css'))
    .pipe(browserSync.stream())
}
// ВЫгружает весь проект в папку dist
function build() {
    
    return src([
    'app/css/**/*.min.css',
    'app/fonts/**/*',
    'app/js/**/*.min.js',
    'app/*.html'
], {base: 'app'})
    .pipe(dest('dist'))
}

// Наблюдейние за файлами scss, js, html
function watching() {
    watch(['app/**/**/*.scss'], styles);
    watch(['app/js/about.js' ,'!app/js/about.min.js'], scripts);
    watch(['app/*.html']).on('change', browserSync.reload);
}


// Экспорт всех функций для запуска
exports.styles = styles;
exports.watching = watching;
exports.browsersync = browsersync;
exports.scripts = scripts;
exports.build = series(cleanDist, images, build);
exports.images = images;
exports.cleanDist = cleanDist;

// При запуске команды 'gulp', асинхронно подключает bs и watch
exports.default = parallel(styles ,scripts, browsersync, watching);

