import { forwardRef, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useMotionValueEvent, useScroll } from "motion/react";
import { useTheme } from "../hooks/customs/useTheme";
import type { ChildrenProps } from "../types";
import { MainContext } from "../contexts";
import Navbar from "./Navbar";
import { Element } from "react-scroll";
import ArrowButton from "./ArrowButton";
import Footer from "./Footer";

/**
 * PageWrapper component:
 * - Uses a custom `useTheme` hook to manage light/dark mode.
 * - Tracks window height to calculate scroll threshold.
 * - Listens to vertical scroll changes using `motion` library.
 * - Switches theme to dark mode when scroll passes 90% of viewport height.
 * - Provides current theme value via React Context.
 * - Accepts a forwarded ref for the container div.
 */
const PageWrapper = forwardRef<HTMLDivElement, ChildrenProps>(
  ({ children }, ref) => {
    // Access theme and setter from custom hook (theme defaults to light)
    const { theme, setTheme } = useTheme();
    const [isThreshold, setIsThreshold] = useState(false);
    // State to store current viewport height
    const [height, setHeight] = useState<number>(window.innerHeight);

    // Motion hook to get scroll Y motion value
    const { scrollY } = useScroll();

    // Update viewport height state on window resize
    useEffect(() => {
      const handleResize = () => setHeight(window.innerHeight);

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Subscribe to scrollY changes, toggle theme based on scroll threshold
    useMotionValueEvent(scrollY, "change", (latest) => {
      const scrollThreshold = height * 0.5;
      const threshold = latest > scrollThreshold;

      // If scroll past 90% of viewport height, set dark theme, else light
      setTheme(threshold ? "dark" : "light");
      setIsThreshold(threshold);
    });

    const { pathname } = useLocation();
    return (
      // Provide theme value globally via context
      <MainContext.Provider value={{ theme }}>
        <div ref={ref}>
          <Element name="top" />
          <Navbar
            colorTheme={pathname === "/" && !isThreshold ? "light" : undefined}
          />
          {isThreshold && (
            <span className="fixed bottom-[56px] right-[40px] z-10">
              <ArrowButton to="top" rolate={180} />
            </span>
          )}

          {children ?? <Outlet />}
          <Footer />
        </div>
      </MainContext.Provider>
    );
  }
);

// Set display name for easier debugging in React DevTools
PageWrapper.displayName = "PageWrapper";

export default PageWrapper;
