// Counter is global scope
let counter = 0;
// object of images to cycle through
const imageSources = {
  0: 'https://source.unsplash.com/iYQC9xWMvw4/400x300',
  1: 'https://source.unsplash.com/iab4hAhcNcI/400x300',
  2: 'https://source.unsplash.com/tzzpfLiRPlA/400x300',
  3: 'https://source.unsplash.com/lZkpcRmFJ7E/400x300',
  4: 'https://source.unsplash.com/FT9SsFEXqF4/400x300',
  5: 'https://source.unsplash.com/gb3gq2Nh5xE/400x300'
};

const image = document.querySelector('img');
/* Each input has: name, value, and data-sizing property (among others)
   name - corresponds to a CSS variable. value - value to set CSS var to 
   data-sizing is 'suffix' for value (px) */
function handleUpdate() {
  // Set CSS var (--this input's name) to input's value + suffix
  document.documentElement.style.setProperty(`--${this.name}`, this.value + this.dataset.sizing);
}
// Cycles through imageSources, changes image src.
function changeImage() {
  // If counter is out of range - reset to beginning or end
  if (counter < 0) {
    counter = 5;
  } else if (counter > 5) {
    counter = 0;
  }
  // assign image src to current link. Increment or decrement depending on button
  if (this.textContent === '-') {
    image.src = imageSources[counter];
    counter--;
  } else {
    image.src = imageSources[counter];
    counter++;    
  }
}

const inputs = document.querySelectorAll('.controls input');
/* For every input element - Call handleUpdate when there is a change to input value 
   or mouse is moved over input */ 
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
// Selecting buttons and adding click event to each one - Call changeImage
const imageButtons = document.querySelectorAll('button');
imageButtons.forEach(button => button.addEventListener('click', changeImage));
