
function saveUser(username, password) {
    let users = JSON.parse(localStorage.getItem('users') || '{}');
    users[username] = password;
    localStorage.setItem('users', JSON.stringify(users));
}

function validateUser(username, password) {
    let users = JSON.parse(localStorage.getItem('users') || '{}');
    return users[username] === password;
}

function signup() {
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
    if (username && password) {
        saveUser(username, password);
        alert('Account created. You can now sign in.');
        window.location.href = 'signin.html';
    } else {
        alert('Please enter valid details');
    }
}

function signin() {
    const username = document.getElementById('signin-username').value;
    const password = document.getElementById('signin-password').value;
    if (validateUser(username, password)) {
        localStorage.setItem('loggedInUser', username);
        alert('Welcome, ' + username);
        window.location.href = '../index.html';
    } else {
        alert('Invalid credentials');
    }
}
