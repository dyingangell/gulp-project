import svgSrite from "gulp-svg-srite";
export const svgSrive = () => {
    return app.gulp.src(`${app.path.src.svgicons}`,{})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "SVG",
                message: "Error : <%= error.message %>"
            })
        ))
        .pipe(app.gulp.dest(`${app.path.build.images}`));
    }