import { Link } from "react-router-dom";
const SignIn = () => {
  return (
    <div className="mx-auto my-16 max-w-[700px] p-4">
      <div className="mb-5 md:mx-48">
        <img src="src/assets/image.png" alt="" />
      </div>
      <div>
        <h1 className="py-2 text-2xl font-bold">Sign in to your account</h1>
        <p className="py-2">
          Don't have an account yet?{" "}
          <button className="m-2 mx-auto block rounded bg-[#8bc73e] px-4 py-2 font-bold text-white hover:bg-[#badb8f] focus:outline-none">
            <Link to="/signup">Sign Up.</Link>
          </button>
        </p>
      </div>
      <form>
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

        <button className="m-2 mx-auto block rounded bg-[#8bc73e] px-4 py-2 font-bold text-white hover:bg-[#badb8f] focus:outline-none">
          <Link to="/hero">Sign In</Link>
        </button>
      </form>
    </div>
  );
};

export default SignIn;
