import request from 'supertest'
import express from 'express'
import app from '../server/index.js'

// const app = express();

describe('GET /', function() {
  it('respond with json', function(done) {
    this.timeout(10000);
    request(app)
      .get('/login')
      .expect(200, done);
  });
});
