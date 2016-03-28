// 主程序 文件入口
var server = require('./server.js')
var router = require('./router.js')
var requestHandlers = require('./requestHandlers.js')
// 路由规则
var handle = {
  '/': requestHandlers.start,
  '/start': requestHandlers.start,
  '/upload': requestHandlers.upload,
  '/show': requestHandlers.show
}
server.start(router.route, handle)
