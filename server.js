// Import express and request modules
var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var urlencodedParser = bodyParser.urlencoded({ extended: false });


var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';


// Again, we define a port we want to listen to
//Cambiar segun puerto de conexion
//const port=8880;

// Lets start our server
app.listen(port, function () {
   //Callback triggered when server is successfully listening. Hurray!
    console.log("Inicializando App:  " + port);
   console.log("Estable:");
});

// This route handles GET requests to our root ngrok address and responds with the same "Ngrok is working message" we used before
app.get('/api', function(req, res) {
    console.log("llegue a api:");
    res.send('Server Running! ' + req.url);
});


//consulta Turno 
app.get('/api/v1/', urlencodedParser, (req, res) =>{
    //res.status(200).end(); // best practice to respond with empty 200 status code
  
    res.send('hola a todos si si! ');

});

