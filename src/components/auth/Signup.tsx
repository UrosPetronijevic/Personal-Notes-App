import { useState } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { sesion } = UserAuth();
  console.log(sesion);
  return (
    <div>
      <form className="max-w-md m-auto pt-24">
        <h2 className="font-bold pb-2">Sign up today!</h2>

        <p>
          Already have an account?{" "}
          <Link to="/signin" className="text-cyan-300">
            Sign in!
          </Link>
        </p>

        <div className="flex flex-col py-4">
          <input placeholder="Email" className="p-3 mt-4" type="email" />
          <input placeholder="Password" className="p-3 mt-4" type="password" />
          <button type="submit" disabled={loading} className="mt-4 w-full">
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}
