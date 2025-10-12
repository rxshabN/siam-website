import { useState, useEffect } from "react";
import { motion, easeOut } from "framer-motion";
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

const GreenDots = ({ numberOfDots = 7, isMobile }) => {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    const generateDots = () => {
      const newDots = [];
      for (let i = 0; i < numberOfDots; i++) {
        if (isMobile) {
          // Full-screen random positioning for mobile
          newDots.push({
            id: i,
            top: Math.random() * 100,
            left: Math.random() * 100, // Use 'left' for full spread
            size: Math.random() * 4 + 4,
          });
        } else {
          // Original clustered positioning for desktop
          newDots.push({
            id: i,
            top: 77 + Math.random() * 14,
            right: 20 + Math.random() * 10,
            size: Math.random() * 4 + 4,
            duration: Math.random() * 4 + 4,
            delay: Math.random() * 2,
          });
        }
      }
      setDots(newDots);
    };

    generateDots();
  }, [numberOfDots, isMobile]);

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
      {dots.map((dot) =>
        isMobile ? (
          <StaticGreenDot key={dot.id} {...dot} />
        ) : (
          <GreenDot key={dot.id} {...dot} />
        )
      )}
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

const StaticGreenDot = ({ top, left, size }) => (
  <div
    className="absolute rounded-full"
    style={{
      top: `${top}%`,
      left: `${left}%`,
      width: `${size}px`,
      height: `${size}px`,
      backgroundColor: "#0CE46C",
      boxShadow: "0 0 8px 4px rgba(0, 27, 12, 1)",
    }}
  />
);

const StaticStar = ({ top, left }) => (
  <div
    className="absolute rounded-full bg-white"
    style={{
      top: `${top}%`,
      left: `${left}%`,
      width: "4px",
      height: "4px",
    }}
  />
);

