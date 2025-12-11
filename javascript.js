var body = document.body;


var inputBox = document.createElement("input");
inputBox.type = "text";
inputBox.placeholder = "Type something";
inputBox.style.position = "absolute";
inputBox.style.top = "20px";
inputBox.style.right = "20px";
inputBox.style.fontSize = "20px";
inputBox.style.padding = "5px 10px";
body.appendChild(inputBox);

var infoBox = document.createElement("div");
infoBox.id = "infoBox";
infoBox.style.position = "absolute";
infoBox.style.top = "60px";
infoBox.style.right = "20px";
infoBox.style.fontSize = "22px";
infoBox.style.color = "yellow";
infoBox.style.textAlign = "right";
body.appendChild(infoBox);

inputBox.onkeyup = function () {
    var info = document.getElementById("infoBox");
    info.textContent = inputBox.value;
};

var btn = document.createElement("button");
btn.textContent = "Toggle dark mode";
btn.style.display = "block";
btn.style.margin = "20px auto";
btn.style.padding = "10px 20px";
btn.style.fontSize = "20px";
document.querySelector(".topper").appendChild(btn);


btn.onclick = function () {
    changeTheme(btn);
};

function changeTheme(button) {
    if (body.style.backgroundColor === "grey") {
        body.style.backgroundColor = "#ffffffff";
        body.style.color = "white";
        button.style.backgroundColor = "white";
        button.style.color = "black";
    } else {
        body.style.backgroundColor = "grey";
        body.style.color = "yellow";
        button.style.backgroundColor = "yellow";
        button.style.color = "black";
    }
}
