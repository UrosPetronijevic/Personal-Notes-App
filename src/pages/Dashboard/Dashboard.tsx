import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

export default function Dashboard() {
  const { session, signOut }: any = UserAuth();
  const navigate = useNavigate();

  console.log(session);

  const handleSignOut = async (e: React.MouseEvent<HTMLParagraphElement>) => {
    e.preventDefault();

    try {
      await signOut();
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Welcome, {session?.user?.email}</h2>
      <p
        onClick={handleSignOut}
        className="hover:cursor-pointer border inline-block px-4 py-3 mt-4"
      >
        Sign out
      </p>
    </div>
  );
}
