"use strict"
var gulp = require("gulp")
//var sass = require('gulp-sass');
var concat = require("gulp-concat")
const sass = require("gulp-sass")(require("sass"))
//sass.compiler = require('node-sass');

//cool stuff that it is not necessary
var postcss = require("gulp-postcss"),
  autoprefixer = require("autoprefixer"),
  cssnano = require("cssnano"),
  sourcemaps = require("gulp-sourcemaps")

// Put this after including our dependencies
var paths = {
  styles: {
    // By using styles/**/*.sass we're telling gulp to check all folders for any sass file
    src: "interior-dex/sass/*.sass",
    // Compiled files will end up in whichever folder it's found in (partials are not compiled)
    dest: "interior-dex/css/",
  },
}

// Define tasks after requiring dependencies
function style() {
  return (
    gulp
      .src(paths.styles.src)
      .pipe(sourcemaps.init())
      .pipe(sass())
      .on("error", sass.logError)
      // Use postcss with autoprefixer and compress the compiled file using cssnano
      .pipe(postcss([autoprefixer(), cssnano()]))
      // Now add/write the sourcemaps
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(paths.styles.dest))
  )
}

// Expose the task by exporting it
// This allows you to run it from the commandline using
// $ gulp style
exports.style = style

//automating function style
function watch() {
  //I usually run the compile task when the watch task starts as well
  style()

  gulp.watch(paths.styles.src, style)
}
// Don't forget to expose the task!
exports.watch = watch
