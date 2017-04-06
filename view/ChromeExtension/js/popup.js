var foundJson = chrome.extension.getBackgroundPage().data;
$(document).ready(function() {
    var welcomeMsg = "Hello I am Semanti, How can I help?";
    var dt = new Date();
    var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
    var prefix = '(' + time + ') ';
    var bot = prefix + "Semanti: ";
    var client = prefix + "You: "
    var chatWindow = $("#chat_window");
    chatWindow.text();
    var clientmsg = $("#usermsg");
    var submit = $("#submitmsg");
    clientmsg.val("\<Your Message\>");

    if(foundJson!=null&&foundJson!=''){
        console.log(foundJson);
        var types = getAllUsedTypes();
        chatWindow.append("Hey Semanti here, I found the following annotations on the website.</br>");
        if(types.length!=0){
            for(var i=0; i<types.length;i++){
                chatWindow.append( types[i] + '</br>');
            }
        }
        chatWindow.append("What do you want to know?</br>")
    }else{
        chatWindow.text(bot + welcomeMsg);
    }
    clientmsg.click(function () {
        clientmsg.val('');
    });
    submit.click(function () {
        if(clientmsg.val() != '\<Your Message\>'){
            chatWindow.append("</br>"+client + clientmsg.val());
            var height = chatWindow[0].scrollHeight;
            chatWindow.scrollTop(height);
            sendRequest(clientmsg.val());
            clientmsg.val("\<Your Message\>");
            return false;
        }
    });

    function getAllUsedTypes() {
        var allTypes = [];
        // var json = jQuery.parseJSON(foundJson);
        // var foundType = json['@type'];
        var i = 0;
        do{
            var occurence = foundJson.indexOf('@type');
            if(occurence>0){
                var newfoundJson = foundJson.substring(occurence);
                var typeEnd = newfoundJson.indexOf(',');
                var aType = newfoundJson.substring(0,typeEnd);
                allTypes[i] = aType;
                foundJson = newfoundJson.substring(typeEnd);
                i++;
            }
        }while(occurence>0);


        return allTypes;
    }
    function sendRequest(data) {
        $.post("http://localhost:8081/talk",{
           data: data
        },
            function(data, status){
            chatWindow.append("</br>"+ bot +data);
                var height = chatWindow[0].scrollHeight;
                chatWindow.scrollTop(height);
            });
    }


});
