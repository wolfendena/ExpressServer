//requireing package and storing it in express variable
const express = require('express');
//calling express and storing its value in app
const app = express();

//routing any traffic to the route URL and sending back a response
app.get('/', function(request, response){
    response.send("Landing Page!");
});

//routing any traffic that hits the /readthis and sending back a response
app.get('/readthis', function(requrest, response){
    response.send("IF YOUR READING THIS YOU ARE GAY")
});

//app is listening for requests on port 3000
app.listen(3000);

//letting us know the server is live on port 3000, or if server is down
console.log("Server is live and on port 3000....");