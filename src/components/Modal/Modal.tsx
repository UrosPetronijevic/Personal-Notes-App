import NoteForm from "../NoteForm/NoteForm";

type ModalProps = {
  setNote: React.Dispatch<React.SetStateAction<boolean>>;

  setNotesArr: any;
  setNotesObj: any;
};

export default function Modal({
  setNote,
  setNotesArr,
  setNotesObj,
}: ModalProps) {
  return (
    <div className="absolute top-0 bg-slate-800/80 w-full h-full flex items-center justify-center">
      <NoteForm
        setNotesArr={setNotesArr}
        setNotesObj={setNotesObj}
        setNote={setNote}
      />
    </div>
  );
}
