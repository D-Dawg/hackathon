var express = require('express');
var app = express();

var jsonProcesses = require('./model/jsonProcessor.js');

jsonProcesses.helloWorld11();

var apiai = require('apiai');
var apiapp = apiai("9cfe25911ce14e4f94ddc70716cf7102");

var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}))

var count = 0;

app.post('/talk', function (req, res) {
    console.log("User: "+req.body.data);

    var options = {
        sessionId: count
    };


    var request = apiapp.textRequest(req.body.data, options)

    request.on('response', function (response) {
        console.log(req);
        if (response.result && response.result.actionIncomplete) {
            res.end(response.result.fulfillment.speech);
            console.log("Actionincomplete:"+ response.result.actionIncomplete)
            console.log("Chatbot: "+response.result.fulfillment.speech);
        } else if (response.result) {
            res.end(response.result.fulfillment.speech);
            console.log("ActionIncomplete:"+ response.result.actionIncomplete)
            console.log("Chatbot: "+response.result.fulfillment.speech);
        } else {
            res.end("No fullfilment")
        }
    });

    request.on('error', function (error) {
        console.log(error);
    });
    request.end();
});


app.post('/webhook', function (req, res) {
    res.end("Webhook not yet implemented")

});



var server = app.listen(8081, function () {
    var host = 'localhost';
    var port = '8081';
    console.log("hackathon app listening at http://%s:%s", host, port)

});
