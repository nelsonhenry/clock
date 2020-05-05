// let wait = false,
//   bdT = document.querySelectorAll('.t'),
//   bdB = document.querySelectorAll('.b'),
//   bdL = document.querySelectorAll('.l'),
//   bdR = document.querySelectorAll('.r');

// function move(e) {
//   let mX = e.clientX,
//     mY = e.clientY,
//     wW = window.innerWidth,
//     wH = window.innerHeight,
//     x = Math.round((mX / wW) * 100),
//     y = Math.round((mY / wH) * 100);
//   // console.log(perX, perY);
//   for (let el of bdT)
//     el.style.borderTop = y + 'px solid white';
//   for (let el of bdB)
//     el.style.borderBottom = y + 'px solid white';
//   for (let el of bdL)
//     el.style.borderLeft = x + 'px solid white';
//   for (let el of bdR)
//     el.style.borderRight = x + 'px solid white';
// }

// window.addEventListener('mousemove', event => {
//   if (!wait) {
//     move(event);
//     wait = true;
//     setTimeout(() => wait = false, 1);
//   }
// });

// let cd = new Date(),
//   cdH = cd.getHours().toString().split(''),
//   cdHA = cdH[0],
//   cdHB = cdH[1],
//   cdM = cd.getSeconds().toString().split(''),
//   cdMA = cdM[0],
//   cdMB = cdM[1];


// function doDate() {

//   switch (cdHA) {
//     case '0':
//       do0(hA);
//       break;
//     case '1':
//       do1(hA);
//       break;
//     case '2':
//       do2(hA);
//       break;
//     case '3':
//       do3(hA);
//       break;
//     case '4':
//       do4(hA);
//       break;
//     case '5':
//       do5(hA);
//       break;
//     case '6':
//       do6(hA);
//       break;
//     case '7':
//       do7(hA);
//       break;
//     case '8':
//       do8(hA);
//       break;
//     case '9':
//       do9(hA);
//       break;
//     default:
//       do0(hA);
//   }

//   switch (cdHB) {
//     case '0':
//       do0(hB);
//       break;
//     case '1':
//       do1(hB);
//       break;
//     case '2':
//       do2(hB);
//       break;
//     case '3':
//       do3(hB);
//       break;
//     case '4':
//       do4(hB);
//       break;
//     case '5':
//       do5(hB);
//       break;
//     case '6':
//       do6(hB);
//       break;
//     case '7':
//       do7(hB);
//       break;
//     case '8':
//       do8(hB);
//       break;
//     case '9':
//       do9(hB);
//       break;
//     default:
//       do0(hB);
//   }

//   switch (cdMA) {
//     case '0':
//       do0(mA);
//       break;
//     case '1':
//       do1(mA);
//       break;
//     case '2':
//       do2(mA);
//       break;
//     case '3':
//       do3(mA);
//       break;
//     case '4':
//       do4(mA);
//       break;
//     case '5':
//       do5(mA);
//       break;
//     case '6':
//       do6(mA);
//       break;
//     case '7':
//       do7(mA);
//       break;
//     case '8':
//       do8(mA);
//       break;
//     case '9':
//       do9(mA);
//       break;
//     default:
//       do0(mA);
//   }

//   switch (cdMB) {
//     case '0':
//       do0(mB);
//       break;
//     case '1':
//       do1(mB);
//       break;
//     case '2':
//       do2(mB);
//       break;
//     case '3':
//       do3(mB);
//       break;
//     case '4':
//       do4(mB);
//       break;
//     case '5':
//       do5(mB);
//       break;
//     case '6':
//       do6(mB);
//       break;
//     case '7':
//       do7(mB);
//       break;
//     case '8':
//       do8(mB);
//       break;
//     case '9':
//       do9(mB);
//       break;
//     default:
//       do0(mB);
//   }
// }

// function updateDate() {
//   let d = new Date(),
//     dH = d.getHours().toString().split(''),
//     dHA = dH[0],
//     dHB = dH[1],
//     dM = d.getSeconds().toString().split(''),
//     dMA = dM[0],
//     dMB = dM[1];
//   // console.log(dHA, dHB, dMA, dMB);

//   if (cdHA > dHA) {
//     switch (dHA) {
//       case '0':
//         do0(hA);
//         break;
//       case '1':
//         do1(hA);
//         break;
//       case '2':
//         do2(hA);
//         break;
//       case '3':
//         do3(hA);
//         break;
//       case '4':
//         do4(hA);
//         break;
//       case '5':
//         do5(hA);
//         break;
//       case '6':
//         do6(hA);
//         break;
//       case '7':
//         do7(hA);
//         break;
//       case '8':
//         do8(hA);
//         break;
//       case '9':
//         do9(hA);
//         break;
//       default:
//         do0(hA);
//     }
//     cdHA = dHA;
//   }

