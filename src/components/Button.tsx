import { forwardRef } from "react";

/**
 * Button is a reusable styled button component with a hover animation.
 *
 * It accepts all standard HTML button attributes, and renders its content via the `children` prop.
 *
 * ## Features
 * - Customizable content inside the button (`children`)
 * - Includes a sliding black overlay on hover using `::before` pseudo-element
 * - Uses `forwardRef` to support ref forwarding for DOM access
 *
 * @param children - The content inside the button (text, icons, etc.)
 * @param className - Additional Tailwind or custom classes
 * @param props - All other standard HTML button attributes
 */
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className = "", ...props }, ref) => {
    return (
      <button
        {...props}
        ref={ref}
        className={`w-fit px-[28px] py-[14px] bg-white text-black font-semibold text-[14px] rounded cursor-pointer overflow-hidden relative before:transition-all before:duration-300 before:translate-x-[-100%] before:bg-black before:absolute before:inset-0 before:opacity-30 hover:before:translate-x-[0%] ${className}`}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
