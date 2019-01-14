const express = require('express');
 var app = express();

 app.get('/',(req,res)=>{
     // res.send('Hello world!');
     res.status(404).send({error: 'Page not found.', name: 'Todo App v1.0'});
 });

 app.get('/users',(req,res)=>{
    // res.send('Hello world!');
    var users = [{name: 'Mario', age: 39},{name: 'Gabriela', age: 40},{name: 'Marian', age: 29}]
    res.status(200).send(users);
});

 app.listen(3000);

 module.exports.app = app;