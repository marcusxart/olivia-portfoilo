import { forwardRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMotionValueEvent, useScroll } from "motion/react";
import { useTheme } from "../hooks/customs/useTheme";
import type { ChildrenProps } from "../types";
import { MainContext } from "../contexts";

import { Element } from "react-scroll";
import ArrowButton from "./ArrowButton";

/**
 * PageWrapper component:
 * - Uses a custom `useTheme` hook to manage light/dark mode.
 * - Tracks window height to calculate scroll threshold.
 * - Listens to vertical scroll changes using `motion` library.
 * - Switches theme to dark mode when scroll passes 90% of viewport height.
 * - Provides current theme value via React Context.
 * - Accepts a forwarded ref for the container div.
 */
const PageWrapper = forwardRef<HTMLDivElement, ChildrenProps>((_props, ref) => {
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    // Provide theme value globally via context
    <MainContext.Provider value={{ theme, isThreshold }}>
      <div ref={ref} className="z-[2]">
        <Element name="top" />

        {isThreshold && (
          <span className="fixed bottom-[56px] right-[40px] z-10">
            <ArrowButton to="top" rolate={180} />
          </span>
        )}
        {_props?.children}
      </div>
    </MainContext.Provider>
  );
});

// Set display name for easier debugging in React DevTools
PageWrapper.displayName = "PageWrapper";

export default PageWrapper;
