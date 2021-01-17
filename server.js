const express = require('express')
const PORT = process.env.PORT || 3000;
const app = expres()
const routes = require ('./controller/routes.js')

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(routes);


app.listen(PORT, function (request, response){
  
  console.log("Now listening on Port " + PORT)
  
});
