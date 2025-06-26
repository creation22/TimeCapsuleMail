import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { FirebaseContext } from "./context/Firebase";

const Login = () => {
  const { loginUser, googleSignIn } = useContext(FirebaseContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = () => {
    setErrorMsg("");
    if (!email || !password) return setErrorMsg("Please enter both email and password.");

    setLoading(true);
    loginUser(email, password)
      .then(() => navigate("/"))
      .catch((error) => {
        if (error.code === "auth/user-not-found") setErrorMsg("No account found with this email.");
        else if (error.code === "auth/wrong-password") setErrorMsg("Incorrect password.");
        else setErrorMsg("Something went wrong. Please try again.");
      })
      .finally(() => setLoading(false));
  };

  const handleGoogleLogin = () => {
    setLoading(true);
    googleSignIn()
      .then(() => navigate("/"))
      .catch(() => setErrorMsg("Google Sign-In failed. Please try again."))
      .finally(() => setLoading(false));
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4">
      <h1 className="text-4xl font-bold mb-6">Welcome Back</h1>
      <div className="w-full max-w-md space-y-4">
        {errorMsg && <div className="p-3 text-red-600 bg-red-100 rounded-lg text-center">{errorMsg}</div>}
        <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="Email" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
        <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Password" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />

        <button onClick={handleLogin} disabled={loading} className={`w-full py-3 rounded-lg text-white font-semibold transition ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"}`}>
          {loading ? "Logging in..." : "Login"}
        </button>

        <button onClick={handleGoogleLogin} disabled={loading} className="w-full py-3 rounded-lg border border-gray-300 flex items-center justify-center gap-2 hover:bg-gray-100 mt-2">
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5" />
          Continue with Google
        </button>

        <div className="text-center mt-4">
          Don't have an account?{" "}
          <span className="text-blue-500 cursor-pointer hover:underline" onClick={() => navigate("/signup")}>
            Sign Up
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
