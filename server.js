const express = require('express')

const PORT = process.env.PORT || 8080;

const app = express()

app.use(express.static('public'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const routes = require ('./controller/routes.js')
app.use(routes);


app.listen(PORT, function (request, response){
  
  console.log("Now listening on Port " + PORT)
  
});
