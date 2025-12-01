const data =
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8DwHwAFBQIAX8jx0gAAAABJRU5ErkJggg==";
const buf = Buffer.from(data, "base64");

module.exports = function redFavicon(req, res, next) {
  if (req.url === "/favicon.ico") {
    res.setHeader("Content-Type", "image/png");
    res.end(buf);
  } else {
    next();
  }
};