//   if (cdHB > dHB) {
//     switch (dHB) {
//       case '0':
//         do0(hB);
//         break;
//       case '1':
//         do1(hB);
//         break;
//       case '2':
//         do2(hB);
//         break;
//       case '3':
//         do3(hB);
//         break;
//       case '4':
//         do4(hB);
//         break;
//       case '5':
//         do5(hB);
//         break;
//       case '6':
//         do6(hB);
//         break;
//       case '7':
//         do7(hB);
//         break;
//       case '8':
//         do8(hB);
//         break;
//       case '9':
//         do9(hB);
//         break;
//       default:
//         do0(hB);
//     }
//     cdHB = dHB;
//   }

//   if (cdMA > dMA) {
//     switch (dMA) {
//       case '0':
//         do0(mA);
//         break;
//       case '1':
//         do1(mA);
//         break;
//       case '2':
//         do2(mA);
//         break;
//       case '3':
//         do3(mA);
//         break;
//       case '4':
//         do4(mA);
//         break;
//       case '5':
//         do5(mA);
//         break;
//       case '6':
//         do6(mA);
//         break;
//       case '7':
//         do7(mA);
//         break;
//       case '8':
//         do8(mA);
//         break;
//       case '9':
//         do9(mA);
//         break;
//       default:
//         do0(mA);
//     }
//     cdMA = dMA;
//   }

//   if (cdMB > dMB) {
//     switch (dMB) {
//       case '0':
//         do0(mB);
//         break;
//       case '1':
//         do1(mB);
//         break;
//       case '2':
//         do2(mB);
//         break;
//       case '3':
//         do3(mB);
//         break;
//       case '4':
//         do4(mB);
//         break;
//       case '5':
//         do5(mB);
//         break;
//       case '6':
//         do6(mB);
//         break;
//       case '7':
//         do7(mB);
//         break;
//       case '8':
//         do8(mB);
//         break;
//       case '9':
//         do9(mB);
//         break;
//       default:
//         do0(mB);
//     }
//     cdMB = dMB;
//   }
// }

// doDate();
// setInterval(updateDate, 1000);


let
  hA = document.querySelector('#h-a'),
  hB = document.querySelector('#h-b'),
  mA = document.querySelector('#m-a'),
  mB = document.querySelector('#m-b'),
  sA = document.querySelector('#s-a'),
  sB = document.querySelector('#s-b');


function do0(el) {
  el.innerHTML = `
  <!-- 1 -->
  <div class="row x"></div>
  <div class="row x"></div>
  <div class="row x"></div>
  <!-- 2 -->
  <div class="row x"></div>
  <div class="row"></div>
  <div class="row x"></div>
  <!-- 3 -->
  <div class="row x"></div>
  <div class="row"></div>
  <div class="row x"></div>
  <!-- 4 -->
  <div class="row x"></div>
  <div class="row"></div>
  <div class="row x"></div>
  <!-- 5 -->
  <div class="row x"></div>
  <div class="row x"></div>
  <div class="row x"></div>
  `
}

function do1(el) {
  el.innerHTML = `
  <!-- 1 -->
  <div class="row x"></div>
  <div class="row x"></div>
  <div class="row"></div>
  <!-- 2 -->
  <div class="row"></div>
  <div class="row x"></div>
  <div class="row"></div>
  <!-- 3 -->
  <div class="row"></div>
  <div class="row x"></div>
  <div class="row"></div>
  <!-- 4 -->
  <div class="row"></div>
  <div class="row x"></div>
  <div class="row"></div>
  <!-- 5 -->
  <div class="row x"></div>
  <div class="row x"></div>
  <div class="row x"></div>
  `
}

function do2(el) {
  el.innerHTML = `
  <!-- 1 -->
  <div class="row x"></div>
  <div class="row x"></div>
  <div class="row x"></div>
  <!-- 2 -->
  <div class="row"></div>
  <div class="row"></div>
  <div class="row x"></div>
  <!-- 3 -->
  <div class="row x"></div>
  <div class="row x"></div>
  <div class="row x"></div>
  <!-- 4 -->
  <div class="row x"></div>
  <div class="row"></div>
  <div class="row"></div>
  <!-- 5 -->
  <div class="row x"></div>
  <div class="row x"></div>
  <div class="row x"></div>
  `
}

