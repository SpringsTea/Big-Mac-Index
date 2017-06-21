var express = require('express');
var mustacheExpress = require('mustache-express');
var calculatorController = require('./controllers/bmi_calculator');

var app = express();

// setup ports

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

app.engine('mustache', mustacheExpress(__dirname + '/views/partials'));
app.set('view engine', 'mustache');

calculatorController(app);

//Serve static files
app.use('/assets', express.static('assets'));

app.use(function(req, res, next){
  res.status(404);

  // respond with html page
  if (req.accepts('html')) {
    res.render('404', { url: req.url });
    return;
  }

  // respond with json
  if (req.accepts('json')) {
    res.send({ error: 'Not found' });
    return;
  }

  // default to plain-text. send()
  res.type('txt').send('Not found');
});

app.listen(server_port, server_ip_address, function(){
    console.log( "Listening on " + server_ip_address + ", server_port " + server_port );
});