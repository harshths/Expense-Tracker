// inside Dashboard.jsx

const deleteExpense = async (id) => {
  try {
    await axios.delete("http://localhost:8080/api/expenses/delete/" + id);
    alert("Expense deleted successfully!");
    // refresh list
    getAllExpenses();
  } catch (err) {
    console.error(err);
    alert("Failed to delete expense!");
  }
};
