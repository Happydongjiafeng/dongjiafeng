/* 子进程，主要用来计算大量数据 */
const computeData = () => {
    let sum = 0
    console.info('计算数据开始')
    console.time('计算时间')
    for(let i = 0 ; i < 1e10 ; i++) {
        sum += i
    }
    console.info('计算数据结束')
    console.timeEnd('计算时间')
    return sum 
}
process.on('message', (msg) => {
    console.log(msg,'子进程id' +process.pid); //子进程id
    let sum = computeData()
    process.send(sum) // 发送数据给父进程
})