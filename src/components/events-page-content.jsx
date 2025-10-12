import { useState, useEffect } from "react";
import { motion, easeOut, AnimatePresence } from "framer-motion";
import useIsMobile from "../hooks/useIsMobile";

const SvgStar = ({ top, left, size }) => {
  const svgContent = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="57"
      height="57"
      viewBox="0 0 57 57"
      fill="none"
    >
      <g clipPath="url(#clip0_668_350)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M32.6501 3.53007C31.3781 0.0380716 26.4421 0.0380716 25.1701 3.53007L19.3981 19.3981L3.53013 25.1701C0.0381327 26.4421 0.0381327 31.3781 3.53013 32.6501L19.3981 38.4221L25.1701 54.2901C26.4421 57.7821 31.3781 57.7821 32.6501 54.2901L38.4221 38.4221L54.2901 32.6501C57.7821 31.3781 57.7821 26.4421 54.2901 25.1701L38.4221 19.3981L32.6501 3.53007Z"
          fill="#CCCCCC"
        />
      </g>
      <defs>
        <clipPath id="clip0_668_350">
          <rect
            width="56"
            height="56"
            fill="white"
            transform="translate(0.910889 0.910828)"
          />
        </clipPath>
      </defs>
    </svg>
  );

  return (
    <div
      className="absolute"
      style={{
        top: `${top}%`,
        left: `${left}%`,
        width: `${size}px`,
        height: `${size}px`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {svgContent}
    </div>
  );
};

const SvgStarsBackground = ({ numberOfSvgStars = 7 }) => {
  const [svgStars, setSvgStars] = useState([]);

  useEffect(() => {
    const generateSvgStars = () => {
      const newSvgStars = [];
      for (let i = 0; i < numberOfSvgStars; i++) {
        newSvgStars.push({
          id: i,
          top: Math.random() * 100,
          left: Math.random() * 100,
          size: Math.random() * 10 + 10,
        });
      }
      setSvgStars(newSvgStars);
    };

    generateSvgStars();
  }, [numberOfSvgStars]);

  return (
    <div className="-z-20 absolute -top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
      {svgStars.map((star) => (
        <SvgStar
          key={star.id}
          top={star.top}
          left={star.left}
          size={star.size}
          duration={star.duration}
          delay={star.delay}
        />
      ))}
    </div>
  );
};

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
          top: 84 + Math.random() * 14,
          right: 10 + Math.random() * 10,
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

const GreenDots1 = ({ numberOfDots = 7 }) => {
  const isMobile = useIsMobile();
  const [dots, setDots] = useState([]);

  useEffect(() => {
    const generateDots = () => {
      const newDots = [];
      for (let i = 0; i < numberOfDots; i++) {
        newDots.push({
          id: i,
          top: (isMobile ? 280 : 160) + Math.random() * 14,
          right: 46 + Math.random() * 10,
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

const Stars = ({ numberOfStars = 15 }) => {
  const isMobile = useIsMobile();
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < numberOfStars; i++) {
        newStars.push({
          id: i,
          top: Math.random() * (isMobile ? 100 : 120),
          left: Math.random() * (isMobile ? 100 : 55),
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

const ViewA = ({ onBack }) => {
  const isMobile = useIsMobile();
  return (
    <>
      <motion.div
        key="viewA"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0, ease: easeOut }}
        className="w-full h-screen flex flex-col justify-center items-center absolute"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeOut, delay: 0.1 }}
          className="z-50 rounded-3xl w-[10rem] h-[11rem] absolute top-20 left-4 sm:hidden block"
        >
          <img src="/mpl-1.png" alt="" className="object-contain rounded-3xl" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeOut, delay: 0.3 }}
          className="z-50 rounded-3xl w-[10rem] h-[11rem] absolute top-[27rem] right-4 sm:hidden block"
        >
          <img src="/mpl-2.png" alt="" className="object-contain rounded-3xl" />
        </motion.div>
        <img
          src="/vector-3.svg"
          alt=""
          className="absolute -top-1/3 left-10 -rotate-90 sm:block hidden"
        />
        <img
          src="/vector-3.svg"
          alt=""
          className="absolute -top-1/3 -right-20 -rotate-90 sm:block hidden"
        />
        <img
          src="/vector18.svg"
          alt=""
          className="absolute left-28 top-32 sm:block hidden"
        />
        <img
          src="/vector.svg"
          alt=""
          className="size-20 right-10 sm:right-24 absolute top-32"
        />
        <img
          src="/vector.svg"
          alt=""
          className="size-44 left-5 absolute top-[26rem] sm:hidden block"
        />
        <img
          src="/vector.svg"
          alt=""
          className="size-10 sm:size-20 right-24 sm:left-40 absolute top-28"
        />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOut, delay: 0.2 }}
          className="flex items-center justify-between w-full sm:px-10 mt-10"
        >
          <div className="sm:block hidden z-50 rounded-3xl w-[26.5rem] h-[27rem] relative -top-14">
            <img
              src="/mpl-1.png"
              alt=""
              className="object-contain rounded-3xl"
            />
          </div>
          <div className="z-50 rounded-3xl mx-auto w-[15rem] sm:w-[30rem] h-[16rem] sm:h-[27rem] backdrop-blur-xl p-5 bg-[#001b0c9a] flex items-center justify-center relative top-6 sm:-top-14">
            <img
              src={isMobile ? "/vector38.svg" : "/vector19.svg"}
              alt=""
              className="absolute size-[95%]"
            />

            <div className="text-white z-50 flex items-center justify-start flex-col gap-1">
              <span className="text-white audiowide uppercase text-sm sm:text-3xl text-center">
                Math Premier League
              </span>
              <span className="text-white poppins uppercase sm:text-xl text-[0.65rem] leading-tight text-center tracking-wide sm:tracking-[0.2rem] sm:mt-2">
                Three rounds. one champion. <br />
                infinite excitement.
              </span>
              <img
                src="/vector20.svg"
                alt=""
                className="size-[70%] sm:mb-3 my-1 sm:mt-2"
              />
              <p className="manrope leading-normal sm:leading-[2.5rem] text-center text-white sm:px-6 text-xs sm:text-base">
                Math Premier League is a fun, team-based event blending math and
                interactive challenges. It features a Coding Relay, a clue-based
                Treasure Hunt, and a Jeopardy-style quiz spanning diverse
                topics. The event promotes teamwork, problem-solving and plenty
                of excitement.
              </p>
            </div>
          </div>
          <div className="sm:block hidden z-50 rounded-3xl w-[26.5rem] h-[27rem] relative -top-14">
            <img
              src="/mpl-2.png"
              alt=""
              className="object-contain rounded-3xl"
            />
          </div>
        </motion.div>
        <motion.button
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOut, delay: 0.6 }}
          onClick={onBack}
          className="sm:top-0 top-20 sm:left-0 right-28 relative audiowide mt-3 px-6 sm:px-12 py-2 bg-gradient-to-r from-[#2b684e] to-[#001b0c] text-white rounded-2xl z-50 text-xl sm:text-3xl"
        >
          Back
        </motion.button>
      </motion.div>
      <motion.span
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: easeOut, delay: 1 }}
        className="text-[4.5rem] sm:text-[20rem] italic bg-gradient-to-b from-[#4a4a4a] via-[#4a4a4a6d] to-transparent text-transparent bg-clip-text fixed -bottom-2 sm:-bottom-24 cursor-default"
      >
        GRAVITAS
      </motion.span>
    </>
  );
};

