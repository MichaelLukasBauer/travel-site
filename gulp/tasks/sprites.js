const gulp = require("gulp");
const rename = require("gulp-rename");
const svgSprite = require("gulp-svg-sprite");
const del = require("del");

const config = {
  mode: {
    css: {
      sprite: "sprite.svg",
      render: {
        css: {
          template: "./gulp/templates/sprites.css"
        }
      }
    }
  }
};

gulp.task("beginClean", () => {
  return del(["./app/temp/sprite/", "./app/assets/images/sprites"]);
});
gulp.task("endClean", ["copySpriteGraphic", "copySpriteCSS"], () => {
  return del(["./app/temp/sprite/"]);
});

gulp.task("createSprite", ["beginClean"], () => {
  return gulp
    .src("./app/assets/images/icons/**/*.svg")
    .pipe(svgSprite(config))
    .pipe(gulp.dest("./app/temp/sprite/"));
});

gulp.task("copySpriteGraphic", ["createSprite"], () => {
  return gulp
    .src("./app/temp/sprite/css/**/*.svg")
    .pipe(gulp.dest("./app/assets/images/sprites"));
});

gulp.task("copySpriteCSS", ["createSprite"], () => {
  return gulp
    .src("./app/temp/sprite/css/*.css")
    .pipe(rename("_sprite.css"))
    .pipe(gulp.dest("./app/assets/styles/modules"));
});

gulp.task("icons", [
  "beginClean",
  "createSprite",
  "copySpriteGraphic",
  "copySpriteCSS",
  "endClean"
]);
