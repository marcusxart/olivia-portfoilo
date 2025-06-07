import { motion } from "motion/react";
import { forwardRef } from "react";
import type { ChildrenProps } from "../types";
import Navbar from "./Navbar";
import { useLocation, useParams } from "react-router-dom";
import Footer from "./Footer";
import { pageContainer, pageTransition } from "../constants/motion";

const PageMotion = forwardRef<HTMLDivElement, ChildrenProps>(
  ({ children }, ref) => {
    const { pathname } = useLocation();
    const project_id = useParams<{ project_id: string }>()?.project_id;
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
            colorTheme={pathname === "/" || project_id ? "light" : "dark"}
          />
          <div className="min-h-screen w-full">{children}</div>

          <Footer />
        </motion.div>
      </>
    );
  }
);

PageMotion.displayName = "PageMotion";

export default PageMotion;
