import { Link } from "react-router-dom";
import type { FormType } from "../../types/Auth.types";

type AuthHeaderProps = {
  formType: FormType;
};

export default function AuthHeader({ formType }: AuthHeaderProps) {
  return (
    <>
      {formType === "signup" ? (
        <h2 className="font-bold pb-2">Sign up</h2>
      ) : (
        <h2 className="font-bold pb-2">Sign in</h2>
      )}

      {formType === "signup" ? (
        <p>
          Already have an account?
          <Link to="/signin" className="text-cyan-300">
            Sign in!
          </Link>
        </p>
      ) : (
        <p>
          Don't have an account?
          <Link to="/signup" className="text-cyan-300">
            Sign up!
          </Link>
        </p>
      )}
    </>
  );
}
