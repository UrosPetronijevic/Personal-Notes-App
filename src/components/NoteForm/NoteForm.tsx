import { useState } from "react";

interface Note {
  title: string;
  text: string | null;
  id: number;
}

interface NotesById {
  [id: number]: Note;
}

type NoteFormProps = {
  setNotesArr: React.Dispatch<React.SetStateAction<Note[]>>;
  setNotesObj: React.Dispatch<React.SetStateAction<NotesById>>;
  setNote: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function NoteForm({
  setNotesArr,
  setNotesObj,
  setNote,
}: NoteFormProps) {
  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");

  const handleDoneClick = () => {
    if (title.trim()) {
      const newNoteId = new Date().getTime();

      const newNoteObj: Note = {
        title: title.trim(),
        text: text.trim() || null,
        id: newNoteId,
      };

      // 1. Update the array of notes
      setNotesArr((prevNotes) => [newNoteObj, ...prevNotes]);

      // 2. Update the nested object for direct ID lookup
      setNotesObj((prevNotesObj) => ({
        ...prevNotesObj,
        [newNoteId]: newNoteObj,
      }));

      setTitle("");
      setText("");

      setNote(false);
    } else {
      alert("Please enter a title for your note.");
    }
  };

  return (
    <div className="h-3/4 w-1/3 relative flex flex-col rounded-xl bg-white p-6 shadow-lg">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-700">New note</h1>
        <span
          className="cursor-pointer text-4xl text-gray-400 hover:text-gray-600"
          onClick={() => {
            setNote(false);
          }}
        >
          &times;
        </span>
      </div>

      <div className="grid h-full grid-rows-3 items-center gap-4">
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className="w-full border-b border-gray-300 p-2 text-center text-2xl outline-none focus:border-blue-500"
        />

        <textarea
          placeholder="Text (optional)"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          className="h-full w-full resize-none rounded-md border border-gray-300 p-2 outline-none focus:border-blue-500"
        />

        <button
          type="button"
          className="w-4/5 self-center justify-self-center rounded-2xl bg-blue-500 p-3 text-white transition-colors hover:bg-blue-600"
          onClick={handleDoneClick}
        >
          Done
        </button>
      </div>
    </div>
  );
}
