const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

module.exports = {
  plugins: [
    autoprefixer({
      browsers: ["> 1%", "last 5 versions", "Firefox ESR", "not ie < 9"]
    }),
    cssnano({
      preset: "default"
    })
  ]
};