const ViewB = ({ onBack, onNext }) => {
  const isMobile = useIsMobile();
  const [contentIndex, setContentIndex] = useState(0);

  const viewBData = [
    {
      title: "Triwizard Tournament",
      subTitle: "Spells, scores & strategy \n let the wizardry begin",
      description:
        "Triwizard Tournament is a magical, team-based event filled with fun games, logic puzzles and creative challenges. Teams compete to earn points with tiebreakers and a thrilling finale crowning the ultimate wizards or witches. A perfect blend of teamwork, strategy and enchantment!",
      img1: "/riviera-1.png",
      img2: "/riviera-2.png",
      bgText: "RIVIERA",
    },
    {
      title: "Shipwreck Showdown",
      subTitle: "only the clever \nconquer the currents",
      description:
        "Shipwreck Showdown is a thrilling pirate-themed adventure featuring five rounds of puzzles, games and challenges. It is filled with excitement and clever twists & this event tests the sharpness and teamwork of every participant as they navigate high-seas chaos.",
      img1: "/riviera-3.png",
      img2: "/riviera-4.png",
      bgText: "RIVIERA",
    },
  ];

  const handleNavigation = () => {
    setContentIndex((prev) => (prev === 0 ? 1 : 0));
  };

  const currentContent = viewBData[contentIndex];

  return (
    <>
      <motion.div
        key="viewB"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0, ease: easeOut }}
        className="w-full h-screen flex flex-col justify-center items-center absolute"
      >
        <AnimatePresence>
          {contentIndex === 0 && (
            <>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: easeOut, delay: 0.1 }}
                className="z-50 rounded-3xl w-[10rem] h-[11rem] absolute top-20 left-4 sm:hidden block"
              >
                <img
                  src="/riviera-1.png"
                  alt=""
                  className="object-contain rounded-3xl"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: easeOut, delay: 0.3 }}
                className="z-50 rounded-3xl w-[10rem] h-[11rem] absolute top-[27rem] right-4 sm:hidden block"
              >
                <img
                  src="/riviera-2.png"
                  alt=""
                  className="object-contain rounded-3xl"
                />
              </motion.div>
            </>
          )}
          {contentIndex === 1 && (
            <>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: easeOut, delay: 0.1 }}
                className="z-50 rounded-3xl w-[10rem] h-[11rem] absolute top-20 left-4 sm:hidden block"
              >
                <img
                  src="/riviera-3.png"
                  alt=""
                  className="object-contain rounded-3xl"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: easeOut, delay: 0.3 }}
                className="z-50 rounded-3xl w-[10rem] h-[11rem] absolute top-[27rem] right-4 sm:hidden block"
              >
                <img
                  src="/riviera-4.png"
                  alt=""
                  className="object-contain rounded-3xl"
                />
              </motion.div>
            </>
          )}
        </AnimatePresence>

        <img
          src="/vector-3.svg"
          alt=""
          className="absolute -top-1/3 left-10 -rotate-90 sm:block hidden"
        />
        <img
          src="/vector-3.svg"
          alt=""
          className="absolute -top-1/3 -right-20 -rotate-90 sm:block hidden"
        />
        <img
          src="/vector18.svg"
          alt=""
          className="absolute left-28 top-32 sm:block hidden"
        />
        <img
          src="/vector.svg"
          alt=""
          className="size-20 right-10 sm:right-24 absolute top-32"
        />
        <img
          src="/vector.svg"
          alt=""
          className="size-44 left-5 absolute top-[26rem] sm:hidden block"
        />
        <img
          src="/vector.svg"
          alt=""
          className="size-10 sm:size-20 right-24 sm:left-40 absolute top-28"
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={contentIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: easeOut }}
            className="flex items-center justify-between w-full sm:px-10 mt-10"
          >
            <div className="sm:block hidden z-50 rounded-3xl w-[26.5rem] h-[27rem] relative -top-14">
              <img
                src={currentContent.img1}
                alt=""
                className="object-contain rounded-3xl"
              />
            </div>
            <div className="z-50 rounded-3xl mx-auto w-[15rem] sm:w-[30rem] h-[17rem] sm:h-[27rem] backdrop-blur-xl p-5 bg-[#001b0c9a] flex items-center justify-center relative top-6 sm:-top-14">
              <img
                src={isMobile ? "/vector38.svg" : "/vector19.svg"}
                alt=""
                className="absolute size-[100%]"
              />
              <div className="text-white z-50 flex items-center justify-start flex-col gap-1">
                <span className="text-white audiowide uppercase text-sm sm:text-3xl text-center">
                  {currentContent.title}
                </span>
                <span className="text-white poppins uppercase sm:text-xl text-[0.65rem] leading-tight text-center tracking-wide sm:tracking-[0.2rem] sm:mt-2 whitespace-pre-line">
                  {currentContent.subTitle}
                </span>
                <img
                  src="/vector20.svg"
                  alt=""
                  className="size-[70%] sm:mb-3 my-1 sm:mt-2"
                />
                <p className="manrope leading-normal sm:leading-[2.5rem] text-center text-white sm:px-6 text-xs sm:text-base">
                  {currentContent.description}
                </p>
              </div>
            </div>
            <div className="sm:block hidden z-50 rounded-3xl w-[26.5rem] h-[27rem] relative -top-14">
              <img
                src={currentContent.img2}
                alt=""
                className="object-contain rounded-3xl"
              />
            </div>
          </motion.div>
        </AnimatePresence>

        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOut, delay: 0.6 }}
          onClick={onBack}
          className="sm:top-0 top-20 sm:left-0 right-28 relative audiowide mt-3 px-6 sm:px-12 py-2 bg-gradient-to-r from-[#2b684e] to-[#001b0c] text-white rounded-2xl z-50 text-xl sm:text-3xl bg-[length:200%_auto] hover:bg-right transition-all duration-500"
        >
          Back
        </motion.button>
      </motion.div>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentContent.bgText}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.7, ease: easeOut, delay: 0.2 }}
          className="text-[4.5rem] sm:text-[20rem] italic bg-gradient-to-b from-[#4a4a4a] via-[#4a4a4a6d] to-transparent text-transparent bg-clip-text fixed -bottom-2 sm:-bottom-24 cursor-default"
        >
          {currentContent.bgText}
        </motion.span>
      </AnimatePresence>
      <motion.img
        onClick={handleNavigation}
        src="/vector17.svg"
        alt="Navigate Events"
        className="absolute bottom-2 sm:bottom-10 size-16 sm:size-32 right-5 cursor-pointer z-50"
        animate={{
          rotate: contentIndex === 0 ? 0 : 180,
          x: contentIndex === 0 ? 0 : isMobile ? 0 : "calc(-100vw + 11rem)",
        }}
        transition={{ duration: 0.7, ease: easeOut }}
      />
    </>
  );
};

