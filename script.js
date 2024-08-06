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
        let phone = document.getElementById('tel').value;

        // Adiciona o prefixo '55' ao número de telefone
        if (!phone.startsWith('55')) {
            phone = '55' + phone;
        }

        fetch('https://hook.us1.make.com/jvx7s36o654lmqpygtqj937ufifl1f95', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                phone: phone
            })
        })
        .then(response => response.text())  // Change to response.text() to handle non-JSON response
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
                window.location.href = 'https://www.bilheteriadigital.com/festival-bbq-show-2024-sao-luis-09-de-novembro';
            });
        }
    });

    clickableImage.addEventListener('click', function(e) {
        e.preventDefault();
        if (validateForm()) {
            sendWebhook(function() {
                window.location.href = 'https://www.bilheteriadigital.com/festival-bbq-show-2024-sao-luis-09-de-novembro';
            });
        }
    });
});
