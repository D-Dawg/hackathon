$(document).ready(function() {
var REGEX_JSONLD = /<script type="application\/ld\+json">(.*)<\/script>/g;
var REGEX_JSONLD2 = /<script type="application\/ld\+json">/g;
var pageSource = $( 'html' ).html().toString();
var jsonLDAnnotation = pageSource.match(REGEX_JSONLD);
if(jsonLDAnnotation === null){
    jsonLDAnnotation = pageSource.match(REGEX_JSONLD2);
        if(jsonLDAnnotation != null) {
            jsonLDAnnotation = pageSource.substring(pageSource.indexOf(jsonLDAnnotation));
            jsonLDAnnotation = jsonLDAnnotation.substring(0,jsonLDAnnotation.indexOf('<\/script>'));
            window.alert(jsonLDAnnotation);
        }
    }
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


