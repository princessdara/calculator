// let test = document.getElementById("test");
// let para = document.getElementById("para");
// // let button = document.getElementById("butt");

// function handleClick() {
//   if (test.value == "") {
//     alert("Please input your score")
//   } else if (test.value >= 70) {
//     para.innerHTML = "A";
//   } else if (test.value >= 60) {
//     para.innerHTML = "B";
//   } else if (test.value >= 50) {
//     para.innerHTML = "C";
//   }else if (test.value>=40) {
//     para.innerHTML='D';
//   }else if (test.value>=30) {
//     para.innerHTML='E'
//   }else  {
//     para.innerHTML='F'
//   }
// }
// para.style.color = 'blue'

// function calAge(birthyear) {
//   return  2024-birthyear
// }console.log(calAge(2005));

// function times(a,b) {
//   return a*b
// }
// console.log( times(6,9)
// );

// const calAge = (birthyear ) =>{
//   return 2024 - birhyear
// }
// console.log('yourage is',calAge(2008));

let One = document.getElementById("one");
let calcu = document.getElementById("calcu");

function clearAll() {
  calcu.value = "";
}
function divide() {
  calcu.value += "/";
}
function mutiply() {
  calcu.value += "*";
}

function clearAll() {
  calcu.value = "";
}
function seven() {
  calcu.value += "7";
}
function eight() {
  calcu.value += "8";
}
function nine() {
  calcu.value += "9";
}
function minus() {
  calcu.value += "-";
}
function four() {
  calcu.value += "4";
}
function five() {
  calcu.value += "5";
}
function six() {
  calcu.value += "6";
}
function plus() {
  calcu.value += "+";
}
function one() {
  calcu.value += "1";
}
function two() {
  calcu.value += "2";
}
function three() {
  calcu.value += "3";
}
function square() {
  calcu.value += "^";
}

function percent() {
  calcu.value += "%";
}
function zero() {
  calcu.value += "0";
}
function dot() {
  calcu.value += ".";
}

function equal() {
  calcu.value = eval(calcu.value);
 
}