import express from 'express'

const Router = express.Router()

const sampleLandingData = {
  data: {
    trending: {
      test: 1234
    },
    latest: {}
  }
}

Router.get('/', (_, res) => {
  res
    .status(200)
    .json(sampleLandingData)
    .end()
})

Router.get('/trending', (_, res) => {
  res
    .status(200)
    .json({
      "qwrq41234adrqr": "asdfasdfa"
    })
    .end()
})

export default Router
