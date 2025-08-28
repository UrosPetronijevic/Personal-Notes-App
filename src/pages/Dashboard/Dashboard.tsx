import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import DashNavigation from "../../components/Navigation/DashNavigation";
import NavItem from "../../ui/NavItem/NavItem";
import { useState } from "react";
import Recent from "../Recent/Recent";
import Notes from "../Notes/Notes";
import Stats from "../Stats/Stats";
import Modal from "../../components/Modal/Modal";
import DashboardHeader from "../../components/DashboardHeader/DashboardHeader";

export default function Dashboard() {
  const { session, signOut }: any = UserAuth();
  const navigate = useNavigate();
  const [page, setPage] = useState("Recent");
  const [note, setNote] = useState(false);

  const [notesArr, setNotesArr] = useState<[]>([]);
  const [notesObj, setNotesObj] = useState<{}>({});

  console.log(session, notesArr, notesObj);

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
    <div className=" flex flex-col h-screen max-w-screen relative">
      <DashboardHeader session={session} handleSignOut={handleSignOut} />

      <DashNavigation>
        <NavItem content="Recent" setPage={setPage} />
        <NavItem content="Notes" setPage={setPage} />
        <NavItem content="Stats" setPage={setPage} />
        <div
          className="p-2 text-green-300 ml-8"
          onClick={() => {
            setNote(true);
          }}
        >
          New Note +
        </div>
      </DashNavigation>

      {page === "Recent" && <Recent notesArr={notesArr} notesObj={notesObj} />}
      {page === "Notes" && <Notes notesArr={notesArr} notesObj={notesObj} />}
      {page === "Stats" && <Stats notesArr={notesArr} notesObj={notesObj} />}
      {note === true && (
        <Modal
          setNote={setNote}
          setNotesArr={setNotesArr}
          setNotesObj={setNotesObj}
        />
      )}
    </div>
  );
}
