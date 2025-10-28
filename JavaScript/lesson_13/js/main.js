var id = setInterval(my_func, 1000);

var counter = 0;

function my_func() {
  counter++;
  console.log(counter);

  if (counter == 3) {
    clearInterval(id);
  }
}



// var counter = 0;
//
// setInterval(function () {
//   counter++;
//   console.log("Counter: " + counter);
// }, 1000);