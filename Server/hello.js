var apiai = require('apiai');

var app = apiai("9cfe25911ce14e4f94ddc70716cf7102");

var request = app.textRequest('Hello', {
    sessionId: 'kjfhksdfhnksda'
});

request.on('response', function(response) {
    console.log(response);
});

request.on('error', function(error) {
    console.log(error);
});

request.end();