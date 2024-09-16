
// Login functionality for login.html
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('LoginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            const user = users.find(user => user.username === username && user.password === password);

            if (user) {
                // Store user information in localStorage to simulate session
                localStorage.setItem('loggedInUser', username);
                alert("Login successful!");
                window.location.href = 'index.html'; // Redirect to index.html
            } else {
                alert("Incorrect username or password.");
            }
        });
    }

    // Check if user is already logged in
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser && window.location.pathname.includes('login.html')) {
        alert(`Welcome back, ${loggedInUser}!`);
        window.location.href = 'index.html'; // Redirect to index if logged in
    }

    // Logout logic
    const backHomeBtn = document.querySelector('.back-home-btn');
    if (backHomeBtn && loggedInUser) {
        backHomeBtn.addEventListener('click', function () {
            localStorage.removeItem('loggedInUser'); // Log out user
        });
    }
});

// Expense Tracker for index.html
document.addEventListener('DOMContentLoaded', () => {
    const transactionList = document.getElementById('transactionList');
    const balanceEl = document.getElementById('balance');
    const incomeEl = document.getElementById('income');
    const expenseEl = document.getElementById('expense');
    const transactionForm = document.getElementById('transactionForm');

    let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

    // Function to update balance, income, and expense
    function updateValues() {
        const income = transactions
            .filter(t => t.type === 'income')
            .reduce((acc, item) => acc + item.amount, 0);
        const expense = transactions
            .filter(t => t.type === 'expense')
            .reduce((acc, item) => acc + item.amount, 0);
        const balance = income - expense;

        balanceEl.innerText = `$${balance.toFixed(2)}`;
        incomeEl.innerText = `$${income.toFixed(2)}`;
        expenseEl.innerText = `$${expense.toFixed(2)}`;
    }

    // Function to add transaction to the list
    function addTransactionToDOM(transaction) {
        const li = document.createElement('li');
        li.innerHTML = `
            ${transaction.name} - ${transaction.date}
            <span>${transaction.type === 'income' ? '+' : '-'}$${transaction.amount.toFixed(2)}</span>
        `;
        transactionList.appendChild(li);
    }

    // Add transactions from localStorage to DOM
    function initialize() {
        transactionList.innerHTML = '';
        transactions.forEach(addTransactionToDOM);
        updateValues();
    }

    // Event listener for form submission
    if (transactionForm) {
        transactionForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const type = document.getElementById('type').checked ? 'income' : 'expense';
            const name = transactionForm.particulars.value;
            const amount = parseFloat(transactionForm.amount.value);
            const date = transactionForm.date.value;

            if (!name || amount <= 0 || !date) {
                alert("Please fill out all fields correctly.");
                return;
            }

            const newTransaction = {
                type,
                name,
                amount,
                date
            };

            transactions.push(newTransaction);
            localStorage.setItem('transactions', JSON.stringify(transactions));
            addTransactionToDOM(newTransaction);
            updateValues();

            // Reset the form
            transactionForm.reset();
        });
    }

    // Initialize the page with saved data
    initialize();
});
