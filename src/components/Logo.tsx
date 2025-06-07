import { forwardRef } from "react";
import { Link, type LinkProps } from "react-router-dom";

/**
 * Logo component that acts as a styled link to the home page.
 *
 * This component uses `forwardRef` to forward the ref to the underlying `Link` element,
 * and accepts all valid props for a React Router `Link`.
 *
 * @param props - All props accepted by a React Router `Link`.
 * @param ref - Ref forwarded to the underlying `Link` DOM element.
 *
 * @returns A styled link with the brand name.
 */
const Logo = forwardRef<HTMLAnchorElement, Omit<LinkProps, "to">>(
  (props, ref) => {
    return (
      <Link
        to="/"
        ref={ref}
        className="text-2xl lg:text-3xl font-oswald font-semibold hover:opacity-70 transition-all duration-300"
        {...props}
      >
        Olivia.
      </Link>
    );
  }
);

Logo.displayName = "Logo";

export default Logo;
