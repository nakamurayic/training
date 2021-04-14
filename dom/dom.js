const button1 = document.getElementById("button1");

const target = document.getElementById("target")
target.style.width = "500px"
target.style.height = "500px"

button1.onclick = function () {
    // target.style.backgroundColor = "blue";
    target.style.backgroundColor = target.style.backgroundColor === "blue" ? "red" : "blue"
    target.style.color = "white";
}