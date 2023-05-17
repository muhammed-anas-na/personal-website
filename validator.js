
function validateForm() {
    var name = document.getElementById("name").value;
    var mobilenumber = document.getElementById("mobilenumber").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    var msg1 = document.getElementById("msg1")

    if (name == "") {
      msg1.innerHTML = "Name must be filled out"
      setTimeout(function(){
              msg1.innerHTML = ""
            },5000)
      return false;
    }

    if (/\d/.test(name)){ //matches non-digit charecters
      msg1.innerHTML = "Name must be character"
      setTimeout(function(){
              msg1.innerHTML = ""
            },5000)
      return false
    }
    
    if (mobilenumber == "") {
      msg1.innerHTML = "Mobile Number must be filled out"
      setTimeout(function(){
              msg1.innerHTML = ""
            },5000)
      return false;
    }

    if (/\s/.test(mobilenumber)){ //matches spaces
      msg1.innerHTML = "No spaces allowed"
      setTimeout(function(){
              msg1.innerHTML = ""
            },5000)
      return false
    }

    if (isNaN(mobilenumber)){
      msg1.innerHTML = "Mobile Number must be Digits"
      setTimeout(function(){
              msg1.innerHTML = ""
            },5000)
      return false
    }

    if (mobilenumber.length<10){
      msg1.innerHTML = "Mobile Number must have 10 digits"
      setTimeout(function(){
              msg1.innerHTML = ""
            },5000)
      return false
    }

    if (mobilenumber.length>10){
      msg1.innerHTML = "Mobile Number must have only 10 digits"
      setTimeout(function(){
              msg1.innerHTML = ""
            },5000)
      return false
    }

    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      msg1.innerHTML = "Email must be a valid email address"
      setTimeout(function(){
              msg1.innerHTML = ""
            },5000)
      return false;
    }

    if (subject == "") {
      msg1.innerHTML = "Subject must be filled out"
      setTimeout(function(){
              msg1.innerHTML = ""
            },5000)
      return false;
    }


    if (message == "") {
      msg1.innerHTML = "Message must be filled out"
      setTimeout(function(){
              msg1.innerHTML = ""
            },5000)
      return false;
    }
    
    return true;
  }
  