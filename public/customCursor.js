const innerCursor = document.querySelector('.cursor--small');
const outerCursor = document.querySelector('.cursor--large');

let clientX;
let clientY;

const initCursor = () => {
  document.addEventListener('mousemove', e => {
    clientX = e.clientX;
    clientY = e.clientY;
  });

  const render = () => {
    innerCursor.style.transform = `translate(${clientX - 3 }px, ${clientY - 3 }px)`;
    outerCursor.style.transform = `translate(${clientX - 15 }px, ${clientY - 15 }px)`;


    requestAnimationFrame(render);
  };
  requestAnimationFrame(render);
};

initCursor();
