// alert("Hello World!");

// confirm("Are you ar home?");

// var data = confirm("Are you at home?");

// console.log(data);
// if (data) {
//   alert("Congratuletion!")
// }
//
// var data = prompt("How old are you?");
// console.log(data);

var person = null;

if(confirm("Are you sure?")) {
  person = prompt("Enter your name?");
  alert("Hello " + person);
}else {
  alert("You put Cancel");
}

