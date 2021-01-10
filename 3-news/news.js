$(document).ready(function(){

    //buttons in navigation bar
    $("#NavhomeBtn").click(function(){   
        location.href="../index.html"; 
    });
    $("#NavmenuBtn").click(function(){   
        location.href="../2-menu/menu.html"; 
    });
    $("#NavnewsBtn").click(function(){   
        location.href="../3-news/news.html";        
    });
    $("#NavaboutBtn").click(function(){   
        location.href="../4-about/about.html";
    });
    //button in footer
    $("#sendfbackBtn").click(function(){
        location.href="../5-feedback/feedback.html"; 
    });
})

$.getJSON("https://disease.sh/v3/covid-19/countries/Malaysia?strict=true", function(data){
    console.log(data);

    var active = data.active;
    var cases = data.cases;
    var recovered = data.recovered;
    var deaths = data.deaths;

    $("#dataTotal").append(cases);
    $("#dataActive").append(active);
    $("#dataRecovered").append(recovered);
    $("#dataDeath").append(deaths);
});