const ViewC = ({ onBack }) => {
  const isMobile = useIsMobile();
  const [contentIndex, setContentIndex] = useState(0);

  const viewCData = [
    {
      title: "Blogathon",
      subTitle: "from idea to website \n your journey starts here",
      description:
        "Blog-a-thon brings together bloggers, creators and developers for an exciting mix of speaker sessions, mini-games, collaborative activities and a code competition. The event fosters learning & creativity offering a dynamic space to grow in content creation and web development.",
      img1: "/yantra-1.png",
      img2: "/yantra-2.png",
      bgText: "YANTRA",
    },
    {
      title: "Coding Relay",
      subTitle: "speed meets logic in the \nultimate coding sprint",
      description:
        "Coding Relay is an exciting team-based coding challenge where participants tackle problems under time pressure. The tasks are switched at intervals, forcing teammates to pick up from where others left off, testing teamwork, quick thinking and problem-solving skills in a high-stakes environment.",
      img1: "/yantra-3.png",
      img2: "/yantra-4.png",
      bgText: "YANTRA",
    },
  ];

  const handleNavigation = () => {
    setContentIndex((prev) => (prev === 0 ? 1 : 0));
  };

  const currentContent = viewCData[contentIndex];

  return (
    <>
      <motion.div
        key="viewC"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0, ease: easeOut }}
        className="w-full h-screen flex flex-col justify-center items-center absolute"
      >
        <AnimatePresence>
          {contentIndex === 0 && (
            <>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: easeOut, delay: 0.1 }}
                className="z-50 rounded-3xl w-[10rem] h-[11rem] absolute top-20 left-4 sm:hidden block"
              >
                <img
                  src="/yantra-1.png"
                  alt=""
                  className="object-contain rounded-3xl"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: easeOut, delay: 0.3 }}
                className="z-50 rounded-3xl w-[10rem] h-[11rem] absolute top-[27rem] right-4 sm:hidden block"
              >
                <img
                  src="/yantra-2.png"
                  alt=""
                  className="object-contain rounded-3xl"
                />
              </motion.div>
            </>
          )}
          {contentIndex === 1 && (
            <>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: easeOut, delay: 0.1 }}
                className="z-50 rounded-3xl w-[10rem] h-[11rem] absolute top-20 left-4 sm:hidden block"
              >
                <img
                  src="/yantra-3.png"
                  alt=""
                  className="object-contain rounded-3xl"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: easeOut, delay: 0.3 }}
                className="z-50 rounded-3xl w-[10rem] h-[11rem] absolute top-[27rem] right-4 sm:hidden block"
              >
                <img
                  src="/yantra-4.png"
                  alt=""
                  className="object-contain rounded-3xl"
                />
              </motion.div>
            </>
          )}
        </AnimatePresence>

        <img
          src="/vector-3.svg"
          alt=""
          className="absolute -top-1/3 left-10 -rotate-90 sm:block hidden"
        />
        <img
          src="/vector-3.svg"
          alt=""
          className="absolute -top-1/3 -right-20 -rotate-90 sm:block hidden"
        />
        <img
          src="/vector18.svg"
          alt=""
          className="absolute left-28 top-32 sm:block hidden"
        />
        <img
          src="/vector.svg"
          alt=""
          className="size-20 right-10 sm:right-24 absolute top-32"
        />
        <img
          src="/vector.svg"
          alt=""
          className="size-44 left-5 absolute top-[26rem] sm:hidden block"
        />
        <img
          src="/vector.svg"
          alt=""
          className="size-10 sm:size-20 right-24 sm:left-40 absolute top-28"
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={contentIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: easeOut }}
            className="flex items-center justify-between w-full sm:px-10 mt-10"
          >
            <div className="sm:block hidden z-50 rounded-3xl w-[26.5rem] h-[27rem] relative -top-14">
              <img
                src={currentContent.img1}
                alt=""
                className="object-contain rounded-3xl"
              />
            </div>
            <div className="z-50 rounded-3xl mx-auto w-[15rem] sm:w-[30rem] h-[16rem] sm:h-[27rem] backdrop-blur-xl p-5 bg-[#001b0c9a] flex items-center justify-center relative top-6 sm:-top-14">
              <img
                src={isMobile ? "/vector38.svg" : "/vector19.svg"}
                alt=""
                className="absolute size-[95%]"
              />
              <div className="text-white z-50 flex items-center justify-start flex-col gap-1">
                <span className="text-white audiowide uppercase text-sm sm:text-3xl text-center">
                  {currentContent.title}
                </span>
                <span className="text-white poppins uppercase sm:text-xl text-[0.65rem] leading-tight text-center tracking-wide sm:tracking-[0.2rem] sm:mt-2 whitespace-pre-line">
                  {currentContent.subTitle}
                </span>
                <img
                  src="/vector20.svg"
                  alt=""
                  className="size-[70%] sm:mb-3 my-1 sm:mt-2"
                />
                <p className="manrope leading-normal sm:leading-[2.5rem] text-center text-white sm:px-6 text-xs sm:text-base">
                  {currentContent.description}
                </p>
              </div>
            </div>
            <div className="sm:block hidden z-50 rounded-3xl w-[26.5rem] h-[27rem] relative -top-14">
              <img
                src={currentContent.img2}
                alt=""
                className="object-contain rounded-3xl"
              />
            </div>
          </motion.div>
        </AnimatePresence>

        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOut, delay: 0.6 }}
          onClick={onBack}
          className="sm:top-0 top-20 sm:left-0 right-28 relative audiowide mt-3 px-6 sm:px-12 py-2 bg-gradient-to-r from-[#2b684e] to-[#001b0c] text-white rounded-2xl z-50 text-xl sm:text-3xl bg-[length:200%_auto] hover:bg-right transition-all duration-500"
        >
          Back
        </motion.button>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.span
          key={currentContent.bgText}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.7, ease: easeOut, delay: 0.2 }}
          className="text-[4.5rem] sm:text-[20rem] italic bg-gradient-to-b from-[#4a4a4a] via-[#4a4a4a6d] to-transparent text-transparent bg-clip-text fixed -bottom-2 sm:-bottom-24 cursor-default"
        >
          {currentContent.bgText}
        </motion.span>
      </AnimatePresence>

      <motion.img
        onClick={handleNavigation}
        src="/vector17.svg"
        alt="Navigate Events"
        className="absolute bottom-2 sm:bottom-10 size-16 sm:size-32 right-5 cursor-pointer z-50"
        animate={{
          rotate: contentIndex === 0 ? 0 : 180,
          x: contentIndex === 0 ? 0 : isMobile ? 0 : "calc(-100vw + 11rem)",
        }}
        transition={{ duration: 0.7, ease: easeOut }}
      />
    </>
  );
};

