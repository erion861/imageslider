const prevBtn = document.getElementById('btn-left');
const nextBtn = document.getElementById('btn-right');
const container = document.querySelector('.slide');
const images = document.querySelector('.slide').children;

let counter = 0;

console.log(prevBtn);
console.log(nextBtn);
console.log(container);
console.log(images);
console.log(images[0]);
console.log(images[1]);
console.log(images[2]);

nextBtn.addEventListener('click', ()=>{
  counter++;
  console.log(counter);
  if(counter === 1) {
    images[0].classList.remove('show');
    images[1].classList.add('show');
  } 
  if(counter === 2) {
    images[0].classList.remove('show');
    images[1].classList.remove('show');
    images[2].classList.add('show');
  }
  if(counter >= 3) {
    counter = 0;
    images[0].classList.add('show');
    images[1].classList.remove('show');
    images[2].classList.remove('show');
  }
});

prevBtn.addEventListener('click', ()=>{
  counter++;
  console.log(counter);
  if(counter === 1) {
    images[0].classList.remove('show');
    images[1].classList.add('show');
  } 
  if(counter === 2) {
    images[0].classList.remove('show');
    images[1].classList.remove('show');
    images[2].classList.add('show');
  }
  if(counter >= 3) {
    counter = 0;
    images[0].classList.add('show');
    images[1].classList.remove('show');
    images[2].classList.remove('show');
  }
});