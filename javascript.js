var body = document.body;


var inputBox = document.createElement("input");
inputBox.type = "text";
inputBox.placeholder = "Search...";
inputBox.style.position = "absolute";
inputBox.style.top = "20px";
inputBox.style.right = "20px";
inputBox.style.fontSize = "20px";
inputBox.style.padding = "5px 10px";
body.appendChild(inputBox);

inputBox.onkeyup = function () {
    var info = document.getElementById("infoBox");
    info.textContent = inputBox.value;
};

var btn = document.createElement("button");
btn.textContent = "Toggle dark mode";
btn.style.display = "block";
btn.style.margin = "30px auto";
btn.style.padding = "5px 5px";
btn.style.fontSize = "20px";
document.querySelector(".topper").appendChild(btn);


btn.onclick = function () {
    changeTheme(btn);
};

function changeTheme(button) {
    if (body.style.backgroundColor === "grey") {
        body.style.backgroundColor = "#ffffffff";
        body.style.color = "black";
        button.style.color = "black";
    } else {
        body.style.backgroundColor = "grey";
        body.style.color = "yellow";
    }
}


var timeLeft = 24;
var timerDisplay = document.getElementById("timer");
var startBtn = document.getElementById("startBtn");
var intervalId = null;

function startTimer() {
    if (intervalId !== null) return;

    intervalId = setInterval(function () {
        if (timeLeft > 0) {
            timeLeft--;
            timerDisplay.textContent = timeLeft;
        } else {
            clearInterval(intervalId);
            intervalId = null;
            alert("Shot clock violation!");
        }
    }, 1000);
}
startBtn.addEventListener("click", startTimer);
//i used google and youtube for this cuz i thought it would be cool