const Stars = ({ numberOfStars = 35, isMobile }) => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      // Use the isMobile prop to determine the range for top and left
      const topRange = isMobile ? 100 : 60;
      const leftRange = isMobile ? 100 : 60;

      for (let i = 0; i < numberOfStars; i++) {
        newStars.push({
          id: i,
          top: Math.random() * topRange,
          left: Math.random() * leftRange,
          duration: Math.random() * 5 + 5,
          delay: Math.random() * 3,
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, [numberOfStars, isMobile]);

  // Conditionally apply positioning to the container
  const containerClassName = isMobile
    ? "absolute top-0 left-0 w-full h-full pointer-events-none"
    : "absolute -top-24 -left-16 w-full h-full pointer-events-none";

  return (
    <div className={containerClassName}>
      {stars.map((star) =>
        isMobile ? (
          <StaticStar key={star.id} {...star} />
        ) : (
          <Star key={star.id} {...star} />
        )
      )}
    </div>
  );
};

const AboutPageContent = () => {
  const isMobile = useIsMobile();
  return (
    <div
      className={`${
        isMobile ? "overflow-y-auto" : "overflow-hidden"
      } relative z-10 min-h-screen min-w-screen bg-black poppins flex flex-col justify-center items-center`}
    >
      <img
        src={isMobile ? "/grid-mobile.png" : "/grid.png"}
        alt=""
        className="w-full max-h-screen overflow-hidden absolute"
      />
      <img
        src={isMobile ? "/vector30.svg" : "/vector-4.svg"}
        alt=""
        className="absolute sm:-bottom-2/3 sm:-right-20 sm:size-[120rem] bottom-0 w-full h-full"
      />
      <Stars isMobile={isMobile} />
      <GreenDots isMobile={isMobile} />
      <SvgStarsBackground />
      <motion.div
        className="z-20 absolute sm:mt-20 top-20 sm:top-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: easeOut }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOut, delay: 0.2 }}
          className="mt-2 z-20 text-center text-white text-[18px] mx-10 uppercase sm:hidden block"
        >
          About us
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOut, delay: 0.5 }}
          className="sm:mt-8 mt-4 z-20 text-center text-white sm:text-[58px] text-[34px] mx-2 sm:mx-32"
        >
          Built by Students. <br className="sm:hidden block" />
          Backed by Vision.
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOut, delay: 0.8 }}
          className="z-50 leading-[1.7rem] sm:leading-none afacad relative text-center text-white sm:text-[26px] text-[15px] mx-4 sm:mx-96 mt-2 sm:mt-16"
        >
          SIAM is a globally recognized organization dedicated to bridging the
          gap between mathematics and technology. Headquartered in Philadelphia,
          USA, with an active presence at VIT in India, SIAM provides a platform
          for students to explore diverse fields such as web and app
          development, machine learning, competitive coding, design, content
          creation, management, and research & development. Our community hosts
          a variety of engaging events and competitions, including the Math
          Premier League, VIT's Got Talent, Powerplay Arcade, Codebreakers, and
          Hackulus.{" "}
          <span className="sm:inline hidden">
            At SIAM, we foster innovation, collaboration, and learning, creating
            opportunities for students to grow and excel in the ever-evolving
            tech landscape.
          </span>
        </motion.h2>
      </motion.div>

      <motion.footer
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: easeOut, delay: 1.2 }}
        className="hidden manrope absolute bottom-12 z-20 sm:flex flex-col items-center justify-center gap-y-3 text-center font-[600] sm:text-[20px] text-[14px] text-white"
      >
        <div className="flex items-center justify-center gap-x-10">
          <a
            href="https://instagram.com/siamvit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              color="#ffffff"
              fill="none"
              className="sm:w-[32px] sm:h-[32px] w-[40px] h-[40px]"
            >
              <path
                d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M17.5078 6.5L17.4988 6.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="https://github.com/SIAM-VIT"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="sm:w-[32px] sm:h-[32px] w-[40px] h-[40px]"
              color="#ffffff"
              fill="none"
            >
              <path
                d="M6.51734 17.1132C6.91177 17.6905 8.10883 18.9228 9.74168 19.2333M9.86428 22C8.83582 21.8306 2 19.6057 2 12.0926C2 5.06329 8.0019 2 12.0008 2C15.9996 2 22 5.06329 22 12.0926C22 19.6057 15.1642 21.8306 14.1357 22C14.1357 22 13.9267 18.5826 14.0487 17.9969C14.1706 17.4113 13.7552 16.4688 13.7552 16.4688C14.7262 16.1055 16.2043 15.5847 16.7001 14.1874C17.0848 13.1032 17.3268 11.5288 16.2508 10.0489C16.2508 10.0489 16.5318 7.65809 15.9996 7.56548C15.4675 7.47287 13.8998 8.51192 13.8998 8.51192C13.4432 8.38248 12.4243 8.13476 12.0018 8.17939C11.5792 8.13476 10.5568 8.38248 10.1002 8.51192C10.1002 8.51192 8.53249 7.47287 8.00036 7.56548C7.46823 7.65809 7.74917 10.0489 7.74917 10.0489C6.67316 11.5288 6.91516 13.1032 7.2999 14.1874C7.79575 15.5847 9.27384 16.1055 10.2448 16.4688C10.2448 16.4688 9.82944 17.4113 9.95135 17.9969C10.0733 18.5826 9.86428 22 9.86428 22Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/siam-vit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              color="#ffffff"
              fill="none"
              className="sm:border-2 border-[1px] border-white rounded-xl p-1 sm:w-[32px] sm:h-[32px] w-[40px] h-[40px]"
            >
              <path
                d="M4.5 9.5H4C3.05719 9.5 2.58579 9.5 2.29289 9.79289C2 10.0858 2 10.5572 2 11.5V20C2 20.9428 2 21.4142 2.29289 21.7071C2.58579 22 3.05719 22 4 22H4.5C5.44281 22 5.91421 22 6.20711 21.7071C6.5 21.4142 6.5 20.9428 6.5 20V11.5C6.5 10.5572 6.5 10.0858 6.20711 9.79289C5.91421 9.5 5.44281 9.5 4.5 9.5Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M6.5 4.25C6.5 5.49264 5.49264 6.5 4.25 6.5C3.00736 6.5 2 5.49264 2 4.25C2 3.00736 3.00736 2 4.25 2C5.49264 2 6.5 3.00736 6.5 4.25Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M12.326 9.5H11.5C10.5572 9.5 10.0858 9.5 9.79289 9.79289C9.5 10.0858 9.5 10.5572 9.5 11.5V20C9.5 20.9428 9.5 21.4142 9.79289 21.7071C10.0858 22 10.5572 22 11.5 22H12C12.9428 22 13.4142 22 13.7071 21.7071C14 21.4142 14 20.9428 14 20L14.0001 16.5001C14.0001 14.8433 14.5281 13.5001 16.0879 13.5001C16.8677 13.5001 17.5 14.1717 17.5 15.0001V19.5001C17.5 20.4429 17.5 20.9143 17.7929 21.2072C18.0857 21.5001 18.5572 21.5001 19.5 21.5001H19.9987C20.9413 21.5001 21.4126 21.5001 21.7055 21.2073C21.9984 20.9145 21.9985 20.4432 21.9987 19.5006L22.0001 14.0002C22.0001 11.515 19.6364 9.50024 17.2968 9.50024C15.9649 9.50024 14.7767 10.1531 14.0001 11.174C14 10.5439 14 10.2289 13.8632 9.995C13.7765 9.84686 13.6531 9.72353 13.505 9.63687C13.2711 9.5 12.9561 9.5 12.326 9.5Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="https://www.youtube.com/c/SIAMVIT"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="sm:w-[40px] sm:h-[40px] w-[45px] h-[45px]"
              color="#ffffff"
              fill="none"
            >
              <path
                d="M12 20.5C13.8097 20.5 15.5451 20.3212 17.1534 19.9934C19.1623 19.5839 20.1668 19.3791 21.0834 18.2006C22 17.0221 22 15.6693 22 12.9635V11.0365C22 8.33073 22 6.97787 21.0834 5.79937C20.1668 4.62088 19.1623 4.41613 17.1534 4.00662C15.5451 3.67877 13.8097 3.5 12 3.5C10.1903 3.5 8.45489 3.67877 6.84656 4.00662C4.83766 4.41613 3.83321 4.62088 2.9166 5.79937C2 6.97787 2 8.33073 2 11.0365V12.9635C2 15.6693 2 17.0221 2.9166 18.2006C3.83321 19.3791 4.83766 19.5839 6.84656 19.9934C8.45489 20.3212 10.1903 20.5 12 20.5Z"
                stroke="currentColor"
                stroke-width="1.5"
              />
              <path
                d="M15.9621 12.3129C15.8137 12.9187 15.0241 13.3538 13.4449 14.2241C11.7272 15.1705 10.8684 15.6438 10.1728 15.4615C9.9372 15.3997 9.7202 15.2911 9.53799 15.1438C9 14.7089 9 13.8059 9 12C9 10.1941 9 9.29112 9.53799 8.85618C9.7202 8.70886 9.9372 8.60029 10.1728 8.53854C10.8684 8.35621 11.7272 8.82945 13.4449 9.77593C15.0241 10.6462 15.8137 11.0813 15.9621 11.6871C16.0126 11.8933 16.0126 12.1067 15.9621 12.3129Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
        <span className="copyright text-center text-base">
          &copy; {new Date().getFullYear()} SIAM VIT. All rights reserved.
        </span>
      </motion.footer>
    </div>
  );
};

export default AboutPageContent;
