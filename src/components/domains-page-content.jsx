import React, { useState, useEffect } from "react";
import { useWindowSize } from "react-use";
import { easeOut, motion, AnimatePresence } from "framer-motion";
import useIsMobile from "../hooks/useIsMobile";

const domainInfo = [
  {
    title: "Web Development",
    description:
      "We specialize in building high-performance web applications, ranging from static single-page websites to dynamic multi-page platforms. Leveraging cutting-edge frameworks and libraries, we ensure seamless interactivity, scalability, and efficiency. You'll gain hands-on experience in developing real-world web applications and contributing to impactful projects with SIAM.",
    logo: "webdev.webp",
  },
  {
    title: "App Development",
    description:
      "Our expertise lies in designing and developing scalable, responsive mobile applications tailored for both iOS and Android. Using modern technologies like Flutter, we create seamless cross-platform solutions while focusing on optimized UI/UX and production-level performance. You'll master app structuring, UI design, and performance tuning for real-world applications.",
    logo: "appdev.webp",
  },
  {
    title: "AI & ML",
    description:
      "We focus on building intelligent systems by exploring machine learning algorithms, neural networks, and AI-driven applications. We delve into deep learning, reinforcement learning, and generative AI. You'll gain hands-on experience in training and deploying models using TensorFlow, PyTorch, and Scikit-Learn, working on real-world AI solutions.",
    logo: "aiml.webp",
  },
  {
    title: "Competitive Coding",
    description:
      "We provide structured training in problem-solving, data structures, and algorithms through daily LeetCode challenges and competitive programming exercises. We prepare you for placements by strengthening your coding fundamentals, improving algorithmic thinking, and offering curated resources to excel in coding interviews and contests.",
    logo: "compcoding.webp",
  },
  {
    title: "Design",
    description:
      "We craft visually stunning designs for digital platforms, including social media content, event posters, and promotional banners. Our focus extends to UI/UX design, where you'll learn to create website and app prototypes using Figma. With hands-on experience in tools like Canva and Figma, you'll develop professional-level designs for diverse applications.",
    logo: "design.webp",
  },
  {
    title: "Content Creation",
    description:
      "We specialize in producing engaging and high-quality multimedia content for social media, YouTube, and LinkedIn. This domain covers the entire content creation pipeline, from ideation and scripting to shooting and editing aftermovies and digital campaigns. You'll develop expertise in video production, reel making, and social media branding.",
    logo: "cc.webp",
  },
  {
    title: "Research and Development",
    description:
      "We empower students to initiate and execute impactful research projects by providing guidance on formulating research questions, structuring methodologies, and collaborating with faculty. This domain emphasizes leveraging mathematical modeling, computational techniques, and innovative problem-solving strategies to drive meaningful research advancements.",
    logo: "r&d.webp",
  },
];

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

