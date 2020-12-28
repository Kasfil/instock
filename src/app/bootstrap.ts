import express from 'express'
import Landing from 'actions/landing'
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from '../../swagger.json'

const app = express()

app.use('/', Landing)

export default app
