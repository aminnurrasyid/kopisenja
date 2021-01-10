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
      location.href="about.html"; 
  });

  //button in footer
  $("#sendfbackBtn").click(function(){
      location.href="../5-feedback/feedback.html"; 
  });
});
