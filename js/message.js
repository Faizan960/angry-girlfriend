document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('messageForm');
    const responseMessage = document.getElementById('responseMessage');

    // Initialize EmailJS with your public key
    emailjs.init("sZL0Ye0llmqnTwNrC");

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Show loading state
        responseMessage.textContent = 'Sending message...';
        responseMessage.className = 'response-message loading';

        // Get form data
        const formData = {
            from_name: form.name.value,
            from_email: form.email.value,
            message: form.message.value
        };

        // Send the email using EmailJS
        emailjs.send('service_3qcszhi', 'template_s2gxy7j', formData)
            .then(function() {
                responseMessage.textContent = 'Message sent successfully!';
                responseMessage.className = 'response-message success';
                form.reset(); // Clear the form
            }, function(error) {
                responseMessage.textContent = 'Failed to send message. Please try again later.';
                responseMessage.className = 'response-message error';
                console.error('EmailJS error:', error);
            });
    });
});
  