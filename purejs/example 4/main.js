// var x = 1;
// if (x === 1) {
//   var x = 2;
//   // console.log(x); //2  //2 R
// }

// x = 'jhiowhgiwoeio';
// x = () => {
//   return 2;
// };
// console.log(x); //1    //2 R

// var main = document.querySelector('main');

var color = 'purple';

document.querySelector('.left').style.backgroundColor = color;
document.querySelector('.left .color-value').innerHTML = color;

color = 'blue';

function switchColor() {
  let colorStyle = 'red';
  document.querySelector('.title').style.color = colorStyle;
}

switchColor();

document.querySelector('.right').style.backgroundColor = color;
document.querySelector('.right .color-value').innerHTML = color;

// const a = 'ehueureur';
// a = '324';

// console.log(a);
