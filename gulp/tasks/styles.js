const gulp = require("gulp");
const postCSS = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssvars = require("postcss-simple-vars");
const nested = require("postcss-nested");
const cssImport = require("postcss-import");
const mixins = require("postcss-mixins");
const hexrgba = require("postcss-hexrgba");

gulp.task("styles", () => {
  return gulp
    .src("./app/assets/styles/styles.css")
    .pipe(postCSS([cssImport, mixins, cssvars, nested, hexrgba, autoprefixer]))
    .on("error", error => {
      console.log(error.toString());
    })
    .pipe(gulp.dest("./app/temp/styles"));
});
