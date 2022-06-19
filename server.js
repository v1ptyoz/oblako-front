const cors = require('cors');

function requireHTTPS(req, res, next) {
  // The 'x-forwarded-proto' check is for Heroku
  if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
    return res.redirect('https://' + req.get('host') + req.url);
  }
  next();
}
const express = require('express');
const app = express();

const corsOption = {
  origin: function (origin, callback) {
    if (!origin) {
      return callback(null, true);
    }

    if (origin !== "https://khrabrov-oblako-front-2.herokuapp.com") {
      return callback(new Error(`Origin is ${origin}`))
    }
    return callback(null, true);
  }
}

app.use(requireHTTPS);
app.use(cors(corsOption));

app.use(express.static('./dist/oblako-front'));

app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/oblako-front'});
});

app.listen(process.env.PORT || 8080);
