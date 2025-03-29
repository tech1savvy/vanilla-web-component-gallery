let counter = 0;
const element = document.getElementById('counter'); // Select the element by ID

const setCounter = (count) => {
  counter = count;
  element.innerHTML = `count is ${counter}`; // Update the element's content
};

element.addEventListener('click', () => setCounter(counter + 1)); // Increment the counter on click

setCounter(0); // Initialize the counter
