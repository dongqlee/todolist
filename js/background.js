const images = [
  '1.jpg',
  '2.jpg',
  '3.jpg',
  '4.jpg',
  '5.jpg'
]
const bg = document.getElementById('bg');
const selectImg = images[Math.floor(Math.random()*images.length)]

const bgImg = document.createElement('img');

bgImg.src = `images/${selectImg}`;

bg.appendChild(bgImg);