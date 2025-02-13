import "./style.css";

const number = 0;

const myPromise = new Promise((resolve, reject) => {
  if (!number) {
    reject("Please enter a valid number");
  } else {
    resolve(number);
  }
});

myPromise
  .then((data) => {
    console.log(data);
  })
  .catch((data) => {
    console.log(data);
  });
