// 请求处理程序
var fs = require('fs')
var formidable = require('formidable')
function start (res) {
  var body = '<html>' +
    '<head>' +
    '<meta http-equiv="Content-Type" ' +
    'content="text/html; charset=UTF-8" />' +
    '</head>' +
    '<body>' +
    '<form action="/upload" enctype="multipart/form-data" ' +
    'method="post">' +
    '<input type="file" name="upload">' +
    '<input type="submit" value="Upload file" />' +
    '</form>' +
    '</body>' +
    '</html>'
  res.writeHead(200, {'Content-Type': 'text/html'})
  res.write(body)
  res.end()
}

function upload (res, req) {
  var form = new formidable.IncomingForm()
  form.parse(req, function (err, fields, files) {
    fs.renameSync(files.upload.path, '/tmp/test.png')
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write('received image: <br>')
    res.write('<img src="/show">')
    res.end()
  })
}

function show (res, req) {
  fs.readFile('/tmp/test.png', 'binary', function (err, file) {
    if (err) {
      res.writeHead(500, {'Content-Type': 'text/plain'})
      res.write(err + '/n')
      res.end()
    } else {
      res.writeHead(200, {'Content-Type': 'image/png'})
      res.write(file, 'binary')
      res.end()
    }
  })
}
module.exports = {start, upload, show}
