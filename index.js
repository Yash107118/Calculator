var operator = ["+", "-", "*", "/", "%"]
var buttons = document.getElementsByClassName("button");
// var p = document.getElementById("display1").innerHTML;
// p.textcontent = "0";

document.getElementById("display1").innerHTML = "";
document.getElementById("display2").innerHTML = "";

for (var i = 1; i < buttons.length; i++) {
  buttons[i].addEventListener('click', click, false);
}

function click() {
  var firstbox = document.getElementById('display1');
  var buttonclicked = document.getElementById(this.id).value;
  firstbox.innerHTML += buttonclicked;
}

function clearCalc() {
  document.getElementById("display1").innerHTML = "";
  document.getElementById("display2").innerHTML = "";
}

function calculate() {
  setTimeout(() => {
    var p = document.getElementById("display1").innerHTML;
    if (p.includes("^")) {
      var numbers = p.split("^");
      num1 = numbers[0];
      num2 = numbers[1];
      var number1 = eval(num1);
      var number2 = eval(num2);
      numbers = number1 ** number2;
      document.getElementById("display2").innerHTML = numbers;
    } else if (!isLastOparator(p)) {
      var q = eval(p);
      document.getElementById("display2").innerHTML = q;
    }
  }, 10)
}

function isLastOparator(fullString) {
  return operator.includes(fullString.slice(-1))
}

function dlt() {
  const number = document.getElementById("display1").innerHTML;
  if (number == "" || number == "0") {
    document.getElementById("display1").innerHTML = "";
    document.getElementById("display2").innerHTML = "";
  } else {
    const editNumber = number.slice(0, -1);
    document.getElementById("display1").innerHTML = editNumber;
  }
}

function checkop(id) {
  var number = document.getElementById("display1").innerHTML;
  var editNumber = number.slice(0, -1);

  var last = number.charAt(number.length - 1);

  if (last === "+" || last === "-" || last === "*" || last === "/" || last === "%" || last === "^") {
    last = id.value;
    document.getElementById("display1").innerHTML = editNumber;
  }
}

function percentage() {
  var number = document.getElementById("display1").innerHTML;

  const numbers = number.split(/[+*/-]+/);
  const numbersLeght = numbers.length

  const lastNumber = number.split(/[+*/-]+/)[numbersLeght - 1];

  const mainSrt = number.substring(0, number.length - [lastNumber.length]);

  const op1 = mainSrt.slice(-1);

  const calcVal = mainSrt.slice(0, -1)

  const result1 = eval(calcVal);

  if (op1 === "+" || op1 === "-") {
    var percent = (lastNumber / 100) * result1;

  } else {
    var percent = lastNumber / 100;
  }

  const FinalCalc = result1 + op1 + percent;

  const FinalRes = eval(FinalCalc);

  document.getElementById("display2").innerHTML = FinalRes;

}