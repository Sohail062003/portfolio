import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../../services/auth.service";


function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await AuthService.login(email, password);
      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Invalid credentials");
        setLoading(false);
        return;
      }

      // Save token
      if (data.data.accessToken) {
        localStorage.setItem("accessToken", data.data.accessToken);
      }

      // Redirect to home
      navigate('/admin');

    } catch (err) {
      setError("Something went wrong", err);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8 border border-gray-200">
        
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Welcome Back 👋
        </h2>

        {/* Error Message */}
        {error && (
          <p className="text-red-600 text-center mb-3 font-medium">{error}</p>
        )}

        <form className="space-y-5" onSubmit={handleSubmit}>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email Address
            </label>
            <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none 
                         focus:ring-2 focus:ring-blue-600 text-gray-800"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none 
                         focus:ring-2 focus:ring-blue-600 text-gray-800"
              required
            />
          </div>

          {/* Login Button */}
          <button 
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-lg text-lg font-semibold transition-all duration-300
                     ${loading ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"} text-white`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="mt-6 text-center text-gray-600">
          Back to Home{" "}
          <Link to="/" className="text-blue-600 font-medium hover:underline">
            Home
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Login;
