import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Login Successful ✅ Redirecting...");
        login(data.token); // Call login function from AuthContext
        // setTimeout(() => {
        //   Navigate("/dashboard")
        // },2000)
        // // Navigate("/dashboard");
        // localStorage.setItem("token", data.token); // store token
        // Redirect to dashboard
      } else {
        alert(data.message || "Login failed ❌");
      }
    } catch (err) {
      console.error("Login Error:", err.message);
      alert("Something went wrong");
    }
  };
  return (
    <form
      onSubmit={handleLogin}
      className="flex flex-col gap-4 p-6 bg-white rounded-xl shadow-md max-w-md mx-auto my-8"
    >
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="p-3 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="p-3 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <button
        type="submit"
        className="p-3 rounded-lg bg-blue-800 text-white font-medium hover:bg-blue-900 transition-colors"
      >
        Login
      </button>
    </form>

  );
}
