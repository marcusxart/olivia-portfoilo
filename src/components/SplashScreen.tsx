import { forwardRef, useEffect, useState } from "react";
import { Puff } from "react-loader-spinner";
import { AnimatePresence, motion } from "motion/react";

/**
 * SplashScreen component
 *
 * Displays a fullscreen loading splash with animated sliding black overlays
 * and a centered loading spinner and title.
 *
 * - Shows for 5 seconds, then fades out with animation.
 * - Uses `motion` for entrance/exit animations.
 * - Uses `react-loader-spinner` Puff spinner.
 * - Accepts a forwarded ref to the outer container div.
 *
 * @param _props - No props used.
 * @param ref - Forwarded ref to the splash container div.
 * @returns JSX element representing splash screen.
 */
const SplashScreen = forwardRef<HTMLDivElement>((_props, ref) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide splash screen after 5 seconds
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timeout); // Cleanup timeout on unmount
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <div
          className="fixed inset-0 z-[90] text-white"
          ref={ref}
          aria-live="polite"
          aria-busy="true"
          role="alert"
        >
          <motion.div className="relative grid w-full h-full place-items-center overflow-hidden">
            {/* Left sliding black overlay */}
            <motion.div
              className="absolute w-full h-full bg-black"
              initial={{ translateX: "-50%" }}
              animate={{ translateX: "-50%" }}
              exit={{
                translateX: "-100%",
                transition: { duration: 0.5, delay: 0.3 },
              }}
              key="left"
            />
            {/* Right sliding black overlay */}
            <motion.div
              className="absolute w-full h-full bg-black"
              initial={{ translateX: "50%" }}
              animate={{ translateX: "50%" }}
              exit={{
                translateX: "100%",
                transition: { duration: 0.5, delay: 0.3 },
              }}
              key="right"
            />
            {/* Centered content */}
            <motion.div
              className="relative z-20 inline-flex flex-col items-center gap-3"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
            >
              <p className="font-oswald text-3xl font-semibold">Olivia.</p>
              <Puff
                visible={true}
                height={40}
                width={40}
                color="#fff"
                ariaLabel="Loading spinner"
              />
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
});

SplashScreen.displayName = "SplashScreen";

export default SplashScreen;
