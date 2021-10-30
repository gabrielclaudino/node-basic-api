import Koa from 'koa'
import mount from 'koa-mount'
import healthCheckRouter from './health-check/router.js'

export default new Koa()
  .use(mount('/', healthCheckRouter.routes()))
