// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const { src, dest, watch, series } = require("gulp");

// CSS y SASS
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const sass = require("gulp-sass")(require("sass"));
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const postcss = require("gulp-postcss");
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const autoprefixer = require("autoprefixer");
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const sourcemaps = require("gulp-sourcemaps");
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const cssnano = require("cssnano");

// Imagenes
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const imagemin = require("gulp-imagemin");
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const webp = require("gulp-webp");
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const avif = require("gulp-avif");

function css(done) {
  src("src/scss/app.scss")
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write("."))
    .pipe(dest("dist/css"));

  done();
}

function imagenes() {
  return src("src/assets**/*")
    .pipe(imagemin({ optimizationLevel: 3 }))
    .pipe(dest("dist/assets"));
}

function versionWebp() {
  const opciones = {
    quality: 50,
  };
  return src("src/assets**/*.{png,jpg}")
    .pipe(webp(opciones))
    .pipe(dest("dist/assets"));
}
function versionAvif() {
  const opciones = {
    quality: 50,
  };
  return src("src/assets**/*.{png,jpg}")
    .pipe(avif(opciones))
    .pipe(dest("dist/assets"));
}

function dev() {
  watch("src/scss/**/*.scss", css);
  watch("src/assets**/*", imagenes);
}

// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
exports.css = css;
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
exports.dev = dev;
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
exports.imagenes = imagenes;
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
exports.versionWebp = versionWebp;
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
exports.versionAvif = versionAvif;
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
exports.default = series(imagenes, versionWebp, versionAvif, css, dev);
