export default function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  loading = false,
  icon = null,
  iconPosition = "left",
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const styles = {
    primary:
      "bg-[var(--accent)] text-[var(--primary)] hover:opacity-90 focus:ring-[var(--accent)]",
    outline:
      "border border-[var(--border)] text-[var(--primary)] bg-white hover:bg-gray-100 focus:ring-gray-400",
    dark: "bg-[var(--primary)] text-white hover:opacity-90 focus:ring-gray-600",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
    success: "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500",
    ghost: "text-[var(--primary)] hover:bg-gray-100 focus:ring-gray-400",
  };

  const widthClass = fullWidth ? "w-full" : "";
  const sizeClass = sizes[size] || sizes.md;
  const variantClass = styles[variant] || styles.primary;

  return (
    <button
      className={`${base} ${sizeClass} ${variantClass} ${widthClass} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <svg
          className="animate-spin h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}

      {!loading && icon && iconPosition === "left" && icon}

      {loading ? "Loading..." : children}

      {!loading && icon && iconPosition === "right" && icon}
    </button>
  );
}
