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
        // Show success modal on successful message send
        openModal('successModal');
    }, function(error) {
        // Show error modal if message fails
        openModal('errorModal');
    });
 });
 // Function to open a modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

// Function to close a modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Close modal when user clicks outside of it
window.onclick = function(event) {
    const successModal = document.getElementById('successModal');
    const errorModal = document.getElementById('errorModal');
    if (event.target === successModal) {
        successModal.style.display = "none";
    }
    if (event.target === errorModal) {
        errorModal.style.display = "none";
    }
}