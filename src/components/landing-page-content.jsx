import { useEffect, useState } from "react";
import { easeOut, motion } from "framer-motion";
import Navbar from "./navbar";
import { Link } from "react-router-dom";
import AnimatedLines from "./AnimatedLines";
import useIsMobile from "../hooks/useIsMobile";

const GreenDot = ({ top, right, size, delay, duration }) => {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        top: `${top}%`,
        right: `${right}%`,
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: "#0CE46C",
        boxShadow: "0 0 8px 4px rgba(0, 27, 12, 1)",
      }}
      animate={{
        x: [0, Math.random() * 50 - 10, 0],
        y: [0, Math.random() * 50 - 10, 0],
        boxShadow: [
          "0 0 8px 4px rgba(0, 27, 12, 0.9)",
          "0 0 12px 6px rgba(0, 27, 12, 1)",
          "0 0 8px 4px rgba(0, 27, 12, 0.9)",
        ],
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      }}
    />
  );
};

const GreenDots = ({ numberOfDots = 7 }) => {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    const generateDots = () => {
      const newDots = [];
      for (let i = 0; i < numberOfDots; i++) {
        newDots.push({
          id: i,
          top: 77 + Math.random() * 14,
          right: 20 + Math.random() * 10,
          size: Math.random() * 4 + 4,
          duration: Math.random() * 4 + 4,
          delay: Math.random() * 2,
        });
      }
      setDots(newDots);
    };

    generateDots();
  }, [numberOfDots]);

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
      {dots.map((dot) => (
        <GreenDot
          key={dot.id}
          top={dot.top}
          right={dot.right}
          size={dot.size}
          duration={dot.duration}
          delay={dot.delay}
        />
      ))}
    </div>
  );
};

const Star = ({ top, left, delay, duration }) => {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        top: `${top}%`,
        left: `${left}%`,
        width: "4px",
        height: "4px",
      }}
      animate={{
        x: [0, Math.random() * 200 - 100, 0],
        y: [0, Math.random() * 200 - 100, 0],
        backgroundColor: ["#808080", "#FFFFFF", "#808080"],
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      }}
    />
  );
};

const Stars = ({ numberOfStars = 35 }) => {
  const isMobile1 = useIsMobile();
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < numberOfStars; i++) {
        newStars.push({
          id: i,
          top: Math.random() * (isMobile1 ? 100 : 60),
          left: Math.random() * (isMobile1 ? 100 : 60),
          duration: Math.random() * 5 + 5,
          delay: Math.random() * 3,
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, [numberOfStars]);

  return (
    <div className="absolute -top-24 -left-16 w-full h-full pointer-events-none">
      {stars.map((star) => (
        <Star
          key={star.id}
          top={star.top}
          left={star.left}
          duration={star.duration}
          delay={star.delay}
        />
      ))}
    </div>
  );
};

const LandingPageContent = () => {
  const isMobile = useIsMobile();

  return (
    <div className="braah-one sm:w-full sm:h-full max-w-screen min-h-screen overflow-hidden">
      <Stars />
      <GreenDots />
      <AnimatedLines />
      <img
        src={isMobile ? "/grid-mobile.webp" : "/grid.webp"}
        alt=""
        className="w-full max-h-screen overflow-hidden absolute"
      />
      <Navbar />
      <section className="flex items-center justify-center relative">
        <div className="w-screen">
          <img
            src="/vector.svg"
            alt=""
            className="size-32 absolute -bottom-6 left-5 sm:size-72 sm:top-10 sm:left-16 sm:bottom-auto"
          />
          <img
            src="/vector-2.svg"
            alt=""
            className="size-14 absolute left-32 -bottom-10 sm:left-96 sm:top-8"
          />
          <img
            src="/vector-3.svg"
            alt=""
            className="size-[60rem] absolute -right-28 -top-80 sm:block hidden"
          />
          <img
            src="/vector-2.svg"
            alt=""
            className="size-20 absolute right-20 top-10 sm:block hidden"
          />
          <img
            src="/vector-2.svg"
            alt=""
            className="sm:size-12 size-20 absolute sm:right-52 sm:top-96 left-10 top-10"
          />
          <img
            src="/vector-2.svg"
            alt=""
            className="size-12 absolute right-52 top-96 sm:block hidden"
          />
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: easeOut,
              delay: 0.2,
            }}
            className="sm:w-[60%] mx-1 mt-14 text-center audiowide uppercase text-white font-bold sm:text-[58px] text-[26px] sm:mx-auto leading-[1.3]"
          >
            Society for Industrial & Applied Mathematics
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: easeOut,
              delay: 0.4,
            }}
            className="text-center uppercase poppins font-normal mx-0.5 sm:text-[20px] text-[14px] text-white my-7 sm:tracking-[0.45rem] tracking-[0.25rem]"
          >
            Turning knowledge into power
          </motion.h2>

          <img
            src="Glow-2.webp"
            alt=""
            className="absolute left-0 -top-56 pointer-events-none sm:block hidden"
          />
          <img
            src="Glow-1.webp"
            alt=""
            className="absolute left-0 -top-44 sm:block hidden"
          />
          <Link to="/wrapped">
            <motion.button
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: easeOut,
                delay: 0.9,
              }}
              className="z-50 mx-auto poppins flex gap-x-2 items-center justify-center border border-white uppercase rounded-full px-5 sm:px-14 py-2 mb-5 font-light text-white relative"
            >
              <span className="">2024 Highlights</span>
              <img src="mdi_wand.svg" alt="" />
            </motion.button>
          </Link>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: easeOut,
              delay: 1.2,
            }}
            className="mt-8 braah-one text-white sm:text-[20px] text-[16px] sm:leading-10 sm:mx-auto sm:w-3/5 mx-2 text-center mb-10 sm:mb-10"
          >
            Applied mathematics, computational and data science are essential to
            moving society forward and solving many of the world’s most pressing
            questions and problems. <br /> SIAM plays a central role in bringing
            mathematical and computational scientists together, providing a
            platform and community for this important work.
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default LandingPageContent;
