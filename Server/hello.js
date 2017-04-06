var express = require('express');
var app = express();

var apiai = require('apiai');
var apiapp = apiai("9cfe25911ce14e4f94ddc70716cf7102");

var count = 0;

app.post('/talk', function (req, res) {
    console.log("success");
    console.log(req.getText());
    var options = {
        sessionId: count
    };
    count++;

    var request = apiapp.textRequest(req,options)

    request.on('response', function(response) {
        res.end("Thx")
        console.log(response);
    });

    request.on('error', function(error) {
        console.log(error);
    });

    request.end();
})


var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)

})