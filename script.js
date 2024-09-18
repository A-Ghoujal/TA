const image = document.querySelector('.influencer-image');

// Initialize EmailJS
(function(){
    emailjs.init("kSALH80pqaVYUPIfg"); // Replace with your EmailJS user ID
 })();
 
 // Add event listener for form submission
 document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
 
    // Send form data using EmailJS
    emailjs.sendForm('service_sfi1lug', 'template_z0tlybk', this)
    .then(function() {
        alert('Message sent successfully!');
    }, function(error) {
        alert('Failed to send message: ' + error.text);
    });
 });
 