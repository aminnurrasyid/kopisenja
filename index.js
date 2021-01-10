// jQuery for navigation bar button
$(document).ready(function(){

    //buttons in navigation bar
    $("#NavhomeBtn").click(function(){   
        location.href="index.html"; 
    });
    $("#NavmenuBtn").click(function(){   
        location.href="./2-menu/menu.html"; 
    });
    $("#NavnewsBtn").click(function(){   
        location.href="./3-news/news.html"; 
    });
    $("#NavaboutBtn").click(function(){   
        location.href="./4-about/about.html"; 
    });

    //button in second fold
    $("#readnewsBtn").click(function(){
        location.href="./3-news/news.html";
    });
    //button in third fold
    $("#browsemenuBtn").click(function(){
        location.href="./2-menu/menu.html"; 
    });

    //button in footer
    $("#sendfbackBtn").click(function(){
        location.href="./5-feedback/feedback.html"; 
    });
});

// JavaScript for Pop-Up ads function
function closePromo() {
    document.querySelector('.promotion').style.display='none';
}
