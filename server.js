var http = require('http')
var url = require('url')
function start (route, handle) {
  http.createServer(
    (req, res) => {
      var pathname = url.parse(req.url).pathname
      route(handle, pathname, res, req)
    }
  ).listen(8888)
}
console.log('localhost:8888')
module.exports = {start}
