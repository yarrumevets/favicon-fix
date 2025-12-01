const data =
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=";
const buf = Buffer.from(data, "base64");

module.exports = function redFavicon(req, res, next) {
  if (req.url === "/favicon.ico") {
    res.setHeader("Content-Type", "image/png");
    res.end(buf);
  } else {
    next();
  }
};