const ViewD = ({ onBack, onNext }) => {
  const isMobile = useIsMobile();
  return (
    <motion.div
      key="viewD"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-screen flex flex-col justify-center items-center absolute z-50"
    >
      <div className="absolute bottom-20 sm:bottom-56 left-6 sm:left-[8.5rem] rounded-3xl w-[8rem] sm:w-[25rem] h-[27rem] sm:backdrop-blur-xl p-5 bg-transparent sm:bg-[#00000040] flex items-center justify-center">
        <img src="/vector29.svg" alt="" className="absolute size-[97%]" />
        <div className="bg-transparent sm:w-[95%] sm:h-[95%]">
          <img
            src="/bh-1.png"
            alt=""
            className={`object-contain ${
              isMobile ? "scale-[1.25]" : ""
            } w-full h-full`}
          />
        </div>
      </div>
      <motion.img
        src="/orb.svg"
        alt=""
        className={`${
          isMobile ? "size-14" : ""
        } absolute right-[3.65rem] bottom-40 sm:right-[18.5rem] sm:top-[39rem]`}
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          y: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />
      <img
        src="/base.svg"
        alt=""
        className={`${
          isMobile ? "size-20" : ""
        } absolute right-12 bottom-32 sm:right-52 sm:top-[38rem]`}
      />
      <div className="absolute bottom-20 sm:bottom-56 right-6 sm:right-[8.5rem] rounded-3xl w-[8rem] sm:w-[25rem] h-[27rem] sm:backdrop-blur-xl p-5 bg-transparent sm:bg-[#00000040] flex items-center justify-center">
        <img src="/vector29.svg" alt="" className="absolute size-[97%]" />
        <div className="bg-transparent w-[95%] h-[95%]">
          <img
            src="/bh-2.png"
            alt=""
            className={`object-contain ${
              isMobile ? "scale-[1.25]" : ""
            } w-full h-full`}
          />
        </div>
      </div>
      <motion.img
        src="/orb.svg"
        alt=""
        className={`${
          isMobile ? "size-14" : ""
        } absolute left-[3.65rem] bottom-40 sm:left-[18.5rem] sm:top-[39rem]`}
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          y: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />
      <img
        src="/base.svg"
        alt=""
        className={`${
          isMobile ? "size-20" : ""
        } absolute left-12 bottom-32 sm:left-52 sm:top-[38rem]`}
      />
      <div className="w-full h-fit flex flex-col items-center justify-center gap-y-6 absolute top-32 sm:bottom-20">
        <h1 className="text-center text-3xl sm:text-6xl mx-auto text-white audiowide uppercase">
          Bug Hunt
        </h1>
        <p className="leading-normal sm:leading-[2.5rem] text-white text-center manrope mx-3 sm:w-96 text-sm sm:text-xl">
          Bug Hunt is an intense debugging competition that tests participants'
          skills in Java, C++, and Python. Under time pressure, competitors have
          to spot and fix bugs, showcasing their logic, precision, and
          efficiency in a fun, fast-paced environment.
        </p>
        <GreenDots1 />
      </div>
      <motion.img
        onClick={onBack}
        src="/vector17.svg"
        alt="Back to Grid"
        className="absolute bottom-10 size-20 sm:size-32 left-5 cursor-pointer"
        style={{ rotateY: 180 }}
        whileHover={{ scale: 1.1 }}
      />
      <motion.img
        onClick={onNext}
        src="/vector17.svg"
        alt="Next View"
        className="absolute bottom-10 size-20 sm:size-32 right-5 cursor-pointer"
        whileHover={{ scale: 1.1 }}
      />
    </motion.div>
  );
};

