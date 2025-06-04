import { forwardRef } from "react";
import {
  Link as ScrollLink,
  type LinkProps as ScrollLinkProps,
} from "react-scroll";

type ArrowButtonProps = ScrollLinkProps &
  React.HTMLAttributes<HTMLElement> & {
    /** Optional rotation angle in degrees for the arrow icon */
    rolate?: number;
  };

/**
 * ArrowButton is a reusable scroll-to-top or scroll-to-section button
 * using react-scroll for smooth scrolling behavior.
 *
 * It accepts both react-scroll Link props and standard HTML attributes.
 * You can also pass a `rolate` prop to rotate the arrow icon.
 */
const ArrowButton = forwardRef<HTMLDivElement, ArrowButtonProps>(
  (
    { to, offset = 0, duration = 500, smooth = true, rolate = 0, ...rest },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className="grid place-items-center w-fit cursor-pointer"
        {...rest}
      >
        <ScrollLink
          to={to}
          offset={offset}
          className="p-3.5 inline-block"
          duration={duration}
          smooth={smooth}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14.486"
            height="18.412"
            viewBox="0 0 14.486 18.412"
            className="fill-white"
            style={{ transform: `rotate(${rolate}deg)` }}
          >
            <path
              d="M7.073,26.241h0L0,19.172l1.414-1.415,4.829,4.829V8h2V22.586l4.829-4.829,1.415,1.415-7.241,7.24Z"
              transform="translate(0 -8)"
            ></path>
          </svg>
        </ScrollLink>
      </div>
    );
  }
);

ArrowButton.displayName = "ArrowButton";

export default ArrowButton;
