import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Dashboard() {
  const location = useLocation();
  const { email } = location.state || {};
  const navigate = useNavigate();

  const [user, setUser] = useState({});
  const [expenses, setExpenses] = useState([]);

  const getUserByMail = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8080/api/auth/mail/" + email
      );
      setUser(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const getAllExpenses = async () => {
    try {
      if (user.id) {
        const res = await axios.get(
          "http://localhost:8080/api/expenses/" + user.id
        );
        setExpenses(res.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const deleteExpense = async (id) => {
    try {
      await axios.delete("http://localhost:8080/api/expenses/delete/" + id);
      alert("Expense deleted successfully!");
      getAllExpenses();
    } catch (err) {
      console.error(err);
      alert("Failed to delete expense!");
    }
  };

  useEffect(() => {
    getUserByMail();
  }, []);

  useEffect(() => {
    if (user.id) getAllExpenses();
  }, [user]);

  const goToExpenseForm = () => {
    navigate("/exp-form", { state: { userId: user.id } });
  };

  return (
    <div className="pt-20 min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors px-6 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-2">Welcome to Dashboard</h1>
        <p className="mb-6">
          Logged in as: <span className="font-semibold">{email}</span>
        </p>

        <button
          onClick={goToExpenseForm}
          className="mb-6 px-4 py-2 bg-black hover:bg-white hover:border-black hover:text-black dark:bg-white dark:hover:bg-black dark:hover:text-white text-white dark:text-black border border-black dark:border-white rounded hover:opacity-90 transition "
        >
          ➕ Add New Expense
        </button>

        {expenses.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400">
            No expenses yet. Add one!
          </p>
        ) : (
          <ul className="space-y-3">
            {expenses.map((e) => (
              <li
                key={e.id}
                className="p-4 bg-white dark:bg-black dark:hover:bg-white dark:hover:text-black border border-black dark:border-white rounded shadow-sm flex justify-between items-center hover:bg-black hover:text-white "
              >
                <div>
                  <span className="block font-semibold">{e.category}</span>
                  <span className="text-sm opacity-80">
                    {e.date} | {e.description}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="font-bold">₹{e.amount}</span>
                  <button
                    onClick={() => deleteExpense(e.id)}
                    className="px-3 py-1 bg-black dark:bg-white text-white dark:text-black border border-black dark:border-white rounded hover:opacity-90 transition hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
