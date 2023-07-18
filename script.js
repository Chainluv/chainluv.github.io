document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevents the form from being submitted
    alert('Form submitted!');
});