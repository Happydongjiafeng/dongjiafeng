const fs = require('node:fs')
const util = require('node:util')  // 引入util工具类
const path = require('node:path')
const zlip = require('node:zlib') // 引入zlib压缩模块
/*
异步去创建一个文件，并写入内容
* */
const filePath = path.join(__dirname, '/Test/index.txt') // 要操作的文件的路径
const writeFileAsync = util.promisify(fs.writeFile) // 转换成Promise
async function createFile() { //创建文件的函数
  try {
    await writeFileAsync(filePath, 'Hello Node.js'.repeat(100000)) // 异步写入内容
  } catch (error) {
    console.error(error) // 输出错误信息
  }
}

/*
* @description 创建一个压缩文件的函数
* */
const gzipFile = () => {
  createFile().then(() => {
    const readStream = fs.createReadStream(filePath)
    const writeStream = fs.createWriteStream(filePath + '.deflate')
    readStream.pipe(zlip.createDeflate()).pipe(writeStream) // 压缩文件
  })
}
//gzipFile() // 调用函数
const unzipFile = () => { // 解压文件
  const readStream = fs.createReadStream(filePath + '.deflate')
  const writeStream = fs.createWriteStream(__dirname + '/Test/indexUnZip.txt')
  readStream.pipe(zlip.createInflate()).pipe(writeStream) // 解压文件
}
unzipFile() // 调用函数
