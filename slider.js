const prevBtn = document.getElementById('btn-left');
const nextBtn = document.getElementById('btn-right');
const container = document.querySelector('.slide');
const images = Array.from(document.querySelectorAll('.slide img'));

console.log(prevBtn);
console.log(nextBtn);
console.log(container);
console.log(images);

let i = 0;

nextBtn.addEventListener('click', ()=>{
  i++;
  images[i].classList.add('show');
  console.log(i);
});

prevBtn.addEventListener('click', ()=>{
  i--;
  if(i <= -3) return;
  console.log(i);
});