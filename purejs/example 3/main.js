import Animal from './animal.js';

const monkey = new Animal(
  'monkey',
  'Gertudres',
  'female',
  'A friendly monkey',
  '1m',
  '65kg',
  13,
  '2003-9-14',
  'Omnivoros',
  '../assets/monkey.jpg'
);

const main = document.querySelector('.maincontent');

const template = (monkey) => {
  return `
  <div class="main-div" id="contentId">
  <figure class="image">
    <img class="image-size" src=${monkey.image} alt="" />
  </figure>
	<p class="headline">${monkey.name}</p>
	<ul>
	  <li>Animal Species: ${monkey.species}</li>
	  <li>Gender: ${monkey.gender}</li>
	  <li>About: ${monkey.description}</li>
	  <li>Height: ${monkey.height}
    <li>Weight: ${monkey.weight} </li>
	  <li>Age: ${monkey.age}</li>
    <li>Born date: ${monkey.bornDate}</li>
    <li>Born date: ${monkey.foodType}</li>
	</ul>
  <article class="article-details">Monkeys are the most amazing animals in nature. They can throw feces at other animals, to piss of anyone.
  They love to do it in zoos. They can breath under water, fly on the skies. Those crazy monkeys. And last but not least
  they can smile. </article>
  </div>
  `;
};

console.log(monkey);

main.innerHTML = template(monkey);
