let textBox = document.getElementById("textBox");
let typingInput = document.getElementById("typingInput");

let startBtn = document.getElementById("startBtn");
let restartBtn = document.getElementById("restartBtn");

let testStatus = document.getElementById("testStatus");

let timeValue = document.getElementById("timeValue");
let wpmValue = document.getElementById("wpmValue");
let accuracyValue = document.getElementById("accuracyValue");
let mistakeValue = document.getElementById("mistakeValue");
let typedCount = document.getElementById("typedCount");

let resultBox = document.getElementById("resultBox");

let paragraphs = [

    "Typing regularly can improve focus and help build better keyboard accuracy over time for everyday computer usage.",

    "Frontend development becomes more interesting when small interactive projects are created using HTML CSS and JavaScript together.",

    "Practicing typing speed daily helps increase productivity and allows users to write faster with fewer mistakes.",

    "Building simple browser based tools is one of the best ways to improve problem solving and JavaScript understanding.",

    "Consistency matters more than perfection because regular practice slowly improves typing confidence and speed naturally."

];

let currentText = "";

let mistakes = 0;

let totalTyped = 0;

function loadRandomText() {

    let randomIndex = Math.floor(Math.random() * paragraphs.length);

    currentText = paragraphs[randomIndex];

    textBox.innerText = currentText;

}

function resetTest() {

    typingInput.value = "";

    typingInput.disabled = true;

    mistakes = 0;

    totalTyped = 0;

    timeValue.innerText = "60s";

    wpmValue.innerText = "0";

    accuracyValue.innerText = "0%";

    mistakeValue.innerText = "0";

    typedCount.innerText = "0";

    testStatus.innerText = "Not Started";

    resultBox.innerText =
        "Complete a test to see your final result.";

}

function updateAccuracy() {

    if (totalTyped <= 0) {

        accuracyValue.innerText = "0%";

        return;
    }

    let correctTyped =
        totalTyped - mistakes;

    let accuracy =
        (correctTyped / totalTyped) * 100;

    accuracyValue.innerText =
        Math.max(0, accuracy.toFixed(0)) + "%";

}

function checkTyping() {

    let typedText = typingInput.value;

    totalTyped = typedText.length;

    typedCount.innerText = totalTyped;

    mistakes = 0;

    for (
        let i = 0;
        i < typedText.length;
        i++
    ) {

        if (typedText[i] !== currentText[i]) {

            mistakes++;

        }

    }

    mistakeValue.innerText = mistakes;

    updateAccuracy();

    if (typedText === currentText) {

        testStatus.innerText =
            "Completed";

        resultBox.innerText =
            "You completed the typing paragraph successfully.";

    }

}

typingInput.addEventListener(
    "input",
    checkTyping
);

startBtn.onclick = function () {

    loadRandomText();

    typingInput.disabled = false;

    typingInput.focus();

    testStatus.innerText = "Running";

};

restartBtn.onclick = function () {

    loadRandomText();

    resetTest();

};

resetTest();