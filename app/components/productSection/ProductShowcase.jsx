"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from 'next/link';



const logos = [
  {
    src: "/assets/logo-bridgekey.svg",
    title: "Bridge Key",
    description:
      "Everything You Need in One Wallet. Bridgekey combines powerful features with elegant simplicity.",
    stats: { users: "85K+", downloads: "120K", reliability: "99.9%" },
    link: "https://bridgekey.io/",
  },
  {
    src: "/assets/buddy.png",
    title: "MST Buddy",
    description:
      "AI-powered assistant platform acting as a 24/7 smart guide for the MST ecosystem.",
    stats: { queries: "1.2M", accuracy: "98%", active_nodes: "9+" },
    link: "https://buddy.mstblockchain.com/",
  },
  {
    src: "/assets/acadmey.png",
    title: "MST Academy",
    description:
      "Educational gateway for blockchain mastery, certification, and Web3 developer tours.",
    stats: { students: "12K+", courses: "45", certifications: "8.5K" },
    link: "https://masterstroke.academy/",
  },
];


// ... (logos array remains exactly the same as your previous version)

const LogoFlipSection = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  // --- MOUSE TRACKING FOR 3D INTERACTION ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the tilting movement
  const springConfig = { damping: 20, stiffness: 100 };
  const tiltX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), springConfig);
  const tiltY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const scrollProgress = Math.max(
        0,
        Math.min(1, -rect.top / (rect.height - window.innerHeight))
      );

      const totalFlips = logos.length - 1;
      const rawIndex = scrollProgress * totalFlips;

      setActiveIndex(
        Math.min(logos.length - 1, Math.max(0, Math.round(rawIndex)))
      );
      setRotateY(rawIndex * 180);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const current = logos[activeIndex];
  const words = current.title.split(" ");
  const firstWord = words[0] || "";
  const secondWord = words.slice(1).join(" ") || "";

  return (
    <div
      id="productSection"
      ref={containerRef}
      style={{
        height: `${logos.length * 100}vh`,
        background: `radial-gradient(circle at center, #ffffff 0%, #fef2f2 100%)`,
      }}
      className="relative text-black"
    >

      <div className="sticky top-0 h-screen flex items-center overflow-hidden ">

        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            
            {/* LEFT → ATTRACTIVE & INTERACTIVE 3D LOGO AREA */}
            <div className="w-full lg:w-1/2 flex justify-center perspective-[1200px]">
              <motion.div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ 
                    rotateX: tiltX, 
                    rotateY: tiltY,
                    transformStyle: "preserve-3d" 
                }}
                className="relative w-72 h-72 lg:w-[500px] lg:h-[500px] flex items-center justify-center"
              >
                {/* Visual Depth Elements */}
                <div className="absolute inset-0 bg-red-500/10 rounded-full blur-3xl scale-75 animate-pulse" />
                
                {/* 3D Glass Orbit Rings */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-4 border-[1px] border-dashed border-red-500 rounded-full opacity-40" 
                />
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-10 border-[1.5px] border-red-500 rounded-full opacity-60" 
                />

                {/* Main Logo with Scroll Flip */}
                <motion.div
                  className="relative z-10 w-full h-full flex items-center justify-center"
                  animate={{ 
                    rotateY,
                    y: [0, -20, 0] // Continuous floating motion
                  }}
                  transition={{ 
                    rotateY: { type: "spring", damping: 20, stiffness: 100 },
                    y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <img
                    src={current.src}
                    alt={current.title}
                    className="max-w-[75%] max-h-[75%] object-contain drop-shadow-[0_30px_60px_rgba(220,38,38,0.15)]"
                    style={{
                      transform: Math.floor(rotateY / 180) % 2 === 0 ? "translateZ(50px)" : "scaleX(-1) translateZ(50px)",
                    }}
                  />
                  
                  {/* Under-glow that moves with the logo */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-red-600/10 blur-[80px] rounded-full" />
                </motion.div>

                {/* Dynamic Shadow on the floor */}
                <motion.div 
                  className="absolute bottom-4 w-1/2 h-6 bg-black/5 blur-xl rounded-[100%]"
                  style={{ scale: useTransform(tiltX, [-15, 15], [0.8, 1.2]) }}
                />
              </motion.div>
            </div>

            {/* RIGHT → CONTENT (KEPT EXACTLY PER YOUR CODE) */}
            <div className="w-full lg:w-1/2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  {/* TITLE */}
                  <h1 className="bungee-regular text-4xl md:text-6xl leading-tight tracking-tight text-black font-extrabold uppercase">
                    <span className="bg-black rounded-xl text-white px-2 mr-2">
                      {firstWord}
                    </span>
                    <span className="text-red-600">{secondWord}</span>
                  </h1>

                  {/* DESCRIPTION */}
                  <p className="text-xl mt-5 font-semibold text-gray-900 mb-8 max-w-md">
                    {current.description}
                  </p>

                  {/* STATS */}
                  <div className="grid grid-cols-3 gap-4 mb-10">
                    {Object.entries(current.stats).map(([key, value]) => (
                      <div
                        key={key}
                        className="border-l-5 border-red-600 pl-4"
                      >
                        <p className="text-xs uppercase tracking-widest text-gray-600 font-bold">
                          {key.replace("_", " ")}
                        </p>
                        <p className="text-2xl bungee-regular font-mono text-black">
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* NAV DOTS */}
              <div className="flex gap-3 justify-center lg:justify-start">
                {logos.map((_, i) => (
                  <div
                    key={i}
                    className={`h-3 rounded-full transition-all ${
                      i === activeIndex
                        ? "bg-red-600 w-8"
                        : "bg-gray-300 w-3"
                    }`}
                  />
                ))}
              </div>

              {/* BUTTON */}
              <div className="mt-10 flex justify-center lg:justify-start">
                {current.link && current.link.startsWith('http') ? (
                  <a
                    href={current.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-red-600 text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-black transition-all duration-300 inline-block shadow-lg shadow-red-600/20 hover:shadow-black/30"
                  >
                    Learn More
                  </a>
                ) : (
                  <Link
                    href={current.link || '#'}
                    className="px-6 py-3 bg-red-600 text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-black transition-all duration-300 inline-block shadow-lg shadow-red-600/20 hover:shadow-black/30"
                  >
                    Learn More
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
   
  );
};

export default LogoFlipSection;