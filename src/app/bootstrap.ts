import express from 'express'
import Landing from 'actions/landing'
import YAML from 'yamljs'
import swaggerUi from 'swagger-ui-express'

const swaggerDocument = YAML.load('./openapi.yml')

const app = express()

app.use('/', Landing)
app.use('/openapi-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

export default app
