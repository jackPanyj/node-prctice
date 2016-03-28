function route (handle, pathname, res, req) {
  if (typeof handle[pathname] === 'function') {
    handle[pathname](res, req)
  } else {
    console.log('not found ')
    res.writeHead(404, {'Content-Type': 'text/plain'})
    res.write('404 not found')
    res.end()
  }
}

module.exports = {route}
