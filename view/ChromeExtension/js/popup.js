$(document).ready(function() {
    var welcomeMsg = "Hello I am Semanti, How can I help?";
    var dt = new Date();
    var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
    var prefix = '(' + time + ') ';
    var bot = prefix + "Semanti: ";
    var client = prefix + "You: "
    var chatWindow = $("#chat_window");
    var clientmsg = $("#usermsg");
    chatWindow.text(bot + welcomeMsg);
    $("#submitmsg").click(function () {
        if(clientmsg.val() != ''){
            chatWindow.append("</br>"+client + clientmsg.val());
            var height = chatWindow[0].scrollHeight;
            chatWindow.scrollTop(height);
            sendRequest(clientmsg.val());
            clientmsg.val("");
            return false;
        }

    });

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
