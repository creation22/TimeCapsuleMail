// import { useNavigate } from "react-router-dom";
// import { useContext, useState } from "react";
// import { FirebaseContext } from "./context/Firebase";

// const Login = () => {
//   const { loginUser, loginWithGoogle } = useContext(FirebaseContext);
//   const navigate = useNavigate();
     
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [errorMsg, setErrorMsg] = useState("");

//   const handleLogin = () => {
//     setErrorMsg("");
//     if (!email || !password) {
//       return setErrorMsg("Please enter both email and password.");
//     }

//     setLoading(true);
//     loginUser(email, password)
//       .then(() => navigate("/"))
//       .catch((error) => {
//         if (error.code === "auth/user-not-found") setErrorMsg("No account found with this email.");
//         else if (error.code === "auth/wrong-password") setErrorMsg("Incorrect password.");
//         else setErrorMsg("Something went wrong. Please try again.");
//       })
//       .finally(() => setLoading(false));
//   };

//   const handleGoogleLogin = () => {
//     setErrorMsg("");
//     setLoading(true);

//     if (!loginWithGoogle) {
//       setErrorMsg("Google Sign-In not available.");
//       setLoading(false);
//       return;
//     }

//     loginWithGoogle()
//       .then(() => navigate("/"))
//       .catch(() => setErrorMsg("Google Sign-In failed. Please try again."))
//       .finally(() => setLoading(false));
//   };

//   return (
    
//   );
// };

// export default Login;
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { FirebaseContext } from "./context/Firebase";

const Login = () => {
  const { loginUser, loginWithGoogle } = useContext(FirebaseContext);
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
    setErrorMsg("");
    setLoading(true);
    loginWithGoogle()
      .catch(() => setErrorMsg("Google Sign-In failed. Please try again."))
      .finally(() => setLoading(false));
  };

  return (
    <div>
      {/* Your existing styled login form code here */}
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex flex-col justify-center items-center px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/5 to-gray-900/5"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-gray-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-black rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
      
      <div className="relative z-10 w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-black to-gray-700 rounded-2xl mb-4 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-black mb-2">Welcome Back</h1>
          <p className="text-gray-700">Sign in to your account to continue</p>
        </div>

        {/* Login Form */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 p-8 space-y-6">
          {errorMsg && (
            <div className="p-4 text-red-800 bg-red-50 border border-red-300 rounded-xl text-center animate-shake">
              <div className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                {errorMsg}
              </div>
            </div>
          )}

          <div className="space-y-4">
            <div className="relative">
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Email address"
                className="w-full p-4 pl-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 bg-gray-50/50 hover:bg-white focus:bg-white text-black placeholder-gray-500"
              />
              <svg className="absolute left-4 top-4 w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
              </svg>
            </div>

            <div className="relative">
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Password"
                className="w-full p-4 pl-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 bg-gray-50/50 hover:bg-white focus:bg-white text-black placeholder-gray-500"
              />
              <svg className="absolute left-4 top-4 w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
          </div>

          <button
            onClick={handleLogin}
            disabled={loading}
            className={`w-full py-4 rounded-xl text-white font-semibold transition-all duration-200 transform ${
              loading 
                ? "bg-gray-400 cursor-not-allowed" 
                : "bg-gradient-to-r from-black to-gray-800 hover:from-gray-800 hover:to-black hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              {loading && (
                <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              )}
              {loading ? "Signing in..." : "Sign In"}
            </div>
          </button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-600">Or continue with</span>
            </div>
          </div>

          <button
            onClick={handleGoogleLogin}
            disabled={loading}
            className={`w-full py-4 rounded-xl border-2 border-gray-300 flex items-center justify-center gap-3 font-medium transition-all duration-200 transform ${
              loading 
                ? "bg-gray-100 cursor-not-allowed text-gray-400" 
                : "bg-white hover:bg-gray-50 text-black hover:border-gray-400 hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow-md"
            }`}
          >
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Continue with Google
          </button>

          <div className="text-center pt-4 border-t border-gray-200">
            <span className="text-gray-700">Don't have an account? </span>
            <button
              className="text-black font-semibold hover:text-gray-700 hover:underline transition-colors duration-200"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
      {/* Just keep the handleGoogleLogin logic updated */}
    </div>
  );
};

export default Login;