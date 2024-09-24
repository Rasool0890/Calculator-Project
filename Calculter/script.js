let $ = document;
const header = $.querySelector(".calculter");
const input = $.querySelector("input");
const operator = $.querySelectorAll(".operator");

let calculations = "";
input.addEventListener('click',event=>event.preventDefault())
header.addEventListener("click", () => {
  input.focus();
  input.style.border = 0 + "px";
  input.style.borderRadius = 0 + "px";
});
function process(oprator) {
  calculations += oprator;
  input.value = calculations;
}

operator.forEach((ope) => {
  ope.addEventListener("click", (event) => {
    if (event.target.textContent === "=") {
      input.value = eval(input.value);
      calculations = "";
    } else {
      if (event.target.textContent === "⌫") {
        let availableValue = calculations.split("");
        availableValue.pop();

        calculations = "";

        process(availableValue.join(""));
      } else {
        if (event.target.textContent === "C") {
          input.value = "";
          calculations = "";
        } else {
          process(event.target.textContent);
        }
      }
    }
  });
});

document.addEventListener("keypress", (event) => {

  if (event.key === "Backspace") {
    event.preventDefault();
    let availableValue = calculations.split("");
    availableValue.pop();
    calculations = "";
    process(availableValue.join(""));
  } else {
    if (event.key === "Enter") {
      input.value = eval(input.value);
      calculations = "";
    } else {
      if (event.key === "=") {
        input.value = eval(input.value);
        calculations = "";
      } 
    }
  }
});
