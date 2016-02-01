var request = require('supertest');
var index = require('/')

app.get('/api', function(req, res){
  res.status(200);
});
 
request(app)
  .get('/api')
  .expect('Content-Type', /json/)
  
  .expect(200)
  .end(function(err, res){
    if (err) throw err;
  });