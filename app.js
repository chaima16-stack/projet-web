const express = require('express');
const bodyParser = require('body-parser')

const session= require('express-session');
const app = express();


app.use(bodyParser.urlencoded({extended : false}));
app.set('view engine','html');
app.use(express.static(__dirname + '/views/static'));
app.use(express.static(__dirname + '/views/projet'));
app.use(express.static(__dirname + '/views/static/js'));
const oneDay = 1000 * 60 * 60 * 24;
app.use(session({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false 
}));
//les routes
const adminRoutes = require('./routes/admin');
app.use('/admin',adminRoutes);


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`hello ${port}`));
