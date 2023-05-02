var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
var uglify = require("gulp-uglify");
const clean = require("gulp-clean");

gulp.task("compile", function () {
    return tsProject.src().pipe(tsProject()).js.pipe(gulp.dest("dist"));
});

gulp.task("uglify", function () {
    return gulp
        .src(["dist/*.js", "dist/**/*.js"])
        .pipe(uglify())
        .pipe(gulp.dest("dist"));
});

gulp.task("clean", function () {
    return gulp.src("dist", { read: false, allowEmpty: true }).pipe(clean());
});

gulp.task("clean-types", function () {
    return gulp
        .src("dist/**/types.js", { read: false, allowEmpty: true })
        .pipe(clean());
});

gulp.task("default", gulp.series("clean", "compile", "uglify", "clean-types"));
