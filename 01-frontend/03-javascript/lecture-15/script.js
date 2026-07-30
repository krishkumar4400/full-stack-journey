/**
 * DOM
 *
 * Event Listeners
 * 
 * piano project
 */

/**

const main = document.querySelector("main");

let cursor = document.querySelector("#cursor");

main.addEventListener("mousemove", function(e) {
  cursor.style.left = e.x + "px";
  cursor.style.top = e.y + "px";
});

 * 
 */

let str = "";
document.body.addEventListener("keydown", function (e) {
  if (e.key !== "Enter" && e.key !== "Backspace") {
    str += e.key;
  }
  console.log(str);
  if (e.key == "Enter") {
    document.querySelector("h1").innerHTML = str;
  }
  if (e.key == "Backspace") {
    document.querySelector("h1").innerHTML = "***";
    str = '';
  }

});
