var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
const minify = require("gulp-minify");
var uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const clean = require("gulp-clean");

gulp.task("compile", function () {
    return tsProject.src().pipe(tsProject()).js.pipe(gulp.dest("dist_temp"));
});

gulp.task("compress", function () {
    return gulp
        .src(["dist_temp/*.js"])
        .pipe(minify())
        .pipe(gulp.dest("dist_temp"));
});

gulp.task("rename", function () {
    return gulp
        .src("dist_temp/*-min.js")
        .pipe(
            rename(function (path) {
                // Updates the object in-place

                path.basename = path.basename.replace("-min", "");
            })
        )
        .pipe(gulp.dest("./dist"));
});
gulp.task("uglify", function () {
    return gulp.src(["dist/*.js"]).pipe(uglify()).pipe(gulp.dest("dist"));
});

gulp.task("clean", function () {
    return gulp.src("dist", { read: false, allowEmpty: true }).pipe(clean());
});
gulp.task("cleanTemp", function () {
    return gulp.src("dist_temp", { read: false }).pipe(clean());
});

gulp.task(
    "default",
    gulp.series("clean", "compile", "compress", "rename", "uglify", "cleanTemp")
);
