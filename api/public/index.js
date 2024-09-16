document.addEventListener('DOMContentLoaded', () => {
    const transactionList = document.getElementById('transactionList');
    const balanceEl = document.getElementById('balance');
    const incomeEl = document.getElementById('income');
    const expenseEl = document.getElementById('expense');
    const transactionForm = document.getElementById('transactionForm');
    
    let transactions = [];

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

    // Fetch transactions from the backend
    async function fetchTransactions() {
        const token = localStorage.getItem('token'); // Get token from localStorage
        try {
            const response = await fetch('http://localhost:3000/api/transactions', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });

            const result = await response.json();
            if (response.ok) {
                transactions = result.transactions;
                initialize(); // Initialize the page with fetched transactions
            } else {
                alert("Failed to load transactions.");
            }
        } catch (error) {
            console.error("Error fetching transactions:", error);
        }
    }

    // Add transactions from backend to DOM
    function initialize() {
        transactionList.innerHTML = '';
        transactions.forEach(addTransactionToDOM);
        updateValues();
    }

    // Event listener for form submission
    if (transactionForm) {
        transactionForm.addEventListener('submit', async function (e) {
            e.preventDefault();

            const type = document.getElementById('type').checked ? 'income' : 'expense';
            const name = transactionForm.particulars.value;
            const amount = parseFloat(transactionForm.amount.value);
            const date = transactionForm.date.value;

            if (!name || amount <= 0 || !date) {
                alert("Please fill out all fields correctly.");
                return;
            }

            const newTransaction = { type, name, amount, date };
            const token = localStorage.getItem('token');

            // Send the new transaction to the backend
            try {
                const response = await fetch('http://localhost:3000/api/transactions', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    },
                    body: JSON.stringify(newTransaction)
                });
                
                if (response.ok) {
                    transactions.push(newTransaction);
                    addTransactionToDOM(newTransaction);
                    updateValues();
                    transactionForm.reset();
                } else {
                    alert("Failed to add transaction.");
                }
            } catch (error) {
                alert("Error adding transaction.");
                console.error(error);
            }
        });
    }

    // Fetch transactions and initialize the page
    fetchTransactions();
});
