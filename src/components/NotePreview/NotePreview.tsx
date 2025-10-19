type NotePreviewProps = {
  title: string;
  text: string;
};

export default function NotePreview({ title, text }: NotePreviewProps) {
  const trimmedText = text.length > 15 ? text.substring(0, 15) + "..." : text;
  return (
    <div className="p-2 shadow-lg h-fit border-t border-slate-200 flex flex-col w-full rounded-[100px]">
      <h1 className="self-center text-xl">{title}</h1>
      <hr className="w-3/4 self-center border-t border-gray-300 mt-2 mb-2" />
      <p className="text-xs pl-10">{trimmedText}</p>
    </div>
  );
}
