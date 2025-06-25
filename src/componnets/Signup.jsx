import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4">
      <h1 className="text-4xl font-bold mb-6">Create Your Account</h1>
      
      <div className="w-full max-w-md space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 border border-gray-300 rounded-lg"
        />
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
          Sign Up
        </button>

        <div className="text-center mt-4">
          Already a user?{" "}
          <span
            className="text-blue-500 cursor-pointer hover:underline"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </div>
      </div>
    </div>
  );
};

export default Signup;
// This component provides a simple signup form with fields for name, email, and password.
// It includes a button to submit the form and a link to navigate to the login page.