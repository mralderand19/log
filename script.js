document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Reset pesan kesalahan
    errorMessage.style.display = 'none';

    // Validasi input
    if (username === '' || password === '') {
        errorMessage.textContent = 'Please fill in both fields';
        errorMessage.style.display = 'block';
        return;
    }

    // Simulasi permintaan login ke server
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Aksi setelah login sukses
            alert('Login successful!');
            // Redirect atau aksi lainnya
            window.location.href = '/home';
        } else {
            // Tampilkan pesan kesalahan
            errorMessage.textContent = 'Invalid username or password';
            errorMessage.style.display = 'block';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        errorMessage.textContent = 'An error occurred. Please try again later.';
        errorMessage.style.display = 'block';
    });

    // Reset form
    document.getElementById('loginForm').reset();
});
