type TButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "dark" | "ghost";
  size?: "normal" | "small";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
const Button = ({
  children,
  className,
  variant = "primary",
  size = "normal",
  ...props
}: TButtonProps) => {
  const baseStyles =
    "inline-flex gap-2 items-center justify-center font-medium transition-all duration-300 ease-out disabled:opacity-50 disabled:cursor-not-allowed";
  const variants = {
    primary:
      "bg-primary text-white hover:bg-primary/90 hover:shadow-lg active:scale-[0.98]",
    dark: "bg-dark text-white hover:bg-dark/90 hover:shadow-lg active:scale-[0.98]",
    ghost: "bg-transparent text-dark hover:bg-dark/5 active:scale-[0.98]",
  };

  const sizes = {
    normal: "py-4 px-9",
    small: "py-[10px] px-7",
  };
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
