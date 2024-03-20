let input = document.getElementById("input-box");
let buttons = document.querySelectorAll("button");
let valueOfInput = "";
let arr = Array.from(buttons);
arr.forEach((button) => {
button.addEventListener("click", (element) => {
    if (element.target.innerHTML == "=") {
        valueOfInput = eval(valueOfInput);
        input.value = valueOfInput;
    } else if (element.target.innerHTML == "AC") {
        valueOfInput = "";
        input.value = valueOfInput;
    } else if (element.target.innerHTML == "DEL") {
        valueOfInput = valueOfInput.substring(0, valueOfInput.length - 1);
        input.value = valueOfInput;
    } else {
        valueOfInput += element.target.innerHTML;
        input.value = valueOfInput;
    }
    });
});