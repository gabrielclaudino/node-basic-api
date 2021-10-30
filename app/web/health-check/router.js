import Router from 'koa-router'

export default new Router().get('/', (ctx) => {
  const version = ` - version ${process.env.VERSION}`
  return ctx.ok(`Example API${process.env.VERSION ? version : ''}`)
})
