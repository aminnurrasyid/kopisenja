
$(document).ready(function(){

  //buttons in navigation bar
  $("#NavhomeBtn").click(function(){   
      location.href="../index.html"; 
  });
  $("#NavmenuBtn").click(function(){   
      location.href="../2-menu/menu.html"; 
  });
  $("#NavnewsBtn").click(function(){   
      location.href=" ";  //here
  });
  $("#NavaboutBtn").click(function(){   
      location.href=" "; //here
  });

  //button in footer
  $("#sendfbackBtn").click(function(){
      location.href="feedback.html"; 
  });
});

function validateForm() {

  var fname =  document.forms["myForm"]["fname"];
  var lname =  document.forms["myForm"]["lname"];
  var email =  document.forms["myForm"]["email"];

  validateName(fname,lname);
  validateEmail(email);

}

function validateName(fname,lname){

  var letters = /^[A-Za-z]+$/;

 if(fname.value.match(letters) && lname.value.match(letters) ){
    return true;
  }
  else{
    alert('Names must have alphabet characters only');
    fname.focus();
    lname.focus();
    return false;
  }
}

function validateEmail(email) {
  var mailformat = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
  if (email.value.match(mailformat)) {
    return true;
  }
  else {
    alert("Please enter valid email ID")
    email.focus() ;
    return false ;
  }
}