const ViewE = ({ onBack, onNext }) => {
  const isMobile = useIsMobile();
  return (
    <motion.div
      key="viewE"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-screen flex flex-col justify-center items-center absolute z-50"
    >
      <div className="absolute bottom-20 sm:bottom-56 left-6 sm:left-[8.5rem] rounded-3xl w-[8rem] sm:w-[25rem] h-[27rem] sm:backdrop-blur-xl p-5 bg-transparent sm:bg-[#00000040] flex items-center justify-center">
        <img src="/vector29.svg" alt="" className="absolute size-[97%]" />
        <div className="bg-transparent sm:w-[95%] sm:h-[95%]">
          <img
            src="/ss-1.png"
            alt=""
            className={`object-contain ${
              isMobile ? "scale-[1.25]" : ""
            } w-full h-full`}
          />
        </div>
      </div>
      <motion.img
        src="/orb.svg"
        alt=""
        className={`${
          isMobile ? "size-14" : ""
        } absolute right-[3.65rem] bottom-40 sm:right-[18.5rem] sm:top-[39rem]`}
        animate={{ y: [0, -15, 0] }}
        transition={{ y: { duration: 3, repeat: Infinity, ease: "easeInOut" } }}
      />
      <img
        src="/base.svg"
        alt=""
        className={`${
          isMobile ? "size-20" : ""
        } absolute right-12 bottom-32 sm:right-52 sm:top-[38rem]`}
      />
      <div className="absolute bottom-20 sm:bottom-56 right-6 sm:right-[8.5rem] rounded-3xl w-[8rem] sm:w-[25rem] h-[27rem] sm:backdrop-blur-xl p-5 bg-transparent sm:bg-[#00000040] flex items-center justify-center">
        <img src="/vector29.svg" alt="" className="absolute size-[97%]" />
        <div className="bg-transparent w-[95%] h-[95%]">
          <img
            src="/ss-2.png"
            alt=""
            className={`object-contain ${
              isMobile ? "scale-[1.25]" : ""
            } w-full h-full`}
          />
        </div>
      </div>
      <motion.img
        src="/orb.svg"
        alt=""
        className={`${
          isMobile ? "size-14" : ""
        } absolute left-[3.65rem] bottom-40 sm:left-[18.5rem] sm:top-[39rem]`}
        animate={{ y: [0, -15, 0] }}
        transition={{ y: { duration: 3, repeat: Infinity, ease: "easeInOut" } }}
      />
      <img
        src="/base.svg"
        alt=""
        className={`${
          isMobile ? "size-20" : ""
        } absolute left-12 bottom-32 sm:left-52 sm:top-[38rem]`}
      />
      <div className="w-full h-fit flex flex-col items-center justify-center gap-y-6 absolute top-32 sm:bottom-20">
        <h1 className="sm:mt-0 -mt-8 text-center text-3xl sm:text-6xl mx-auto text-white audiowide uppercase">
          Sudoku <br /> Sprint
        </h1>
        <p className="sm:mt-0 -mt-4 leading-normal sm:leading-[2.5rem] text-white text-center manrope mx-3 sm:w-96 text-sm sm:text-xl">
          Sudoku Sprint is a fast-paced, math-based event that challenges
          participants’ logic, pattern recognition, and numerical reasoning.
          Contestants race against time to solve increasingly complex 9x9 Sudoku
          puzzles, blending speed and strategy in a thrilling test of
          brainpower.
        </p>
        <GreenDots1 />
      </div>
      <motion.img
        onClick={onBack}
        src="/vector17.svg"
        alt="Previous View"
        className="absolute bottom-10 size-20 sm:size-32 left-5 cursor-pointer"
        style={{ rotateY: 180 }}
        whileHover={{ scale: 1.1 }}
      />
      <motion.img
        onClick={onNext}
        src="/vector17.svg"
        alt="Next View"
        className="absolute bottom-10 size-20 sm:size-32 right-5 cursor-pointer"
        whileHover={{ scale: 1.1 }}
      />
    </motion.div>
  );
};

