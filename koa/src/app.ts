import Koa from "koa";
import {Socket, Server} from 'socket.io'
import {createServer} from 'http'

const app:Koa = new Koa();
const httpServer = createServer(app.callback());
const options = {

};
const io = new Server(httpServer, options);

io.on("connection", socket => {})

app.use((ctx: Koa.DefaultContext) => {
    console.log(ctx.request.body)
    console.log("hello")

    ctx.body = "hello world！!!!!!!";
})

const port: number = 8899;
httpServer.listen(port, () => {
    console.log(`seccess start server`)
    console.log(`local: http://127.0.0.1:${port}`)
})