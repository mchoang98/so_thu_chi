const form = document.getElementById("transaction-form");
const transactionList = document.getElementById("transaction-list");
const totalIncome = document.getElementById("total-income");
const totalExpense = document.getElementById("total-expense");
const totalDifference = document.getElementById("total-diff");

let transactions = [];

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const type = document.getElementById("type").value;
    const description = document.getElementById("description").value;
    const amount = parseFloat(document.getElementById("amount").value);

    if (!description || amount <= 0) return;

    const transaction = { type, description, amount };
    transactions.push(transaction);
    updateUI();
});

function updateUI() {
    transactionList.innerHTML = "";
    let income = 0, expense = 0;

    transactions.forEach((transaction, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td class="border px-4 py-2 ${transaction.type === "income" ? "text-green-500" : "text-red-500"}">${transaction.type === "income" ? "+ Thu" : "- Chi"}</td>
            <td class="border px-4 py-2">${transaction.description}</td>
            <td class="border px-4 py-2 ${transaction.type === "income" ? "text-green-500" : "text-red-500"}">${transaction.type === "income" ? "+" : "-"} ${transaction.amount.toLocaleString()} VND</td>
            <td class="border px-4 py-2 text-center">
                <button onclick="deleteTransaction(${index})" class="text-red-500 hover:underline">Xóa</button>
            </td>
        `;
        transactionList.appendChild(row);

        if (transaction.type === "income") {
            income += transaction.amount;
        } else {
            expense += transaction.amount;
        }

        
    });

    totalIncome.textContent = income.toLocaleString();
    totalExpense.textContent = expense.toLocaleString();
    totalDifference.classList.toggle("text-green-500", income >= expense);
    totalDifference.textContent = (income - expense).toLocaleString();
}

function deleteTransaction(index) {
    transactions.splice(index, 1);
    updateUI();
}

// Import file Excel
document.getElementById("import-file").addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const rows = XLSX.utils.sheet_to_json(sheet);

        transactions = rows.map(row => ({
            type: row["Loại"] === "Thu" ? "income" : "expense",
            description: row["Mô tả"],
            amount: parseFloat(row["Số tiền"])
        }));
        updateUI();
    };
    reader.readAsArrayBuffer(file);
});

// Export dữ liệu sang file Excel
document.getElementById("export-button").addEventListener("click", function () {
    const exportData = transactions.map(transaction => ({
        "Loại": transaction.type === "income" ? "Thu" : "Chi",
        "Mô tả": transaction.description,
        "Số tiền": transaction.amount
    }));

    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Transactions");
    XLSX.writeFile(workbook, "quan_ly_thu_chi.xlsx");
});
