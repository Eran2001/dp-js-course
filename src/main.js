import "./style.css";

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

ctx.fillStyle = "#FF0000";
ctx.fillRect(50, 100, 200, 100);

ctx.fillStyle = "#0000FF";
ctx.beginPath();
ctx.arc(300, 150, 50, 0, 2 * Math.PI);
ctx.fill();
