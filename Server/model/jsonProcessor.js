// 'use strict';
var processor = {};
var fs = require("fs")



processor.helloWorld11 = function() {
     console.log('initialisad');
};

processor.findRooms = function(response, functioni){
     var jsonString

    fs.readFile('Server/jsonFiles/hotel1.json', function read(err, data) {
        if (err) {
            throw err;
        }
        jsonString = data;

        var json = JSON.parse(jsonString);
        var size = json.makesOffer[0].itemOffered.length;
        console.log(size);
        var roomString = "This rooms are offered: "
        var i = 0;
        while (i < size){
            var name = json.makesOffer[0].itemOffered[i].name;

            roomString = roomString + name + ", ";
                i++;
                }
        console.log(roomString);
        functioni(roomString);
    });

};

processor.findBeds = function(response, functioni){
    console.log(response.result.parameters);
    var paramName = response.result.parameters.roomName

    fs.readFile('Server/jsonFiles/hotel1.json', function read(err, data) {
        if (err) {
            throw err;
        }

        var json = JSON.parse(data);
        var size = json.makesOffer[0].itemOffered.length;

        console.log(size);
        var roomString = "";
        var i = 0;
        var numberOfBeds = 0;
        while (i < size){
            var name = json.makesOffer[0].itemOffered[i].name;
            if(name = paramName){
               numberOfBeds =  json.makesOffer[0].itemOffered[i].bed.numberOfBeds;
                i = size
            }
            i++;
        }
        console.log(numberOfBeds);
        functioni(numberOfBeds + " Beds are in room "+paramName);
    });

};


module.exports = processor;



