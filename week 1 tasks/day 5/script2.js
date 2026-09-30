javascript
/* ================= TASK 1 ================= */

let fontSize = 20;

function changeColor(color) {
    document.getElementById("text").style.color = color;
}

function changeFont(font) {
    document.getElementById("text").style.fontFamily = font;
}

function increaseSize() {
    fontSize += 2;

    document.getElementById("text").style.fontSize =
        fontSize + "px";
}

function decreaseSize() {

    if (fontSize > 10) {
        fontSize -= 2;

        document.getElementById("text").style.fontSize =
            fontSize + "px";
    }
}

function makeBold() {
    document.getElementById("text").style.fontWeight = "bold";
}

function removeBold() {
    document.getElementById("text").style.fontWeight = "normal";
}

function makeItalic() {
    document.getElementById("text").style.fontStyle = "italic";
}

function removeItalic() {
    document.getElementById("text").style.fontStyle = "normal";
}

function makeUnderline() {
    document.getElementById("text").style.textDecoration = "underline";
}

function removeUnderline() {
    document.getElementById("text").style.textDecoration = "none";
}


/* ================= TASK 2 ================= */

function validateForm(event) {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let mobile = document.getElementById("mobile").value.trim();

    let message = document.getElementById("formMessage");

    if (name === "" || email === "" || mobile === "") {

        message.innerHTML = "Please fill all the fields.";

        message.className = "message error";

    } else {

        message.innerHTML = "Form submitted successfully!";

        message.className = "message success";
    }
}


/* ================= TASK 3 ================= */

function calculate(operator) {

    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    let message = document.getElementById("calcMessage");

    if (num1 === "" || num2 === "") {

        message.innerHTML = "Please enter both numbers.";

        message.className = "message error";

        return;
    }

    num1 = Number(num1);
    num2 = Number(num2);

    let result;

    if (operator === "+") {

        result = num1 + num2;

    } else if (operator === "-") {

        result = num1 - num2;

    } else if (operator === "*") {

        result = num1 * num2;

    } else if (operator === "/") {

        if (num2 === 0) {

            message.innerHTML = "Cannot divide by zero.";

            message.className = "message error";

            return;
        }

        result = num1 / num2;
    }

    message.innerHTML = "Result = " + result;

    message.className = "message success";
}


/* ================= BONUS ================= */

function lightTheme() {

    document.body.style.backgroundColor = "white";

    document.body.style.color = "black";
}

function darkTheme() {

    document.body.style.backgroundColor = "#222";

    document.body.style.color = "white";
}

