let express = require('express');
let app = express();

app.get('/index', (req, res) => {
  res.send('hello')
});

app.listen(3000);
