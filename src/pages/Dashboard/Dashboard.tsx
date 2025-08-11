import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import DashNavigation from "../../components/Navigation/DashNavigation";
import NavItem from "../../ui/NavItem/NavItem";
import { useState } from "react";
import Recent from "../Recent/Recent";
import Notes from "../Notes/Notes";
import Stats from "../Stats/Stats";

export default function Dashboard() {
  const { session, signOut }: any = UserAuth();
  const navigate = useNavigate();
  const [page, setPage] = useState("Recent");

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
    <div className="p-2 felx flex-col">
      <h2 className="justify-self-end">Welcome: {session?.user?.email}</h2>

      <DashNavigation>
        <NavItem content="Recent" setPage={setPage} />
        <NavItem content="Notes" setPage={setPage} />
        <NavItem content="Stats" setPage={setPage} />
      </DashNavigation>

      {page === "Recent" && <Recent />}
      {page === "Notes" && <Notes />}
      {page === "Stats" && <Stats />}

      <p
        onClick={handleSignOut}
        className="hover:cursor-pointer border inline-block px-4 py-3 mt-4"
      >
        Sign out
      </p>
    </div>
  );
}
