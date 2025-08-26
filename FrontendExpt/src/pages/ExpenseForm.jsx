import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const ExpenseForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { userId } = location.state || {};

  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const expense = {
      amount: parseFloat(amount),
      category,
      description,
      date,
    };

    try {
      await axios.post(`http://localhost:8080/api/expenses/${userId}`, expense);
      alert("Expense added successfully!");
      setAmount("");
      setCategory("");
      setDescription("");
      setDate("");
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      alert("Failed to add expense!");
    } finally {
      setLoading(false);
    }
  };

  const categories = [
    "Food",
    "Transport",
    "Entertainment",
    "Shopping",
    "Utilities",
    "Healthcare",
    "Education",
    "Other",
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black py-12 px-4 transition-colors">
      <div className="max-w-md mx-auto">
        <div className="bg-white dark:bg-black border border-black dark:border-white rounded-2xl shadow-lg">
          <div className="px-8 py-6">
            <h2 className="text-2xl font-bold text-center mb-6 text-black dark:text-white">
              Add Expense
            </h2>

            <form onSubmit={handleSubmit}>
              {/* Amount */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1 text-black dark:text-white">
                  Amount
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                    ₹
                  </span>
                  <input
                    type="number"
                    placeholder="0.00"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full pl-8 pr-4 py-2 border border-black dark:border-white rounded-lg bg-transparent text-black dark:text-white"
                    required
                  />
                </div>
              </div>

              {/* Category */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1 text-black dark:text-white">
                  Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-2 border border-black dark:border-white rounded-lg bg-transparent text-black dark:text-white"
                  required
                >
                  <option value="">Select category</option>
                  {categories.map((cat) => (
                    <option
                      key={cat}
                      value={cat}
                      className="bg-white dark:bg-black text-black dark:text-white"
                    >
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Description */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1 text-black dark:text-white">
                  Description
                </label>
                <input
                  type="text"
                  placeholder="Brief description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-4 py-2 border border-black dark:border-white rounded-lg bg-transparent text-black dark:text-white"
                />
              </div>

              {/* Date */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-1 text-black dark:text-white">
                  Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-2 border border-black dark:border-white rounded-lg bg-transparent text-black dark:text-white"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-black dark:bg-white text-white dark:text-black border border-black dark:border-white rounded-lg py-2 font-medium hover:opacity-90 transition"
              >
                {loading ? "Processing..." : "Save Expense"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseForm;
