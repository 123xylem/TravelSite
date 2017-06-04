var gulp = require ("gulp"),
imagemin =require("gulp-imagemin"),
usemin =require("gulp-usemin"),
uglify =require("gulp-uglify"),
cssnano =require("gulp-cssnano"),
rev=require("gulp-rev"),
del =require ("del");
browserSync = require('browser-sync').create();

gulp.task("distPreview",function(){
	browserSync.init({
    notify: false,
    server: {
      baseDir: "docs"
    }
})
})


gulp.task("deleteDistFolder",["icons"],function(){    //Start Dist fresh everytime we make changes to it
	return del("./docs");
})

gulp.task("copyGeneralFiles",["deleteDistFolder"],function(){ //copy general files excluding all with ! at start
	var pathsToCopy=["./app/**/*","!./app/index.html","!./app/assets.images/**","!./app/assets/styles/**",
	"!./app/assets/scripts/**","!./app/temp","!./app/temp/**"]
	return gulp.src(pathsToCopy)
	.pipe(gulp.dest("./docs"))
})


gulp.task("optimizeImages",["deleteDistFolder"],function(){
	return gulp.src(["./app/assets/images/**/*", "!./app/assets/images/icons", "!./app/assets/images/icons/*"])
	.pipe(imagemin({
		progressive:true,   //use imagemin which minimizes images, 
		interlaced:true,    //these 3 attributes help with gifs and other optimisations
		multipass:true
	}))
	.pipe(gulp.dest("./docs/assets/images"))
})

gulp.task("useminTrigger",["deleteDistFolder"],function(){  //
	gulp.start("usemin");
})

gulp.task("usemin",["scripts","styles"],function(){ //minifies and revises css and js/ waits for latest css and js to run first in dependencies
	return gulp.src("./app/index.html")
	.pipe(usemin({
		css: [function(){return rev()},function(){return cssnano()}],
		js: [function(){return rev()},function(){return uglify()}]
	}))
	.pipe(gulp.dest("./docs"))
})


gulp.task("build",["deleteDistFolder","copyGeneralFiles","optimizeImages","useminTrigger"]);