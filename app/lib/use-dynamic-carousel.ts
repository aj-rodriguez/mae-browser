import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export const useDynamicCarousel = (items) => {
  const scrollRef = useRef(null);
  const [activeItem, setActiveItem] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = (e) => {
      const scrollLeft = e.target.scrollLeft;
      setScrollPosition(scrollLeft);
      if (scrollLeft > 0) {
        setIsDragging(true);
      }
    };

    scrollRef.current.addEventListener("scroll", handleScroll);
    return () => scrollRef.current.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (e) => {
    const items = Array.from(e.target.children);
    const activeIndex = Math.round(e.target.scrollLeft / items[0].offsetWidth);
    setActiveItem(activeIndex);
  };

  return {
    scrollRef,
    handleScroll,
    activeItem,
    isDragging,
    scrollPosition
  };
};
