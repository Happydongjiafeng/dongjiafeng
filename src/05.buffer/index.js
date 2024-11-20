/* 了解buffer的特性 */
import fs from 'node:fs' //引入fs模块
let bufferStr = Buffer.from('node.js实战','utf-8')
console.log(bufferStr);
console.log(bufferStr.toString('hex')); //将字符串转换为16进制数据

/* 文件流读写操作 */
let inputStream = fs.createReadStream('../files/a.txt')
let outputStream = fs.createWriteStream('../files/b.txt')
inputStream.pipe(outputStream) //将a.txt文件内容写入b.txt文件


