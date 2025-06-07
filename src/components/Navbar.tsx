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
      <>
        <nav
          ref={ref}
          className={classNames(
            "w-full h-[70px] md:h-[120px] grid place-items-center absolute top-0 left-0 right-0  px-[24px] lg:px-[44px] z-40 ",
            { "text-white": _props.colorTheme === "light" },
            { "text-black": _props.colorTheme === "dark" }
          )}
          {..._props}
        >
          <div className="flex items-center w-full justify-between">
            <Logo />
            <button className="hover:opacity-70 transition-colors duration-300">
              <Hamburger toggled={isOpen} toggle={setOpen} />
            </button>
          </div>
        </nav>
        <AnimatePresence>
          {isOpen && (
            <div
              key="nav-modal"
              className="fixed z-50 inset-0 flex w-full overflow-hidden"
              // animate={{
              //   transition: { staggerChildren: 0.2, when: "beforeChildren" },
              // }}
            >
              <motion.div
                className="h-full  bg-[#232323] flex lg:hidden flex-col w-[100%] overflow-hidden"
                variants={slideLeft}
                initial="initial"
                animate="animate"
                exit="exit"
                key={"nav-left"}
              >
                <div className="h-[70px] md:h-[120px] flex items-center justify-end lg:px-[44px] px-[24px]">
                  <button className="hover:opacity-70 transition-colors duration-300">
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                  </button>
                </div>
                <div className="flex-1 w-full flex items-center px-[24px] lg:px-[44px] pb-[70px] md:pb-[120px]">
                  <MaxContainer>
                    <ul>
                      {navLinks.map((link, index) => (
                        <motion.li
                          key={index}
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
                            onClick={() => {
                              setOpen(false);
                            }}
                          >
                            {link.label}
                          </Link>
                        </motion.li>
                      ))}
                    </ul>
                  </MaxContainer>
                </div>
              </motion.div>
              <motion.div
                className="hidden h-full bg-[#232323] lg:flex flex-col w-[66%] overflow-hidden"
                variants={slideLeft}
                initial="initial"
                animate="animate"
                exit="exit"
                key={"nav-left"}
              >
                <div className="h-[70px] md:h-[120px] flex items-center px-[44px]">
                  <Logo
                    onClick={() => {
                      setOpen(false);
                    }}
                  />
                </div>
                <div className="flex-1 w-full flex items-center px-[44px] pb-[70px] md:pb-[120px]">
                  <MaxContainer>
                    <ul>
                      {navLinks.map((link, index) => (
                        <motion.li
                          key={index}
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
                            onClick={() => {
                              setOpen(false);
                            }}
                          >
                            {link.label}
                          </Link>
                        </motion.li>
                      ))}
                    </ul>
                  </MaxContainer>
                </div>
              </motion.div>
              <motion.div
                className="w-[34%] h-full bg-black hidden lg:flex flex-col overflow-hidden"
                variants={slideRight}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={slideRight.transition}
              >
                <div className="h-[70px] md:h-[120px] flex items-center justify-end px-[44px]">
                  <button className="hover:opacity-70 transition-colors duration-300">
                    <Hamburger toggled={isOpen} toggle={setOpen} />
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
