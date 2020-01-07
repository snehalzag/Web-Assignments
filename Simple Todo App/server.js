let express = require('express'),
    app = express(),
    port = process.env.PORT || 27017,
    mongoose = require('mongoose'), //created model loading here
    bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.connect('mongodb://localhost:27017/', {
    useMongoClient: true
}).then(() => {
    console.log("Connected to database");;
}).catch(err =>{
    console.log("Error in connecting to database", err);
    process.exit();
});

mongoose.Promise = global.Promise;


//Adding body parser for handling request and response objects.
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//Enabling CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    next();
});

//Initialize app
let initApp = require('./api/app');
initApp(app);

app.listen(port);
console.log('RESTful API server started on: ' + port);