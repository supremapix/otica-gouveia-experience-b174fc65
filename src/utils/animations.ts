
import { useEffect, useState, useRef } from 'react';

// Intersection Observer hook for revealing elements on scroll
export function useInView(options = {}, once = true) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        if (once && ref.current) {
          observer.unobserve(ref.current);
        }
      } else if (!once) {
        setIsInView(false);
      }
    }, options);

    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options, once]);

  return [ref, isInView];
}

// Staggered animation for child elements
export function useStaggeredAnimation(count: number, baseDelay: number = 0.1) {
  return Array.from({ length: count }).map((_, i) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { 
      delay: baseDelay * i,
      duration: 0.5,
      ease: [0.215, 0.61, 0.355, 1]
    }
  }));
}

// Mouse parallax effect
export function useParallax(intensity = 0.1) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (window.innerWidth / 2 - e.clientX) * intensity;
      const y = (window.innerHeight / 2 - e.clientY) * intensity;
      setPosition({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [intensity]);
  
  return position;
}

// Smooth scroll to element function
export function scrollToElement(elementId: string) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

// Text reveal animation
export function useTextReveal(text: string, speed = 30) {
  const [displayedText, setDisplayedText] = useState('');
  const [isDone, setIsDone] = useState(false);
  
  useEffect(() => {
    let i = 0;
    setDisplayedText('');
    setIsDone(false);
    
    const intervalId = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i));
        i++;
      } else {
        setIsDone(true);
        clearInterval(intervalId);
      }
    }, speed);
    
    return () => clearInterval(intervalId);
  }, [text, speed]);
  
  return { displayedText, isDone };
}
