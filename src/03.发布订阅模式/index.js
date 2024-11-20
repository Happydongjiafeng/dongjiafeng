import { EventEmitter } from "node:events"; //引入EventEmitter模块
import fs from "node:fs"; //引入fs模块
const emitter = new EventEmitter(); //实例化EventEmitter对象

const status = {}

function selectFile(filePath,fileName,cb) {
    emitter.once(filePath,cb)
    if(status[filePath] === undefined) {
        status[filePath] = 'ready'
    }
    if(status[filePath] ==='ready') {
        status[filePath] = 'pending'
        fs.readFile(filePath, (err, data) => {
            if(err) {
                console.log(err)
                return
            }
            const fileContent = data.toString()
            emitter.emit(filePath,err,fileContent)
            status[filePath] = 'ready'
            setTimeout(function() {
                delete status[filePath];
            }, 1000);
        })
    }
}

for(let i = 0; i < 10; i++) {
    selectFile('../files/a.txt','a.txt',function(err,result) {
        console.log('err:' + err,'result:' + result);
        
    })
}
