document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('messageForm');
    const responseMessage = document.getElementById('responseMessage');

    // Wait for EmailJS to be loaded
    if (typeof emailjs === 'undefined') {
        console.error('EmailJS is not loaded!');
        return;
    }

    // Initialize EmailJS with your public key
    emailjs.init("sZL0Ye0llmqnTwNrC")
        .then(() => {
            console.log('EmailJS initialized successfully');
        })
        .catch(err => {
            console.error('EmailJS initialization failed:', err);
            responseMessage.textContent = 'Failed to initialize email service. Please refresh the page.';
            responseMessage.className = 'response-message error';
        });

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Show loading state
        responseMessage.textContent = 'Sending message...';
        responseMessage.className = 'response-message loading';

        // Get form data
        const formData = {
            from_name: form.name.value,
            from_email: form.email.value,
            message: form.message.value,
            date: new Date().toLocaleString()
        };

        console.log('Attempting to send email with data:', formData);

        // Send the email using EmailJS
        emailjs.send('service_3qcszhi', 'template_s2gxy7j', formData)
            .then(function(response) {
                console.log('Email sent successfully:', response);
                responseMessage.textContent = 'Message sent successfully!';
                responseMessage.className = 'response-message success';
                form.reset(); // Clear the form
            }, function(error) {
                console.error('EmailJS error:', error);
                responseMessage.textContent = 'Failed to send message. Please try again later.';
                responseMessage.className = 'response-message error';
            });
    });
});
  