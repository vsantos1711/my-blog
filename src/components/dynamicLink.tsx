"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import { variants } from "@/consts/animationVariants";
import { ILink } from "@/consts/dynamicLinks";

export default function DynamicLink({ links }: { links: ILink[] }) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [prevIndex, setPrevIndex] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPrevIndex(currentIndex);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % links.length);
    }, 2500);

    return () => clearInterval(intervalId);
  }, [links.length, currentIndex]);

  return (
    <span className="  ">
      {links.map((link, index) => {
        const animation =
          index === currentIndex
            ? "active"
            : index === prevIndex
            ? "previous"
            : "other";

        return (
          <motion.a
            href={link.href}
            tabIndex={currentIndex === index ? 0 : -1}
            target={link.target}
            key={index}
            className={`hover:underline absolute px-1 text-sky-500  `}
            initial={{ opacity: 0, y: 20 }}
            animate={variants[animation]}
            transition={{
              duration: 0.3,
            }}
            onAnimationComplete={() => setIsAnimating(false)}
            hidden={!isAnimating && currentIndex !== index}
          >
            {link.text}.
          </motion.a>
        );
      })}
    </span>
  );
}
