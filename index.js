let container = document.querySelector(".container");
let html = container.parentElement.parentElement;

let k1 = document.querySelector("#k1");
let k2 = document.querySelector("#k2");
let k3 = document.querySelector("#k3");

let b1 = document.querySelector("#b1");
let b2 = document.querySelector("#b2");
let b3 = document.querySelector("#b3");

//////////////////////////////////////////////////////////////////

function scrollHorizontaly(target, duration){  
  let targetCenter = target.getBoundingClientRect().width / 2;
  let halfScreen = window.innerWidth / 2;
  // let targetPosition = target.getBoundingClientRect().left;
  let targetPosition = target.getBoundingClientRect().left - halfScreen + targetCenter;
  let startPosition = window.pageXOffset;
  
  let startTime, timeElapsed, animationDevelopmentAtMoment;
  function scrollAnimation(currentTime) {
    if (!startTime) startTime = currentTime;
    timeElapsed = currentTime - startTime;

    animationDevelopmentAtMoment = ease(timeElapsed, startPosition, targetPosition, duration);

    html.scrollTo(animationDevelopmentAtMoment, 0);
    if(timeElapsed < duration) requestAnimationFrame(scrollAnimation);
  } 

  function ease(t, b, c, d) { // http://www.gizma.com/easing/#quad1
    t /= d/2;
    if (t < 1) return c/2*t*t + b;
    t--;
    return -c/2 * (t*(t-2) - 1) + b;
  };
  
  requestAnimationFrame(scrollAnimation);
}

//////////////////////////////////////////////////////////////////

b1.addEventListener("click", ()=>{scrollHorizontaly(k1, 1500)});
b2.addEventListener("click",  ()=>{scrollHorizontaly(k2, 1000)});
b3.addEventListener("click",  ()=>{scrollHorizontaly(k3, 1000)});

