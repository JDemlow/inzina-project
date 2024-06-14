import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);
  const [errorType, setErrorType] = useState("");
  const navigate = useNavigate();

  const openModal = (type) => {
    setErrorType(type);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/");
    } catch (e) {
      setError(e.message);
      openModal(e.code); // Pass the error code as the error type
      console.log(e.message);
    }
  };

  return (
    <div className="mx-auto my-16 max-w-[700px] p-4">
      <div className="mb-5">
        <img className="mx-auto" src="src/assets/image.png" />
      </div>
      <div>
        <h1 className="py-2 text-2xl font-bold">Sign in to your account</h1>
        <p className="py-2">
          Don't have an account yet?
          <button className="block px-4 py-2 m-2 mx-auto font-bold text-white rounded bg-emerald-400 hover:bg-emerald-600 focus:outline-none">
            <Link to="/">Sign Up.</Link>
          </button>
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col py-2">
          <label className="py-2 font-medium">Email Address</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 border"
            type="email"
            placeholder="For demo: type admin@admin.com"
          />
        </div>
        <div className="flex flex-col py-2">
          <label>Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 border"
            type="password"
            placeholder="For demo: type password"
          />
        </div>

        <button className="block px-4 py-2 m-2 mx-auto font-bold text-white rounded bg-emerald-400 hover:bg-emerald-600 focus:outline-none">
          <Link to="/">Sign In</Link>
        </button>
      </form>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="p-4 bg-white rounded-lg shadow-lg">
            <h2 className="text-xl font-bold">Please enter you credentials</h2>
            {errorType === "auth/user-not-found" && (
              <p>Invalid email address. Please try again.</p>
            )}
            {errorType === "auth/wrong-password" && (
              <p>Invalid password. Please try again.</p>
            )}
            {errorType === "auth/user-not-found,auth/wrong-password" && (
              <p>Invalid email address and password. Please try again.</p>
            )}
            <button
              className="px-4 py-2 mt-4 font-bold text-white rounded bg-slate-400 hover:bg-emerald-600"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignIn;
