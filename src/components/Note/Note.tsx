import Button from "../../ui/Button/Button";

type NoteProps = {
  setNote: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Note({ setNote }: NoteProps) {
  const handleEdit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Edit button clicked for:");
  };

  return (
    <form
      onSubmit={handleEdit}
      className="py-4 px-6 flex flex-col items-center border border-gray-300 bg-white rounded-lg shadow-sm mx-auto my-4 space-y-4 relative"
    >
      <h1 className="text-3xl font-semibold self-center pr-4">title</h1>

      <span
        onClick={() => {
          setNote(false);
        }}
        className="text-2xl absolute top-0 right-2 cursor-pointer"
      >
        &times;
      </span>

      <hr className="w-full border-t border-gray-300 -mt-2" />

      <p className="text-base text-center leading-relaxed whitespace-pre-wrap">
        text
      </p>

      <Button size="small" variant="secondary" type="submit">
        Edit Note
      </Button>
    </form>
  );
}
