"use client";
import { useState, useMemo, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";


// Example event data (add category, id, blur, etc.)
const events = [
  {
    id: 1,
    title: "MST Blockchain Summit 2025",
    date: "March 12, 2025",
    desc: "A gathering of innovators, developers, and leaders in the blockchain space. Workshops, panels, and networking.",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    category: "Summit",
    gallery: [
      { id: 1, url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" },
      { id: 2, url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" }
    ]
  },
  {
    id: 2,
    title: "Validator Bootcamp",
    date: "Jan 28, 2025",
    desc: "Hands-on training for new and experienced validators. Live demos and Q&A.",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    category: "Workshop",
    gallery: [
      { id: 1, url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80" },
      { id: 2, url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80" }
    ]
  },
  {
    id: 3,
    title: "MST Hackathon",
    date: "Nov 10, 2024",
    desc: "Builders compete to create the next big dApp on MST. Prizes and recognition.",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
    category: "Hackathon",
    gallery: [
      { id: 1, url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80" },
      { id: 2, url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80" }
    ]
  },
  {
    id: 4,
    title: "Community Meetup Pune",
    date: "Sep 15, 2024",
    desc: "A casual get-together for MST enthusiasts, with talks and networking.",
    img: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=600&q=80",
    category: "Meetup",
    gallery: [
      { id: 1, url: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=800&q=80" },
      { id: 2, url: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=800&q=80" }
    ]
  },
  {
    id: 5,
    title: "Web3 for Enterprises",
    date: "Aug 2, 2024",
    desc: "Panel discussion on enterprise adoption of Web3 and blockchain.",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    category: "Summit",
    gallery: [
      { id: 1, url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80" },
      { id: 2, url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80" }
    ]
  },
  {
    id: 6,
    title: "MST Awards Night",
    date: "May 30, 2024",
    desc: "Celebrating the best projects and contributors in the MST ecosystem.",
    img: "https://images.unsplash.com/photo-1515168833906-d2a3b82b302b?auto=format&fit=crop&w=600&q=80",
    category: "Meetup",
    gallery: [
      { id: 1, url: "https://images.unsplash.com/photo-1515168833906-d2a3b82b302b?auto=format&fit=crop&w=800&q=80" },
      { id: 2, url: "https://images.unsplash.com/photo-1515168833906-d2a3b82b302b?auto=format&fit=crop&w=800&q=80" }
    ]
  }
];

// HERO SECTION COMPONENT
function HeroSection({ onExplore }) {
  const heroImages = [
    { src: "/assets/events/event1.jpg", alt: "Summit" },
    { src: "/assets/events/event2.jpg", alt: "Bootcamp" },
    { src: "/assets/events/event3.jpg", alt: "Hackathon" },
  ];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setIndex(i => (i + 1) % heroImages.length), 5000);
    return () => clearInterval(timer);
  }, []);
  return (
    <section className="relative w-full h-[490px] flex items-center justify-center overflow-hidden pt-6">
      <div className="flex flex-col items-center text-center w-full px-4 p-0 m-0">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl md:text-7xl font-black mb-4 tracking-tight"
        >
          <span className="text-red-600">PAST</span>{' '}
          <span className="text-black">EVENTS</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="text-lg md:text-2xl text-black max-w-2xl mb-8"
        >
          Relive the moments that defined MST. Explore our premium event gallery and discover the energy of our community.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.97 }}
          onClick={onExplore}
          className="px-8 py-3 rounded-full bg-black text-white font-bold text-lg shadow-lg hover:bg-red-600 hover:text-white hover:shadow-2xl transition"
        >
          Explore Gallery
        </motion.button>
      </div>
    </section>
  );
}

// FILTER BAR COMPONENT
function FilterBar({ active, setActive }) {
  const categories = ["All", "Hackathon", "Meetup", "Summit", "Workshop"];
  return (
    <div className="flex gap-3 md:gap-6 justify-center items-center pt-1 pb-6">
        {categories.map((cat) => {
          const isActive = active === cat;
          const isSpecial = ["Hackathon", "Meetup", "Summit", "Workshop"].includes(cat);
          return (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.1 }}
              className={`px-5 py-2 rounded-full font-semibold text-sm md:text-base transition shadow-md border-2 border-gray-300
                ${isActive ? "bg-white text-black border-red-600 shadow" : isSpecial ? "bg-white text-black hover:bg-red-600 hover:text-white border-gray-400" : "bg-black/60 text-white border-gray-300 hover:border-red-600 hover:text-red-400"}
              `}
              onClick={() => setActive(cat)}
            >
              {cat}
            </motion.button>
          );
        })}
    </div>
  );
}

// EVENT CARD COMPONENT
function EventCard({ event, onClick }) {
  const cardRef = useRef(null);
  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 8;
    const rotateY = ((x - centerX) / centerX) * -8;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`;
  };
  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (card) card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  };
  return (
    <motion.div
      ref={cardRef}
      className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group border border-white/10 bg-black"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ willChange: "transform", minHeight: 380, minWidth: 320, maxWidth: 420 }}
    >
      <div className="relative w-full h-[320px] md:h-[380px] lg:h-[420px]">
        <Image
          src={event.img}
          alt={event.title}
          fill
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
          placeholder="blur"
          blurDataURL={event.blur || "/assets/blur-placeholder.png"}
        />

        {/* center-right circular indicator */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full border-2 border-white/90 flex items-center justify-center pointer-events-auto">
          <div className="w-8 h-8 rounded-full border border-white/60" />
        </div>

        {/* top-right heart icon */}
        <button
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-md"
          aria-label="Like"
          onClick={(e) => { e.stopPropagation(); /* optional like handler */ }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-red-600">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 3.99 4 6.5 4c1.74 0 3.41.81 4.5 2.09C12.09 4.81 13.76 4 15.5 4 18.01 4 20 6 20 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </button>

        {/* bottom gradient overlay to improve text readability */}
        <div className="absolute left-0 right-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      {/* Title & subtitle centered over the bottom */}
      <div className="absolute bottom-6 left-6 right-6 flex flex-col items-center text-center gap-1 pointer-events-none">
        <div className="text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-tight drop-shadow-lg">
          {event.title}
        </div>
        <div className="text-sm md:text-base text-white/90 font-medium tracking-wide">
          {event.date}
        </div>
        <div className="text-sm md:text-sm text-white/80 mt-2 w-full max-w-[90%] line-clamp-1">
          {event.desc}
        </div>
      </div>
    </motion.div>
  );
}

// GALLERY GRID COMPONENT
function GalleryGrid({ events, onCardClick }) {
  return (
    <motion.div
      className="grid grid-cols-3 gap-8 auto-rows-[380px] md:auto-rows-[420px] lg:auto-rows-[460px]"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.08 } },
      }}
    >
      <AnimatePresence>
        {events.map((event, i) => (
          <motion.div
            key={event.id || i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
          >
            <EventCard event={event} onClick={() => onCardClick(i)} />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}

// GALLERY MODAL COMPONENT

// PREMIUM CAROUSEL MODAL COMPONENT
function CarouselModal({ open, event, index, onClose, onNavigate }) {
  const modalRef = useRef();
  const [current, setCurrent] = useState(index);
  const [fullscreenImg, setFullscreenImg] = useState(null);
  const [marqueePaused, setMarqueePaused] = useState(false);

  useEffect(() => { setCurrent(index); }, [index, open]);
  useEffect(() => {
    if (!event || !event.gallery) return; // Ensure event and gallery exist

    function handleKey(e) {
      if (!open) return;
      if (e.key === 'ArrowRight') setCurrent(c => Math.min(event.gallery.length - 1, c + 1));
      if (e.key === 'ArrowLeft') setCurrent(c => Math.max(0, c - 1));
      if (e.key === 'Escape') onClose();
    }

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open, event?.gallery?.length, onClose]);

  const marqueeImages = event?.gallery ? [...event.gallery] : []; // Use event.gallery directly for unique images
  const handleImageClick = (imgUrl) => {
    setFullscreenImg(imgUrl);
    setMarqueePaused(true);
  };
  const handleCloseFullscreen = (e) => {
    e.stopPropagation();
    setFullscreenImg(null);
    setMarqueePaused(false);
  };

  if (!open) return null;
  if (!event) return null; // Ensure event is defined before rendering

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm" onClick={onClose}>
      <motion.div
        className="relative rounded-3xl overflow-hidden shadow-2xl bg-white border-4 border-black max-w-2xl w-[95vw] flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.25 }}
        onClick={e => e.stopPropagation()}
        ref={modalRef}
      >
        <div className="overflow-hidden w-full py-8" style={{ minHeight: '320px' }}>
          <motion.div
            className="flex gap-8 px-10"
            style={{ width: marqueeImages.length * 260 + (marqueeImages.length - 1) * 32 }}
            animate={marqueePaused ? {} : { x: [0, -(marqueeImages.length * 260 + (marqueeImages.length - 1) * 32) / 2] }}
            transition={marqueePaused ? {} : {
              duration: 22,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            {marqueeImages.map((image, idx) => (
              <motion.div
                key={image.id + '-' + idx}
                className="flex-shrink-0 w-[210px] md:w-[260px] aspect-[3/4] relative z-10 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                onClick={() => handleImageClick(image.url)}
              >
                <img
                  src={image.url}
                  alt="Gallery item"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
        {fullscreenImg && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm" onClick={handleCloseFullscreen}>
            <div className="relative max-w-3xl w-full flex items-center justify-center">
              <img src={fullscreenImg} alt="Full" className="max-h-[80vh] max-w-full rounded-2xl shadow-2xl" />
              <button
                onClick={handleCloseFullscreen}
                className="absolute top-4 right-4 text-white bg-black/70 hover:bg-red-600 rounded-full p-2 shadow-lg"
                aria-label="Close fullscreen image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}
        <div className="w-full px-8 py-6 bg-white flex flex-col items-center gap-2 border-t border-black">
          <div className="text-2xl font-extrabold text-black text-center">{event.title || ''}</div>
          <div className="text-sm text-red-600 font-semibold">{event.date || ''}</div>
          <div className="text-base text-black/80 text-center line-clamp-3">{event.desc || ''}</div>
        </div>
      </motion.div>
    </div>
  );
}


// GALLERY SECTION COMPONENT (replaces StorySections)
function GallerySection() {
  // Use a flat image array for the auto gallery
  const images = [
    { id: 1, url: 'https://images.unsplash.com/photo-1601275224155-21191b500140?q=80&w=800' },
    { id: 2, url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800' },
    { id: 3, url: 'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?q=80&w=800' },
    { id: 4, url: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=800' },
    { id: 5, url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800' },
    { id: 6, url: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=800' },
  ];
  // Duplicate images for seamless infinite loop
  const imageList = [...images, ...images];
  const totalWidth = imageList.length * 260 + (imageList.length - 1) * 32; // 260px width + 32px gap
  return (
    <section className="relative bg-black min-h-[60vh] w-full flex flex-col items-center justify-center overflow-hidden font-serif">
      {/* 1. Background Title (Centered & Fixed to section) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <h1 className="text-[12vw] font-bold tracking-tighter text-white/10 uppercase select-none whitespace-nowrap">
          Gallery
        </h1>
      </div>

      {/* 2. Sliding Image Track (infinite left loop) */}
      <div className="relative w-full overflow-hidden flex items-center z-10" style={{ minHeight: '320px' }}>
        <motion.div
          className="flex gap-8 px-10"
          style={{ width: totalWidth }}
          animate={{ x: [0, -totalWidth / 2] }}
          transition={{
            duration: 22,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop"
          }}
        >
          {imageList.map((image, idx) => (
            <motion.div
              key={image.id + '-' + idx}
              className="flex-shrink-0 w-[210px] md:w-[260px] aspect-[3/4] relative z-10"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={image.url}
                alt="Gallery item"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Optional: Vignette Overlay for depth (Darkens the edges) */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle,transparent_40%,black_100%)]" />
    </section>
  );
}

// Define floating blobs for background decoration
const blobs = [
  { className: "absolute w-40 h-40 bg-red-500 opacity-20 rounded-full top-10 left-10" },
  { className: "absolute w-32 h-32 bg-black opacity-10 rounded-full bottom-20 right-20" },
  { className: "absolute w-48 h-48 bg-white opacity-5 rounded-full top-1/3 left-1/4" },
];

export default function PastEvents() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [modal, setModal] = useState({ open: false, index: 0, event: null });
  const filteredEvents = useMemo(() =>
    activeCategory === "All"
      ? events
      : events.filter(e => e.category === activeCategory),
    [activeCategory]
  );

  return (
    <div className="bg-white min-h-screen font-sans relative overflow-x-hidden scroll-smooth">
      {/* Orbital Animated Background */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        {/* Orbit 1: Red solid ring */}
        <motion.div
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute top-[-5%] left-[-35%] w-[140vw] h-[140vw] border-[0.5px] border-red-300 rounded-full hidden lg:flex items-center justify-center"
        >
          <div className="absolute w-[10px] h-[10px] bg-red-600 rounded-full bottom-[18%] right-[8%] shadow-[0_0_10px_#ff2d2d]" />
          <motion.div
            animate={{ rotate: [-360, 0] }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            className="absolute top-[10%] left-[10%] flex items-center gap-2"
          >
            <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-red-400"></span></span>
            <span className="text-[11px] font-black tracking-[0.2em] text-red-300 whitespace-nowrap">Use Cases</span>
          </motion.div>
        </motion.div>
        {/* Orbit 2: Middle Dashed Ring */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
          className="absolute top-[-20%] left-[-60%] w-[180vw] h-[180vw] border-[0.5px] border-black/10 rounded-full border-dashed hidden lg:flex items-center justify-center"
        >
          <div className="absolute w-3 h-3 bg-red-400 rounded-full top-[12%] shadow-[0_0_15px_#ff2d2d]" />
          <motion.div
            animate={{ rotate: [360, 0] }}
            transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
            className="absolute -left-[5px] top-[50%] -translate-y-1/2 flex items-center gap-2 pr-4 bg-white/40 backdrop-blur-[2px] rounded-full p-1 border border-white/50"
          >
            <div className="h-px w-8 bg-gradient-to-r from-transparent via-red-400 to-red-200" />
            <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-red-400"></span></span>
            <span className="text-[10px] font-black tracking-[0.2em] text-red-400 whitespace-nowrap">9+ Active Nodes</span>
          </motion.div>
        </motion.div>
        {/* Orbit 3: Outer Faint Ring */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
          className="absolute top-[-35%] left-[-85%] w-[240vw] h-[240vw] border-[0.5px] border-black/5 rounded-full hidden lg:flex items-center justify-center opacity-50"
        >
          <motion.div
            animate={{ rotate: [360, 0] }}
            transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
            className="absolute bottom-[20%] left-[10%] flex items-center gap-2"
          >
            <span className="relative inline-flex rounded-full h-1 w-1 bg-black"></span>
            <span className="text-[8px] font-bold tracking-[0.25em] text-red-300 whitespace-nowrap">POSA Consensus</span>
          </motion.div>
        </motion.div>
        {/* Small floating local elements */}
        <motion.div
          animate={{ y: [-15, 15, -15], x: [-10, 10, -10], rotate: [0, 90, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          className="absolute top-0 left-0 w-32 h-32 border border-red-500 rounded-full flex items-center justify-center opacity-60"
        >
          <div className="w-20 h-20 border border-red-500 rounded-full" />
          <div className="absolute w-2 h-2 bg-red-400 rounded-full shadow-[0_0_10px_#ff2d2d] top-0" />
        </motion.div>
        <motion.div
          animate={{ y: [15, -15, 15], rotate: [0, -90, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-0 right-0 w-40 h-40 border border-red-500 rounded-full border-dashed flex items-center justify-center opacity-50"
        >
          <div className="absolute w-3 h-3 bg-black rounded-full bottom-2 right-4" />
        </motion.div>
      </div>

      {/* Floating Blobs */}
      <div className="pointer-events-none fixed z-0 top-0 left-0 w-full h-full overflow-hidden">
        {blobs.map((b, i) => <div key={i} className={b.className} />)}
      </div>

      {/* HERO SECTION */}
      <HeroSection onExplore={() => {
        if (typeof window !== "undefined") {
          window.scrollTo({ top: 600, behavior: "smooth" });
        }
      }} />

      {/* FILTER BAR */}
      <FilterBar active={activeCategory} setActive={setActiveCategory} />

      {/* GALLERY GRID */}
      <div className="max-w-7xl mx-auto px-2 md:px-6 py-4 z-10">
        <GalleryGrid events={filteredEvents} onCardClick={i => setModal({ open: true, index: i, event: filteredEvents[i] })} />
      </div>


      {/* PREMIUM CAROUSEL MODAL */}
      <CarouselModal
        open={modal.open}
        event={modal.event}
        index={modal.index}
        onClose={() => {
          setModal({ open: false, index: 0, event: null });
          window.dispatchEvent(new CustomEvent('gallery-modal', { detail: false }));
        }}
        onNavigate={i => setModal(m => ({ ...m, index: Math.max(0, Math.min(m.event.gallery.length - 1, i)) }))}
      />

      {/* GALLERY SECTION (replaces StorySections) */}
      <GallerySection />
    </div>
  );
}
