import { forwardRef } from "react";
import type { ChildrenProps } from "../types";

/**
 * MaxContainer is a layout wrapper that centers and constrains content to a max width.
 *
 * Useful for keeping page layouts consistent with responsive padding and alignment.
 *
 * ## Features
 * - Max width of ~1440px on large screens
 * - Horizontal padding on all viewports
 * - Centers content using Tailwind utility classes
 *
 * @param children - Elements to be rendered inside the container
 * @param ref - Optional forwarded ref to the outer div
 */
const MaxContainer = forwardRef<HTMLDivElement, ChildrenProps>(
  ({ children }, ref) => (
    <div ref={ref} className="lg:w-[85%] mx-auto lg:px-3.5 px-[24px] w-full">
      {children}
    </div>
  )
);

MaxContainer.displayName = "MaxContainer";

export default MaxContainer;
