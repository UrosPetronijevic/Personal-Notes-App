import NotePreview from "../../components/NotePreview/NotePreview";

type NotesProps = {
  notesArr: any;
  notesObj: any;
};

export default function Notes({ notesArr, notesObj }: NotesProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="col-span-4 self-center mt-8">search bar</div>
      <div className="h-6/7 grid grid-cols-4 max-w-screen gap-7 p-8">
        {notesArr.map((note: any) => (
          <NotePreview title={note.title} text={note.text} />
        ))}
      </div>
    </div>
  );
}
