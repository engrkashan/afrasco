export default function Card({
  children,
  variant = "default",
  size = "md",
  hover = true,
  interactive = false,
  padding = true,
  className = "",
  onClick,
  ...props
}) {
  const base = "rounded-xl transition-all duration-300";

  const variants = {
    default: "bg-white shadow-sm",
    elevated: "bg-white shadow-lg",
    bordered: "bg-white border",
    ghost: "bg-transparent border shadow-none",
    gradient: "bg-gradient-to-br from-white to-gray-50 shadow-sm",
  };

  const sizes = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    full: "max-w-full",
  };

  const paddingClasses = padding ? "p-6" : "";

  const hoverClasses =
    hover && !interactive
      ? "hover:shadow-md hover:-translate-y-1"
      : interactive
        ? "hover:shadow-lg hover:-translate-y-1 cursor-pointer active:scale-[0.98]"
        : "";

  const interactiveClasses = interactive ? "cursor-pointer" : "";

  const variantClass = variants[variant] || variants.default;
  const sizeClass = sizes[size] || sizes.md;

  const borderColor =
    variant === "bordered" || variant === "ghost"
      ? { borderColor: "var(--border)" }
      : {};

  const Component = interactive || onClick ? "div" : "div";

  return (
    <div
      className={`${base} ${variantClass} ${sizeClass} ${paddingClasses} ${hoverClasses} ${interactiveClasses} ${className}`}
      style={borderColor}
      onClick={interactive || onClick ? onClick : undefined}
      role={interactive || onClick ? "button" : undefined}
      tabIndex={interactive || onClick ? 0 : undefined}
      {...props}
    >
      {children}
    </div>
  );
}
