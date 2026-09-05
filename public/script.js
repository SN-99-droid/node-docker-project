// script.js - simple front-end logic

// Grab the button and message element from the page
const button = document.getElementById('clickButton');
const message = document.getElementById('message');

// When the button is clicked, show a message
button.addEventListener('click', () => {
  message.textContent = 'Node.js is working!';
});
