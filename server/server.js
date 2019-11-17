require('../config/config');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());
 
//const port = process.env.PORT || 3000

app.get('/', function (req, res) {
  res.json('Hello World')
})

app.get('/user', function (req, res) {
    res.json('get user');
 });
 
app.post('/user', function (req, res) {

    let body = req.body;
    
    if (body.name === undefined){
        res.status(400).json({
            ok: false,
            message: 'Name is required'
        });
    }else{
        res.json({
            person : body,
            name : body.name,
            age: body.age,
            email: body.email
        });

    }

});

app.put('/user/:id', function (req, res) {
    let id = req.params.id;
    res.json({
        id
    });
});

app.delete('/user', function (req, res) {
    res.json('delete user');
});

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
})