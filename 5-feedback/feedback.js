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
    alert('Please use alphabet characters only for name');
    fname.focus();
    lname.focus();
    return false;
  }
}

  function validateEmail(email){
      var mailformat = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
         if (email.value.match(mailformat)) {
              return true;
           }
           else {
             alert("Please enter valid email address")
             email.focus() ;
             return false ;
           }

}

function validateAll(myForm) {
  var fname =  document.forms["myForm"]["fname"];
  var lname =  document.forms["myForm"]["lname"];
  var email =  document.forms["myForm"]["email"];
  var checkbox = document.forms["myForm"]["checkbox"];
  var message = document.forms["myForm"]["message"];


    var letters = /^[A-Za-z]+$/;
    var mailformat = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;

    if (fname.value.match(letters) && lname.value.match(letters) && email.value.match(mailformat)
        && myForm.checkbox.checked == true && message.value!="") {
      alert("Success! Thank you ");
      return true;
    }
}
