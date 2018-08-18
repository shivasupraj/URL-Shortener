var end_point = "https://www.jsonstore.io/461a1a6b80cc1c44fec94f407eb347d20f508770575f5e5c2f6f472ed4208006";

console.log(window.location.href);
pathname = window.location.href;
path = pathname.split('/').pop();
path = pathname.split('#')[1];
console.log(path);

if (path !== "") {
    console.log(path)
    $.getJSON(end_point + "/" + path, function (data) {
        data = data["result"];
        if (data != null) {
            console.log(data)
            window.location.href = data;
        }

    });
}

var hash = getrandom();
function getrandom() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

function geturl(){
    var url = document.getElementById("urlinput").value;
    var protocol_ok = url.startsWith("http://") || url.startsWith("https://") || url.startsWith("ftp://");
    if(!protocol_ok){
        newurl = "http://"+url;
        return newurl;
        }else{
            return url;
        }
}


function send_request(url) {
    this.url = url;
    $.ajax({
        'url': end_point + "/" + hash,
        'type': 'POST',
        'data': JSON.stringify(this.url),
        'dataType': 'json',
        'contentType': 'application/json; charset=utf-8'
})
}

function shorturl(){
    var longurl = geturl();
    send_request(longurl);
    document.getElementById('id').text = window.location.href + '#' + hash;
    document.getElementById('id').href = window.location.href + '#' + hash;
}
