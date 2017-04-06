// 'use strict';
var processor = {};
var fs = require("fs");

var size

var json

processor.initialize = function() {
     console.log('initialisad');
    fs.readFile('Server/jsonFiles/hotel1.json', function read(err, data) {
        if (err) {
            throw err;
        }
        json = JSON.parse(data);
        size = json.makesOffer[0].itemOffered.length;
    });
};

processor.findRooms = function(response){

        var roomString = "This "+size+" rooms are offered: ";
        var i = 0;
        while (i < size){
            var name = json.makesOffer[0].itemOffered[i].name;

            roomString = roomString + name + ", ";
                i++;
                }
        console.log(roomString);
        return roomString;
};

processor.findBeds = function(response){
    console.log(response.result.parameters);
    var paramName = response.result.parameters.number

        var roomString = "";
        var i = 0;

            if(name = paramName){
               numberOfBeds =  json.makesOffer[0].itemOffered[paramName].bed.numberOfBeds;

        }

        console.log(numberOfBeds);
        return(numberOfBeds + " Beds are in room number "+paramName +" : " + json.makesOffer[0].itemOffered[paramName].name);
};


module.exports = processor;



