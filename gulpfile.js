const gulp = require('gulp')
const nodemon = require('gulp-nodemon')
const browserSync = require('browser-sync')
const del = require('del')
const autoprefixer = require('gulp-autoprefixer')
const ghPages = require('gulp-gh-pages')

const PATH = {
  HTML: {
    BASE: './src',
    ADMIN: './src/admin'
  },
  ASSETS: {
    STYLE: './src/assets/css',
    FONTS: './src/assets/fonts',
    IMAGES: './src/assets/images',
    SCRIPT: './src/assets/js',
    LIB: './src/assets/lib',
  }
}

const DEST_PATH = {
  HTML: {
    BASE: './dist',
    ADMIN: './dist/admin'
  },
  ASSETS: {
    STYLE: './dist/assets/css',
    FONTS: './dist/assets/fonts',
    IMAGES: './dist/assets/images',
    SCRIPT: './dist/assets/js',
    LIB: './dist/assets/lib',
  }
}

gulp.task('clean', () => {
  return new Promise(resolve => {
    del.sync(DEST_PATH.HTML.BASE)
    del.sync(DEST_PATH.HTML.ADMIN)
    resolve()
  })
})

gulp.task('html', () => {
  return gulp
    .src(PATH.HTML.BASE + '/*.html')
    .pipe(gulp.dest(DEST_PATH.HTML.BASE))
    .pipe(browserSync.reload({stream: true}))
})

gulp.task('admin', () => {
  return gulp
    .src(PATH.HTML.ADMIN + '/*.html')
    .pipe(gulp.dest(DEST_PATH.HTML.ADMIN))
    .pipe(browserSync.reload({stream: true}))
})

gulp.task('css', () => {
  return gulp
    .src(PATH.ASSETS.STYLE + '/*.*')
    .pipe(autoprefixer({cascade: false}))
    .pipe(gulp.dest(DEST_PATH.ASSETS.STYLE))
    .pipe(browserSync.reload({stream: true}))
})

gulp.task('fonts', () => {
  return gulp
    .src(PATH.ASSETS.FONTS + '/*.*')
    .pipe(gulp.dest(DEST_PATH.ASSETS.FONTS))
})

gulp.task('images', () => {
  return gulp
    .src(PATH.ASSETS.IMAGES + '/*.*')
})

gulp.task('script', () => {
  return gulp
    .src(PATH.ASSETS.SCRIPT + '/*.*')
    .pipe(gulp.dest(DEST_PATH.ASSETS.SCRIPT))
    .pipe(browserSync.reload({stream: true}))
})

gulp.task('library', () => {
  return gulp
    .src(PATH.ASSETS.LIB + '/*.*')
    .pipe(gulp.dest(DEST_PATH.ASSETS.LIB))
})

gulp.task('nodemon:start', () => {
  return new Promise(resolve => {
    nodemon({
      script: 'app.js',
      watch: 'app'
    })
    resolve()
  })
})

gulp.task('browserSync', () => {
  return new Promise(resolve => {
    browserSync.init(null, {
      proxy: 'http://localhost:8005',
      port: 8006
    })
    resolve()
  })
})

gulp.task('watch', () => {
  return new Promise(resolve => {
    gulp.watch(PATH.ASSETS.STYLE + "/**/*.css", gulp.series(['css']))
    gulp.watch(PATH.ASSETS.SCRIPT + "/**/*.js", gulp.series(['script']))
    gulp.watch(PATH.HTML + "/**/*.html", gulp.series(['html']))
    resolve()
  })
})

gulp.task('deploy', () => {
  return gulp
    .src('./dist/**/*')
    .pipe(ghPages())
})

const series = gulp.series([
  'clean',
  'html',
  'admin',
  'css',
  'fonts',
  'images',
  'script',
  'library',
  'nodemon:start',
  'browserSync',
  'watch'
])
gulp.task('default', series)