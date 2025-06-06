import React, { forwardRef, useState } from "react";
import Hamburger from "hamburger-react";
import type { Theme } from "../types";
import classNames from "classnames";
import Logo from "./Logo";

interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  colorTheme?: Theme;
}
/**
 * Navbar
 *
 * A basic navigation wrapper that supports forwarded refs and all native <nav> HTML attributes.
 *
 * @param props - Standard HTML attributes for the <nav> element.
 * @param ref - Ref forwarded to the <nav> element.
 */

const Navbar = forwardRef<HTMLElementTagNameMap["nav"], NavbarProps>(
  ({ ..._props }, ref) => {
    const [isOpen, setOpen] = useState(false);
    return (
      <nav
        ref={ref}
        className={classNames(
          "w-full h-[70px] md:h-[120px] grid place-items-center absolute top-0 left-0 right-0 px-[44px] z-40 text-white"
        )}
        {..._props}
      >
        <div className="flex items-center w-full justify-between">
          <Logo />
          <button className="hover:text-gray-300 transition-colors duration-200">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </button>
        </div>
      </nav>
    );
  }
);

Navbar.displayName = "Navbar";

export default Navbar;
