import { LogIn } from "lucide-react";

const Button = ({ action }) => {
  return (
    <div>
      <div className="flex items-center border border-gray-400 rounded  justify-center mb-14">
        <button type="submit" className="py-2 text-center flex items-center justify-center gap-2 rounded w-full text-gray-400 outline-none text-xs">
          <LogIn size={15} />
          {action}
        </button>
      </div>
    </div>
  );
};

export default Button;
