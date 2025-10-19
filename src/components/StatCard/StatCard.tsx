type StatCardProps = {
  size: "small" | "medium" | "large" | "max";
  children: React.ReactNode;
};

export default function StatCard({ children, size }: StatCardProps) {
  return (
    <div
      className={`${size === "small" && "w-1/3"} ${
        size === "medium" && "w-1/2"
      } ${size === "large" && "w-6/7"} ${
        size === "max" && "w-full"
      } px-8 py-4 flex flex-col h-full text-2xl text-slate-400 shadow-2xl rounded-md bg-red-50`}
    >
      {children}
    </div>
  );
}