const SvgStarsBackground = ({ numberOfSvgStars = 4 }) => {
  const [svgStars, setSvgStars] = useState([]);

  useEffect(() => {
    const generateSvgStars = () => {
      const newSvgStars = [];
      for (let i = 0; i < numberOfSvgStars; i++) {
        newSvgStars.push({
          id: i,
          top: Math.random() * 100,
          left: Math.random() * 100,
          size: Math.random() * 30 + 15,
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

const DomainDetailPopup = ({ domain, onClose, height }) => {
  const isMobile1 = useIsMobile();
  return (
    <motion.div
      initial={{ opacity: 0, y: height }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0.8, y: height }}
      transition={{ duration: 0.7, ease: easeOut }}
      className="overflow-hidden absolute sm:top-0 inset-0 bg-black/30 backdrop-blur-md z-[100] flex items-center justify-center"
    >
      <img
        src={isMobile1 ? "/vector35.svg" : "/vector25.svg"}
        alt=""
        className="absolute sm:size-[95%] size-[98%]"
      />
      <img
        src={isMobile1 ? "/vector36.svg" : "/vector26.svg"}
        alt=""
        className="absolute size-[90%] sm:size-[95%] top-80"
      />
      <button
        onClick={onClose}
        className="audiowide mt-3 px-8 sm:px-12 py-2 bg-gradient-to-r from-[#2b684e] to-[#001b0c] text-white rounded-2xl z-50 text-xl sm:text-3xl absolute bottom-7 sm:bottom-20"
      >
        Back
      </button>
      <div className="flex sm:flex-row flex-col items-center justify-center h-full w-full p-5">
        <div className="sm:w-1/3 h-1/2 sm:block flex items-center justify-center relative">
          <div className="absolute sm:-top-32 -top-16 left-[4.25rem] sm:left-[10.5rem] rounded-3xl w-[10rem] h-[10rem] sm:w-[20rem] sm:h-[22rem] backdrop-blur-xl p-5 bg-[#00000040] flex items-center justify-center">
            <img src="/vector28.svg" alt="" className="absolute size-[95%]" />
            <div className="relative bg-transparent size-[95%]">
              <img
                src={domain.logo}
                alt=""
                className="object-contain w-full h-full"
              />
            </div>
          </div>
          <img
            src="/vector27.svg"
            alt=""
            className="relative size-[80%] sm:size-[90%] -top-2 left-0 sm:left-28 sm:top-44"
          />
        </div>
        <div className="sm:w-2/3 h-1/2 flex flex-col items-center justify-start text-center text-white -mt-36 sm:-mt-32">
          <h1 className="text-3xl sm:text-6xl manrope uppercase font-extrabold mb-2 sm:mb-10">
            About {domain.title}
          </h1>
          <p className="-mt-2 text-base sm:text-2xl afacad sm:leading-[3rem] sm:px-32 px-7">
            {domain.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const DomainsPageContent = ({ activeDomain, setActiveDomain }) => {
  const isMobile1 = useIsMobile();
  const { height } = useWindowSize();
  const [isAnimating, setIsAnimating] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const handleClose = () => {
    setActiveDomain(null);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isAnimating ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isAnimating]);

  const selectedDomain = domainInfo.find((d) => d.title === activeDomain);
  return (
    <>
      <div className="overflow-hidden relative z-10 min-h-screen min-w-screen bg-black poppins flex flex-col justify-center items-center">
        <img
          src={isMobile1 ? "/grid-mobile.png" : "/grid.png"}
          alt=""
          className="w-full max-h-screen overflow-hidden absolute"
        />
        <img
          src="/vector-3.svg"
          alt=""
          className="absolute -top-44 right-1/3 size-[80rem] sm:block hidden"
        />
        <img
          src="/vector.svg"
          alt=""
          className="absolute top-1/2 left-1/3 sm:block hidden"
        />
        <img
          src="/vector-2.svg"
          alt=""
          className="absolute top-1/2 left-1/3 size-10"
        />
        <img
          src="/vector-2.svg"
          alt=""
          className="absolute top-[70%] left-10 size-32 sm:hidden block"
        />
        <img
          src="/vector-2.svg"
          alt=""
          className="absolute top-[85%] left-10 size-10 sm:hidden block"
        />
        <img
          src="/vector-2.svg"
          alt=""
          className="absolute top-32 right-10 sm:left-20 sm:size-24 size-20"
        />
        <img src="/vector21.svg" alt="" className="absolute left-0" />
        <Stars />
        <GreenDots />
        <SvgStarsBackground />
        <motion.div
          className="z-20 absolute w-full px-10 sm:mt-20 top-20 sm:top-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: easeOut }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.2 }}
            className="audiowide uppercase z-20 text-center sm:text-left text-white sm:text-[40px] text-[20px]"
          >
            Welcome to the SIAM Skill <br className="sm:block hidden" />
            galaxy
          </motion.h1>
          {/* 1. Outer div for the gradient border */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.5 }}
            className="z-50 rounded-3xl w-[16rem] h-[4rem] sm:w-[23rem] sm:h-[17rem] p-[3px] bg-[#c7e1db0b] relative top-[24rem] left-[1.3rem] sm:top-8 sm:left-14"
            style={{
              boxShadow: "0 0 10px 2px rgba(0, 27, 12, 0.15)",
            }}
          >
            {/* 2. Inner div for the content background */}
            <div className="w-full h-full bg-gradient-to-r from-[#005f213f] to-[#009c3967] backdrop-blur-2xl rounded-[22px] flex items-center justify-center">
              <span className="text-white braah-one text-sm sm:text-3xl text-center leading-relaxed">
                Curious about our domains? <br /> Tap an icon to dive in!
              </span>
            </div>
          </motion.div>
          <motion.img
            src={isMobile1 ? "/vector33.svg" : "/orb.svg"}
            alt=""
            className="z-30 absolute top-[32.5rem] left-[11rem] sm:left-[15.2rem] sm:top-[28rem]"
            animate={{
              y: isMobile ? [0, -5, 0] : [0, -15, 0],
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
            src={isMobile1 ? "/vector34.svg" : "/base.svg"}
            alt=""
            className="absolute top-[32.5rem] left-[9.475rem] sm:left-40 sm:top-[28rem]"
          />
        </motion.div>
        <div className="w-full h-full relative z-50">
          <div className="absolute -top-40 size-[19rem] left-[10vw] right-auto sm:size-[36rem] sm:-top-60 sm:right-32 sm:left-auto flex items-center justify-center">
            <img
              src="/vector24.svg"
              alt="Track"
              className="absolute w-full h-full"
            />
            <div className="absolute w-40 h-40 sm:w-80 sm:h-80 flex items-center justify-center">
              <img
                src="/vector23.svg"
                alt="Sun"
                className="w-full h-full relative left-10 -top-2 sm:left-16 sm:-top-6"
              />
              <span className="relative right-20 sm:right-[9.7rem] sm:-top-2 z-50 audiowide text-white uppercase text-xs sm:text-xl text-center">
                journey <br />
                through <br />
                our siam <br />
                domainverse
              </span>
            </div>

            {domainInfo.map((domain, index) => {
              const angle = index * (360 / domainInfo.length);
              return (
                <motion.div
                  key={domain.title}
                  className="absolute w-full h-full pointer-events-none"
                  initial={{ rotate: angle }}
                  animate={{ rotate: angle + 360 }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <motion.button
                      onClick={() => setActiveDomain(domain.title)}
                      className="w-20 h-20 sm:w-36 sm:h-36 rounded-full bg-[#01C3FD24] backdrop-blur-xl flex justify-center items-center cursor-pointer pointer-events-auto"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <motion.div
                        className="text-white braah-one text-center text-xs sm:text-lg"
                        initial={{ rotate: -angle }}
                        animate={{ rotate: -(angle + 360) }}
                        transition={{
                          duration: 30,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        {domain.title.replace("and ", "& ")}
                      </motion.div>
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
      <AnimatePresence>
        {activeDomain && selectedDomain && (
          <DomainDetailPopup
            domain={selectedDomain}
            onClose={handleClose}
            height={height}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default DomainsPageContent;
