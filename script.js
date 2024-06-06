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

    submitButton.addEventListener('click', function() {
        if (validateForm()) {
            window.location.href = 'https://chat.whatsapp.com/CLE9WysmJOOFH8D7HgcLxs';
        }
    });

    clickableImage.addEventListener('click', function(e) {
        e.preventDefault();
        if (validateForm()) {
            window.location.href = 'https://chat.whatsapp.com/CLE9WysmJOOFH8D7HgcLxs';
        }
    });
});