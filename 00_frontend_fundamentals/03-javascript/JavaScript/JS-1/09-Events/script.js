/**
 * Events in JS
 *  The change in the state of an object is known as an event
 *  Events are fired to notify code of "interesting changes" that may effect code execution.
 * 
 * - Mouse events (click, double click etc).
 * - Keyboard events (keypressm keyup, keydown).
 * - Form events (submit etc).
 * - Print event & many more
 * 
 *      syntax:
 *          node.event = () => {
 *          // handle here
 *          }
 */

let btn = document.querySelector('#btn');

btn.onclick = () => {
    console.log("button clicked");
    let a = 10;
    a++;
    console.log(a); // 11
};

// note: if we handle event in inline handle and js handle inn this case the priority is higher of js handling 

// event overwriting:

let btn2 = document.querySelector('#btn2');

btn2.onclick = () => {
    console.log("Handler 1");
}

btn2.onclick = () => { // it will overwrite the previous event
    console.log("Handler 2");
}

/**
 * Event object
 */

btn2.onclick = (e) => {
  console.log("Handler 3");
  console.log(e);
  console.log(e.type);
  console.log(e.target);
  console.log(e.clientX);
  console.log(e.clientY);
  console.log(e.target.value);
};

let i = document.querySelector('input');

i.onchange = (e) => {
    console.log("Changing Input Field Value");
    console.log(e.target)
    console.log(e.target.value);
}


// Event listeners: (better way to handle events)
/**
 * Syntax
 *  node.addEventListener(event, callback)
 * 
 *  node.removeEventListener(event, callback)
 * 
 * Note: The callback reference should be same to remove 
 * 
 */

let btn4 = document.querySelector('#btn4');

btn4.addEventListener('click', () => {
    console.log("Handler - 1");
});
btn4.addEventListener('click', () => {
    console.log("Handler - 2");
});
btn4.addEventListener('click', () => {
    console.log("Handler - 3");
});

const handler4 = () => {
  console.log("Handler - 4");
};
btn4.addEventListener('click', handler4);

btn4.addEventListener('click', () => {
    console.log("Handler - 5");
});

btn4.removeEventListener('click', handler4);

let body = document.querySelector('body');
let modeBtn = document.querySelector('#mode');
let currMode = 'light';

modeBtn.addEventListener('click', () => {
    if(currMode === 'light') {
        body.classList.add('dark');
        body.classList.remove('light');
        currMode = 'dark';
    } else {
        body.classList.add('light');
        body.classList.remove('dark');
        currMode = 'light';
    }
})