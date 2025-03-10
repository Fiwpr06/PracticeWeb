module.exports = {
  plugins: [
    require("posthtml-doctype")({ doctype: "HTML 5" }),
    require("posthtml-include")({ root: "./src/views" }),
  ],
};
