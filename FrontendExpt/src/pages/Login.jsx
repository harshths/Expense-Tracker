import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:8080/api/auth/login", {
        email,
        password,
      });

      if (res.data === "Login") {
        navigate("/dashboard", { state: { email } });
      } else {
        alert("Invalid credentials!");
      }
    } catch (err) {
      console.error(err);
      alert("Login failed, please check credentials!");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-white dark:bg-black">
      <div className="bg-white dark:bg-black border border-black dark:border-white p-6 rounded-2xl shadow-md w-96">
        <h2 className="text-xl font-bold mb-4 text-black dark:text-white">
          Login
        </h2>
        <input
          className="border border-black dark:border-white bg-transparent text-black dark:text-white w-full p-2 mb-3 rounded"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="border border-black dark:border-white bg-transparent text-black dark:text-white w-full p-2 mb-3 rounded"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="w-full bg-black dark:bg-white text-white dark:text-black p-2 rounded border border-black dark:border-white"
        >
          Login
        </button>
      </div>
    </div>
  );
}
