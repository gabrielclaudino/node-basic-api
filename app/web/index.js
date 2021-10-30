import Koa from 'koa'
import cors from 'kcors'
import bodyParser from 'koa-bodyparser'
import formidable from 'koa2-formidable'
import compress from 'koa-compress'
import { constants } from 'zlib'
import morgan from 'koa-morgan'
import helmet from 'koa-helmet'
import respond from 'koa-respond'
import mount from 'koa-mount'
import router from './router.js'

const app = new Koa()

const compressOpts = {
  filter: contentType => /text/i.test(contentType),
  threshold: 2048,
  flush: constants.Z_SYNC_FLUSH
}

app
  .use(async (ctx, next) => {
    try {
      return await next()
    } catch (error) {
      // sendError(ctx, error)
    }
  })
  .use(morgan('combined', {
    skip: (ctx) => ctx.statusCode < 400
  }))
  .use(cors({ credentials: true, exposeHeaders: ['X-Total-Matches'] }))
  .use(respond())
  .use(compress(compressOpts))
  .use(formidable())
  .use(bodyParser({ urlencoded: { extended: true } }))
  .use(helmet())
  .use(mount('/', router))

export default app
