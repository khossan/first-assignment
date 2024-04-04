window.addEventListener("load", function () {
  let form = document.getElementById("calculate");
  let inputOne = document.getElementById("inputOne");
  let inputTwo = document.getElementById("inputTwo");
  let message = document.querySelector(".message");
  let output = document.querySelector(".output");

  let dropdown = document.getElementById("operationType");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let InputOneValue = parseInt(inputOne.value);
    let inputTwoValue = parseInt(inputTwo.value);
    let operationType = dropdown.value;
    console.log(operationType);
    if (operationType == "null") {
      message.classList.add("error");
      message.innerText = "Please select calculation type";
    } else if (operationType == "+") {
      let sum = InputOneValue + inputTwoValue;
      message.classList.remove("error");
      message.classList.add("green");
      message.innerText = "You're doing addition";
      output.innerText = "Output is " + sum;
    } else if (operationType == "-") {
      let sub = InputOneValue - inputTwoValue;
      message.classList.remove("error");
      message.classList.add("green");
      message.innerText = "You're doing subtraction";
      output.innerText = "Output is " + sub;
    } else if (operationType == "*") {
      let mul = InputOneValue * inputTwoValue;
      message.classList.remove("error");
      message.classList.add("green");
      message.innerText = "You're doing multiplication";
      output.innerText = "Output is " + mul;
    } else if (operationType == "/") {
      let dev = InputOneValue / inputTwoValue;
      message.classList.remove("error");
      message.classList.add("green");
      message.innerText = "You're doing division";
      output.innerText = "Output is " + dev;
    } else {
      console.log("silent is golden");
    }
  });

  //   function sum(a, b) {
  //     return a + b;
  //   }
  //   function sub(a, b) {
  //     return a - b;
  //   }
  //   function mul(a, b) {
  //     return a * b;
  //   }
  //   function dev(a, b) {
  //     return a / b;
  //   }
});
