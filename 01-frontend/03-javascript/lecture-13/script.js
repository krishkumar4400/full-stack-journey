/**
 * 1. setTimeout
 * 2. setInterval
 *
 * website: cubic bazier
 */

let love = document.querySelector("#love");
let img = document.querySelector("img");

img.addEventListener("dblclick", function () {
  console.log("first");
  love.style.opacity = 1;
  love.style.transform = "translate(-50%, -50%) scale(1.1) rotate(0deg)";

  setTimeout(() => {
    love.style.transform = "translate(-50%, -380%) scale(1.1) rotate(60deg)";
  }, 800);
  setTimeout(() => {
    love.style.opacity = 0;
  }, 1000);
  setTimeout(() => {
    love.style.transform = "translate(-50%, -50%) scale(0) rotate(-60deg)";
  }, 1400);
});
