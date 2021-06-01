
// const tracer = require('dd-trace').init({
//   env: 'node-hooks',
//   analytics: 'true'
// })

// const express = require('express');
// const app = express();
// const port = 4000;

// app.listen(port, function(){
//   console.log(`app listening on port ${port}`);
// })

const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})