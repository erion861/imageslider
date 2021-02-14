const prevBtn = document.getElementById('btn-left');
const nextBtn = document.getElementById('btn-right');
const images = document.querySelector('.slide').children;

let counter = 0;

nextBtn.addEventListener('click', ()=>{
  counter++;
  if(counter === 1) {
    images[counter].classList.add('show');
    images[counter - 1].classList.remove('show');
  } 
  if(counter === 2) {
    images[counter].classList.add('show');
    images[counter - 1].classList.remove('show');
  }
  if(counter >= 3) {
    counter = 0;
    images[1,2].classList.remove('show');
    images[0].classList.add('show');
  }
});

prevBtn.addEventListener('click', ()=>{
  counter++;
  if(counter === 1) {
    images[counter].classList.add('show');
    images[counter - 1].classList.remove('show');
  } 
  if(counter === 2) {
    images[counter].classList.add('show');
    images[counter - 1].classList.remove('show');
  }
  if(counter >= 3) {
    counter = 0;
    images[1,2].classList.remove('show');
    images[0].classList.add('show');
  }
});