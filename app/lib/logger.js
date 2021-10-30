import { createLogger } from 'bunyan'
import bunyanFormat from 'bunyan-format'

const logger = createLogger({
  name: 'Exemplo API',
  stream: bunyanFormat({ outputMode: 'long' })
})
export default logger
