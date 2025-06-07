import React, { useRef } from "react";
import useRevealOnScroll from "../Hooks/useRevealOnScroll";
import "../styles/reveal.css";

const RevealOnScroll = ({ children }) => {
  const ref = useRef();
  const isVisible = useRevealOnScroll(ref);
  return (
    <div
      ref={ref}
      className={`reveal__hidden ${
        isVisible ? "reveal__show" : "reveal__hidden"
      }`}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;
