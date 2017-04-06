$(document).ready(function() {
var REGEX_JSONLD = /<script type="application\/ld\+json">(.*)<\/script>/g;
var pageSource = $( 'html' ).html().toString();
var jsonLDAnnotation = pageSource.match(REGEX_JSONLD);
var request = null;
    if(jsonLDAnnotation != null){
        window.alert("Hey Semanti here, I found an annotation on this website, can I help?");
        jsonLDAnnotation = jsonLDAnnotation[0].substring('<script type="application/ld+json">'.length,jsonLDAnnotation[0].indexOf('</script>'));
        request = jsonLDAnnotation;
    }
    chrome.runtime.sendMessage({
        from:    'content',
        data: request
    });

});


