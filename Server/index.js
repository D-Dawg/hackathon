var express = require('express');
var app = express();



app.post('/talk', function (req, res) {
    console.log("success");
    res.end("Thx")
})


var server = app.listen(8081, function () {

    var host = 'localhost/talk';
    var port = '8081';

    console.log("Example app listening at http://%s:%s", host, port)

})