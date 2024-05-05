import { Link } from "react-router-dom";
const SignUp = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
      navigate("/account");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <div className="mx-auto my-16 max-w-[700px] p-4">
      <div>
        <h1 className="py-2 text-2xl font-bold">Sign up for your account</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col py-2">
          <label className="py-2 font-medium">Email Address</label>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="p-3 border"
            type="email"
          />
        </div>
        <div className="flex flex-col py-2">
          <label>Password</label>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="p-3 border"
            type="password"
          />
        </div>
        <button className="m-2 mx-auto block rounded bg-[#8bc73e] px-4 py-2 font-bold text-white hover:bg-[#badb8f] focus:outline-none">
          Sign Up
        </button>
        <p className="py-2">
          Already have an account?
          <button className="m-2 mx-auto block rounded bg-[#8bc73e] px-4 py-2 font-bold text-white hover:bg-[#badb8f] focus:outline-none">
            <Link to="/hero">Sign In</Link>
          </button>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
