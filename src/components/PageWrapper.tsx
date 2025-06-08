import { forwardRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMotionValueEvent, useScroll } from "motion/react";
import { useTheme } from "../hooks/customs/useTheme";
import type { ChildrenProps } from "../types";
import { MainContext } from "../contexts";

import { Element } from "react-scroll";
import ArrowButton from "./ArrowButton";

/**
 * PageWrapper component
 *
 * Wraps page content and manages theme based on scroll position.
 * - Uses custom `useTheme` hook to get and set theme ("light" or "dark").
 * - Tracks viewport height and scroll position using `motion` hooks.
 * - Switches theme to dark mode when scrolled past 50% of viewport height.
 * - Provides theme state and scroll threshold state via React Context.
 * - Resets scroll position to top on route/path change.
 * - Accepts forwarded ref to the wrapping div.
 *
 * @param props - React children to render inside the wrapper
 * @param ref - Forwarded ref to the container div element
 * @returns JSX.Element wrapping children with theme context and scroll effects
 */
const PageWrapper = forwardRef<HTMLDivElement, ChildrenProps>(
  ({ children }, ref) => {
    const { theme, setTheme } = useTheme();
    const [isThreshold, setIsThreshold] = useState(false);
    const [height, setHeight] = useState(window.innerHeight);

    // Get scrollY motion value from `motion` library
    const { scrollY } = useScroll();

    // Update viewport height state on window resize
    useEffect(() => {
      const handleResize = () => setHeight(window.innerHeight);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Listen to scrollY changes to toggle theme and threshold state
    useMotionValueEvent(scrollY, "change", (latest) => {
      const scrollThreshold = height * 0.5;
      const threshold = latest > scrollThreshold;

      setTheme(threshold ? "dark" : "light");
      setIsThreshold(threshold);
    });

    // Reset scroll to top on path change
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return (
      <MainContext.Provider value={{ theme, isThreshold }}>
        <div ref={ref} className="z-[2]">
          <Element name="top" />

          {isThreshold && (
            <span className="fixed bottom-[56px] right-[24px] lg:right-[40px] z-10">
              <ArrowButton to="top" rotate={180} />
            </span>
          )}

          {children}
        </div>
      </MainContext.Provider>
    );
  }
);

PageWrapper.displayName = "PageWrapper";

export default PageWrapper;
