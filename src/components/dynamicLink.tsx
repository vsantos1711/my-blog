"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import { variants } from "@/consts/animationVariants";

interface Word {
  word: string;
  link: string;
  target?: string;
}

export default function DynamicLink({ words }: { words: Word[] }) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [prevIndex, setPrevIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPrevIndex(currentIndex);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2500);

    return () => clearInterval(intervalId);
  }, [words.length, currentIndex]);

  return (
    <>
      {words.map((word, index) => {
        const animation =
          index === currentIndex
            ? "active"
            : index === prevIndex
            ? "previous"
            : "other";

        return (
          <motion.a
            href={word.link}
            tabIndex={currentIndex === index ? 0 : -1}
            key={index}
            target={word.target}
            className="hover:underline px-1 absolute"
            initial={{ opacity: 0, y: 20 }}
            animate={variants[animation]}
            transition={{ duration: 0.3 }}
          >
            {word.word}.
          </motion.a>
        );
      })}
    </>
  );
}
