var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var comment =[{name:"Zizy Walke",comment:"This is not comment"},{name:"Jordan Walke",comment:"This is a bad coding"}];
var arr ;



app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    //res.send('Hello World!')
    res.render('index');
});



app.get('/comments',function(req,res){
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
   res.json(comment);
});

app.post('/qq',function(req,res){
        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', '*');
        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);

        // Pass to next layer of middleware

        //arr=[req.body];
        comment.unshift(req.body);
        //comment.reverse();

        console.log(req.body);


    }
);

app.listen(3000, function () {
    console.log('' +
        'app listening on port 3000!');
});