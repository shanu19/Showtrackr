function namevalidation(qname){
  var message = document.getElementById('ewname');
  var matchfix = /^[A-Za-z]+$/;

  if(name.value == ""){
    message.innerHTML = "Your Name is Required";
    document.getElementById("btn").disabled = true;
  }
  else{// for password
    if(name.value.match(matchfix) && name.value.length >= 5){
      message.innerHTML = "";
      name.style.backgroundColor = "#82FF84";
      document.getElementById("btn").disabled = false;
    }
    else{
      message.innerHTML = "Your Name is invalid";
      name.style.backgroundColor = "#FF7476";
      document.getElementById("btn").disabled = true;
    }
  }
}

function mailvalidation(email){
  var message = document.getElementById('mailalert');
  var matchfix = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if(email.value == ""){
    message.innerHTML = "Your Email Address is Required";
    document.getElementById("btn").disabled = true;
  }
  else{// for password
    if(email.value.match(matchfix)){
      message.innerHTML = "";
      email.style.backgroundColor = "#82FF84";
      document.getElementById("btn").disabled = false;
    }
    else{
      message.innerHTML = "Your Email Id is invalid";
      email.style.backgroundColor = "#FF7476";
      document.getElementById("btn").disabled = true;
    }
  }
}

function pwdvalidation(pwd){
  var message = document.getElementById('pwdalert');
  var matchfix =/^([0-9a-zA-Z]{8})+$/;

  if(pwd.value == ""){
    message.innerHTML = "Your Password is Required";
    document.getElementById("btn").disabled = true;
  }
  else{
    // for password
    if(pwd.value.match(matchfix)){
      message.innerHTML = "";
      pwd.style.backgroundColor = "#82FF84";
      document.getElementById("btn").disabled = false;
    }
    else{
      message.innerHTML = "Your Password is invalid";
      pwd.style.backgroundColor = "#FF7476";
      document.getElementById("btn").disabled = true;
    }
  }
}
