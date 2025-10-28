var text = document.getElementById("text");
// console.log(text.id);
text.title = "New Text";

console.log(text.title);

text.style.color = "red";

text.style.backgroundColor = "blue";
text.innerHTML = "New<br>Text";
// document.getElementById("text").style.color = "white";

// var spans = document.getElementsByTagName("span");

var spans = document.getElementsByClassName("simple-text");

for(var i = 0; i < spans.length; i++) {
  console.log(spans[i].innerHTML);
}
