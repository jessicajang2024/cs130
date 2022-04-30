let x = 20;
const makeBigger = () => {
   x += 5;
   // alert('make bigger!');
   document.querySelector(".content").style.fontSize = `${x}px`;
};

const makeSmaller = () => {
   x -= 5;
   // alert('make smaller!');
   document.querySelector(".content").style.fontSize = `${x}px`;
};

document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);

