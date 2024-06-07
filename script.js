document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submitButton');
    const clickableImage = document.getElementById('clickableImage');

    function validateForm() {
        const name = document.getElementById('name').value;
        const phone = document.getElementById('tel').value;

        if (!name || !phone) {
            alert('Por favor, preencha todos os campos.');
            return false;
        }

        return true;
    }

    function sendWebhook(callback) {
        const name = document.getElementById('name').value;
        const phone = document.getElementById('tel').value;

        fetch('https://gcamancio.app.n8n.cloud/webhook/af7f3bf8-a2d5-438f-8108-582373498c4f', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                phone: phone
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            callback();  // Call the callback function after successful webhook
        })
        .catch((error) => {
            console.error('Error:', error);
            callback();  // Call the callback function even if there's an error
        });
    }

    submitButton.addEventListener('click', function() {
        if (validateForm()) {
            sendWebhook(function() {
                window.location.href = 'https://chat.whatsapp.com/GMe7MCeWc8Z2rS9AeSK4Nk';
            });
        }
    });

    clickableImage.addEventListener('click', function(e) {
        e.preventDefault();
        if (validateForm()) {
            sendWebhook(function() {
                window.location.href = 'https://chat.whatsapp.com/GMe7MCeWc8Z2rS9AeSK4Nk';
            });
        }
    });
});
