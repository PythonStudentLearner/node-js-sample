var express = require('express')

var app = express()
app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile)

app.get('/', function(req, res) {
  res.render('./bootstrap/index.html')
})

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
})



