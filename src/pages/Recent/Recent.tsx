import NotePreview from "../../components/NotePreview/NotePreview";
import StatCard from "../../components/StatCard/StatCard";

type RecentProps = {
  notesArr: any;
  notesObj: any;
};

export default function Recent({ notesArr, notesObj }: RecentProps) {
  return (
    <div className="flex flex-col gap-2 h-6/7">
      <div className="h-1/2 grid grid-cols-4 max-w-screen gap-7 p-8 border-b">
        {notesArr.map(
          (note: any, i: number) =>
            i < 8 && <NotePreview title={note.title} text={note.text} />
        )}
      </div>

      <div className="h-full p-8 grid grid-cols-2 place-items-center">
        <StatCard size={"large"}>
          <h1 className="text-center text-4xl font-bold mb-8">Total Notes</h1>
          <div className="flex flex-col h-full justify-between">
            <p className="flex w-1/2 justify-between">
              Total number of notes:
              <span className="text-cyan-300">{notesArr.length}</span>
            </p>
            <p className="flex w-1/2 justify-between">
              Average note length:
              <span className="text-cyan-300">{notesArr.length}</span>
            </p>
            <p className="flex w-1/2 justify-between">
              Number of notes today:
              <span className="text-cyan-300">{notesArr.length}</span>
            </p>
          </div>
        </StatCard>

        <StatCard size={"large"}>
          <h1 className="text-center text-4xl font-bold mb-4">Today</h1>
          <div className="flex flex-col h-full gap-8">
            {notesArr.map(
              (note: any, i: number) =>
                i < 3 && <NotePreview title={note.title} text={note.text} />
            )}
          </div>
        </StatCard>
      </div>
    </div>
  );
}
