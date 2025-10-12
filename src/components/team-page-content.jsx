import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  easeOut,
  easeInOut,
} from "framer-motion";
import { useWindowSize } from "react-use";
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
    // eslint-disable-next-line
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

const gridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
      ease: easeOut,
    },
  },
};

const MemberCard = ({ member, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-[#001B0CCC] relative -top-12 rounded-[18px] flex flex-col items-center cursor-pointer w-[230px] h-[270px]"
    >
      {/* Base SVG */}
      <div className="absolute -bottom-16 w-[200px] h-[100px]">
        <img
          src="vector-10.svg"
          alt=""
          className="bg-transparent relative left-3"
        />
      </div>

      {/* Card Content */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="relative w-[210px] h-[210px]">
          <img
            src="vector-7.svg"
            alt="Card Border"
            className="w-[24rem] h-[52rem] relative -top-72 pointer-events-none"
          />
          <div className="absolute inset-2.5">
            <img
              src={member.img}
              alt={member.name}
              className="relative rounded-[18px]"
            />
          </div>
        </div>
        <h3 className="-mt-7 font-semibold text-xl text-white manrope">
          {member.name}
        </h3>
        <p className="text-wrap w-52 text-center mt-1 text-sm text-gray-400 uppercase tracking-widest manrope">
          {member.role}
        </p>
      </div>
    </div>
  );
};

const MobileMemberCard = ({ member, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-[#001B0C99] rounded-2xl flex flex-col items-center cursor-pointer w-32 h-40 p-2 backdrop-blur-sm"
    >
      <div className="absolute w-28 h-20 mt-2">
        <img
          src="vector32.svg"
          alt="Card Border"
          className="absolute size-[150px] -top-2"
        />
        <div className="absolute inset-1.5">
          <img
            src={member.img}
            alt={member.name}
            className="w-4/5 mx-auto h-full object-cover rounded-xl"
          />
        </div>
      </div>
      <h3 className="mt-2 font-semibold text-[0.8rem] text-white manrope text-center relative top-20">
        {member.name}
      </h3>
      <p className="w-full text-center text-[10px] text-gray-400 uppercase tracking-wider manrope mt-2 relative top-20">
        {member.role}
      </p>
    </div>
  );
};

const TeamPageContent = () => {
  const [view, setView] = useState("intro");
  const [isAnimating, setIsAnimating] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [activePerson, setActivePerson] = useState(null);
  const { height } = useWindowSize();
  const [carouselPage, setCarouselPage] = useState(0);
  const isMobile1 = useIsMobile();
  // eslint-disable-next-line
  const [desktopCarouselPage, setDesktopCarouselPage] = useState(0);
  const [mobileCarouselPage, setMobileCarouselPage] = useState(0);
  const [slideDirection, setSlideDirection] = useState(1);
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

  const handleClose = () => {
    setActivePerson(null);
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

  const boardDetails = [
    {
      name: "Aaditya Roshan",
      role: "Chairperson",
      desc: "A visionary leader with persistent optimism, Aaditya has been the driving force behind our chapter’s growth and success. His ability to bring out the best in people, combined with his sharp wit and approachable nature, makes him an exceptional mentor and guide. A commanding presence, he leads with confidence and purpose—steering the team forward with encouragement. Whether it’s solving challenges, or ensuring that every initiative runs smoothly, he has a knack for getting things done effortlessly. Always ready to help and uplift those around him, Aaditya’s leadership is defined by both efficiency and a genuine commitment to the people he works with.",
      img: "aaditya roshan.png",
      linkedin: "https://www.linkedin.com/in/aaditya-roshan-02a519274/",
    },
    {
      name: "Harsh Agrawal",
      role: "Vice Chairperson",
      desc: "Harsh Agrawal is the Vice-Chairperson of SIAM, and he represents persistence, reasonableness, and logic in everything he does. Friendly and approachable, he creates a team-like atmosphere while also remaining acutely problem-solving in nature. He is a sports buff who is an avid fan of football and athletics, which instils in him the competitive nature. In addition to his passion for sports, Harsh also has an interest in developing apps, where he uses his analytical mind to develop creative solutions. His skill in merging leadership, technical know-how, and teamwork makes him a valued and esteemed person in both professional and co-curricular life.",
      img: "harsh agarwal.png",
      linkedin: "https://www.linkedin.com/in/harsh-agrawal-9706a12aa/",
    },
    {
      name: "Rinika Paramba",
      role: "General Secretary",
      desc: "Rinika, the name itself exudes confidence, boldness, and an unyielding drive for excellence. She may seem strict at first, but beneath that tough exterior lies a heart of gold. A true pillar of reliability, she’s always there when you need her. With the most unpredictable (and slightly maniacal?) ideas, she brings an energy to SIAM that no one else can match. A force to reckon with, she’s not just a leader but an inspiring mentor, especially in speaking, anchoring, and commanding a stage with finesse. She is the kind of General Secretary every team wishes for!",
      img: "rinika paramba.png",
      linkedin: "https://www.linkedin.com/in/rinika-sujith-paramba-712a41279/",
    },
    {
      name: "Leena Kannan",
      role: "Co-Secretary",
      desc: "Leena is the backbone of our chapter’s operations, effortlessly balancing event coordination and documentation while keeping everything running like clockwork. As our co-secretary, she ensures that every event is flawlessly executed, reports are precise, and all necessary processes like OD handling are completed on time. Beyond her incredible abilities, Leena is an avid Liverpool supporter and truly appreciates metallic legends like AC/DC, Def Leppard, Jimi Hendrix, Nirvana, and Linkin Park. But what really lights up her world? Animals—she loves interacting with all the cats and dogs she meets. With her efficiency, enthusiasm, and love for both order and chaos, Leena is truly one of a kind!",
      img: "leena kannan.png",
      linkedin: "https://www.linkedin.com/in/leena-kannan-a69459267/",
    },
    {
      name: "Akshat Gupta",
      role: "Technical Head",
      desc: "One of the sharpest minds and most passionate tech enthusiasts you'll ever meet, Akshat represents the very best our chapter has to offer. Whether it's coding, backend development, or staying ahead of the latest tech trends, he's always at the forefront, pushing boundaries and innovating. His keen intellect is matched by his approachable and friendly nature, making him not just a brilliant problem-solver but also a great mentor. With a deep love for technology, Akshat is the go-to person for anything tech-related, always ready to share knowledge and spark engaging discussions.",
      img: "akshat gupta.png",
      linkedin: "https://www.linkedin.com/in/akshat-gupta-864b39235",
    },
    {
      name: "Nischitha Shetty",
      role: "Projects & Publicity Head",
      desc: "Nischitha has been playing a crucial role in driving both project execution and outreach, as the Projects & Publicity Head of our chapter. Known for her unwavering focus and efficiency, she approaches every task with a decisive, all-in attitude—getting things done in one go, especially when deadlines are approaching. Her ability to manage multiple initiatives while maintaining quality has left a lasting impact on the chapter’s work. In addition to overseeing projects, she ensures that our initiatives reach a wider audience. As a dedicated leader, she has set a high standard for commitment and excellence.",
      img: "nischitha shetty.png",
      linkedin: "https://www.linkedin.com/in/nischitha-n-shetty-b70756283/",
    },
    {
      name: "Kunal Kundnani",
      role: "Design Head",
      desc: "If SIAM had a face of creativity, it would undoubtedly be Kunal Kundnani! With his amazing design skills, sharp aesthetics and out-of-the-box creativity, he made every project look outstanding. From stunning event posters to stylish social media designs, his work spoke volumes, making SIAM VIT’s visual identity stand out effortlessly. But Kunal wasn’t just about pixels and palettes-he is also the heart of the team! His fun-loving, approachable and ever-helpful nature made working with him an absolute delight. Whether it was brainstorming ideas, guiding juniors or simply cracking jokes to keep the vibe light, he ensured that creativity always flowed without pressure.",
      img: "kunal kundnani.png",
      linkedin: "https://www.linkedin.com/in/kunal-kundnani-452288274/",
    },
    {
      name: "Samarth Shokeen",
      role: "Events Head",
      desc: "Samarth is the kind of senior who leads effortlessly, making things happen while ensuring everything feels easier. He’s caring and always ready to listen, making sure no one feels unheard. Chill and approachable, yet when needed, he knows when to switch from a friend to a mentor, balancing firmness with understanding. A great basketball player, he carries himself with confidence but never arrogance, always making the game fun. When things get tricky, he steps in with the right mix of support, guidance, and perspective. A senior you respect, not because you have to, but because you genuinely want to.",
      img: "samarth shokeen.png",
      linkedin: "https://www.linkedin.com/in/samarth-shokeen-933a80257/",
    },
    {
      name: "Ashutosh Chandra",
      role: "Creative Head",
      desc: "Ashutosh Chandra, our Creative Head at SIAM VIT, is the driving force behind our Instagram magic, event reels, and public presence. With a keen eye for detail and a knack for getting things done, he makes sure every initiative is executed flawlessly and on time. His creative vision brings a unique touch to everything he works on, from brainstorming concepts to final edits. Though he prefers letting his work do the talking, his impact is undeniable. Always behind the scenes, but never unnoticed. His ability to consistently deliver outstanding results makes him an essential part of our team’s success.",
      img: "ashutosh chandra.png",
      linkedin: "https://www.linkedin.com/in/ashutosh-chandra-7b76a92aa/",
    },
    {
      name: "Yash Bothra",
      role: "HR & Finance Head",
      desc: "A natural leader with a strong commitment to teamwork, Yash is the driving force behind our chapter’s community. He ensures smooth operations by planning, coordinating, and fostering collaboration between the board and core members. Dedicated to creating a professional and inclusive environment, he oversees enrollment, training, and team development while maintaining unity within the core committee. Approachable and insightful, he plays a key role in building a motivated and cohesive team, ensuring everyone works together toward a shared vision.",
      img: "yash bothra.png",
      linkedin: "https://www.linkedin.com/in/yashb1729/",
    },
  ];

  const handleShowGrid = () => {
    setView("grid");
  };

  const person = boardDetails.find(
    (member) => member.name.toLowerCase() === activePerson
  );

  const handleMobileNavigation = (direction) => {
    setSlideDirection(direction);
    setMobileCarouselPage((prev) => prev + direction);
  };

  const membersPerPageMobile = 4;
  const totalMobilePages = Math.ceil(
    boardDetails.length / membersPerPageMobile
  );
  const membersToShowMobile = boardDetails.slice(
    mobileCarouselPage * membersPerPageMobile,
    (mobileCarouselPage + 1) * membersPerPageMobile
  );

  const mobileCarouselVariants = {
    enter: (direction) => ({ x: direction > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: "0%", opacity: 1 },
    exit: (direction) => ({ x: direction < 0 ? "100%" : "-100%", opacity: 0 }),
  };
  const firstPageMembers = boardDetails.slice(0, 5);
  const secondPageMembers = boardDetails.slice(5, 10);

  const handleCarousel = (direction) => {
    setCarouselPage((prev) => (direction === "next" ? 1 : 0));
  };

  return (
    <>
      <AnimatePresence mode="wait">
        <div className="relative w-full min-h-screen poppins overflow-hidden text-white">
          <AnimatePresence>
            {view === "intro" && (
              <motion.img
                key="board-bg"
                src={isMobile1 ? "/group6.png" : "/board.png"}
                alt="board"
                initial={{ opacity: 0.15 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-screen h-full opacity-[0.15] object-cover"
              />
            )}
            {view === "grid" && (
              <>
                <motion.img
                  key="grid-bg"
                  src="/grid.png"
                  alt="grid"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 w-full h-full"
                />
                <Stars />
                <GreenDots />
              </>
            )}
          </AnimatePresence>
          <img
            src={isMobile1 ? "/vector31.svg" : "/vector-5.svg"}
            alt=""
            className="w-screen h-screen absolute z-0 overflow-hidden"
          />
          <div className="top-0 absolute w-full h-full z-30 flex flex-col items-center justify-start">
            <AnimatePresence mode="wait">
              {view === "intro" && (
                <motion.div
                  key="intro-view"
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center"
                >
                  <div className="pt-8 h-1/3 w-full text-center flex-col items-center justify-center">
                    <motion.h1
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{
                        y: 100,
                        opacity: 0,
                        transition: {
                          duration: 0.4,
                          ease: easeOut,
                          delay: 0.4,
                        },
                      }}
                      transition={{
                        duration: 0.7,
                        ease: easeOut,
                        delay: 0.2,
                      }}
                      className="manrope text-[50px] sm:text-[45px] font-normal uppercase mt-36"
                    >
                      Our team
                    </motion.h1>
                    <motion.h2
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{
                        y: 100,
                        opacity: 0,
                        transition: {
                          duration: 0.4,
                          ease: easeOut,
                          delay: 0.2,
                        },
                      }}
                      transition={{
                        duration: 0.7,
                        ease: easeOut,
                        delay: 0.5,
                      }}
                      className="sm:ml-0 ml-2 sm:px-0 px-20 poppins text-[20px] sm:text-[35px] font-light mt-3 sm:mt-10 tracking-[0.4rem]"
                    >
                      Together, We Dream. Together, We Deliver.
                    </motion.h2>
                  </div>
                  <div className="relative w-[600px] h-[220px] mt-48 flex items-center justify-center">
                    <motion.div
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{
                        y: 100,
                        opacity: 0,
                        transition: {
                          duration: 0.4,
                          ease: easeOut,
                          delay: 0.1,
                        },
                      }}
                      transition={{
                        duration: 0.7,
                        ease: easeOut,
                        delay: 0.8,
                      }}
                      className="z-0 flex flex-col items-center justify-center rounded-3xl backdrop-blur-xl sm:w-[35rem] sm:h-[16.3rem] w-[24rem] h-[10rem]"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={isMobile1 ? "380" : "600"}
                        height="220"
                        viewBox="0 0 630 261"
                        fill="none"
                        className="absolute z-10"
                      >
                        <path
                          d="M599 1H31C14.4315 1 1 14.4315 1 31V230C1 246.569 14.4315 260 31 260H599C615.569 260 629 246.569 629 230V31C629 14.4315 615.569 1 599 1Z"
                          stroke="url(#paint0_linear_678_221)"
                          strokeWidth="2"
                          strokeMiterlimit="10"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_678_221"
                            x1="415.727"
                            y1="-191.385"
                            x2="598.906"
                            y2="283.925"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop
                              offset="0.200654"
                              stopColor="#004DF4"
                              stopOpacity="0"
                            />
                            <stop
                              offset="0.384652"
                              stopColor="#07EAD3"
                              stopOpacity="0.49"
                            />
                            <stop offset="0.493294" stopColor="#0CE46C" />
                            <stop
                              offset="0.588813"
                              stopColor="#26DDFF"
                              stopOpacity="0.53"
                            />
                            <stop
                              offset="0.953267"
                              stopColor="#26DDFF"
                              stopOpacity="0"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={isMobile1 ? "90" : "110"}
                        height="120"
                        viewBox="0 0 148 161"
                        fill="none"
                        className="mb-3 cursor-pointer z-[999] relative"
                        onClick={handleShowGrid}
                      >
                        <path
                          d="M122.392 83.3646C130.037 111.218 112.789 139.931 83.8684 147.496C65.9696 152.178 47.7945 147.663 34.7286 136.939"
                          stroke="url(#paint0_linear_678_204)"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                        />
                        <path
                          d="M33.119 137.082C34.967 136.598 36.0295 134.799 35.5337 132.993C35.038 131.187 33.1965 130.147 31.3485 130.631C29.5006 131.114 28.4381 132.913 28.9338 134.719C29.2976 136.56 31.2711 137.565 33.119 137.082Z"
                          fill="#2C3D4C"
                          stroke="url(#paint1_linear_678_204)"
                          strokeMiterlimit="10"
                        />
                        <path
                          d="M15.7086 72.6663C23.4567 44.436 53.0892 27.6594 81.8945 35.1946C99.722 39.8581 113.055 52.7407 118.791 68.5749"
                          stroke="url(#paint2_linear_678_204)"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                        />
                        <path
                          d="M119.885 63.0169C118.037 62.5335 116.195 63.5729 115.699 65.3791C115.204 67.1853 116.266 68.9843 118.114 69.4677C119.962 69.9511 121.804 68.9118 122.299 67.1056C122.927 65.3339 121.733 63.5004 119.885 63.0169Z"
                          fill="#2C3D4C"
                          stroke="url(#paint3_linear_678_204)"
                          strokeMiterlimit="10"
                        />
                        <ellipse
                          cx="70.1451"
                          cy="90.9031"
                          rx="39.1074"
                          ry="38.7853"
                          fill="url(#paint4_linear_678_204)"
                        />
                        <g filter="url(#filter0_d_678_204)">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M60.6478 61.8141L52.1432 68.9348L79.768 92.1151L52.1432 115.295L60.6478 122.416L96.8375 92.1151L60.6478 61.8141Z"
                            fill="url(#paint5_radial_678_204)"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M60.6478 61.8141L52.1432 68.9348L79.768 92.1151L52.1432 115.295L60.6478 122.416L96.8375 92.1151L60.6478 61.8141Z"
                            stroke="#001B0C"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M60.6478 61.8141L52.1432 68.9348L79.768 92.1151L52.1432 115.295L60.6478 122.416L96.8375 92.1151L60.6478 61.8141Z"
                            stroke="#001B0C"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_d_678_204"
                            x="47.3649"
                            y="61.162"
                            width="54.2515"
                            height="69.9062"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                          >
                            <feFlood
                              floodOpacity="0"
                              result="BackgroundImageFix"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_678_204"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow_678_204"
                              result="shape"
                            />
                          </filter>
                          <linearGradient
                            id="paint0_linear_678_204"
                            x1="162.833"
                            y1="75.9023"
                            x2="95.0083"
                            y2="181.38"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop
                              offset="0.303689"
                              stopColor="#127056"
                              stopOpacity="0"
                            />
                            <stop
                              offset="0.529928"
                              stopColor="#2EBB93"
                              stopOpacity="0.62"
                            />
                            <stop offset="0.674376" stopColor="#31BD94" />
                            <stop offset="0.89827" stopColor="#045A43" />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_678_204"
                            x1="37.4932"
                            y1="129.422"
                            x2="29.5895"
                            y2="136.379"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop
                              offset="0.303689"
                              stopColor="#127056"
                              stopOpacity="0"
                            />
                            <stop
                              offset="0.529928"
                              stopColor="#2EBB93"
                              stopOpacity="0.62"
                            />
                            <stop offset="0.674376" stopColor="#31BD94" />
                            <stop offset="0.89827" stopColor="#045A43" />
                          </linearGradient>
                          <linearGradient
                            id="paint2_linear_678_204"
                            x1="-22.9677"
                            y1="59.39"
                            x2="90.8589"
                            y2="2.18646"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop
                              offset="0.303689"
                              stopColor="#127056"
                              stopOpacity="0"
                            />
                            <stop
                              offset="0.529928"
                              stopColor="#2EBB93"
                              stopOpacity="0.62"
                            />
                            <stop offset="0.674376" stopColor="#31BD94" />
                            <stop offset="0.89827" stopColor="#045A43" />
                          </linearGradient>
                          <linearGradient
                            id="paint3_linear_678_204"
                            x1="112.174"
                            y1="67.5151"
                            x2="122.611"
                            y2="65.5001"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop
                              offset="0.303689"
                              stopColor="#127056"
                              stopOpacity="0"
                            />
                            <stop
                              offset="0.529928"
                              stopColor="#2EBB93"
                              stopOpacity="0.62"
                            />
                            <stop offset="0.674376" stopColor="#31BD94" />
                            <stop offset="0.89827" stopColor="#045A43" />
                          </linearGradient>
                          <linearGradient
                            id="paint4_linear_678_204"
                            x1="99.4521"
                            y1="119.972"
                            x2="39.1419"
                            y2="59.1608"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#20B18D" />
                            <stop offset="0.995" stopColor="#66E2A9" />
                          </linearGradient>
                          <radialGradient
                            id="paint5_radial_678_204"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(74.4904 92.1151) rotate(90) scale(30.301 22.3471)"
                          >
                            <stop stopColor="#57BE3B" />
                            <stop offset="1" stopColor="#001B0C" />
                          </radialGradient>
                        </defs>
                      </svg>
                      <span className="manrope sm:text-xl text-lg mb-4 sm:mb-4">
                        Click To Know More About Our Team
                      </span>
                    </motion.div>
                  </div>
                </motion.div>
              )}
              {view === "grid" &&
                (isMobile ? (
                  // --- MOBILE GRID VIEW ---
                  <motion.div
                    key="mobile-grid"
                    className="w-full h-full flex flex-col items-center pt-24 px-4"
                  >
                    <motion.h1
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 1, ease: easeOut, delay: 0.2 }}
                      className="manrope text-3xl font-normal uppercase"
                    >
                      Our Board Members
                    </motion.h1>
                    <motion.h2
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 1, ease: easeOut, delay: 0.45 }}
                      className="poppins text-base font-light mt-2 tracking-[0.3em] text-center"
                    >
                      The People Behind the Scenes
                    </motion.h2>

                    <div className="relative w-full h-[450px] mt-16 overflow-hidden">
                      <AnimatePresence initial={false} custom={slideDirection}>
                        <motion.div
                          key={mobileCarouselPage}
                          custom={slideDirection}
                          variants={mobileCarouselVariants}
                          initial="enter"
                          animate="center"
                          exit="exit"
                          transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 },
                          }}
                          className="absolute inset-0 grid grid-cols-2 gap-x-4 gap-y-8 justify-items-center"
                        >
                          {membersToShowMobile.map((member) => (
                            <MobileMemberCard
                              key={member.name}
                              member={member}
                              onClick={() =>
                                setActivePerson(member.name.toLowerCase())
                              }
                            />
                          ))}
                        </motion.div>
                      </AnimatePresence>
                    </div>
                    <div className="flex items-center justify-between w-full px-8 mt-4">
                      <button
                        onClick={() => handleMobileNavigation(-1)}
                        disabled={mobileCarouselPage === 0}
                        className="cursor-pointer disabled:opacity-30"
                      >
                        <img
                          src="vector-6.svg"
                          alt="Previous"
                          className="w-12 h-12 rotate-180"
                        />
                      </button>
                      <button
                        onClick={() => handleMobileNavigation(1)}
                        disabled={mobileCarouselPage === totalMobilePages - 1}
                        className="cursor-pointer disabled:opacity-30"
                      >
                        <img
                          src="vector-6.svg"
                          alt="Next"
                          className="w-12 h-12"
                        />
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="grid-view"
                    className="w-full h-full flex flex-col items-center"
                    variants={gridContainerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.div className="pt-8 h-1/3 w-full text-center flex-col items-center justify-center">
                      <motion.h1
                        className="manrope text-[45px] font-normal uppercase mt-16 sm:mt-28"
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                          duration: 1,
                          ease: easeOut,
                          delay: 0.2,
                        }}
                      >
                        Our Board Members
                      </motion.h1>
                      <motion.h2
                        className="poppins text-[20px] font-light mt-4 sm:mt-6 tracking-[0.55rem]"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                          duration: 1,
                          ease: easeOut,
                          delay: 0.45,
                        }}
                      >
                        The People Behind the Scenes
                      </motion.h2>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1, ease: easeOut, duration: 0.7 }}
                      className="h-2/3 w-full flex flex-col items-center justify-center -mt-10"
                    >
                      <div className="relative w-[85%] h-full overflow-hidden">
                        <AnimatePresence initial={false}>
                          {carouselPage === 0 && (
                            <motion.div
                              key={0}
                              initial={{ x: "-100%" }}
                              animate={{ x: "0%" }}
                              exit={{ x: "-100%" }}
                              transition={{ duration: 0.5, ease: easeInOut }}
                              className="absolute inset-0 flex items-center justify-around"
                            >
                              {firstPageMembers.map((member) => (
                                <MemberCard
                                  key={member.name}
                                  member={member}
                                  onClick={() => {
                                    setIsAnimating(true);
                                    setActivePerson(member.name.toLowerCase());
                                  }}
                                />
                              ))}
                            </motion.div>
                          )}

                          {carouselPage === 1 && (
                            <motion.div
                              key={1}
                              initial={{ x: "100%" }}
                              animate={{ x: "0%" }}
                              exit={{ x: "100%" }}
                              transition={{ duration: 0.5, ease: easeInOut }}
                              className="absolute inset-0 flex items-center justify-around"
                            >
                              {secondPageMembers.map((member) => (
                                <MemberCard
                                  key={member.name}
                                  member={member}
                                  onClick={() => {
                                    setIsAnimating(true);
                                    setActivePerson(member.name.toLowerCase());
                                  }}
                                />
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                    <motion.div
                      className="absolute bottom-5"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 1.5, ease: easeOut, duration: 0.7 }}
                    >
                      <button
                        onClick={() =>
                          handleCarousel(carouselPage === 0 ? "next" : "prev")
                        }
                        className="cursor-pointer hover:scale-110 transition-all duration-500"
                      >
                        <img
                          src="vector-6.svg"
                          alt="Carousel Arrow"
                          className={`w-12 h-12 transition-transform duration-300 ${
                            carouselPage === 1 ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </motion.div>
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>
        </div>
      </AnimatePresence>
      <AnimatePresence mode="wait" onExitComplete={() => setIsAnimating(false)}>
        {activePerson && person && (
          <>
            <motion.div
              onClick={handleClose}
              initial={{ opacity: 0, y: height }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0.8, y: height }}
              transition={{ duration: 0.7, ease: easeOut }}
              className="overflow-auto absolute sm:top-0 inset-0 bg-black bg-opacity-[0.865] z-50 flex items-center justify-center"
            >
              <div className="-mt-32 sm:mt-20 flex flex-col items-center justify-between sm:justify-center bg-transparent h-2/3 w-4/5 z-50 text-center relative">
                <div className="w-full">
                  <button className="mt-10 pointer-events-none cursor-none rounded-full bg-[#d9d9d9] w-60 h-60 sm:w-52 sm:h-52 sm:mb-3 mb-8">
                    <img
                      src={person.img}
                      alt="board member"
                      className="object-cover rounded-full w-full h-full"
                    />
                  </button>
                  <h2 className="manrope text-6xl font-bold sm:mb-2 mb-0 text-white">
                    {person.name}
                  </h2>
                </div>

                <h3 className="manrope text-3xl sm:mt-0 mt-2 sm:mb-0 mb-3 text-white italic">
                  {person.role}
                </h3>
                <p className="afacad sm:mt-3 sm:mb-5 mt-0 text-pretty text-[#0ce46c] text-xl">
                  {person.desc}
                </p>
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-x-2 justify-center w-fit h-fit"
                >
                  <div className="mt-3 sm:mb-0 mb-3 border border-white rounded-lg p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="28"
                      height="28"
                      color="#ffffff"
                      fill="none"
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
                  </div>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default TeamPageContent;
