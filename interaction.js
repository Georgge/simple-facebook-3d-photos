const container = document.querySelector('.container');
const extrude = document.querySelector('.extrude');
const background = document.querySelector('.background');

let x = 0;
let y = 0;

function getDirection (event) {
  if (x < event.pageX) {
    background.classList.remove('rotateLeftBG');
    background.classList.add('rotateRightBG');
    extrude.classList.remove('rotateRightEx');
    extrude.classList.add('rotateLeftEx');
  } else {
    background.classList.remove('rotateRightBG');
    background.classList.add('rotateLeftBG');
    extrude.classList.remove('rotateLeftEx');
    extrude.classList.add('rotateRightEx');
  }

  x = event.pageX;
  y = event.pageY;
}

container.addEventListener('mousemove', getDirection, false);
