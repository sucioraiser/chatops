// Import express and request modules
var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var urlencodedParser = bodyParser.urlencoded({ extended: false });





// Again, we define a port we want to listen to
//Cambiar segun puerto de conexion
const PORT=8880;

// Lets start our server
app.listen(PORT, function () {
   //Callback triggered when server is successfully listening. Hurray!
    console.log("Inicializando App:  " + PORT);
});

// This route handles GET requests to our root ngrok address and responds with the same "Ngrok is working message" we used before
app.get('/', function(req, res) {
    res.send('Server Running! ' + req.url);
});


//consulta Turno 
app.post('/api/v1/', urlencodedParser, (req, res) =>{
    res.status(200).end(); // best practice to respond with empty 200 status code
  
    res.send('hola! ');

});

