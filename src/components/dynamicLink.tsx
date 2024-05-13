"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import { variants } from "@/consts/animationVariants";

export interface Link {
  text: string;
  href: string;
  target?: string;
}

export default function DynamicLink({ links }: { links: Link[] }) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [prevIndex, setPrevIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPrevIndex(currentIndex);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % links.length);
    }, 2500);

    return () => clearInterval(intervalId);
  }, [links.length, currentIndex]);

  return (
    <>
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
            key={index}
            target={link.target}
            className="hover:underline px-1 absolute text-sky-500"
            initial={{ opacity: 0, y: 20 }}
            animate={variants[animation]}
            transition={{ duration: 0.3 }}
          >
            {link.text}.
          </motion.a>
        );
      })}
    </>
  );
}
