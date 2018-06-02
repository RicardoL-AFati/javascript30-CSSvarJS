let counter = 0;
const imageSources = {
  0: 'https://source.unsplash.com/iYQC9xWMvw4/400x300',
  1: 'https://source.unsplash.com/iab4hAhcNcI/400x300',
  2: 'https://source.unsplash.com/tzzpfLiRPlA/400x300',
  3: 'https://source.unsplash.com/lZkpcRmFJ7E/400x300',
  4: 'https://source.unsplash.com/FT9SsFEXqF4/400x300',
  5: 'https://source.unsplash.com/gb3gq2Nh5xE/400x300'
};

const image = document.querySelector('img');

function handleUpdate() {
  document.documentElement.style.setProperty(`--${this.name}`, this.value + this.dataset.sizing);
}

function changeImage() {
  if (counter < 0) {
    counter = 5;
  } else if (counter > 5) {
    counter = 0;
  }
  if (this.textContent === '-') {
    image.src = imageSources[counter];
    counter--;
  } else {
    image.src = imageSources[counter];
    counter++;    
  }
}
const inputs = document.querySelectorAll('.controls input');
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

const imageButtons = document.querySelectorAll('button');

imageButtons.forEach(button => button.addEventListener('click', changeImage));
