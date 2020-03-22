const root = document.querySelector("#root");
const html = document.querySelector("html");

const k1 = document.querySelector("#k1");
const k2 = document.querySelector("#k2");
const k3 = document.querySelector("#k3");
const k4 = document.querySelector("#k4");

const b1 = document.querySelector("#b1");
const b2 = document.querySelector("#b2");
const b3 = document.querySelector("#b3");
const b4 = document.querySelector("#b4");

const scrollingTime = 1700;

b1.addEventListener("click", ()=>{scrollHorizontaly(k1, scrollingTime)});
b2.addEventListener("click",  ()=>{scrollHorizontaly(k2, scrollingTime)});
b3.addEventListener("click",  ()=>{scrollHorizontaly(k3, scrollingTime)});
b4.addEventListener("click",  ()=>{scrollHorizontaly(k4, scrollingTime)});

//////////////////////////////////////////////////////////////////

function scrollHorizontaly(target, duration){
  // centering viewport on the target 
  const targetWidthHalf = target.getBoundingClientRect().width / 2;
  const halfScreen = window.innerWidth / 2;
  const targetPosition = target.getBoundingClientRect().left - halfScreen + targetWidthHalf;
  // viewport's starting scroll position
  const startPosition = root.scrollLeft;
  requestAnimationFrame(scrollAnimation);
  
  // scroll animation definition
  let startTime, timeElapsed, animationDevelopmentAtMoment;
  function scrollAnimation(currentTime) {
    if (!startTime) startTime = currentTime;
    timeElapsed = currentTime - startTime;

    animationDevelopmentAtMoment = ease(timeElapsed, startPosition, targetPosition, duration);
    root.scrollTo(animationDevelopmentAtMoment, 0);
    if(timeElapsed < duration) requestAnimationFrame(scrollAnimation);
  } 
  // ease function definition
  function ease(t, b, c, d) { // http://www.gizma.com/easing/#quad1
    t /= d/2;
    if (t < 1) return c/2*t*t + b;
    t--;
    return -c/2 * (t*(t-2) - 1) + b;
  };
  // t - time elapsed since the function is triggered
  // b - start value
  // c - target (end) value
  // d - duration of transition between 'b' and 'c'
};

/////////////////////////////////////////////////////////////////
// I had to add #root div because there seems to be a strange 
// behavior on moblie screens without it. It could be related to
// the fact that the container has 'position: absolute' and that 
// body element is not stretched (has 'height: 0' in that case).
// This means I had to change 'startPosition' from 'window.pageXOffset'
// to 'root.scrollLeft'
/////////////////////////////////////////////////////////////////