chrome.runtime.onMessage.addListener(function (msg, sender) {
    // First, validate the message's structure
    if ((msg.from === 'content') && msg.data != null) {

        // Enable the page-action for the requesting tab
        window.alert(msg.data);
        chrome.pageAction.show(sender.tab.id);
    }
});