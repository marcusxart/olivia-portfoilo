import { forwardRef, useEffect, useState } from "react";
import { Puff } from "react-loader-spinner";
import { AnimatePresence, motion } from "motion/react";

const SplashScreen = forwardRef<HTMLDivElement>((_props, ref) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);
  return (
    <AnimatePresence>
      {isLoading && (
        <div className="fixed z-[90] inset-0 text-white" ref={ref}>
          <motion.div className="grid place-items-center w-full h-full relative overflow-hidden">
            <motion.div
              className="absolute bg-black w-full h-full"
              initial={{
                translateX: "-50%",
                transition: {
                  duration: 0,
                },
              }}
              animate={{
                translateX: "-50%",
                transition: {
                  duration: 0,
                },
              }}
              exit={{
                translateX: "-100%",
                transition: {
                  duration: 0.5,
                  delay: 0.3,
                },
              }}
              key={"left"}
            />
            <motion.div
              className="absolute bg-black w-full h-full"
              initial={{
                translateX: "50%",
                transition: {
                  duration: 0,
                },
              }}
              animate={{
                translateX: "50%",
                transition: {
                  duration: 0,
                },
              }}
              exit={{
                translateX: "100%",
                transition: {
                  duration: 0.5,
                  delay: 0.3,
                },
              }}
              key="right"
            />
            <motion.div
              className="inline-flex flex-col items-center gap-3 relative z-[2]"
              initial={{
                opacity: 1,
                transition: {
                  duration: 0,
                },
              }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 0,
                },
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.3,
                },
              }}
            >
              <p className="text-3xl font-oswald font-semibold">Olivia.</p>
              <Puff
                visible={true}
                height="40"
                width="40"
                color="#fff"
                ariaLabel="puff-loading"
                wrapperStyle={{}}
                wrapperClass=""
              />
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
});

SplashScreen.displayName = "Splash screen";

export default SplashScreen;