function do3(el) {
  el.innerHTML = `
  <!-- 1 -->
  <div class="row x"></div>
  <div class="row x"></div>
  <div class="row x"></div>
  <!-- 2 -->
  <div class="row"></div>
  <div class="row"></div>
  <div class="row x"></div>
  <!-- 3 -->
  <div class="row x"></div>
  <div class="row x"></div>
  <div class="row x"></div>
  <!-- 4 -->
  <div class="row"></div>
  <div class="row"></div>
  <div class="row x"></div>
  <!-- 5 -->
  <div class="row x"></div>
  <div class="row x"></div>
  <div class="row x"></div>
  `
}

function do4(el) {
  el.innerHTML = `
  <!-- 1 -->
  <div class="row x"></div>
  <div class="row"></div>
  <div class="row x"></div>
  <!-- 2 -->
  <div class="row x"></div>
  <div class="row"></div>
  <div class="row x"></div>
  <!-- 3 -->
  <div class="row x"></div>
  <div class="row x"></div>
  <div class="row x"></div>
  <!-- 4 -->
  <div class="row"></div>
  <div class="row"></div>
  <div class="row x"></div>
  <!-- 5 -->
  <div class="row"></div>
  <div class="row"></div>
  <div class="row x"></div>
  `
}

function do5(el) {
  el.innerHTML = `
  <!-- 1 -->
  <div class="row x"></div>
  <div class="row x"></div>
  <div class="row x"></div>
  <!-- 2 -->
  <div class="row x"></div>
  <div class="row"></div>
  <div class="row"></div>
  <!-- 3 -->
  <div class="row x"></div>
  <div class="row x"></div>
  <div class="row x"></div>
  <!-- 4 -->
  <div class="row"></div>
  <div class="row"></div>
  <div class="row x"></div>
  <!-- 5 -->
  <div class="row x"></div>
  <div class="row x"></div>
  <div class="row x"></div>
  `
}

function do6(el) {
  el.innerHTML = `
  <!-- 1 -->
  <div class="row x"></div>
  <div class="row x"></div>
  <div class="row x"></div>
  <!-- 2 -->
  <div class="row x"></div>
  <div class="row"></div>
  <div class="row"></div>
  <!-- 3 -->
  <div class="row x"></div>
  <div class="row x"></div>
  <div class="row x"></div>
  <!-- 4 -->
  <div class="row x"></div>
  <div class="row"></div>
  <div class="row x"></div>
  <!-- 5 -->
  <div class="row x"></div>
  <div class="row x"></div>
  <div class="row x"></div>
  `
}

function do7(el) {
  el.innerHTML = `
  <!-- 1 -->
  <div class="row x"></div>
  <div class="row x"></div>
  <div class="row x"></div>
  <!-- 2 -->
  <div class="row"></div>
  <div class="row"></div>
  <div class="row x"></div>
  <!-- 3 -->
  <div class="row"></div>
  <div class="row"></div>
  <div class="row x"></div>
  <!-- 4 -->
  <div class="row"></div>
  <div class="row"></div>
  <div class="row x"></div>
  <!-- 5 -->
  <div class="row"></div>
  <div class="row"></div>
  <div class="row x"></div>
  `
}

function do8(el) {
  el.innerHTML = `
  <!-- 1 -->
  <div class="row x"></div>
  <div class="row x"></div>
  <div class="row x"></div>
  <!-- 2 -->
  <div class="row x"></div>
  <div class="row"></div>
  <div class="row x"></div>
  <!-- 3 -->
  <div class="row x"></div>
  <div class="row x"></div>
  <div class="row x"></div>
  <!-- 4 -->
  <div class="row x"></div>
  <div class="row"></div>
  <div class="row x"></div>
  <!-- 5 -->
  <div class="row x"></div>
  <div class="row x"></div>
  <div class="row x"></div>
  `
}

function do9(el) {
  el.innerHTML = `
  <!-- 1 -->
  <div class="row x"></div>
  <div class="row x"></div>
  <div class="row x"></div>
  <!-- 2 -->
  <div class="row x"></div>
  <div class="row"></div>
  <div class="row x"></div>
  <!-- 3 -->
  <div class="row x"></div>
  <div class="row x"></div>
  <div class="row x"></div>
  <!-- 4 -->
  <div class="row"></div>
  <div class="row"></div>
  <div class="row x"></div>
  <!-- 5 -->
  <div class="row x"></div>
  <div class="row x"></div>
  <div class="row x"></div>
  `
}

function twoDigits(n) {
  return (n < 10 ? '0' : '') + n;
}

