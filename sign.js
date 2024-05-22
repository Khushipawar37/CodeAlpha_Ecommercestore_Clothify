document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.querySelector('.submit-btn');
    submitButton.addEventListener('click', (event) => {
        event.preventDefault();
        submitForm();
    });
});

function submitForm() {
    const user = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        number: document.getElementById('number').value,
        termsAccepted: document.getElementById('terms-and-cond').checked,
        notifications: document.getElementById('notification').checked
    };

    fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
