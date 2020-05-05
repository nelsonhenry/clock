let wait = false,
  bdT = document.querySelectorAll('.t'),
  bdB = document.querySelectorAll('.b'),
  bdL = document.querySelectorAll('.l'),
  bdR = document.querySelectorAll('.r');

function move(e) {
  let mX = e.clientX,
    mY = e.clientY,
    wW = window.innerWidth,
    wH = window.innerHeight,
    x = Math.round((mX / wW) * 100),
    y = Math.round((mY / wH) * 100);
  // console.log(perX, perY);
  for (let el of bdT)
    el.style.borderTop = y + 'px solid white';
  for (let el of bdB)
    el.style.borderBottom = y + 'px solid white';
  for (let el of bdL)
    el.style.borderLeft = x + 'px solid white';
  for (let el of bdR)
    el.style.borderRight = x + 'px solid white';
}

window.addEventListener('mousemove', event => {
  if (!wait) {
    move(event);
    wait = true;
    setTimeout(() => wait = false, 1);
  }
});