const ViewF = ({ onBack }) => {
  const isMobile = useIsMobile();
  return (
    <motion.div
      key="viewF"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-screen flex flex-col justify-center items-center absolute z-50"
    >
      <div className="absolute bottom-20 sm:bottom-56 left-6 sm:left-[8.5rem] rounded-3xl w-[8rem] sm:w-[25rem] h-[27rem] sm:backdrop-blur-xl p-5 bg-transparent sm:bg-[#00000040] flex items-center justify-center">
        <img src="/vector29.svg" alt="" className="absolute size-[97%]" />
        <div className="bg-transparent sm:w-[95%] sm:h-[95%]">
          <img
            src="/rml-1.png"
            alt=""
            className={`object-contain ${
              isMobile ? "scale-[1.25]" : ""
            } w-full h-full`}
          />
        </div>
      </div>
      <motion.img
        src="/orb.svg"
        alt=""
        className={`${
          isMobile ? "size-14" : ""
        } absolute right-[3.65rem] bottom-40 sm:right-[18.5rem] sm:top-[39rem]`}
        animate={{ y: [0, -15, 0] }}
        transition={{ y: { duration: 3, repeat: Infinity, ease: "easeInOut" } }}
      />
      <img
        src="/base.svg"
        alt=""
        className={`${
          isMobile ? "size-20" : ""
        } absolute right-12 bottom-32 sm:right-52 sm:top-[38rem]`}
      />
      <div className="absolute bottom-20 sm:bottom-56 right-6 sm:right-[8.5rem] rounded-3xl w-[8rem] sm:w-[25rem] h-[27rem] sm:backdrop-blur-xl p-5 bg-transparent sm:bg-[#00000040] flex items-center justify-center">
        <img src="/vector29.svg" alt="" className="absolute size-[97%]" />
        <div className="bg-transparent w-[95%] h-[95%]">
          <img
            src="/rml-2.png"
            alt=""
            className={`object-contain ${
              isMobile ? "scale-[1.25]" : ""
            } w-full h-full`}
          />
        </div>
      </div>
      <motion.img
        src="/orb.svg"
        alt=""
        className={`${
          isMobile ? "size-14" : ""
        } absolute left-[3.65rem] bottom-40 sm:left-[18.5rem] sm:top-[39rem]`}
        animate={{ y: [0, -15, 0] }}
        transition={{ y: { duration: 3, repeat: Infinity, ease: "easeInOut" } }}
      />
      <img
        src="/base.svg"
        alt=""
        className={`${
          isMobile ? "size-20" : ""
        } absolute left-12 bottom-32 sm:left-52 sm:top-[38rem]`}
      />
      <div className="w-full h-fit flex flex-col items-center justify-center gap-y-6 absolute top-32 sm:bottom-20">
        <h1 className="text-center text-3xl sm:text-6xl mx-auto text-white audiowide uppercase">
          Road to ML
        </h1>
        <p className="leading-normal sm:leading-[2.5rem] text-white text-center manrope mx-3 sm:w-96 text-sm sm:text-xl">
          Road To Machine Learning explores the impact of data pre-processing on
          AI/ML performance. Through case studies, it highlights how clean,
          unbiased data leads to more accurate and fair models, offering key
          insights for tech enthusiasts and data professionals alike.
        </p>
        <GreenDots1 />
      </div>
      <motion.img
        onClick={onBack}
        src="/vector17.svg"
        alt="Previous View"
        className="absolute bottom-10 size-20 sm:size-32 left-5 cursor-pointer"
        style={{ rotateY: 180 }}
        whileHover={{ scale: 1.1 }}
      />
    </motion.div>
  );
};

