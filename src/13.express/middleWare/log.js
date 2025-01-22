/*日志文件中间件*/
import log4js from 'log4js' // 引入log4js模块

// 配置 log4js
log4js.configure({
  appenders: {
    out: {
      type: 'stdout', // 输出到控制台
      layout: {
        type: 'colored' // 使用带颜色的布局
      }
    },
    file: {
      type: 'file', // 输出到文件
      filename: process.cwd() + '/logs/app.log', // 指定日志文件路径和名称
    }
  },
  categories: {
    default: {
      appenders: ['out', 'file'], // 使用 out 和 file 输出器
      level: 'debug' // 设置日志级别为 debug
    }
  }
});
// 导出日志中间件
const logger = log4js.getLogger('default');

export const logMiddleware = (req, res, next) => {
  // 记录请求信息
  logger.debug(`Request: ${req.method} ${req.url} `);
  next();
}

