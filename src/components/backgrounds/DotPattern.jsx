const DotPattern = ({ className = '', size = '30px', opacity = 0.1 }) => {
  return (
    <div 
      className={`absolute inset-0 ${className}`}
      style={{
        backgroundImage: `radial-gradient(circle, rgba(12, 154, 144, ${opacity}) 1px, transparent 1px)`,
        backgroundSize: `${size} ${size}`,
      }}
    />
  );
};

export default DotPattern;