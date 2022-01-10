
function formValidation() {
  var fname = document.getElementById('firstName').value;
  var lname = document.getElementById('lastName').value;
  var email = document.getElementById('e-mail').value;

  console.log(fname);
  console.log(lname);
  console.log(email);
 
if (FirstName(fname)) {
}
if (LastName(lname)) {
}
if (Email(email)) {
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

// tag validation


(function(){

  "use strict"

  
  // Plugin Constructor
  var TagsInput = function(opts){
      this.options = Object.assign(TagsInput.defaults , opts);
      this.init();
  }

  // Initialize the plugin
  TagsInput.prototype.init = function(opts){
      this.options = opts ? Object.assign(this.options, opts) : this.options;

      if(this.initialized)
          this.destroy();
          
      if(!(this.orignal_input = document.getElementById(this.options.selector)) ){
          console.error("tags-input couldn't find an element with the specified ID");
          return this;
      }

      this.arr = [];
      this.wrapper = document.createElement('div');
      this.input = document.createElement('input');
      init(this);
      initEvents(this);

      this.initialized =  true;
      return this;
  }

  // Add Tags
  TagsInput.prototype.addTag = function(string){

      if(this.anyErrors(string))
          return ;

      this.arr.push(string);
      var tagInput = this;

      var tag = document.createElement('span');
      tag.className = this.options.tagClass;
      tag.innerText = string;

      var closeIcon = document.createElement('a');
      closeIcon.innerHTML = '&times;';
      
      // delete the tag when icon is clicked
      closeIcon.addEventListener('click' , function(e){
          e.preventDefault();
          var tag = this.parentNode;

          for(var i =0 ;i < tagInput.wrapper.childNodes.length ; i++){
              if(tagInput.wrapper.childNodes[i] == tag)
                  tagInput.deleteTag(tag , i);
          }
      })


      tag.appendChild(closeIcon);
      this.wrapper.insertBefore(tag , this.input);
      this.orignal_input.value = this.arr.join(',');

      return this;
  }

  // Delete Tags
  TagsInput.prototype.deleteTag = function(tag , i){
      tag.remove();
      this.arr.splice( i , 1);
      this.orignal_input.value =  this.arr.join(',');
      return this;
  }

  // Make sure input string have no error with the plugin
  TagsInput.prototype.anyErrors = function(string){
      if( this.options.max != null && this.arr.length >= this.options.max ){
          console.log('max tags limit reached');
          return true;
      }
      
      if(!this.options.duplicate && this.arr.indexOf(string) != -1 ){
          console.log('duplicate found " '+string+' " ')
          return true;
      }

      return false;
  }

  // Add tags programmatically 
  TagsInput.prototype.addData = function(array){
      var plugin = this;
      
      array.forEach(function(string){
          plugin.addTag(string);
      })
      return this;
  }

  // Get the Input String
  TagsInput.prototype.getInputString = function(){
      return this.arr.join(',');
  }


  // destroy the plugin
  TagsInput.prototype.destroy = function(){
      this.orignal_input.removeAttribute('hidden');

      delete this.orignal_input;
      var self = this;
      
      Object.keys(this).forEach(function(key){
          if(self[key] instanceof HTMLElement)
              self[key].remove();
          
          if(key != 'options')
              delete self[key];
      });

      this.initialized = false;
  }

  // Private function to initialize the tag input plugin
  function init(tags){
      tags.wrapper.append(tags.input);
      tags.wrapper.classList.add(tags.options.wrapperClass);
      tags.orignal_input.setAttribute('hidden' , 'true');
      tags.orignal_input.parentNode.insertBefore(tags.wrapper , tags.orignal_input);
  }

  // initialize the Events
  function initEvents(tags){
      tags.wrapper.addEventListener('click' ,function(){
          tags.input.focus();           
      });
      

      tags.input.addEventListener('keydown' , function(e){
          var str = tags.input.value.trim(); 

          if( !!(~[9 , 13 , 188].indexOf( e.keyCode ))  )
          {
              e.preventDefault();
              tags.input.value = "";
              if(str != "")
                  tags.addTag(str);
          }

      });
  }


  // Set All the Default Values
  TagsInput.defaults = {
      selector : '',
      wrapperClass : 'tags-input-wrapper',
      tagClass : 'tag',
      max : null,
      duplicate: false
  }

  window.TagsInput = TagsInput;

})();

var tagInput1 = new TagsInput({
          selector: 'tag-input1',
          duplicate : false,
          max : 10
      });
      tagInput1.addData(['PHP' , 'JavaScript' , 'CSS'])
  