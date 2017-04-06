$(document).ready(function() {
var REGEX_JSONLD = /<script type="application\/ld\+json">(.*)<\/script>/g;
var pageSource = $( 'html' ).html().toString();
var jsonLDAnnotation = pageSource.match(REGEX_JSONLD);
    if(jsonLDAnnotation != null){
        window.alert("Found a jsonLD.");
        jsonLDAnnotation = jsonLDAnnotation[0].substring('<script type="application/ld+json">'.length,jsonLDAnnotation[0].indexOf('</script>'));
    }
});


