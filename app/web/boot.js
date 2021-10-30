import http from 'http'
import logger from '../lib/logger.js'
// import '../lib/mongo'
import app from './index.js'

const httpPort = process.env.PORT || 80
http
  .createServer(app.callback())
  .listen(httpPort, () => logger.info(`Example API - Running on port ${httpPort}`))
