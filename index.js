$(document).ready(function(){

    //buttons in navigation bar
    $("#NavhomeBtn").click(function(){   
        location.href="index.html"; 
    });
    $("#NavmenuBtn").click(function(){   
        location.href="2-menu/menu.html"; 
    });
    $("#NavnewsBtn").click(function(){   
        location.href="index.html"; 
    });
    $("#NavaboutBtn").click(function(){   
        location.href="index.html"; 
    });

    //button in second fold
    $("#readnewsBtn").click(function(){
        alert("The paragraph was clicked.");
    });
    //button in third fold
    $("#browsemenuBtn").click(function(){
        location.href="2-menu/menu.html"; 
    });

    //button in footer
    $("#sendfbackBtn").click(function(){
        location.href="index.html"; 
    });
});