import { useEffect, useState } from "react";

export default function useRevealOnScroll(ref) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    });

    const current = ref.current;
    if (current) {
      observer.observe(current);
      console.log(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [ref]);

  return isVisible;
}
