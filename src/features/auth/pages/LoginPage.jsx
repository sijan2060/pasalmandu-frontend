import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useLogin } from "../hooks/useLogin";
import { getUserFromToken } from "../../../utils/jwt";


export default function LoginPage() {
  const navigate = useNavigate();

  const loginMutation = useLogin();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await loginMutation.mutateAsync(form);

      localStorage.setItem(
        "token",
        data.token
      );

      const user = getUserFromToken(data.token);

      switch (user.role) {
        case "customer":
          navigate("/");
          break;

        case "vendor":
          navigate("/vendor");
          break;

        case "rider":
          navigate("/rider");
          break;

        case "admin":
        case "superadmin":
          navigate("/admin");
          break;

        default:
          navigate("/login");
      }
    } catch {
      alert("Login failed");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-4">
        Login
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded"
          value={form.email}
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value,
            })
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded"
          value={form.password}
          onChange={(e) =>
            setForm({
              ...form,
              password: e.target.value,
            })
          }
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white p-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
    
  );
}