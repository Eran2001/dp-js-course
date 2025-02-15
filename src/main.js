import "./style.css";
import QRCode from "qrcode";

var canvas = document.getElementById("canvas");

QRCode.toCanvas(canvas, "sample text", function (error) {
  if (error) console.error(error);
  console.log("success!");
});

QRCode.toDataURL("I am a pony!")
  .then((url) => {
    console.log(url);
  })
  .catch((err) => {
    console.error(err);
  });

// With async/await
const generateQR = async (text) => {
  try {
    console.log(await QRCode.toDataURL(text));
  } catch (err) {
    console.error(err);
  }
};
