import request from 'supertest'
import express from 'express'
// import server from '../server/index.js'

// const server = express();

describe('GET /', function() {
  var server;
  beforeEach(function () {
    // server = require('../server');
    server = require('../server/index.js')
  });
  afterEach(function () {
    server.close();
    process.exit(0);
  });

  it('respond with json', function(done) {
    this.timeout(10000);
    request(server)
      .get('/login')
      .expect(200)
      .end(done);
  });
});
