function callNYT() {
    var APIkey = "PY5gwUCCku73CrQszHPGLA84ZnIiuzyg";
    var URLquery = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=" + APIkey;


    $.ajax({
        url: URLquery,
        method: "GET"
    }).then(function(res){
        console.log(res);
        console.log(res.response.docs["0"].headline);
        $("#headline").text(res.response.docs["0"].snippet);
    })
}

callNYT();

