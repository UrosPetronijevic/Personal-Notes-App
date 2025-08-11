// types.ts or a separate file if you prefer
type ButtonProps = {
  size: "small" | "medium" | "large" | "max";
  variant: "primary" | "secondary";
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  type?: "submit" | "reset" | "button";
};

// Button.tsx
export default function Button({
  size = "small",
  children,
  variant,
  onClick,
  disabled,
  type = "submit",
}: ButtonProps) {
  let sizeClasses = "";

  switch (size) {
    case "small":
      sizeClasses = "px-4 py-2 text-sm";
      break;
    case "medium":
      sizeClasses = "px-6 py-3 text-base";
      break;
    case "large":
      sizeClasses = "px-8 py-4 text-lg";
      break;
    case "max":
      sizeClasses = "w-full py-4 text-lg";
      break;
    default:
      sizeClasses = "px-4 py-2 text-sm";
  }

  const baseClasses =
    "font-semibold rounded-md transition-colors duration-200 ease-in-out";

  return (
    <button
      className={`${baseClasses} ${
        variant === "primary" ? "bg-cyan-500" : "bg-slate-500 text-white"
      } ${sizeClasses}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children || "Click Me"}
    </button>
  );
}
