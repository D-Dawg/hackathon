var data = null;
chrome.runtime.onMessage.addListener(function (msg, sender) {

    // First, validate the message's structure
    if ((msg.from === 'content') && msg.data != null) {
        data = msg.data;
    }else {
        data = null;
    }
});