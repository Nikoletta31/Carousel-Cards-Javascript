let width = 640; 
let count = 6; 

let list = carousel.querySelector('ul');
let listElems = carousel.querySelectorAll('li');

let position = 0; 

/*  Action of the arrow to move to the left  */ 
carousel.querySelector('.prev').onclick = function() {
 
  position += width * count;

  position = Math.min(position, 0)
  list.style.marginLeft = position + 'px';
};

/*  Action of the arrow to move to the right */ 
carousel.querySelector('.next').onclick = function() {

  position -= width * count;

  position = Math.max(position, width * (listElems.length - count));
  list.style.marginLeft = position + 'px';
};