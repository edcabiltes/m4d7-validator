const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

checkBtn.addEventListener("click", () => {
    const number = userInput.value.trim();

    if (!number) {
        alert("Please provide a phone number");
        return;
    }

    const valid = isValidUSPhone(number);

    resultsDiv.textContent = `${valid ? "Valid" : "Invalid"} US number: ${number}`;
});

clearBtn.addEventListener("click", () => {
    resultsDiv.textContent = "";
});

function isValidUSPhone(str) {
    const validRegex = /^(1\s?)?(\d{3}|\(\d{3}\))[\s-]?\d{3}[\s-]?\d{4}$/;
    return validRegex.test(str);
}
