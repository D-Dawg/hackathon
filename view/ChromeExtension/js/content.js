

// Listen for messages from the popup
chrome.runtime.onMessage.addListener(function (msg, sender, response) {
    // First, validate the message's structure
    if ((msg.from === 'popup') && (msg.subject === 'DOMInfo')) {
        // Collect the necessary data
        // (For your specific requirements `document.querySelectorAll(...)`
        //  should be equivalent to jquery's `$(...)`)
        var domInfo = {
            total:   document.querySelectorAll('*').length,
            inputs:  document.querySelectorAll('input').length,
            buttons: document.querySelectorAll('button').length
        };

        // Directly respond to the sender (popup),
        // through the specified callback */
        response(domInfo);
    }
});

$(document).ready(function() {
var REGEX_JSONLD = /<script type="application\/ld\+json">(.*)<\/script>/g;
var pageSource = $( 'html' ).html().toString();
var jsonLDAnnotation = pageSource.match(REGEX_JSONLD);
    if(jsonLDAnnotation != null){
        window.alert("Found a jsonLD.");
        jsonLDAnnotation = jsonLDAnnotation[0].substring('<script type="application/ld+json">'.length,jsonLDAnnotation[0].indexOf('</script>'));
        chrome.runtime.sendMessage({
            from:    'content',
            data: jsonLDAnnotation
        });


    }
});


