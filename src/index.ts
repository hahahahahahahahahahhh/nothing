import * as controller from './controller'
const http = require('http');
const url = require('url')
//  生成controller 和 path map
let controllerMap = {};
Object.keys(controller).forEach((item)=>{
  controllerMap[item.toString()] = controller[item]
}); 
const server = http.createServer();
server.on('request', (message, res) =>{
  const messageUrl = url.parse(message.headers.host+message.url);
  const params = {
    methods: message.methods,         // 请求方法
    hostName: messageUrl.hostname,    // 主机名称
    port:     messageUrl.port,        // 端口
    pathName: messageUrl.pathname,    // 请求路径
    search:   messageUrl.search,      // 请求参数
  }
  if(params.pathName[0] === '/'){
    params.pathName = params.pathName.slice(1);
  }
  if(params.pathName == 'favicon.ico'){
    return;
  }
  console.log('请求路径', params.pathName);
  let result = ''
  if(controllerMap.hasOwnProperty(params.pathName)){
    result  = controllerMap[params.pathName](params);
  } else {
    result = 'empty'
  }
  if(typeof result === 'string'){
    res.setHeader('Content-type', 'text/html;charset=utf-8')
  }
  res.write(result);
  res.end();
})
server.listen(3333);
