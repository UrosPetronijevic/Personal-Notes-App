import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import AuthForm from "../../components/AuthForm/AuthForm";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { session, signUpNewUser }: any = UserAuth();

  const navigate = useNavigate();

  console.log(session);

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
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
      <AuthForm
        handleForm={handleSignUp}
        formType="signup"
        setEmail={setEmail}
        setPassword={setPassword}
        error={error}
        loading={loading}
      />
    </div>
  );
}
