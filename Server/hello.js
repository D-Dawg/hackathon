var express = require('express');
var app = express();

var apiai = require('apiai');
var apiapp = apiai("9cfe25911ce14e4f94ddc70716cf7102");

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}))

var count = 0;

app.post('/talk', function (req, res) {
    console.log("success");
    console.log(req.body.data);

    var options = {
        sessionId: count
    };
    count++;

    var request = apiapp.textRequest(req.body.data,options)

    request.on('response', function(response) {
        if (response.result.fulfillment.speech){
            res.end(response.result.fulfillment.speech);
            console.log(response.result.fulfillment.speech);
        }else{
            res.end("Thx")
        }
    });

    request.on('error', function(error) {
        console.log(error);
    });

    request.end();
})


var server = app.listen(8081, function () {

    var host = 'localhost';
    var port = '8081';

    console.log("Example app listening at http://%s:%s", host, port)

})