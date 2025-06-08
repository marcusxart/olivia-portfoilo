import React, { forwardRef, useState } from "react";
import Hamburger from "hamburger-react";
import type { Theme } from "../types";
import classNames from "classnames";
import Logo from "./Logo";
import { AnimatePresence, motion } from "motion/react";
import {
  slideLeft,
  slideLeftStagger,
  slideRight,
  slideRightStagger,
} from "../constants/motion";
import MaxContainer from "./MaxContainer";
import { bio, navLinks } from "../constants/data";
import { Link } from "react-router-dom";

interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Color theme for the navbar text.
   * - "light": white text
   * - "dark": black text
   */
  colorTheme?: Theme;
}

/**
 * Navbar
 *
 * Responsive navigation bar with hamburger menu toggle and animated mobile modal.
 *
 * Supports forwarding refs to the root <nav> element.
 *
 * ## Features
 * - Dynamic color theme (`light` or `dark`)
 * - Hamburger toggle for mobile menu (using `hamburger-react`)
 * - Animated menu with staggered motion effects for links and info
 * - Uses `react-router-dom`'s Link for SPA navigation
 * - Responsive layout with different content arrangement on mobile and desktop
 *
 * @param props - Standard HTML props for <nav> element plus `colorTheme`
 * @param ref - Ref forwarded to <nav> element
 */
const Navbar = forwardRef<HTMLElement, NavbarProps>(
  ({ colorTheme, ...rest }, ref) => {
    const [isOpen, setOpen] = useState(false);

    return (
      <>
        <nav
          ref={ref}
          {...rest}
          className={classNames(
            "w-full h-[70px] md:h-[120px] grid place-items-center absolute top-0 left-0 right-0 px-[24px] lg:px-[44px] z-40",
            {
              "text-white": colorTheme === "light",
              "text-black": colorTheme === "dark",
            }
          )}
        >
          <div className="flex items-center w-full justify-between">
            <Logo />
            <button
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="hover:opacity-70 transition-colors duration-300"
              onClick={() => setOpen((open) => !open)}
            >
              <Hamburger toggled={isOpen} />
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {isOpen && (
            <div
              key="nav-modal"
              className="fixed z-50 inset-0 flex w-full overflow-hidden"
            >
              {/* Mobile Menu (slide left) */}
              <motion.div
                className="h-full bg-[#232323] flex lg:hidden flex-col w-full overflow-hidden"
                variants={slideLeft}
                initial="initial"
                animate="animate"
                exit="exit"
                key="nav-left-mobile"
              >
                <div className="h-[70px] md:h-[120px] flex items-center justify-end px-[24px] lg:px-[44px]">
                  <button
                    aria-label="Close menu"
                    className="hover:opacity-70 transition-colors duration-300"
                    onClick={() => setOpen(false)}
                  >
                    <Hamburger toggled={isOpen} />
                  </button>
                </div>
                <div className="flex-1 w-full flex items-center px-[24px] lg:px-[44px] pb-[70px] md:pb-[120px]">
                  <MaxContainer>
                    <ul>
                      {navLinks.map((link, index) => (
                        <motion.li
                          key={link.path}
                          className="text-[32px] lg:text-[44px] font-black"
                          variants={slideLeftStagger}
                          custom={index}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                        >
                          <Link
                            className="transition-all duration-300 hover:tracking-widest hover:opacity-70"
                            to={link.path}
                            onClick={() => setOpen(false)}
                          >
                            {link.label}
                          </Link>
                        </motion.li>
                      ))}
                    </ul>
                  </MaxContainer>
                </div>
              </motion.div>

              {/* Desktop Menu (slide left) */}
              <motion.div
                className="hidden lg:flex h-full bg-[#232323] flex-col w-[66%] overflow-hidden"
                variants={slideLeft}
                initial="initial"
                animate="animate"
                exit="exit"
                key="nav-left-desktop"
              >
                <div className="h-[70px] md:h-[120px] flex items-center px-[44px]">
                  <Logo onClick={() => setOpen(false)} />
                </div>
                <div className="flex-1 w-full flex items-center px-[44px] pb-[70px] md:pb-[120px]">
                  <MaxContainer>
                    <ul>
                      {navLinks.map((link, index) => (
                        <motion.li
                          key={link.path}
                          className="text-[44px] font-black"
                          variants={slideLeftStagger}
                          custom={index}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                        >
                          <Link
                            className="transition-all duration-300 hover:tracking-widest hover:opacity-70"
                            to={link.path}
                            onClick={() => setOpen(false)}
                          >
                            {link.label}
                          </Link>
                        </motion.li>
                      ))}
                    </ul>
                  </MaxContainer>
                </div>
              </motion.div>

              {/* Info Sidebar (slide right) */}
              <motion.div
                className="hidden lg:flex w-[34%] h-full bg-black flex-col overflow-hidden"
                variants={slideRight}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={slideRight.transition}
                key="nav-right-info"
              >
                <div className="h-[70px] md:h-[120px] flex items-center justify-end px-[44px]">
                  <button
                    aria-label="Close menu"
                    className="hover:opacity-70 transition-colors duration-300"
                    onClick={() => setOpen(false)}
                  >
                    <Hamburger toggled={isOpen} />
                  </button>
                </div>
                <div className="flex-1 w-full flex items-center px-[44px] pb-[70px] md:pb-[120px]">
                  <ul className="text-[15px] leading-[28px] flex flex-col gap-7 font-semibold">
                    <motion.li
                      custom={0}
                      variants={slideRightStagger}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                    >
                      <span className="opacity-70 font-normal">Brief Us</span>
                      <div>
                        <p>{bio.email}</p>
                        <p>Tel. {bio.phone}</p>
                      </div>
                    </motion.li>
                    <motion.li
                      custom={1}
                      variants={slideRightStagger}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                    >
                      <span className="opacity-70 font-normal">Our Office</span>
                      <div>
                        <p>{bio.address}</p>
                      </div>
                    </motion.li>
                    <motion.li
                      custom={2}
                      variants={slideRightStagger}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                    >
                      <span className="opacity-70 font-normal">Made by</span>
                      <div>
                        <Link
                          to={bio.createdBy.url}
                          rel="noopener noreferrer"
                          target="_blank"
                          className="underline font-semibold text-white hover:opacity-70 transition-all duration-300"
                        >
                          {bio.createdBy.name}
                        </Link>
                      </div>
                    </motion.li>
                  </ul>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </>
    );
  }
);

Navbar.displayName = "Navbar";

export default Navbar;
