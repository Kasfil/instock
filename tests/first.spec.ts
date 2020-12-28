import request from 'supertest'
import app from 'app/bootstrap'

describe('Request to /trending should have 200 status code', () => {
  it('Should has 200 status code', async () => {
    const res = await request(app)
      .get('/trending')

    expect(res.status).toEqual(200)
  })
})
