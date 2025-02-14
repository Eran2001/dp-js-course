import "./style.css";

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

ctx.fillStyle = "#FF0000";
ctx.fillRect(300, 400, 200, 100);

ctx.fillStyle = "#FF1";
ctx.fillRect(0, 0, 100, 100);

ctx.fillStyle = "#0000FF";
ctx.beginPath();
ctx.arc(300, 150, 50, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.moveTo(500, 0);
ctx.lineTo(0, 500);

ctx.strokeStyle = "#000";
ctx.stroke();
