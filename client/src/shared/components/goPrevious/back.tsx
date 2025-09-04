// BackPreviousAuth.tsx
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

export const BackPreviousAuth = () => {
  return (
    <Link to="/" className="flex items-center px-[45px] relative top-6 text-black gap-2"
    >
      <ChevronLeft size={18} />
      <h3 className="text-sm font-medium">Back to Home</h3>
    </Link>
  );
};
