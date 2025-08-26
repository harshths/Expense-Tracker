import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/auth/register", {
        username,
        email,
        password,
      });
      alert("User registered successfully!");
      setUsername("");
      setEmail("");
      setPassword("");
    } catch (err) {
      console.error(err);
      alert("Failed to register user!");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-white dark:bg-black">
      <form
        onSubmit={handleRegister}
        className="bg-white dark:bg-black border border-black dark:border-white p-6 rounded-2xl shadow-md w-96"
      >
        <h2 className="text-xl font-bold mb-4 text-black dark:text-white">
          Register
        </h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border border-black dark:border-white bg-transparent text-black dark:text-white w-full p-2 mb-3 rounded"
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-black dark:border-white bg-transparent text-black dark:text-white w-full p-2 mb-3 rounded"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-black dark:border-white bg-transparent text-black dark:text-white w-full p-2 mb-3 rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-black dark:bg-white text-white dark:text-black p-2 rounded border border-black dark:border-white"
        >
          Register
        </button>
      </form>
    </div>
  );
}
