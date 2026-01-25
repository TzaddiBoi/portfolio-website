import { useEffect, useRef, useState } from 'react';

const InteractiveGradient = ({ variant = 'default' }) => {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setScrollPosition(scrollTop);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const variants = {
    default: {
      gradient1: { size: 600, color: 'rgba(12, 154, 144, 0.15)' },
      gradient2: { size: 500, color: 'rgba(7, 89, 133, 0.12)' },
      gradient3: { size: 400, color: 'rgba(12, 154, 144, 0.10)' },
    },
    hero: {
      gradient1: { size: 800, color: 'rgba(12, 154, 144, 0.2)' },
      gradient2: { size: 700, color: 'rgba(7, 89, 133, 0.15)' },
      gradient3: { size: 600, color: 'rgba(12, 154, 144, 0.12)' },
    },
    subtle: {
      gradient1: { size: 500, color: 'rgba(12, 154, 144, 0.08)' },
      gradient2: { size: 400, color: 'rgba(7, 89, 133, 0.06)' },
      gradient3: { size: 350, color: 'rgba(12, 154, 144, 0.05)' },
    },
  };

  const config = variants[variant] || variants.default;

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {/* Interactive gradient blob 1 */}
      <div
        className="absolute rounded-full mix-blend-multiply filter blur-3xl transition-all duration-1000 ease-out"
        style={{
          width: `${config.gradient1.size}px`,
          height: `${config.gradient1.size}px`,
          background: config.gradient1.color,
          left: `${mousePosition.x * 0.5}%`,
          top: `${(mousePosition.y * 0.3) + (scrollPosition * 0.05)}%`,
          transform: `translate(-50%, -50%)`,
        }}
      />

      {/* Interactive gradient blob 2 */}
      <div
        className="absolute rounded-full mix-blend-multiply filter blur-3xl transition-all duration-[1500ms] ease-out"
        style={{
          width: `${config.gradient2.size}px`,
          height: `${config.gradient2.size}px`,
          background: config.gradient2.color,
          right: `${mousePosition.x * 0.3}%`,
          bottom: `${(mousePosition.y * 0.4) - (scrollPosition * 0.03)}%`,
          transform: `translate(50%, 50%)`,
        }}
      />

      {/* Interactive gradient blob 3 */}
      <div
        className="absolute rounded-full mix-blend-multiply filter blur-3xl transition-all duration-[2000ms] ease-out"
        style={{
          width: `${config.gradient3.size}px`,
          height: `${config.gradient3.size}px`,
          background: config.gradient3.color,
          left: `${50 + (mousePosition.x - 50) * 0.2}%`,
          top: `${50 + (mousePosition.y - 50) * 0.2}%`,
          transform: `translate(-50%, -50%)`,
        }}
      />

      {/* Subtle dot pattern */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(12, 154, 144, 0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  );
};

export default InteractiveGradient;