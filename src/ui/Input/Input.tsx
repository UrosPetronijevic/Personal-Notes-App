type InputProps = {
  setFunc: (e: string) => void;
  inputType: string;
  size?: "small" | "medium" | "large" | "max" | string;
};

export default function Input({
  setFunc,
  inputType,
  size = "small",
}: InputProps) {
  let sizeClasses = "";

  switch (size) {
    case "small":
      sizeClasses = "p-3 mt-4";
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
      sizeClasses = size;
  }

  return (
    <input
      onChange={(e) => {
        setFunc(e.target.value);
      }}
      placeholder={`${inputType === "email" ? "Email" : "Password"}`}
      className={sizeClasses}
      type={inputType}
    />
  );
}
