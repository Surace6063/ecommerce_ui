import { Link } from "react-router-dom"; // Add this import

const RegisterForm = () => {
  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded-2xl shadow mt-10">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">Register</h2>
      <form className="space-y-4">
        {/* First Name */}
        <div className="flex items-center gap-2">
          <div>
            <label className="label" htmlFor="firstName">
              First Name
            </label>
            <input
              className="input"
              type="text"
              id="firstName"
              name="firstName"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="label" htmlFor="lastName">
              Last Name
            </label>
            <input
              className="input"
              type="text"
              id="lastName"
              name="lastName"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="label" htmlFor="email">
            Email
          </label>
          <input className="input" type="email" id="email" name="email" />
        </div>

        {/* Username */}
        <div>
          <label className="label" htmlFor="username">
            Username
          </label>
          <input className="input" type="text" id="username" name="username" />
        </div>

        {/* Password */}
        <div>
          <label className="label" htmlFor="password">
            Password
          </label>
          <input
            className="input"
            type="password"
            id="password"
            name="password"
          />
        </div>

        {/* Confirm Password */}
        <div>
          <label className="label" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            className="input"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
          />
        </div>

        <button className="btn btn-primary w-full mt-2">
          Register
        </button>

        {/* Already have an account */}
        <p className="text-sm text-center text-slate-600 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
