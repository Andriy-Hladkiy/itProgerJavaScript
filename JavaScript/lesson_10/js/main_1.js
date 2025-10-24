var num = 10; //глобальна змінна

function info() {
  var num = 20; //Локальна змінна
  console.log(num);

}

info()

console.log(num);