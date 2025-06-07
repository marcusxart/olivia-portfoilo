import { forwardRef } from "react";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  text: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ text, ...props }, ref) => {
    return (
      <button
        {...props}
        ref={ref}
        className="w-fit px-[28px] py-[14px] bg-white text-black font-semibold text-[14px] rounded cursor-pointer overflow-hidden before:transition-all before:duration-300 relative before:translate-x-[-100%]  before:bg-black before:absolute before:inset-0 before:opacity-30 hover:before:translate-x-[0%]"
      >
        {text}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
