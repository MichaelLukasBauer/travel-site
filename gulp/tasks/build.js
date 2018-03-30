const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const del = require("del");
const usemin = require("gulp-usemin");
const rev = require("gulp-rev");
const cssnano = require("gulp-cssnano");
const uglify = require("gulp-uglifyes");
const browserSync = require("browser-sync").create();

gulp.task("previewDist", () => {
  browserSync.init({
    notify: false,
    server: {
      baseDir: "docs"
    }
  });
});

gulp.task("deletDistFolder", ["icons"], () => {
  return del("./docs");
});

gulp.task("optimizeImages", ["deletDistFolder"], () => {
  return gulp
    .src([
      "./app/assets/images/**/*",
      "!./app/assets/images/**/*-i*",
      "!./app/assets/images/icons",
      "!./app/assets/images/icons/**/*"
    ])
    .pipe(
      imagemin({
        progressive: true,
        interlaced: true,
        multipass: true
      })
    )
    .pipe(gulp.dest("./docs/assets/images"));
});

gulp.task("copyGeneralFiles", ["deletDistFolder"], () => {
  const pathToCopy = [
    "./app/**/*",
    "!./app/index.html",
    "!./app/assets/images/**",
    "!./app/assets/styles/**",
    "!./app/assets/scripts/**",
    "!./app/temp",
    "!./app/temp/**"
  ];
  return gulp.src(pathToCopy).pipe(gulp.dest("./docs"));
});

gulp.task("useminTrigger", ["deletDistFolder"], () => {
  gulp.start("usemin");
});

gulp.task("usemin", ["styles", "scripts"], () => {
  return gulp
    .src("./app/index.html")
    .pipe(
      usemin({
        css: [
          () => {
            return rev();
          },
          () => {
            return cssnano();
          }
        ],
        js: [
          () => {
            return uglify({
              mangle: false,
              ecma: 6
            });
          },
          () => {
            return rev();
          }
        ]
      })
    )
    .pipe(gulp.dest("./docs"));
});

gulp.task("build", [
  "deletDistFolder",
  "copyGeneralFiles",
  "optimizeImages",
  "useminTrigger"
]);
