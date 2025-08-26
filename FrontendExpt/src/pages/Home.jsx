import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white flex flex-col items-center justify-center px-6">
      
      <h1 className="text-4xl font-bold mb-4">Expense Tracker</h1>
      <p className="max-w-2xl text-center text-lg mb-8">
        Welcome to <span className="font-semibold">Expense Tracker App</span> 👋.  
        This is a simple tool that helps you track your daily expenses.
You can manage your budget, review past expenses, and plan your financial goals more effectively.
      </p>

      {/* Buttons */}
      <div className="flex space-x-4">
        <Link
          to="/login"
          className="px-6 py-2 rounded-lg border border-gray-600 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="px-6 py-2 rounded-lg border border-gray-600 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
        >
          Register
        </Link>
      </div>

      {/* Footer Info */}
      <footer className="absolute bottom-5 text-sm opacity-70">
        © 2025 Expense Tracker | Manage your money smartly 💸
      </footer>
    </div>
  );
}
