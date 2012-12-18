// from http://stackoverflow.com/a/105074/342013
function GUID ()
{
    
    var S4 = function ()
    {
        
        return Math.floor(
                Math.random() * 0x10000 /* 65536 */
            ).toString(16);
    };

    return (
            S4() + S4() + "-" +
            S4() + "-" +
            S4() + "-" +
            S4() + "-" +
            S4() + S4() + S4()
        );
}

function randomQueueName() {
    return "sim.gen-" + jQuery.base64.encode(CryptoJS.MD5(GUID()).words.join()).substr(0, 12);
}

function getProcessing() {
    return Processing.getInstanceById("Simulator");
}

var bound = false;

function bindJavascript() {
    var pjs = getProcessing();
    if(pjs!=null) {
        pjs.bindJavascript(this);
        bound = true;
    }

    if(!bound) setTimeout(bindJavascript, 250);
}

bindJavascript();

jQuery(document).ready(function() {
    
});