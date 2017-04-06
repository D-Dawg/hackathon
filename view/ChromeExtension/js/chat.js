
var transfer = 'some text';

chrome.extension.onMessage.addListener(function(message,sender,sendResponse){
    sendResponse({type:"test"});
    if(message.text == "getStuff");

});