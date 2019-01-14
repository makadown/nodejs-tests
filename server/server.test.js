const request = require('supertest');
const expect = require('expect');
var app = require('./server').app;

describe('Server tests', () => {

    describe(' GET / ', () => {
        it('should return hello world response', (done) => {
            /*request(app).get('/')
            .expect(200)
            .expect('Hello world!').end(done);*/

            request(app).get('/')
                .expect(404)
                .expect((res) => {
                    expect(res.body).toInclude({
                        error: 'Page not found.'
                    });
                })
                .end(done);
        });
    });

    describe(' GET /users ', () => {
        it('should return my user object', (done) => {

            request(app).get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude(
                        { name: 'Mario', age: 39 }
                    );
                })
                .end(done);
        });
    });

});


