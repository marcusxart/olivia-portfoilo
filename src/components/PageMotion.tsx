import { motion } from "motion/react";
import { forwardRef, useContext } from "react";
import type { ChildrenProps } from "../types";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import { MainContext } from "../contexts";
import Footer from "./Footer";
import { pageContainer, pageTransition } from "../constants/motion";

const PageMotion = forwardRef<HTMLDivElement, ChildrenProps>(
  ({ children }, ref) => {
    const { pathname } = useLocation();
    const { isThreshold } = useContext(MainContext);
    return (
      <>
        <motion.div
          className="fixed z-50 w-full right-0 left-0 h-screen bg-black"
          variants={pageTransition}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={pageTransition.transition}
        />

        <motion.div
          ref={ref}
          variants={pageContainer}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={pageContainer.transition}
        >
          <Navbar
            colorTheme={pathname === "/" && !isThreshold ? "light" : undefined}
          />
          {children}

          <Footer />
        </motion.div>
      </>
    );
  }
);

PageMotion.displayName = "PageMotion";

export default PageMotion;
