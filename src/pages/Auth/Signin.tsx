import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import AuthForm from "../../components/AuthForm/AuthForm";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { session, signInUser }: any = UserAuth();

  const navigate = useNavigate();

  console.log(session);

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await signInUser(email, password);

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
        handleForm={handleSignIn}
        formType="signin"
        setEmail={setEmail}
        setPassword={setPassword}
        error={error}
        loading={loading}
      />
    </div>
  );
}
