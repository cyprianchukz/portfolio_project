document.addEventListener('DOMContentLoaded', () => {
    const transactionTable = document.getElementById('transactionTable').getElementsByTagName('tbody')[0];

    // Fetch and display transactions in a table
    async function fetchTransactions() {
        try {
            const response = await fetch('http://localhost:3000/api/transactions', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            const transactions = await response.json();
            transactionTable.innerHTML = ''; // Clear previous rows

            transactions.forEach(transaction => {
                const row = transactionTable.insertRow();
                
                const transaction_idCell = row.insertCell(0);
                const typeCell = row.insertCell(1);
                const particularsCell = row.insertCell(2);
                const amountCell = row.insertCell(3);
                const dateCell = row.insertCell(4);

                transaction_idCell.textContent = transaction.transaction_id;
                typeCell.textContent = transaction.type;
                particularsCell.textContent = transaction.particulars;
                amountCell.textContent = `$${parseFloat(transaction.amount).toFixed(2)}`;
                dateCell.textContent = new Date(transaction.date).toLocaleDateString();
            });
        } catch (error) {
            console.error('Error fetching transactions:', error);
        }
    }

    // Fetch transactions on page load
    fetchTransactions();
});
