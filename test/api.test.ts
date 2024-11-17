import supertest from 'supertest'
const request = supertest('http://localhost:3000')

describe('GET REQUESTS - COMPAINGS', () =>{
    it('GET /home/campaings', async () => {
        const response = await request.get('/home/campaings')
        expect(response.status).toBe(200) 
    })
})