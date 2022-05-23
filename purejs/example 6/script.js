const stuff = ['piggy', 'headlamp', 'pen', 'pencil', 'eraser', 'water bottle'];

const article = document.querySelector('article');
let stuffList = document.createElement('ul');

// let newElements = [];
// forEach() array method
// stuff.forEach((item) => {
//   let listItem = document.createElement('li');
//   listItem.innerHTML = item;
//   stuffList.append(listItem);
//   newElements.push(`<div>${item}</div>`);
// });

// for (let i = 0; i < stuff.length; i++) {
//   let listItem = document.createElement('li');
//   listItem.innerHTML = stuff[i];
//   stuffList.append(listItem);
// }

// for (let singleObject in stuff) {
//   let listItem = document.createElement('li');
//   listItem.innerHTML = stuff[singleObject];
//   stuffList.append(listItem);
// }

// const stuffItems = stuff.map((item) => {
//   let listItem = document.createElement('li');
//   listItem.innerHTML = item;
//   return listItem;
// });

// stuffItems.forEach((item) => {
//   stuffList.append(item);
// });

// article.append(stuffList);

// const array = stuff.map((item) => {
//   return item + ' ' + 'jfiejfiejif';
// });

// const array2 = array.filter((item) => item.indexOf('piwofwoiejfiow'));

// array2.forEach((x) => console.log(x));

const container = document.querySelector('.container');
const button = document.querySelector('.cta-button');
const posX = document.querySelector('.posX span');
const posY = document.querySelector('.posY span');

// Log when the button is clicked in the console.
button.addEventListener(
  'click',
  () => {
    button.classList.toggle('active');
    console.log('Button was clicked!');
  },
  false
);

// Update the x and y displays to show the current mouse position.
const mousePosition = (event) => {
  posX.innerText = event.pageX;
  posY.innerText = event.pageY;
};

window.addEventListener('mousemove', mousePosition, false);

// Change the color of the box when the mouse enters.
container.addEventListener(
  'mouseenter',
  () => {
    container.classList.add('blue');
  },
  false
);

container.addEventListener(
  'mouseleave',
  () => {
    container.classList.remove('blue');
  },
  false
);
