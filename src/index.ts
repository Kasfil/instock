import app from 'app/bootstrap'
import config from 'configs/config'
import http from 'http'
import { AddressInfo } from 'net'

function pipeOrAddr(address: string|AddressInfo|null) {
  if (address != null) {
    if (typeof address == 'string') {
      return address
    } else {
      return address.port
    }
  } else {
    throw new Error('Address null')
  }
}

const port = +config.port
app.set('port', port)

const server = http.createServer(app)
server.listen(port)

server.on('error', (err: Error) => {
  throw err
})

server.on('listening', () => {
  const address = pipeOrAddr(server.address())
  console.log(`Core api listerning on ${address}`)
})
