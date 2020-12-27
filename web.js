var express = require("express");
var mysql = require('mysql');
var app = express();
app.use(express.logger());

app.get('/example', function(request, response) {
    // connection.query('SELECT * from t_users', function(err, rows, fields) {
    //     if (err) {
    //         console.log('error: ', err);
    //         throw err;
    //     }
    //     response.send(['Hello World!!!! HOLA MUNDO!!!!', rows]);
    // });
    response.send({"message":'Hello World!!!! HOLA MUNDO!!!!'});
    console.log("hello");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});
