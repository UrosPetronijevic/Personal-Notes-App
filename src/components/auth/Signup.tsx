import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { session, signUpNewUser } = UserAuth();

  const navigate = useNavigate();

  console.log(session);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await signUpNewUser(email, password);

      if (result.success) {
        navigate("/dashboard");
      }
    } catch (err) {
      setError("An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSignUp} className="max-w-md m-auto pt-24">
        <h2 className="font-bold pb-2">Sign up today!</h2>

        <p>
          Already have an account?{" "}
          <Link to="/signin" className="text-cyan-300">
            Sign in!
          </Link>
        </p>

        <div className="flex flex-col py-4">
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email"
            className="p-3 mt-4"
            type="email"
          />
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
            className="p-3 mt-4"
            type="password"
          />
          <button type="submit" disabled={loading} className="mt-4 w-full">
            Sign up
          </button>

          {error && <p className="text-red-500 text-center pt-4">{error}</p>}
        </div>
      </form>
    </div>
  );
}
