import { motion } from "framer-motion";
import useIsMobile from "../hooks/useIsMobile";

const AnimatedLines = () => {
  const isMobile = useIsMobile();
  // Spark component for the head of the lines
  const Spark = ({ isVertical }) => (
    <motion.div
      className="absolute bg-green-400 rounded-full"
      style={{
        width: "4px",
        height: "4px",
        boxShadow: "0 0 10px 3px rgba(100, 255, 100, 0.7)",
        // Position sparks relative to the line's head
        // For vertical, sparks are around the bottom end of the line segment
        // For horizontal, sparks are around the left end of the line segment
        ...(isVertical
          ? { bottom: -2, left: "50%", x: "-50%" }
          : { left: -2, top: "50%", y: "-50%" }),
        x: (Math.random() - 0.5) * (isVertical ? 40 : 40), // Spread horizontally for vertical line
        y: (Math.random() - 0.5) * (isVertical ? 40 : 40), // Spread vertically for horizontal line
      }}
      animate={{
        scale: [0, 1.2, 0],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: Math.random() * 0.8 + 0.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: Math.random() * 2,
      }}
    />
  );

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
      {/* --- Vertical Line (Top to Bottom) --- */}
      <motion.div
        className="absolute bg-green-500/80 origin-top"
        style={{
          width: isMobile ? "6px" : "8px", // Increased line thickness
          right: isMobile ? "9.5vw" : "12.4vw", // Aligned to a grid like position from right
          top: "0", // Start from the very top
          boxShadow: "0 0 10px 1px #0CE46C", // Green glow for the line itself
        }}
        initial={{ height: 0, opacity: 0 }} // Start off-screen above, invisible
        animate={{
          height: "100vh", // Move down to its calculated position (1/4th screen height)
          opacity: [0, 1, 1, 0], // Fade in, stay visible, then fade out
        }}
        transition={{
          duration: 100, // Total animation time
          ease: "linear",
          times: [0, 0.1, 0.9, 1], // Fade in (0-10%), visible (10-90%), fade out (90-100%)
          repeat: Infinity,
          repeatDelay: 1, // 1-second pause before restarting
        }}
      >
        {Array.from({ length: 20 }).map((_, index) => (
          <Spark key={index} isVertical={true} />
        ))}
      </motion.div>

      {/* --- Horizontal Line (Right to Left) --- */}
      <motion.div
        className="absolute bg-green-500/80 origin-right"
        style={{
          height: isMobile ? "6px" : "10px", // Increased line thickness
          top: isMobile ? "30vh" : "31.75vh", // Aligned to a grid like position from top
          right: "0", // Start from the very right
          y: "-50%", // Center the line if needed, adjust 'top' if not
          boxShadow: "0 0 10px 1px #0CE46C", // Green glow for the line itself
        }}
        initial={{ width: 0, opacity: 0 }} // Start off-screen right, invisible
        animate={{
          width: "30vw", // Move left to its calculated position (1/4th screen width)
          opacity: [0, 1, 1, 0], // Fade in, stay visible, then fade out
        }}
        transition={{
          duration: 100, // Total animation time
          ease: "linear",
          times: [0, 0.1, 0.9, 1], // Fade in (0-10%), visible (10-90%), fade out (90-100%)
          repeat: Infinity,
          repeatDelay: 1, // 1-second pause before restarting
        }}
      >
        <div className="relative w-full h-full bg-gradient-to-l from-green-400 to-transparent">
          {/* Sparks are at the "end" of the current line segment which is the left for right-to-left */}
          {Array.from({ length: 20 }).map((_, index) => (
            <Spark key={index} isVertical={false} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};
export default AnimatedLines;
