// Get all text inputs
const textInputs = document.querySelectorAll('.text-input');

// Adjust width based on the content
textInputs.forEach(input => {
  input.style.width = (input.scrollWidth + 5) + 'px'; // 5px for padding
});
    