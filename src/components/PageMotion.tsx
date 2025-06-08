import { motion } from "motion/react";
import { forwardRef } from "react";
import type { ChildrenProps } from "../types";
import Navbar from "./Navbar";
import { useLocation, useParams } from "react-router-dom";
import Footer from "./Footer";
import { pageContainer, pageTransition } from "../constants/motion";

/**
 * PageMotion component wraps page content with motion animations,
 * a fixed animated background, a Navbar, and a Footer.
 *
 * @param {ChildrenProps} props - Component children
 * @param {React.Ref<HTMLDivElement>} ref - Ref forwarded to the main motion div container
 * @returns {JSX.Element}
 */
const PageMotion = forwardRef<HTMLDivElement, ChildrenProps>(
  ({ children }, ref) => {
    /** Current URL path */
    const { pathname } = useLocation();

    /** Project ID param from route, if any */
    const project_id = useParams<{ project_id: string }>()?.project_id;

    return (
      <>
        {/* Fullscreen animated black background */}
        <motion.div
          className="fixed z-50 w-full right-0 left-0 h-screen bg-black"
          variants={pageTransition}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={pageTransition.transition}
        />

        {/* Main content container with page animations */}
        <motion.div
          ref={ref}
          variants={pageContainer}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={pageContainer.transition}
        >
          {/* Navbar color depends on current path or project_id param */}
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
