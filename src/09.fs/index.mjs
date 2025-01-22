import fs from 'node:fs'
import path from 'node:path'
/*创建目录*/
const createDir = () => {
  return new Promise((resolve,reject) => {
    fs.mkdir('Test',(err) => {
      if (err)  return reject(err)
      resolve('目录创建成功')
    })
  })
}

/* 在创建的目录下创建一个文件内容1000个hello,world */

let res = await createDir().catch(err => console.error(err))
if(res) { // 目录创建成功之后，创建一个压缩式的文件 方便快速传输
  const writeStream = fs.createWriteStream(path.join('Test','test.txt'))
  writeStream.write('hello'.repeat(1000) + '\n')
}

/*删除目录*/
/*fs.rmdir('Test',(err) => {
  if (err) return console.error(err)
  console.log('目录删除成功')
})*/