function t() {
  d = new Date(),
    dH = twoDigits(d.getHours()).toString().split(''),
    dHA = dH[0],
    dHB = dH[1],
    dM = twoDigits(d.getMinutes()).toString().split(''),
    dMA = dM[0],
    dMB = dM[1],
    dS = twoDigits(d.getSeconds()).toString().split(''),
    dSA = dS[0],
    dSB = dS[1];

  console.log(dS);

  function switchHA() {
    switch (dHA) {
      case '0':
        do0(hA);
        break;
      case '1':
        do1(hA);
        break;
      case '2':
        do2(hA);
        break;
      case '3':
        do3(hA);
        break;
      case '4':
        do4(hA);
        break;
      case '5':
        do5(hA);
        break;
      case '6':
        do6(hA);
        break;
      case '7':
        do7(hA);
        break;
      case '8':
        do8(hA);
        break;
      case '9':
        do9(hA);
        break;
      default:
        do0(hA);
    }
  }

  function switchHB() {
    switch (dHB) {
      case '0':
        do0(hB);
        break;
      case '1':
        do1(hB);
        break;
      case '2':
        do2(hB);
        break;
      case '3':
        do3(hB);
        break;
      case '4':
        do4(hB);
        break;
      case '5':
        do5(hB);
        break;
      case '6':
        do6(hB);
        break;
      case '7':
        do7(hB);
        break;
      case '8':
        do8(hB);
        break;
      case '9':
        do9(hB);
        break;
      default:
        do0(hB);
    }
  }

  function switchMA() {
    switch (dMA) {
      case '0':
        do0(mA);
        break;
      case '1':
        do1(mA);
        break;
      case '2':
        do2(mA);
        break;
      case '3':
        do3(mA);
        break;
      case '4':
        do4(mA);
        break;
      case '5':
        do5(mA);
        break;
      case '6':
        do6(mA);
        break;
      case '7':
        do7(mA);
        break;
      case '8':
        do8(mA);
        break;
      case '9':
        do9(mA);
        break;
      default:
        do0(mA);
    }
  }

  function switchMB() {
    switch (dMB) {
      case '0':
        do0(mB);
        break;
      case '1':
        do1(mB);
        break;
      case '2':
        do2(mB);
        break;
      case '3':
        do3(mB);
        break;
      case '4':
        do4(mB);
        break;
      case '5':
        do5(mB);
        break;
      case '6':
        do6(mB);
        break;
      case '7':
        do7(mB);
        break;
      case '8':
        do8(mB);
        break;
      case '9':
        do9(mB);
        break;
      default:
        do0(mB);
    }
  }

  function switchSA() {
    switch (dSA) {
      case '0':
        do0(sA);
        break;
      case '1':
        do1(sA);
        break;
      case '2':
        do2(sA);
        break;
      case '3':
        do3(sA);
        break;
      case '4':
        do4(sA);
        break;
      case '5':
        do5(sA);
        break;
      case '6':
        do6(sA);
        break;
      case '7':
        do7(sA);
        break;
      case '8':
        do8(sA);
        break;
      case '9':
        do9(sA);
        break;
      default:
        do0(sA);
    }
  }

  function switchSB() {
    switch (dSB) {
      case '0':
        do0(sB);
        break;
      case '1':
        do1(sB);
        break;
      case '2':
        do2(sB);
        break;
      case '3':
        do3(sB);
        break;
      case '4':
        do4(sB);
        break;
      case '5':
        do5(sB);
        break;
      case '6':
        do6(sB);
        break;
      case '7':
        do7(sB);
        break;
      case '8':
        do8(sB);
        break;
      case '9':
        do9(sB);
        break;
      default:
        do0(sB);
    }
  }

  if (dHA !== t.prevHA) switchHA();
  if (dHB !== t.prevHB) switchHB();
  if (dMA !== t.prevMA) switchMA();
  if (dMB !== t.prevMB) switchMB();
  if (dSA !== t.prevSA) switchSA();
  if (dSB !== t.prevSB) switchSB();

  t.prevHA = dHA;
  t.prevHB = dHB;
  t.prevMA = dMA;
  t.prevMB = dMB;
  t.prevSA = dSA;
  t.prevSB = dSB;
}

setInterval(t, 1000);


















// let wait = false,
//   rows = document.querySelectorAll('.row');

// for (let el of rows)
//   el.style.opacity = '0.5';

// function move(e) {
//   let mX = e.clientX,
//     mY = e.clientY,
//     wW = window.innerWidth,
//     wH = window.innerHeight,
//     x = Math.round((mX / wW) * 100),
//     y = Math.round((mY / wH) * 100);
// }

// window.addEventListener('mousemove', event => {
//   if (!wait) {
//     move(event);
//     wait = true;
//     setTimeout(() => wait = false, 100);
//   }
// });