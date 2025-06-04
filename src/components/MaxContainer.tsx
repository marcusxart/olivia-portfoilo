import { forwardRef } from "react";
import type { ChildrenProps } from "../types";

/**
 * MaxContainer
 *
 * A reusable layout component that constrains its children to a maximum width
 * of 1440px and centers them horizontally.
 *
 * @param {ChildrenProps} _props - React children to render within the container.
 * @param {React.Ref<HTMLDivElement>} ref - Forwarded ref to the container div.
 *
 * @returns A styled div wrapper for consistent page layout.
 */
const MaxContainer = forwardRef<HTMLDivElement, ChildrenProps>(
  ({ children }, ref) => (
    <div ref={ref} className="w-[85%] mx-auto px-3.5">
      {children}
    </div>
  )
);

// Assign display name for better debugging and DevTools visibility
MaxContainer.displayName = "MaxContainer";

export default MaxContainer;
