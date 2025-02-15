import "./style.css";
import QRCode from "qrcode";

var canvas = document.getElementById("canvas");

QRCode.toCanvas(canvas, "sample text", function (error) {
  if (error) console.error(error);
  console.log("success!");
});

QRCode.toDataURL("I am a pony!", function (err, url) {
  console.log(url);
});
