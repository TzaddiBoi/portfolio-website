import { useMemo } from 'react';

const FloatingElements = ({ variant = 'circles' }) => {
  const elements = useMemo(() => ({
    circles: [
      { size: 100, top: '10%', left: '5%', duration: 20, delay: 0 },
      { size: 60, top: '60%', left: '80%', duration: 15, delay: 2 },
      { size: 80, top: '40%', left: '15%', duration: 18, delay: 4 },
      { size: 50, top: '80%', left: '70%', duration: 22, delay: 1 },
      { size: 70, top: '25%', left: '90%', duration: 16, delay: 3 },
    ],
    dots: Array.from({ length: 20 }, (_, index) => {
      // Use index to generate deterministic values (not random each render)
      const seed = index * 137.508; // Golden angle in degrees
      return {
        size: (seed % 4) + 2,
        top: `${(seed * 1.5) % 100}%`,
        left: `${(seed * 2.3) % 100}%`,
        duration: ((seed * 0.7) % 10) + 15,
        delay: (seed * 0.3) % 5,
      };
    }),
  }), []);

  const config = elements[variant] || elements.circles;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {config.map((el, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-bright-teal/5 backdrop-blur-sm animate-float"
          style={{
            width: `${el.size}px`,
            height: `${el.size}px`,
            top: el.top,
            left: el.left,
            animationDuration: `${el.duration}s`,
            animationDelay: `${el.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;