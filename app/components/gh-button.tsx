import { Button } from "react-aria-components";

export const GitHubButton = ({ size = "sm", variant = "outline", icon }) => {
  return (
    <Button
      className={`btn ${variant === "outline" ? "border-gray-600" : "border-blue-500"}`}
      size={size}
    >
      {icon}
    </Button>
  );
};
