document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('participationForm');

    function validateForm() {
        const name = document.getElementById('name').value;
        const phone = document.getElementById('tel').value;

        if (!name || !phone) {
            alert('Por favor, preencha todos os campos.');
            return false;
        }

        return true;
    }

    form.addEventListener('submit', function(e) {
        if (!validateForm()) {
            e.preventDefault();
        }
    });
});
