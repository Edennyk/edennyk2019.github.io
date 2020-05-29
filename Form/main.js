function validation() {

  var emailRegex = /^[A-Za-z0-9._]*\@[A-Za-z]*\.[A-Za-z]{2,5}$/;
  var pwdRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
  var fName = document.registration.fName.value;
  var lName = document.registration.lName.value;
  var password = document.registration.password.value;
  var confirm = document.registration.confirmPass.value;
  var uemail = document.registration.email.value;
  var uaddress = document.registration.address.value;
 

  // check valid information

  if (fName == "") {
    alert("Enter the first name!");
    document.registration.fName.focus();
    return false;
  }
  if (lName == "") {
    document.registration.lName.focus();
    alert("Enter the last name!");
    return false;
  }
  if (password == "") {
    document.registration.password.focus();
    alert("enter the password!");
    return false;
  } else if (!pwdRegex.test(password)) {
    document.registration.password.focus();
    alert(
      "Passwords must have at least 6 characters and must contain at least one digit and one upper-case character!"
    );
    return false;
  }
  if (confirm == "") {
    document.registration.confirmPass.focus();
    alert("Enter the confirm password!");
    return false;
  } else if (confirm != password) {
    document.registration.confirmPass.focus();
    alert("Re-enter the confirm password!");
    return false;
  }
  if (uemail == "") {
    document.registration.email.focus();
    alert("Enter the email!");
    return false;
  } else if (!emailRegex.test(uemail)) {
    alert("Re-enter the valid email!");
    document.registration.email.focus();
    return false;
  }
  if (uaddress == "") {
    document.registration.address.focus();
    alert("Enter the address!");
    return false;
  }
  if (
    fName != "" && lName != "" && password != "" && confirm != "" && uemail != "" && uaddress != "") {
    // condition for check mandatory all fields
    alert(
      "Thanks for registering with our website, your customer record was created successfully."
    );
  }
}

function reset() {
  document.getElementById("clear").reset();
  
}