// /gulpfile.js 
var gulp = require('gulp');
var replace = require('gulp-string-replace');
var fs = require('fs');
var tap = require('gulp-tap');
var path = require('path');


var filename = "";

async function getFileContent(file) {
  return await fs.readFile(file,'utf-8',(err,contents) => {
    if(!err)
      return contents;
    return err;
  })
}



gulp.task('movecss', function(done) {
  console.log("Moving css/html files to dist");
  gulp.src("./src/**/*.css")
      .pipe(gulp.dest('./dist/tsc/app/src'));
  done()
});

gulp.task('movehtml', function(done) {
  console.log("Moving css/html files to dist");
  gulp.src("./src/**/*.html")
      .pipe(gulp.dest('./dist/tsc/app/src'));
  done()
});


gulp.task('putHtmlCssInJs', function(done) {
  console.log("Integrate css/html in js");
  gulp.src(".dist/tsc/app/src/**/*.css")
      .pipe(tap(async function(file) {

        contents = file.contents.toString();

        htmlFileName = contents.match(/\w*.html/g);

        cssFileName = contents.match(/\w*.css/g);

        console.log(htmlFileName)

        htmlFileContent = await getFileContent(path.basename(file.path) + "/" + htmlFileName);

        console.log(path.basename(file.path) + "/" + htmlFileName)


        console.log(htmlFileContent)


        cssFileContent = await getFileContent(path.basename(file.path) + "/" + cssFileName);

        // contents.replace(/\w*.html/g,htmlFileContent)

        // contents.replace(/\w*.css/g,cssFileContent)

        file.contents = Buffer.from(contents)
      }))
      .pipe(replace(new RegExp('(\w*.html)', 'g'), function () {
        return getFileContent();
      }))
      .pipe(replace(new RegExp('(\w*.css)', 'g'), function () {
        return getFileContent();
      }))
  done()
});

gulp.task("movecsshtml",gulp.parallel('movehtml','movecss'));

gulp.task("build",gulp.series("movecsshtml","putHtmlCssInJs"))