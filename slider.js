const prevBtn = document.getElementById('btn-left');
const nextBtn = document.getElementById('btn-right');
const container = document.querySelector('.slide');
// const images = Array.from(document.querySelectorAll('.slide img'));
const images = document.querySelector('.slide').children;

console.log(prevBtn);
console.log(nextBtn);
console.log(container);
console.log(images);

let i = 0;

nextBtn.addEventListener('click', ()=>{
  for(i=0; i < images.length; i++) {
    
  };
});

prevBtn.addEventListener('click', ()=>{
  counter--;
  if(counter <= -3) return;
  console.log(counter);
});