const EventsPageContent = () => {
  const isMobile = useIsMobile();
  const [view, setView] = useState("intro");
  const handleShowGrid = () => {
    setView("grid");
  };
  const handleShowViewA = () => setView("viewA");
  const handleShowViewB = () => setView("viewB");
  const handleShowViewC = () => setView("viewC");
  const handleShowViewD = () => setView("viewD");
  const handleShowViewE = () => setView("viewE");
  const handleShowViewF = () => setView("viewF");

  return (
    <div className="overflow-hidden relative z-10 min-h-screen min-w-screen bg-black poppins flex flex-col justify-center items-center">
      <AnimatePresence>
        {view === "intro" && (
          <motion.div
            key="intro-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full absolute"
          >
            <img
              src={isMobile ? "/grid-mobile.png" : "/grid.png"}
              alt=""
              className="w-full max-h-screen overflow-hidden absolute"
            />
            <Stars /> <GreenDots /> <SvgStarsBackground />
          </motion.div>
        )}
        {view === "grid" && (
          <motion.div
            key="grid-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full absolute"
          >
            <img
              src={isMobile ? "/group7.png" : "/group5.png"}
              alt="group5"
              className="w-full h-full absolute z-0 opacity-30"
            />
            <Stars /> <GreenDots /> <SvgStarsBackground />
            <img
              src="/vector-5.svg"
              alt=""
              className="w-screen h-screen absolute z-0 overflow-hidden"
            />
          </motion.div>
        )}
        {(view === "viewA" || view === "viewB" || view === "viewC") && (
          <motion.div
            key="default-background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full absolute"
          >
            <img
              src={isMobile ? "/grid-mobile.png" : "/grid.png"}
              alt=""
              className="w-full max-h-screen overflow-hidden absolute"
            />
            <Stars />
            <GreenDots />
          </motion.div>
        )}
        {view === "viewD" && (
          <motion.div
            key="viewD-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full absolute"
          >
            <img
              src={isMobile ? "/grid-mobile.png" : "/grid.png"}
              alt=""
              className="w-full max-h-screen overflow-hidden absolute z-40"
            />
            <img
              src="/viewD.png"
              alt=""
              className={`${
                isMobile ? "scale-[2.4] top-14 " : ""
              }w-full max-h-screen overflow-hidden absolute opacity-30`}
            />
          </motion.div>
        )}
        {view === "viewE" && (
          <motion.div
            key="viewE-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full absolute"
          >
            <img
              src={isMobile ? "/grid-mobile.png" : "/grid.png"}
              alt=""
              className="w-full max-h-screen overflow-hidden absolute z-40"
            />
            <img
              src="/viewE.png"
              alt=""
              className={`${
                isMobile ? "scale-[2] top-14 " : ""
              }w-full max-h-screen overflow-hidden absolute opacity-30`}
            />
          </motion.div>
        )}
        {view === "viewF" && (
          <motion.div
            key="viewF-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full absolute"
          >
            <img
              src={isMobile ? "/grid-mobile.png" : "/grid.png"}
              alt=""
              className="w-full max-h-screen overflow-hidden absolute z-40"
            />
            <img
              src="/viewF.png"
              alt=""
              className={`${
                isMobile ? "scale-[2] top-14 " : ""
              }w-full max-h-screen overflow-hidden absolute opacity-30`}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {view === "intro" && (
          <motion.div
            key="intro-view"
            exit={{ opacity: 0, transition: { duration: 0.5, ease: easeOut } }}
            className="w-full h-full flex items-center justify-center"
          >
            <div className="absolute left-0 w-full">
              <img
                src={"/group4.png"}
                alt=""
                className="opacity-30 sm:w-1/2 sm:top-0 top-32 w-full h-full sm:h-full relative"
              />
            </div>
            <img
              src="/Glow-2.png"
              alt=""
              className="absolute -right-32 scale-x-[-1] -bottom-52 z-10 w-full h-full"
            />
            <Stars />
            <GreenDots />
            <SvgStarsBackground />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3.5, ease: easeOut, delay: 0.2 }}
              className="absolute size-[11rem] sm:size-[26rem] z-50 right-[2%] sm:left-[20%] rounded-full"
              style={{
                boxShadow: "0 0 500px 40px rgba(255, 255, 255, 0.3)",
              }}
            >
              <img src="/akshat-funny.png" alt="" className="object-contain" />
            </motion.div>
            <motion.div
              className="z-20 w-full sm:w-1/2 relative sm:-right-96 h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, ease: easeOut }}
            >
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: easeOut, delay: 0.2 }}
                className="relative -top-24 sm:-top-10 ml-8 sm:ml-12 uppercase text-[20px] sm:text-[34px] audiowide text-[#9CEBDB]"
              >
                The pulse of
              </motion.h1>
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: easeOut, delay: 0.5 }}
                className="relative -top-24 sm:-top-10 ml-8 audiowide sm:ml-12 z-20 text-white sm:text-[58px] text-[24px] uppercase"
              >
                What's happening <br />
                at SIAM
                <img
                  src="/vector11.svg"
                  alt=""
                  className="absolute top-[2rem] sm:top-[4.5rem] -left-12 sm:-left-20 -z-10 size-[65%]"
                />
              </motion.h1>
              <motion.h2
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: easeOut, delay: 0.7 }}
                className="z-50 leading-none afacad relative sm:top-0 -top-20 text-center text-white sm:text-[32px] text-[20px]"
              >
                Quizzes | Guest Talks | Hackathons | More...
              </motion.h2>
              <motion.img
                src="/vector12.svg"
                alt=""
                className="relative -top-16 sm:top-4 sm:left-12"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: easeOut, delay: 0.9 }}
              />
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: easeOut, delay: 1.1 }}
                className="relative right-[46rem] sm:right-[42rem] -top-12 sm:top-[4.5rem] w-[1800px] h-[220px] flex items-center justify-center"
              >
                <div
                  className="bg-[#28649721] z-0 flex flex-col items-center justify-center rounded-3xl backdrop-blur-xl w-[20rem] h-[7rem] sm:w-[58rem] sm:h-[18.5rem]"
                  style={{ transform: "translateZ(0)" }}
                >
                  <img
                    src="/vector15.svg"
                    alt=""
                    className="relative top-[2.6rem] sm:top-[3.65rem] size-[97%]"
                  />
                  <img
                    src="/vector13.svg"
                    alt=""
                    className="size-[75%] sm:size-[40%] relative -bottom-52 sm:bottom-0 -right-36 sm:-right-[27rem]"
                  />
                  <img
                    src="/vector14.svg"
                    alt="Show Events"
                    onClick={handleShowGrid}
                    className="absolute size-[20%] sm:size-[10%] top-[19rem] sm:top-[17.15rem] -right-[1.6rem] z-50 cursor-pointer hover:scale-110 transition-transform duration-300"
                  />
                  <span className="leading-normal sm:leading-relaxed afacad text-sm sm:text-[2.7rem] text-white !italic absolute right-32 sm:top-10 sm:right-20 text-left">
                    Because every great idea <br />
                    deserves a stage and every <br />
                    curious mind, a space to explore.
                  </span>
                </div>
              </motion.div>
              <motion.span
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: easeOut, delay: 1.4 }}
                className="text-white text-md manrope ml-8 sm:ml-10 -bottom-36 absolute"
              >
                Ready for more? Hit the arrow{" "}
                <br className="sm:hidden visible" />
                button and dive into our events!
              </motion.span>
            </motion.div>
          </motion.div>
        )}
        {view === "grid" && (
          <motion.div
            key="grid-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: easeOut }}
            className="w-full h-full sm:h-screen flex flex-col justify-start items-center relative top-5 sm:top-32"
          >
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeOut, delay: 0.2 }}
              className="manrope -mt-14 sm:mt-8 z-20 text-center text-white sm:text-[66px] text-[32px] mx-3 sm:mx-32"
            >
              What We Do?
            </motion.h1>
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeOut, delay: 0.5 }}
              src="/line.svg"
              alt=""
              className="z-20 sm:block hidden"
            />
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeOut, delay: 0.8 }}
              className="leading-relaxed manrope z-50 relative text-center text-white/90 sm:text-[22px] text-[14px] mx-3 sm:mx-96 mt-1 sm:mt-3"
            >
              Curious about what we've been up to? Tap the icons to dive into
              each fest! <br /> Or hit the button to keep exploring!
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeOut, delay: 1.1 }}
              className="flex items-center justify-between mx-3 gap-x-5 sm:mx-auto sm:w-2/3 mt-10"
              style={{ transform: "translateZ(0)" }}
            >
              <motion.button
                onClick={handleShowViewA}
                whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  src="/group-g.svg"
                  alt="View A"
                  className="backdrop-blur-md scale-130"
                />
              </motion.button>
              <motion.button
                onClick={handleShowViewB}
                whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  src="/group-r.svg"
                  alt="View B"
                  className="backdrop-blur-md scale-130"
                />
              </motion.button>
              <motion.button
                onClick={handleShowViewC}
                whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  src="/group-y.svg"
                  alt="View C"
                  className="backdrop-blur-md scale-130"
                />
              </motion.button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeOut, delay: 1.4 }}
              className="rounded-3xl mt-5 w-[20rem] sm:w-[60rem] h-[11rem] sm:h-[13rem] backdrop-blur-xl px-10 sm:p-5 bg-black/[0.34] flex items-center justify-center"
            >
              <img
                src={isMobile ? "/vector37.svg" : "/vector16.svg"}
                alt=""
                className="absolute right-0 sm:right-3 sm:mx-auto sm:size-[97%] size-[98%]"
              />
              <p className="manrope text-white leading-tight text-[0.67rem] text-md sm:text-lg text-center">
                SIAM thrives on blending innovation and creativity by organizing
                diverse events during cultural and tech fests. From interactive
                workshops and coding challenges to tech exhibitions and fun
                cultural-themed technical games, we ensure a perfect mix of
                learning and entertainment. These events cater to enthusiasts of
                all levels, fostering collaboration, skill development, and a
                passion for technology in an engaging environment.
              </p>
            </motion.div>
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeOut, delay: 1.4 }}
              onClick={handleShowViewD}
              src="/vector17.svg"
              alt="Explore Events"
              className="absolute top-[25.5rem] sm:top-52 size-20 sm:size-32 right-[9rem] sm:right-5 cursor-pointer"
            />
          </motion.div>
        )}
        {view === "viewA" && <ViewA onBack={handleShowGrid} />}
        {view === "viewB" && <ViewB onBack={handleShowGrid} />}
        {view === "viewC" && <ViewC onBack={handleShowGrid} />}
        {view === "viewD" && (
          <ViewD onBack={handleShowGrid} onNext={handleShowViewE} />
        )}
        {view === "viewE" && (
          <ViewE onBack={handleShowViewD} onNext={handleShowViewF} />
        )}
        {view === "viewF" && <ViewF onBack={handleShowViewE} />}
      </AnimatePresence>
    </div>
  );
};

export default EventsPageContent;
