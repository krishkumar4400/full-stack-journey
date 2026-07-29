/**
 * 1. setTimeout
 * 2. setInterval
 */

let btn = document.querySelector("button");
let para = document.querySelector("#progress");
let inner = document.querySelector("#inner");
let grow = 0;

let x = Math.floor(Math.random() * 50);
console.log(x);
console.log(x + 50);

btn.addEventListener("click", function () {
  btn.style.pointerEvents = "none";
  let interval = setInterval(() => {
    grow++;
    para.innerHTML = grow + " %";
    inner.style.width = grow + "%";
  }, x + 50);

  setTimeout(
    () => {
      clearInterval(interval);
      btn.innerHTML = "Downloaded";
      btn.style.opacity = 0.5;
      console.log("Downloaded in ", (x + 50) / 10, "Seconds");
    },
    (x + 50) * 100,
  );
});
