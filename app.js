
const tracer = require('dd-trace').init({
  env: 'node-hooks',
  analytics: 'true'
});
const axios = require('axios');
const faker = require('faker');
const _ = require('lodash');
const express = require('express');
const app = express();
const port = 4000;

var StatsD = require('hot-shots');
var dogstatsd = new StatsD();

// Increment a counter.
dogstatsd.increment('page.views')

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
})

app.get('/', (req, res) => {
  res.send({
    "firstName": faker.name.firstName
  })
})


app.get('/address', (req, res) => {
  const count = req.query.count;
  if (!count) {
    return res
      .status(400)
      .send({ errorMsg: 'count query parameter is missing.' });
  }
  res.send(
    _.times(count, () => {
      const address = faker.address;
      return {
        country: address.country(),
        city: address.city(),
        state: address.state(),
        zipCode: address.zipCode(),
        latitude: address.latitude(),
        longitude: address.longitude()
      };
    })
  );
});