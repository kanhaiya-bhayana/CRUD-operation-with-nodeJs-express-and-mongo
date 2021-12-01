require('./models/db');

const express = require('express');
const empController = require('./controllers/employeeController');
const path = require('path');
const Handlebars = require('handlebars')
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')


var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.engine('.hbs', engine({ extname: '.hbs', defaultLayout: 'mainLayout',handlebars: allowInsecurePrototypeAccess(Handlebars), layoutsDir: __dirname + '/views/layouts/' }));
app.set('views', path.join(__dirname, '/views/'));
app.set('view engine', '.hbs');


app.listen(3000, () => {
    console.log('Express server started at port:3000');
});

app.use('/employee', empController);
