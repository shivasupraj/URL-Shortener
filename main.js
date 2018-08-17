var end_point = "https://www.jsonstore.io/e343ab5903b8199873406d77f970e0e34dfba567170d2902afc63a79e66aefdf";
var hash = getrandom();;
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
}

if (window.location.hash != "") {
    $.getJSON(end_point + "/" + window.location.hash.substr(1), function (data) {
        data = data["result"];
        if (data != null) {
          console.log(data)
            window.location.href = data;
        }

    });
}
