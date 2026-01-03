export const GitHubButton = ({ size = "sm", variant = "outline", icon }) => {
  const sizeClasses = size === "sm" ? "px-3 py-2 text-sm" : "px-4 py-3 text-base";
  const variantClasses = variant === "outline" ? "border border-gray-600" : "border border-blue-500 bg-blue-500 text-white";
  
  return (
    <button
      className={`${sizeClasses} ${variantClasses} rounded hover:opacity-80 transition-opacity`}
    >
      {icon}
    </button>
  );
};
