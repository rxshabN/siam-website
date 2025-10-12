import React, { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LandingPageContent from "../components/landing-page-content";
import SplashScreen from "../components/SplashScreen";
import useIsMobile from "../hooks/useIsMobile"; // 1. Import the hook

const LandingPage = () => {
  const isMobile = useIsMobile(); // 2. Call the hook to check for mobile

  const [hasAnimated, setHasAnimated] = useState(
    () => sessionStorage.getItem("hasAnimated") === "true"
  );

  // 3. Adjust initial state based on `isMobile`
  const [isSplashing, setIsSplashing] = useState(!hasAnimated && !isMobile);

  const [isRevealing, setIsRevealing] = useState(false);

  const handleRevealStart = useCallback(() => {
    setIsRevealing(true);
  }, []);

  const handleAnimationComplete = useCallback(() => {
    setIsSplashing(false);
    sessionStorage.setItem("hasAnimated", "true");
  }, []);

  // 4. If mobile, always show content immediately and set 'hasAnimated' for future desktop sessions.
  useEffect(() => {
    if (isMobile) {
      sessionStorage.setItem("hasAnimated", "true");
      setHasAnimated(true);
    }
  }, [isMobile]);

  // If the animation has already run OR if the user is on mobile, just show the content directly.
  if (hasAnimated || isMobile) {
    return (
      <div className="min-h-screen poppins overflow-hidden">
        <LandingPageContent />
      </div>
    );
  }

  // This block will now only run on desktop on the first visit
  return (
    <div
      style={{ position: "relative", minHeight: "100vh", background: "black" }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isRevealing ? 1 : 0 }}
        transition={{ duration: 0.8, ease: "easeIn" }}
        style={{ pointerEvents: isRevealing ? "auto" : "none" }}
      >
        <div className="min-h-screen poppins overflow-hidden">
          <LandingPageContent />
        </div>
      </motion.div>

      <AnimatePresence>
        {isSplashing && (
          <SplashScreen
            exit={{ opacity: 0, transition: { duration: 0.5 } }} // Smoother exit
            onRevealStart={handleRevealStart}
            onAnimationComplete={handleAnimationComplete}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default LandingPage;
