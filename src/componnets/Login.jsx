import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4">
      <h1 className="text-4xl font-bold mb-6">Welcome Back</h1>
      
      <div className="w-full max-w-md space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border border-gray-300 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border border-gray-300 rounded-lg"
        />

        <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition">
          Login
        </button>

        <div className="text-center mt-4">
          Don't have an account?{" "}
          <span
            className="text-blue-500 cursor-pointer hover:underline"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
