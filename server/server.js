require('./config/config');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());
 
app.use( require('./routes/user'));


mongoose.connect('mongodb://192.168.163.131:27017/cafe', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err, res) => {
    if (err) throw err;

    console.log('Database online');
});

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
})


