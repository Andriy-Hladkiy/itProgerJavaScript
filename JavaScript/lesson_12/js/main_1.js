document.getElementById("main-form").addEventListener("submit", checkForm)

function checkForm(event){
  event.preventDefault();
  var el = document.getElementById("main-form");

  // var name = document.getElementById("name").value;
  var name = el.name.value;
  var pass = el.pass.value;
  var repass = el.repass.value;
  var state = el.state.value;

  var fail = "";

  // console.log(name + " " + pass + " " + repass + " " + state);
  if (name == "" || pass == "" || state == "")
    fail = "Enter all fields";
  else if (name.length <= 1 || name.length >= 50)
    fail = "Enter correct name";
  else if (pass != repass)
    fail = "Passwords must be same"
  else if (pass.split('&').length > 1)
    fail = "Password not corrected";

  if(fail != "") {
    document.getElementById('error').innerHTML = fail;
    return false;
  }else {
    alert("All is Done");
    window.location = "https://www.google.com";
  }
}