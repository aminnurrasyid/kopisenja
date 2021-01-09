$(document).ready(function(){

    //buttons in navigation bar
    $("#NavhomeBtn").click(function(){   
        location.href="../index.html"; 
    });
    $("#NavmenuBtn").click(function(){   
        location.href="menu.html"; 
    });
    $("#NavnewsBtn").click(function(){   
        location.href="index.html";         //unchanged
    });
    $("#NavaboutBtn").click(function(){   
        location.href="index.html";         //unchanged
    });

    //button in footer
    $("#sendfbackBtn").click(function(){
        location.href="../5-feedback/feedback.html";          //unchanged
    });
});
