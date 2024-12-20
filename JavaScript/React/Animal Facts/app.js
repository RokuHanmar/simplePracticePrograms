import { animals } from './animals';
import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);

const title = ''; 
const background = <img
  className='background' alt='ocean' src='/images/ocean.jpg' />;

let images = [];
for (let animal in animals) {
  let image = (
    <img 
      key={animal}
      className='animal'
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role='button'
      onClick={displayFact()}
    />
    );
    images.push(image);
}

displayFact = (e) = {
  const animal = e.target.alt;
  const index = Math.floor(Math.random() * animals[animal].facts.length);
  let funFact = animals[animal].facts[index];
  const p = document.getElementById('fact');
  p.innerHTML = funFact;
}

const animalFacts = (
  <div>
    <h1> {title === '' ? 'Click an animal for a fun fact' : title } </h1>;
    {background}
    <div className='animals'>
      { images }
      </div>
</div>
<p id='fact'></p>

);



root.render(animalFacts);
