document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('LoginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', async function (e) {
            e.preventDefault();

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Make a POST request to the backend to authenticate the user
            try {
                const response = await fetch('http://localhost:3000/api/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ username, password }),
                });

                const result = await response.json();
                
                if (response.ok) {
                    // Store token in localStorage (simulating session)
                    localStorage.setItem('token', result.token);
                    alert("Login successful!");
                    window.location.href = 'index.html'; // Redirect to index.html
                } else {
                    alert(result.message || "Login failed.");
                }
            } catch (error) {
                alert("An error occurred while logging in.");
                console.error(error);
            }
        });
    }

    // Logout logic
    const backHomeBtn = document.querySelector('.back-home-btn');
    if (backHomeBtn) {
        backHomeBtn.addEventListener('click', function () {
            localStorage.removeItem('token'); // Log out user
            window.location.href = 'login.html'; // Redirect to login page
        });
    }
});
