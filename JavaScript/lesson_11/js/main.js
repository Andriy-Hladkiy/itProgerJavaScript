// function onClickButton() {
//   alert("You clicked the button :)");
// }

var counter = 0;

function onClickButton(el) {
  counter++;
  el.innerHTML = "You clicked the button: " + counter;
  el.style.background = "red";
  el.style.color = "blue";

  el.style.cssText = "border-radius: 5px; border: 0; font-size: 20px";
  // console.log(el.name);
}


function onInput(el) {
  if (el.value == "Hello") {
    alert("And you Hello")
  }
  console.log(el.value);
}