/* 主进程 */
import http from "http";
import { fork } from "child_process"; //创建一个子进程

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain;charset=utf-8');
    if(req.url == '/child') {
        //创建子进程
        const childFork = fork('./computed_number.js')
        childFork.send('开启一个子进程') //向子进程发送消息
        childFork.on('message', msg => { //接受子进程发发送过来的消息
            res.end(Buffer.from(`求和为: ${msg}`))
            childFork.kill() //杀死子进程
        })
        childFork.on('close', code => { //监听到子进程的错误消息时退出
            console.log(`子进程已退出，退出码：${code}`)
            childFork.kill() //杀死子进程
        })
    }else {
        res.end(Buffer.from('正在初始化数据')) //利用buffer发送数据可以提高资源的利用率
    }
});

server.listen(3000,'127.0.0.1',() => {
    console.log('Server running at http://127.0.0.1:3000');  
})
obs


