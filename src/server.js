let express = require('express');
let app = express();
let port = 3000;

let path = require('path');
app.use(express.static(path.join(__dirname, '../dist')));

app.set('views', path.join(__dirname, '../dist'));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/index', (req, res) => {
  res.render('../dist/about');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
