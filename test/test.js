const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');
const should = chai.should();

chai.use(chaiHttp);

describe('Users API', () => {
  it('should GET all users', (done) => {
    chai.request(app)
      .get('/users')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.be.eql(2);
        done();
      });
  });

  it('should GET a user by ID', (done) => {
    chai.request(app)
      .get('/users/1')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('name');
        res.body.should.have.property('id').eql(1);
        done();
      });
  });
});
