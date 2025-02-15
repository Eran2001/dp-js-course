import "./style.css";

// new QRCode(document.getElementById("qr"), "http://www.google.com");

var qr = new QRCode("qr", {
  text: "http://jindo.dev.naver.com/collie",
  width: 200,
  height: 200,
  colorDark: "#000000",
  colorLight: "#ffffff",
  correctLevel: QRCode.CorrectLevel.H,
});
