var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject_cjs = ts.createProject("./config/tsconfig.node.json");
var tsProject_es = ts.createProject("./config/tsconfig.browser.json");
var uglify = require("gulp-uglify");
const clean = require("gulp-clean");

gulp.task("compile-cjs", function () {
    return tsProject_cjs.src().pipe(tsProject_cjs()).js.pipe(gulp.dest("dist"));
});

gulp.task("compile-es", function () {
    return tsProject_es.src().pipe(tsProject_es()).js.pipe(gulp.dest("dist"));
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

gulp.task(
    "default",
    gulp.series("clean", "compile-cjs", "compile-es", "uglify", "clean-types")
);
