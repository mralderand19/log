// Simulated database of users
const users = [
    { username: 'admin', password: 'password' },
    { username: 'user', password: '12345' }
];

// Function to validate username format (simple example)
function validateUsername(username) {
    const re = /^[a-zA-Z0-9]{5,}$/; // Alphanumeric, at least 5 characters
    return re.test(String(username).toLowerCase());
}

// Function to validate password format (simple example)
function validatePassword(password) {
    return password.length >= 6;
}

// Function to handle form submission
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous error messages
    document.getElementById('error-message').textContent = '';
    document.getElementById('username-error').textContent = '';
    document.getElementById('password-error').textContent = '';

    // Get input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validate username and password
    if (!validateUsername(username)) {
        document.getElementById('username-error').textContent = 'Invalid username format (alphanumeric, at least 5 characters)';
        return;
    }

    if (!validatePassword(password)) {
        document.getElementById('password-error').textContent = 'Invalid password format (at least 6 characters)';
        return;
    }

    // Simulated login logic
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        alert('Login successful!');
        // You can redirect to another page or perform additional actions here
    } else {
        document.getElementById('error-message').textContent = 'Invalid username or password. Please try again.';
    }
});
