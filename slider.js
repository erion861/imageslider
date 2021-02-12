const prevBtn = document.getElementById('btn-left');
const nextBtn = document.getElementById('btn-right');
const container = document.querySelector('.slide');
const images = Array.from(document.querySelectorAll('.slide img'));

console.log(prevBtn);
console.log(nextBtn);
console.log(container);
console.log(images);

let counter = 0;

nextBtn.addEventListener('click', ()=>{
  counter++;
  if(counter >= 3) return;
  console.log(counter);
});

prevBtn.addEventListener('click', ()=>{
  counter--;
  if(counter <= -3) return;
  console.log(counter);
});