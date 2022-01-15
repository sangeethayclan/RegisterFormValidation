const table=[];

 

  function validation() {
  var fname = document.getElementById('firstName').value;
  var lname = document.getElementById('lastName').value;
  var email = document.getElementById('e-mail').value;
  var country = document.getElementById('output').value;
  var product = document.getElementById('product').value;
  var qty = document.getElementById('demoInput').value;
  var tag = document.getElementById('tag-input1').value;
  var Bday = document.getElementById('DOB').value;


  console.log(fname);
  console.log(lname);
  console.log(email);
  console.log(country);
  console.log(product);
  console.log(qty);
  console.log(tag);
  console.log(Bday);
 
if (FirstName(fname)) {
}
if (LastName(lname)) {
}
if (Email(email)) {
}
if (output(country)) {
}
if (product(product)) {
}
if (demoInput(qty)) {
}
if (tag-input1(tag)) {
}
if (DOB(Bday)) {
}

return false;

}


/*first name input validation*/

function FirstName(fname) {
  var message = document.getElementsByClassName("error-message");
  var letters = /^[0-9]+$/;

if ( fname =="" || fname.length>5) {
  text="FirstName should contain only letters";
  message[0].innerHTML = text;
  return true;
  
}
}

/*last name input validation*/

function  LastName(lname) {
  var message = document.getElementsByClassName("error-message");
  var letters = /^[0-9]+$/;
 
if ( lname =="" || lname.length>5) {
  text="LastName should contain only letters";
  message[1].innerHTML = text;
  return true;
}
}

/*email address input validation*/

function Email(email) {
var message = document.getElementsByClassName("error-message");
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
var atpos = email.indexOf("@");
var dotpos = email.lastIndexOf(".");
        
if ( email =="" || email.match(mailformat) || atpos > 1 && ( dotpos - atpos > 2 )) {
  text="";
  message[2].innerHTML = text;
  return true;
}
       
else {
  text="Wrong email format";
  message[2].innerHTML = text;
  return false;
}
}

//Country validation

function country_code () {
  var val = document.getElementById("country").value;

  if (val=== "select country") {
    document.getElementById("output").value;
  }
  else if (val==="IN") {
    document.getElementById("output").value ="+91";
  }

  else if (val==="LK") {
    document.getElementById("output").value ="+94";
  }

  else if (val==="US") {
    document.getElementById("output").value ="+1";
  }

  else if (val==="EN") {
    document.getElementById("output").value ="+44";
  }

  else if (val==="FR") {
    document.getElementById("output").value ="+33";
  }
}

  //calculate age

  function ageCalculator() {
    var userinput = document.getElementById("DOB").value;
    var dob = new Date(userinput);
    if(userinput==null || userinput=='') {
      document.getElementById("message").innerHTML = "**Choose a date please!";  
      return false; 
    } else {
    
    var month_diff = Date.now() - dob.getTime();
 
    var age_dt = new Date(month_diff); 
    
    var year = age_dt.getUTCFullYear();
    
    var age = Math.abs(year - 1970);
    
    return document.getElementById("result").innerHTML =  age ;
    }
}
  
// quantity validation

function increment() {
  document.getElementById('demoInput').stepUp();
}
function decrement() {
  document.getElementById('demoInput').stepDown();
}



